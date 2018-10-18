/**
 * Returns a string of 5 random alphanumeric characters.
 * @returns a string of length 5.
 */
export function getRandomClassName(): string {
    return Math.random()
        .toString(36)
        .substr(2, 5);
}
