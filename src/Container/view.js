import React from 'react';
import { ActivityIndicator, Button, Platform, StyleSheet } from 'react-native';
import { ScrollView, TapGestureHandler, } from 'react-native-gesture-handler';
import styled from 'styled-components';
import withDevice from '../utils/withDevice';
import Modal from '../Modal';

const CustomView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(Platform.OS) === 'ios' ? 20 : 0};
  width: ${withDevice('100dw')};
  height: ${withDevice('100dh')};
  align-self: center;
  z-index: 200;
`;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  }
});

const Container = ({ cardsStore, saveToCameraRollAsync, setRefContainer, isModalOpen, setIsModalOpen, setCommentValue, openModal }) => (
  <ScrollView
    waitFor={['image_pinch', 'image_rotation', 'image_tilt']}
    style={styles.scrollView}>
    <TapGestureHandler
      id="quatro_tap"
      onHandlerStateChange={openModal}
      maxDurationMs={100}
      numberOfTaps={4}>
      <CustomView ref={view => setRefContainer(view)}>
        {
          cardsStore.loading ?
            <ActivityIndicator size="large" color="#0000ff"/> :
            <Button title="LOL" onPress={() => null}/>
        }
        {
          isModalOpen && <Modal saveToCameraRollAsync={saveToCameraRollAsync} setCommentValue={setCommentValue}
                                isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        }
      </CustomView>
    </TapGestureHandler>
  </ScrollView>
);

export default Container;
