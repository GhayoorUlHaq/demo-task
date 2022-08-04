import * as TYPES from '../actions/types';

interface dataObject {
  id: number,
  name: string,
}

// action to store data from api to redux
export const storeResponse = (payload: dataObject[]) => {
  return {
    type: TYPES.STORE_RESPONSE,
    payload,
  };
};

// action to add record to redux
export const storeRecord = (payload: string) => {
  return {
    type: TYPES.STORE_RECORD,
    payload,
  };
};
