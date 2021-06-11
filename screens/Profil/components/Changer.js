import React, {useState} from 'react';
import { View, TouchableOpacity  } from 'react-native';
import {Input, Text} from 'react-native-elements';
import  InputComponent  from '../../components/InputComponent';

import { FontAwesome } from '@expo/vector-icons';

function Changer (props) {
    const [cor, setCor] = useState (false)
    
        return (
            <View style={{ flexDirection : 'column', justifyContent : 'center' }}>

                { cor
                    ?   <View style={{ flexDirection : 'row', justifyContent : 'center', width: '90%' }}>
                            <InputComponent 
                            containerStyle={{flex: 2}}
                            label={props.label}
                            placeholder={props.placeholder}
                            secureTextEntry={props.secureTextEntry}
                            onChangeText={(val) => props.setState(val)} 
                            />
                            <FontAwesome name='save' size={25} color='#FF8200' onPress={ ()=> setCor(!cor)} />
                        </View>

                    :   <TouchableOpacity
                        style={{flexDirection : 'row', justifyContent : 'space-around', alignItems: 'center', width: '90%' }}
                        onPress={ ()=> setCor(!cor)}
                        >
                            <Text style={{color: '#353C3F', fontSize: 16, fontWeight: 'bold', margingRight: '15px' }}>
                                {props.label} : {props.state}
                            </Text>
                            <FontAwesome name='times-circle' size={25} color='#FF8200' />
                        </TouchableOpacity>


                }

            </View>
        )
    }
export default Changer