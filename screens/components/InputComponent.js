import React from 'react';
import {Input} from 'react-native-elements';

function InputComponent (props) {
        return (
            <Input 
            style={{height:"80%"}}
            label={props?.label}
            placeholder={props?.placeholder}
            secureTextEntry={props?.secureTextEntry}
            onChangeText={(val) => props.setState(val)} 
            />
        )
    }
export default InputComponent