import { compose, withPropsOnChange, } from 'recompose';
import { connect } from 'react-redux';
import { createCard } from './actions';

const enhancer = compose(
  connect(
    state => ({
      cardsStore: state.cards,
    }),
    dispatch => ({
      cardsActions: {
        createCard: (formData, commentValue) => dispatch(createCard(formData, commentValue)),
      }
    })
  ),
  withPropsOnChange(['cardsStore'], ({ cardsStore }) => {
    if (cardsStore && cardsStore.error) {
      return {
        cardsStore,
        errorMessage: cardsStore.error.errorMessage
      }
    }
    return { cardsStore }
  })
);

export default enhancer;