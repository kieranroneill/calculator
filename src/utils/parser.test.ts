// Utils.
import parser from './parser';

describe('src/utils/parser', () => {
    it('should return an error', () => {
        expect(parser([])).toEqual('Err');
    });
});
