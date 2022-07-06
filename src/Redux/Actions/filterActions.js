import { ActionTypes } from "../Constants/action-types";

const filterData = (data) => {
  const { FILTER_DATA } = ActionTypes;
  return {
    type: FILTER_DATA,
    payload: data,
  };
};

export default filterData;
