# Ubuntu LTS (17.10)
FROM ubuntu:17.10

MAINTAINER Kieran O\'Neill

# Use bash shell
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Update and install dependencies.
RUN apt-get update --fix-missing
RUN apt-get install -y curl
RUN apt-get install -y git
RUN apt-get install -y nginx
RUN apt-get install -qq -y bzip2

ENV NODE_VERSION 8.11.2
ENV NODE_ENV production
ENV NVM_DIR /usr/local/nvm

# Install node & npm with nvm
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Set up our PATH correctly, so we don't have to long-reference npm, node, e.t.c.
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install global modules.
RUN npm install yarn -g

# Install dependencies using yarn.
COPY package.json /tmp/package.json
RUN cd /tmp && yarn install --production=false
RUN mkdir -p /usr/app/ && cp -a /tmp/node_modules /usr/app/

# Set working directory and copy the source files.
WORKDIR /usr/app/
COPY . /usr/app/

# Build app.
RUN yarn build

# Copy configuration file and the build.
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/ /var/www/

# Stop container stopping - "daemon off;"
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80

# Fly my pretties!!
CMD ["sh", "-c", "service nginx start"]
