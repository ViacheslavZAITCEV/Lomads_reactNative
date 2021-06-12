import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import {Card, Text, Badge} from 'react-native-elements';

import { FontAwesome } from '@expo/vector-icons';

const newEvent = ()=>{
  console.log("create Event")
  
}


function CreateEvent (){

  return (
    <Card
    key={2000}
    containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, backgroundColor: '#F8F5F2' }}>
      <Card.Image
        style={{ width: 130, height: 170, justifyContent: 'center', alignItems: 'center' }}
        resizeMode="cover"
        onPress={ () => newEvent() }
      >
        <FontAwesome 
        name='plus' 
        size={45} 
        color='#FF8200' 
        />
      </Card.Image>
      <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 5 }}>CREATE EVENT</Text>


    </Card>
  )
}

export default CreateEvent;
