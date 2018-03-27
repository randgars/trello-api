import React from 'react';
import { Button, Modal } from 'react-native';
import styled from 'styled-components';

const ModalContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    background-color: #E9E9E9;
    padding: 20px;
`;

const ModalTitle = styled.Text`
    font-size: 20px;
`;

const CustomTextInput = styled.TextInput`
    width: 100%;
    font-size: 18px;
    height: 80px;
    background-color: #F9F9F9;
    margin: 15px 0;
    padding: 10px;
`;

const ContentContainer = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
`;

const ButtonsContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const ModalComponent = ({ isModalOpen, setIsModalOpen, setCommentValue, saveToCameraRollAsync }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={isModalOpen}
    onRequestClose={() => {
      alert('Modal has been closed.');
    }}
  >
    <ModalContainer>
      <ContentContainer>
        <ModalTitle>Add your comment to the card</ModalTitle>
        <CustomTextInput
          onChangeText={(text) => setCommentValue(text)}
          multiline={true}
          numberOfLines={3}
          placeholder="Type text here..."
          editable={true}
          underlineColorAndroid="transparent"
        />
      </ContentContainer>
      <ButtonsContainer>
        <Button
          onPress={() => setIsModalOpen(false)}
          title="Cancel"
          color="#841584"
        />
        <Button
          onPress={() => saveToCameraRollAsync()}
          title="Done"
          color="#841584"
        />
      </ButtonsContainer>
    </ModalContainer>
  </Modal>
);

export default ModalComponent;
