import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, TouchableOpacity, AsyncStorage  } from 'react-native';
import { Text } from 'react-native-elements';
import  InputComponent  from '../components/InputComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

//Initialisation de Redux
import { connect } from 'react-redux';

import urlLocal from '../../urlDevsGoWizMe'
const URL_BE = process.env.REACT_APP_URL_BE
const URL = "http://198.168.1.98:3000"
console.log(process.env)


function SignUpScreen(props) {
    
    const [signUpUserFirstname, setSignUpUserFirstname] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [confPassword, setConfUpPassword] = useState('')
    
    var handleSubmitSignup = async () => {
        console.log('URL=', URL)
        console.log('URL_BE=', URL_BE)
        console.log(process.env)
        console.log(process.env.development)

        if (signUpUserFirstname && signUpEmail && signUpPassword ){
            const body = `prenom=${signUpUserFirstname}&email=${signUpEmail}&password=${signUpPassword}` 
            console.log("body=", body)
            // const data = await fetch(`${urlLocal}/users/sign-up`, {
            const data = await fetch(`http://192.168.1.98:3000/users/sign-up`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body : body,
            })

            console.log("object")
            const request = await data.json()
            console.log('request=', request)

            if (borequestdy.response) {
                AsyncStorage.setItem('user', request.token);
                setUserExists(true)
                //si l'utilisateur a bien été enregistré en BDD (le sign-up a fonctionné), on appelle la fonction 'addToken' comme propriété de Redux et on ajoute dans Redux le token reçu du backend
                props.addToken(request.token);
                props.addIdUser(request._id);
                // props.addUser(userBE);
                console.log('user est enregistré');
                props.navigation.navigate('AfficheMainScreen');
            } else {
                setErrorsSignup(request.error)
            }
        }else{

        }

    }

    return (           
         <ScrollView contentContainerStyle={{ flexDirection: 'column'}}>
                <KeyboardAvoidingView behavior="padding" style={{ justifyContent: 'center' }}>
                    <SafeAreaView>
                            <InputComponent 
                            label="Name" 
                            placeholder="your name"
                            secureTextEntry={false}
                            setState = { setSignUpUserFirstname} />
                            <InputComponent 
                            label="e-mail" 
                            placeholder="enter your address e-mail"
                            secureTextEntry={false}
                            setState = { setSignUpEmail} />
                            <InputComponent 
                            label="Password" 
                            placeholder="enter your password"
                            secureTextEntry={true}
                            setState = { setSignUpPassword} />
                            <InputComponent 
                            label="Password" 
                            placeholder="repeat your password"
                            secureTextEntry={true}
                            setState = { setConfUpPassword} />
                    </SafeAreaView>
                </KeyboardAvoidingView>
            <View style={{ justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => handleSubmitSignup()}
                    style={{
                        width: '100%', height: 40, backgroundColor: '#FF8200',
                        alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Inscription</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

//Mise en place du composant conteneur qui va “englober” SignUpScreen
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

// function mapStateToProps(state) {
//   return { SignUpScreen: state.city }
// }

//export modifié pour l’appliquer au composant conteneur
export default connect(
    null,
    mapDispatchToProps
)(SignUpScreen);