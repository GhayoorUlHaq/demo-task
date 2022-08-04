import * as TYPES from '../actions/types';

const initialState = {
    dataList:[]
};

const app = (state = initialState, actions) => {
    switch (actions.type) {
        case TYPES.STORE_RESPONSE:
            return {
                ...state,
                dataList: actions.payload,
            };
        case TYPES.STORE_RECORD:
            const tempArray = state.dataList;
            tempArray.unshift({id: Math.random(), name: actions.payload});

            return {
                ...state,
                dataList: [...tempArray],
            };
        default:
            return state;
    }
};

export default app;
