import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import {Card, Text, Badge} from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

function cardEvenement (props){
  const event = props.event

  console.log('event=', event);

  return (
    <Card
    containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }}>
      {event.image !== ''
      ? <Card.Image
        style={{ width: 130, height: 170 }}
        source={{ uri: event.image }}
        resizeMode="cover"
        // onPress={() => {
        //   props.onAddIdEvent(event._id);
        // }}
        />
      : <FontAwesome name={event.type} size={55} color='#FF8200' style={{ width: 130, height: 170 }} />
      }
      <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 5, textTransform: 'uppercase' }}>{event?.nom}</Text>
      <View style={{ alignItems: 'center', margin: 2 }}>
        <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value={event.type} />
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 14}}>
          {event.lieux_dates.date_debut}
        </Text>
      </View>

    </Card>
  )
}

export default cardEvenement;
