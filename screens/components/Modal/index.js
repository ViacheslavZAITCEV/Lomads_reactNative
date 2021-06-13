import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { color } from "react-native-reanimated";

const ModalComponent = (props) => {
  const type = props.type
  const message = props.message
  const setModal = props.setModal
  const modal = props.modal

  const COLORS = {
    error : "red",
    info : "#FF8200",
    succes : "#52908B",
  }

  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{
              marginBottom: 15,
              textAlign: "center",
              color: props.type ? COLORS[props.type] : COLORS.info,
            }}>
              {message}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModal(false)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#FF8200",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#FF8200",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ModalComponent;