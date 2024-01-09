import { StyleSheet, Text, TextInput, View, Pressable, Modal, Alert } from 'react-native';
import { useState, useEffect } from 'react';

import globalStyles from './globalStyles';

const Assignment02 = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={globalStyles.container}>
          <View>
            <Text>This is modal...</Text>
            <Pressable
              style={[globalStyles.button, globalStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={globalStyles.buttonText}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable onPress={() => setModalVisible(true)}
      style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Show modal message</Text>
      </Pressable>
    </View>
  )
}

export default Assignment02