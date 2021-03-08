import Reducer from './reducer';

describe('reducer', () => {
    it('should return initial state', () => {
        expect(Reducer(undefined, {})).toEqual({
            stock: 0,
        })
    })
    it('should handle BUY_ITEM action', () => {
        expect(Reducer(undefined, {
            type: 'BUY_ITEM',
        })
        ).toEqual({
            stock: 1
        })
    })
    it('should handle DECR_ITEM action', () => {
        expect(Reducer({stock:5}, {
            type: 'DECR_ITEM',
        })
        ).toEqual({
            stock: 4
        })
    })
    it('should handle CANCEL_ITEM action (stock:4 to 0)', () => {
        expect(Reducer({stock:4}, {
            type: 'CANCEL_ITEM',
        })
        ).toEqual({
            stock: 0
        })
    })
})