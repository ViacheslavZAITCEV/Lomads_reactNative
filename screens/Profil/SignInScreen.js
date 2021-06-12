import React, { useState, useEffect } from 'react';
import { View,  ScrollView, Button, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Text} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import  InputComponent  from '../components/InputComponent';
import ModalComponent from '../components/Modal'

//Initialisation de Redux
import { connect } from 'react-redux';

import urlLocal from '../../urlDevs'

function SignInScreen(props, { navigation, addToken }) {

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')

    const [toModal, setToModal]= useState({})
    const [modal, setModal] = useState(false)

    useEffect(() => {
        function goToBack() {
            if (props.user) {
                props.navigation.navigate('AfficheMainScreen');
            }
        }
        goToBack();
    }, [props.user])


    var handleSubmitSignin = async () => {

        try {
            console.log('function handleSubmitSignin');
            const data = await fetch(`${urlLocal}/users/sign-in`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `email=${signInEmail}&password=${signInPassword}`
            })
            const response = await data.json()

            console.log('reponse Backend:', response);
            if (response.response === true) {
                
                //si l'utilisateur arrive à sign-in, on appelle la fonction 'addToken' comme propriété de Redux et on ajoute dans Redux le token reçu du backend
                props.setUser(response.user);
                console.log('user est connecté');
                // props.navigation.goBack();
            } else {
                modalOn ("error", response.error)
            }
        } catch (e) {
            console.log(e);
        }
    }

    const modalOn = (type, message)=>{
        setToModal( {type, message, setModal, modal} )   
        setModal(true)
    }
    

    return (
        <View >
            <ModalComponent 
            type={toModal.type}
            message={toModal.message}
            setModal={setModal}
            modal={modal}
            />
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
        setUser: function (user) {
            dispatch({ type: 'user', user })
        },
    }
}

//export modifié pour l’appliquer au composant conteneur
export default connect(
    null,
    mapDispatchToProps
)(SignInScreen);