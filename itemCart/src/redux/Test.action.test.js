import {actionCreators as action} from './action';

describe('actions', () => {
    it('should create action to add stock by one', () => {
        const expectedAction = {
            type: 'BUY_ITEM'
        }
        expect(action.buyItem()).toEqual(expectedAction)
    })
    it('should create action to decrease stock by one', () => {
        const expectedAction = {
            type: 'DECR_ITEM'
        }
        expect(action.decrItem()).toEqual(expectedAction)
    })
    it('should create action to set stock to zero', () => {
        const expectedAction = {
            type: 'CANCEL_ITEM'
        }
        expect(action.cancelItem()).toEqual(expectedAction)
    })
})
