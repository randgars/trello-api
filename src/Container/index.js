import React from 'react';
import { Alert, TextInput } from 'react-native';
import { State, } from 'react-native-gesture-handler';
import { takeSnapshotAsync } from 'expo';
import { compose, withHandlers, withState } from 'recompose';
import View from './view';
import withCards from '../store/reducers/cards';

const enhancer = compose(
  withState('containerRef', 'setContainerRef', null),
  withState('isModalOpen', 'setIsModalOpen', false),
  withState('commentValue', 'setCommentValue', ''),
  withCards,
  withHandlers({
    setRefContainer: ({ setContainerRef }) => (view) => setContainerRef(view),
    openModal: ({ setIsModalOpen }) => (event) => {
      if (event.nativeEvent.state === State.ACTIVE) {
        setIsModalOpen(true);
      }
    },
    saveToCameraRollAsync: ({ cardsActions, containerRef, commentValue, setIsModalOpen }) => async () => {
      const file = await takeSnapshotAsync(containerRef, {
        format: 'png',
        result: 'file',
      });
      const permission = await Expo.Permissions.askAsync(Expo.Permissions.CAMERA_ROLL);
      if (permission.status === 'granted') {
        const formData = new FormData();
        formData.append("file", {
          uri: file,
          name: 'Screenshot',
          type: 'image/png'
        });

        cardsActions.createCard(formData, commentValue);
        setIsModalOpen(false);
      }
    }
  })
);

export default enhancer(View);