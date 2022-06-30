/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Modal as NativeModal, TouchableOpacity, View} from 'react-native';
import GetContext from '../../context/Context';
import Text from '../Text/Text';

type IModal = {
  open: boolean;
  onCloseModal: () => void;
};

const Context = GetContext();

const Modal = ({open, onCloseModal}: IModal) => {
  const {theme} = Context.UseData();
  return (
    <View>
      <NativeModal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={onCloseModal}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onCloseModal}
          activeOpacity={1}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              padding: 24,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
                backgroundColor: theme.colors.white,
                padding: 16,
              }}>
              <Text>Test</Text>
              <TouchableOpacity onPress={onCloseModal}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </NativeModal>
    </View>
  );
};

export default Modal;
