import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome'

export default function SignInScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Input
                placeholder="e-mail"
                leftIcon={
                    <Icon
                        name='fa-envelope-o'
                        size={24}
                        color='D70026'
                    />
                }
            />

            <Input
                placeholder="mot de passe"
                secureTextEntry={true}
                leftIcon={
                    <Icon
                        name='fa-lock'
                        size={24}
                        color='D70026'
                    />
                }
            />

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