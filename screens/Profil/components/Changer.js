import React, {useState} from 'react';
import { View, TouchableOpacity  } from 'react-native';
import {Input, Text} from 'react-native-elements';

function Changer (props) {
    const [cor, setCor] = useState (false)
    
        return (
            <View style={{ flexDirection : 'row', justifyContent : 'center' }}>

                <Input 
                containerStyle={{flex: 2}}
                label={props.label}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                onChangeText={(val) => props.setState(val)} 
                />
                <TouchableOpacity
                style={{flex: 0.4,  justifyContent : 'center', alignItems: 'center',  backgroundColor: '#FF8200'}}
                onPress={ ()=> setCor(!cor)}
                >
                    <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>
                        { !cor ? 'change' : 'ok'}
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
export default Changer