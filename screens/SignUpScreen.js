import React from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

export default function SignUpScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>Inscription à GoWizMe</Text>

            <Input label="prénom" placeholder="entrer mon prénom" />
            <Input label="nom" placeholder="entrer mon nom" />
            <Input label="e-mail" placeholder="entrer mon adresse e-mail"/>
            <Input label="mot de passe" placeholder="entrer mon mot de passe" secureTextEntry={true}/>
            <Input label="vérification mot de passe" placeholder="entrer de nouveau mon mot de passe" secureTextEntry={true}/>

            <Button title="Inscription"
                buttonStyle={
                    backgroundColor = 'D70026'
                }
            />

        </View>
    );
}