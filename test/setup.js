import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Helpers.
import { createDom } from './helpers';

const { window } = createDom();

// Client globals.
global.document = window.document;
global.window = window;
