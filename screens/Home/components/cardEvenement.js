import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import {Card, Text, Badge} from 'react-native-elements';

import { AntDesign } from '@expo/vector-icons';

function cardEvenement (props){

  const {event, i} = {props}  

  return (
    <Card
    key={i}
    containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }}>
      <Card.Image
        style={{ width: 130, height: 170 }}
        source={{ uri: event.image }}
        resizeMode="cover"
        // onPress={() => {
        //   props.onAddIdEvent(event._id);
        // }}
      />
      <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 5, textTransform: 'uppercase' }}>{event.nom}</Text>
      <View style={{ alignItems: 'center', margin: 2 }}>
        <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value={event.categories[0]} />
      </View>

      <AntDesign        
        name="heart"
        size={25}
        style={props.style}
        color={ likeEventState } 
        // color={ (props.user && isUserLikedEvent(props.user._id, props.x.popularite) ) ? '#D70026' : '#FFFFFF' } 
        onPress={() => likeEvent(props.user, props.x)}
        />

    </Card>
  )
}

export default cardEvenement;
