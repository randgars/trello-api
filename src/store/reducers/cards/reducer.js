import { Cards } from './actions';

export const initialState = {
  card: null,
  attachment: null,
  loading: false,
  error: undefined,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Cards.LOADING:
      return { ...state, loading: payload.loading };
    case Cards.CREATE_CARD_SUCCESS:
      return { ...state, card: payload.data };
    case Cards.ADD_ATTACHMENT_SUCCESS:
      return { ...state, attachment: payload.data };
    default:
      return state;
  }
};

export default reducer;
