import React, {useState, useEffect} from 'react';
import { View, ScrollView, KeyboardAvoidingView, TouchableOpacity  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card, Text, Badge} from 'react-native-elements';

import { FontAwesome } from '@expo/vector-icons';

import ModalComponent from '../components/Modal'
import InputComponent from '../components/InputComponent';
import ChooseType from './components/ChooseType';
import ModalDate from './components/ModalDate';


import { connect } from 'react-redux';

import urlLocal from '../../urlDevs'

function newEventScreen (props){

  const [eventName, setEventName] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [type, setType] = useState('')
  const [date, setDate] = useState('')

  const [toModal, setToModal]= useState({})
  const [modal, setModal] = useState(false)
  const [modalDateVisible, setModalDateVisible] = useState(false)
  
  const modalOn = (type, message)=>{
      setToModal( {type, message, setModal, modal} )   
      setModal(true)
  }

  
  var changeDate = async () => {
    setModalDateVisible(true)
  }
  
  var handleSubmit = async () => {
    console.log('New Event Button is pressed')

    let errors = []
        if (eventName === ""){
            errors.push('name is empty')
        }
        if (address === ""){
            errors.push('address is empty')
        }
        if (type === ""){
            errors.push('type is wrong')
        }
        if (date === ""){
          errors.push('date is incorrect')
        }

        if ( errors.length === 0 ){
          let body;
          props.user
          ? body = `token=${props.user.token}&eventName=${eventName}&address=${address}&description=${description}}&type=${type}` 
          : body = `eventName=${eventName}&address=${address}&description=${description}&type=${type}$date=${date}` 
          console.log("body=", body)
          const data = await fetch(`${urlLocal}/event/setEvent`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body : 'body',
          })
          // console.log('data', data);

          const response = await data.json()
          console.log('reponse Backend=', response)

          if (response.response) {
            console.log('response BE is true');

             modalOn ("succes", 'Event is created')

          } else {
              modalOn ("error", response.error)
          }

        }else{
            console.log('errors=', errors)
            modalOn ("error", errors.toLocaleString())
            
        }

  }
  return (
    <View style={{ width: "95%", justifyContent: 'space-around' }} >
      <ModalComponent 
      type={toModal.type}
      message={toModal.message}
      setModal={setModal}
      modal={modal}
      />
      <ModalDate
      setModal={setModalDateVisible}
      modal={modalDateVisible}
      date={date}
      setDate={setDate}
      />
      <ScrollView contentContainerStyle={{  alignItems: 'center', justifyContent: 'center' }}>
        <KeyboardAvoidingView behavior="padding" style={{ width: "95%", justifyContent: 'center' }}>
            <SafeAreaView >
                <InputComponent 
                label="Event name" 
                placeholder="Event"
                setState = { setEventName} />
                <InputComponent 
                placeholder="description"
                setState = { setDescription} />
                <InputComponent 
                placeholder="address"
                setState = { setAddress} />
            </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>

      <View style={{flexDirection: 'column', justifyContent: 'space-around', }}>

        <ChooseType  setState={setType} type={type} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '95%'}}>
          <View>
          <Text style={{color: '#353C3F',justifyContent: 'center', fontSize: 18, fontWeight: 'bold'}} >
            Date : 
          </Text>
          <Text style={{color: '#353C3F',justifyContent: 'center', fontSize: 18, fontWeight: 'bold'}} >
            {date}
          </Text>
          </View>
          <TouchableOpacity
              onPress={() => changeDate()}
              style={{
                width: '40%', height: 40, backgroundColor: '#FF8200',
                alignItems: 'center', justifyContent: 'center', borderRadius: 15
              }}
              >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Change Date</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
              onPress={() => handleSubmit()}
              style={{
                width: '40%', height: 40, backgroundColor: '#FF8200',
                alignItems: 'center', justifyContent: 'center', borderRadius: 15
              }}
              >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>New event</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
function mapStateToProps(state) {
  return { user: state.user }
}
export default connect(
  mapStateToProps,
  null
  )(newEventScreen)
