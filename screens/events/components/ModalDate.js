import React, { useState } from 'react';
import { View, Modal, Alert, StyleSheet, Pressable } from 'react-native';
import {Text} from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const dayNowDate = new Date ()
const INITIAL_DATE = dayNowDate.getFullYear() + '-' + (dayNowDate.getMonth() + 1) +'-'+ dayNowDate.getDate()
console.log ('INITIAL_DATE=', INITIAL_DATE)

function ModalDate (props) {

  const [selected, setSelected] = useState(props.date ? props.date : INITIAL_DATE)

  const setDate = props.setDate
  const setModal = props.setModal
  const modal = props.modal


  const handleSubmit = ()=> {
    console.log('selected=', selected);
    setModal(false)
    setDate(selected)
    setSelected(new Date())
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
          <Text style={{fontSize: 18, fontWeight: 'bold'}}> Date of event</Text>
          <Calendar
          theme={theme}
          // current={INITIAL_DATE}
          onDayPress={(day)=> setSelected(day.dateString)}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: '#FF8200',
              selectedTextColor: 'white'
            }
          }}
          />

          <View style={styles.modalRow}>
            <Pressable
              style={[styles.button, styles.button]}
              onPress={() => setModal(false)}
              >
              <Text style={styles.modalText}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleSubmit() }
              >
              <Text style={styles.textStyle}>Ok!</Text>
            </Pressable>
          </View>

        </View>
      </View>
    </Modal>
  );
}  
export default ModalDate

const theme = {
  backgroundColor: '#ffffff',
  calendarBackground: '#ffffff',
  textSectionTitleColor: '#b6c1cd',
  textSectionTitleDisabledColor: '#d9e1e8',
  selectedDayBackgroundColor: '#FF8200',
  selectedDayTextColor: '#ffffff',
  todayTextColor: '#FF8200',
  dayTextColor: '#2d4150',
  textDisabledColor: '#d9e1e8',
  dotColor: '#00adf5',
  selectedDotColor: '#ffffff',
  arrowColor: '#FF8200',
  disabledArrowColor: '#d9e1e8',
  monthTextColor: '#FF8200',
  indicatorColor: '#FF8200',
  textDayFontFamily: 'monospace',
  textMonthFontFamily: 'monospace',
  textDayHeaderFontFamily: 'monospace',
  textDayFontWeight: '300',
  textMonthFontWeight: 'bold',
  textDayHeaderFontWeight: '300',
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16
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
    shadowColor: "#FF8200",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  },
  modalRow: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    // alignContent: 'space-between',
    alignItems: 'baseline',
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    marginRight: 30,
    marginLeft : 30,
  },
  buttonClose: {
    backgroundColor: "#FF8200",
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    color: "#FF8200",
    textAlign: "center"
  }
});


