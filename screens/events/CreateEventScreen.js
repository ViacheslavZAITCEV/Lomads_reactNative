import React, {useState, useEffect} from 'react';
import { View, ScrollView, KeyboardAvoidingView, TouchableOpacity  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card, Text, Badge} from 'react-native-elements';

import { FontAwesome } from '@expo/vector-icons';

import ModalComponent from '../components/Modal'
import InputComponent from '../components/InputComponent';


function newEventScreen (){

  const [eventName, setEventName] = useState('')
  const [description, setDescription] = useState('')

  const [toModal, setToModal]= useState({})
  const [modal, setModal] = useState(false)
  
  const modalOn = (type, message)=>{
      setToModal( {type, message, setModal, modal} )   
      setModal(true)
  }

  
  var handleSubmitSignup = async () => {
    console.warn('New Event Button is pressed')
  }
  return (
    <View  >
      <ModalComponent 
      type={toModal.type}
      message={toModal.message}
      setModal={setModal}
      modal={modal}
      />
      <ScrollView contentContainerStyle={{  alignItems: 'center', justifyContent: 'center' }}>
        <KeyboardAvoidingView behavior="padding" style={{ width: "90%", justifyContent: 'center' }}>
            <SafeAreaView>
              <InputComponent 
              label="Event name" 
              placeholder="Event"
              setState = { setEventName} />
              <InputComponent 
              placeholder="description"
              setState = { setDescription} />
            </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
            onPress={() => handleSubmitSignin()}
            style={{
                width: '40%', height: 40, backgroundColor: '#FF8200', alignItems: 'center', justifyContent: 'center', borderRadius: 15
            }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>New event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default newEventScreen
