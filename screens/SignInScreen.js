import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome'

export default function SignInScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Input label="e-mail" placeholder="entrer mon adresse e-mail"/>

            <Input label="mot de passe" placeholder="entrer mon mot de passe" secureTextEntry={true}/>

            <Button
                title="Connexion"
                buttonStyle={
                    backgroundColor='D70026'
                }
            />

            <Button
                title="Inscription"
                buttonStyle={
                    backgroundColor='D70026'
                }
            />

        </View>
    );
}