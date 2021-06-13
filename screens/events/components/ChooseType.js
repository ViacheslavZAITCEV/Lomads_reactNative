import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {Text} from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';



function ChooseType (props) {
  return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '90%'}}>
        <Text style={{color: '#353C3F',justifyContent: 'center', fontSize: 18, fontWeight: 'bold'}} >
          Type : 
        </Text>
        <TouchableOpacity onPress={() => props.setState('film')}>
          <FontAwesome name='film' size={35} color= {props.type === 'film' ? '#FF8200' : '#353C3F'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.setState('tree')}>
          <FontAwesome name='tree' size={35} color= {props.type === 'tree' ? '#FF8200' : '#353C3F'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.setState('beer')}>
          <FontAwesome name='beer' size={35} color= {props.type === 'beer' ? '#FF8200' : '#353C3F'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.setState('image')}>
          <FontAwesome name='image' size={35} color= {props.type === 'image' ? '#FF8200' : '#353C3F'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.setState('users')}>
          <FontAwesome name='users' size={35} color= {props.type === 'users' ? '#FF8200' : '#353C3F'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.setState('music')}>
          <FontAwesome name='music' size={35} color= {props.type === 'music' ? '#FF8200' : '#353C3F'} />
        </TouchableOpacity>
      </View>
  )
}
export default ChooseType