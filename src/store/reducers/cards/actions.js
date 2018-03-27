import { Alert } from 'react-native';
import { addAttachmentRequest as addAttachmentAPIRequest, createCardRequest as createCardAPIRequest } from '../../api';

const NAME = 'Card.';
export const Cards = {
  LOADING: 'LOADING',

  CREATE_CARD_SUCCESS: NAME + 'CREATE_CARD_SUCCESS',
  CREATE_CARD_FAILURE: NAME + 'CREATE_CARD_FAILURE',

  ADD_ATTACHMENT_SUCCESS: NAME + 'ADD_ATTACHMENT_SUCCESS',
  ADD_ATTACHMENT_FAILURE: NAME + 'ADD_ATTACHMENT_FAILURE',
};

const addAttachment = async (formData, idCard, dispatch) => {
  try {
    const { data } = await addAttachmentAPIRequest(formData, idCard);
    dispatch({ type: Cards.ADD_ATTACHMENT_SUCCESS, payload: { attachment: data } });
    Alert.alert('ADD_ATTACHMENT_SUCCESS');
  } catch (err) {
    Alert.alert('ADD_ATTACHMENT_FAILURE');
    throw new Error('Server Error.', err);
  }
};

export const createCard = (formData, commentValue) => async (dispatch) => {
  dispatch({ type: Cards.LOADING, payload: { loading: true } });
  try {
    const { data } = await createCardAPIRequest(commentValue);
    dispatch({ type: Cards.CREATE_CARD_SUCCESS, payload: { card: data } });
    Alert.alert('CREATE_CARD_SUCCESS');
    await addAttachment(formData, data.id, dispatch);
  } catch (err) {
    Alert.alert('CREATE_CARD_FAILURE');
    throw new Error('Server Error.', err);
  }
  dispatch({ type: Cards.LOADING, payload: { loading: false } });
};
