import React from 'react';
import { Alert, StyleSheet, Pressable, View, Text, Modal } from 'react-native'

const LogOutModal = (props) => {
    const { showLogOut, handleCloseLogOut, handleLogOutAll } = props
    return (
        <View style={styles.centeredView}>
        <Modal
          transparent={true}
          visible={showLogOut}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Are you sure you want to log out?</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => handleCloseLogOut()}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => handleLogOutAll()}
              >
                <Text style={styles.textStyle}>Log Out</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>    
    )
}

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
      shadowColor: "#000",
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
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
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
  

export default LogOutModal;