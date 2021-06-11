import React, { useState, useEffect } from 'react';
import { View,  ScrollView, Button, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Text} from 'react-native-elements';
import  InputComponent  from '../components/InputComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

//Initialisation de Redux
import { connect } from 'react-redux';

import urlLocal from '../../urlDevs'

function SignInScreen(props, { navigation, addToken }) {

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')

    const [listErrorsSignin, setErrorsSignin] = useState('')


    useEffect(() => {
        function goToBack() {
            if (props.token) {
                props.navigation.navigate('AfficheMainScreen');
            }
        }
        goToBack();
    }, [props.token])


    var handleSubmitSignin = async () => {

        try {
            console.log('function handleSubmitSignin');
            const data = await fetch(`${urlLocal}/users/sign-in`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `email=${signInEmail}&password=${signInPassword}`
            })
            const body = await data.json()

            console.log('reponse Backend:', body);
            if (body.response === true) {
                
                //si l'utilisateur arrive à sign-in, on appelle la fonction 'addToken' comme propriété de Redux et on ajoute dans Redux le token reçu du backend
                props.addToken(body.token);
                console.log('user est connecté');
                props.navigation.goBack();
            } else {
                setErrorsSignin(body.error)
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View >

            <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                <KeyboardAvoidingView behavior="padding" style={{  justifyContent: 'center' }}>
                    <SafeAreaView>
                        <InputComponent
                        label="e-mail"
                        secureTextEntry={false}
                        placeholder="e-mail"
                        setState={setSignInEmail} />

                        <InputComponent
                        label="mot de passe" 
                        placeholder="password" 
                        secureTextEntry={true}
                        setState={setSignInPassword} />
                    </SafeAreaView>
                </KeyboardAvoidingView>
            </ScrollView>

            <View style={{  justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => handleSubmitSignin()}
                    style={{
                        width: '100%', height: 40, backgroundColor: '#FF8200',
                        alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Connexion</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

//Mise en place du composant conteneur qui va “englober” SignInScreen
function mapDispatchToProps(dispatch) {
    return {
        // création de la fonction qui va devoir recevoir une info afin de déclencher une action nommée addToken qui enverra cette information auprès de Redux comme propriété
        addToken: function (token) {
            dispatch({ type: 'saveToken', token })
        },
        addIdUser: function (idUser) {
            dispatch({ type: 'addIdUser', idUser })
        }
    }
}

//export modifié pour l’appliquer au composant conteneur
export default connect(
    null,
    mapDispatchToProps
)(SignInScreen);