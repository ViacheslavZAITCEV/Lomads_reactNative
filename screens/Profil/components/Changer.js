import React, {useState} from 'react';
import { View, TouchableOpacity  } from 'react-native';
import {Text} from 'react-native-elements';
import  InputComponent  from '../../components/InputComponent';

import { FontAwesome } from '@expo/vector-icons';

function Changer (props) {
    const [cor, setCor] = useState (false)
    
        return (
            <View style={{flex : 1}} >

                { cor
                    ?   <View style={{ flexDirection : 'row', justifyContent : 'center', width: '90%' }}>
                            <InputComponent 
                            label={props.label}
                            placeholder={props.placeholder}
                            secureTextEntry={props.secureTextEntry}
                            setState={props.setState} 
                            />
                           <FontAwesome 
                           name='save' 
                           size={25} 
                           color='#FF8200' 
                           onPress={ ()=> {
                               setCor(!cor);
                               props.setSave()
                            }} 
                            />
                        </View>

                    :   <TouchableOpacity
                        style={{flexDirection : 'row', justifyContent : 'space-around', alignItems: 'center', width: '90%' }}
                        onPress={ ()=> setCor(!cor)}
                        >
                            <Text style={{
                            color: '#353C3F', 
                            fontSize: props?.fontSize ? props.fontSize : 16,
                            fontWeight: 'bold'}}
                            >
                                {props.label} {props.label ? ":" : " "} {props.state}
                            </Text>
                            { props.icon && <FontAwesome name='times-circle' size={25} color='#FF8200' />}
                        </TouchableOpacity>


                }

            </View>
        )
    }
export default Changer