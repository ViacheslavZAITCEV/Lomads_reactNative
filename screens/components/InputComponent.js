import React from 'react';
import {Input} from 'react-native-elements';

function InputComponent (props) {
        return (
            <Input label={props.label}
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            onChangeText={(val) => props.setState(val)} />
        )
    }
export default InputComponent