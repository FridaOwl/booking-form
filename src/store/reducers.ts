import { UPDATE_FORM_DATA } from "./actions";

const initialState = {
  formData: {},
};

const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
