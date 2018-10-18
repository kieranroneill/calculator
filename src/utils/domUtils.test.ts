// Utils.
import { getRandomClassName } from './domUtils';

describe('src/utils/domUtils', () => {
    describe('getRandomClassName()', () => {
        it('should return a string of five alphanumeric characters', () => {
            const className: string = getRandomClassName();

            expect(className.length).toBe(5);
            expect(className).toMatch(/^[a-z0-9]+$/i);
        });
    });
});
