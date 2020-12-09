import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Text,
  Input,
  Button,
  Image
  
} from 'react-native-elements';

import HeaderWithAvatar from './HeaderWithAvatar';

import {connect} from 'react-redux';



function AfficheSpecialScreen(props) {
  const [evenement,setEvenement] = useState('') 
  useEffect(() => {
    const findEvent = async() => {
      const data = await fetch(`https//192.168.1.142:3000/pullEventDetaille`, {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'id='+props.idEvent
      });

      const body = await data.json()
      console.log(body)
      setEvenement (body) 
    }
    findEvent ()    
  },[])

  var event = evenement.map((event,i) => {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>

      <HeaderWithAvatar />

        <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
          <Image style={{ width: 150, height: 210, margin: 5 }} source={{ uri: event.image }} />
          <Text style={{ textAlign: 'center', marginTop: 3 }}>{event.nom}</Text>
         

        </View>
        <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
          <Text style={{ textAlign: 'center', marginTop: 3 }}>{event.description}</Text>

        </View>

        <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
          <Button>Amis intéressés</Button>
          <Button>Personnes intéréssées</Button>
        </View>

        <View style={{ alignItems: 'center', width: 150, margin: 5 }}></View>

     

  
    </View>
    )
  })
  return (
    
  );
}
function mapStateToProps(state){
  return {idEvent: state.idEvent}
}


export default connect(
  mapStateToProps,
null,
)(AfficheSpecialScreen);