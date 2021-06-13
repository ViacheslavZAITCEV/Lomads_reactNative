import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, TouchableOpacity  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-elements';
import ModalComponent from '../components/Modal'
import  InputComponent  from '../components/InputComponent';

//Initialisation de Redux
import { connect } from 'react-redux';

import urlLocal from '../../urlDevs'
const URL_BE = process.env.REACT_APP_URL_BE


function SignUpScreen(props) {
    
    const [signUpUserFirstname, setSignUpUserFirstname] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [confPassword, setConfUpPassword] = useState('')
    
    const [toModal, setToModal]= useState({})
    const [modal, setModal] = useState(false)
    
    const modalOn = (type, message)=>{
        setToModal( {type, message, setModal, modal} )   
        setModal(true)
    }

    var handleSubmitSignup = async () => {
        let errors = []
        if (signUpUserFirstname === ""){
            errors.push('name is empty')
        }
        if (signUpEmail === ""){
            errors.push('email is incompete')
        }
        if (signUpPassword === "" || signUpPassword !== confPassword){
            errors.push('passwords are wrongs')
        }


        if ( errors.length === 0 ){
            const body = `prenom=${signUpUserFirstname}&email=${signUpEmail}&password=${signUpPassword}` 
            console.log("body=", body)
            const data = await fetch(`${urlLocal}/users/sign-up`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body : body,
            })

            const response = await data.json()
            console.log('reponse Backend=', response)

            if (response.status) {

                //si l'utilisateur a bien été enregistré en BDD (le sign-up a fonctionné),
                // on appelle la fonction 'addToken' comme propriété de Redux et
                // on ajoute dans Redux l'user reçu du backend
                props.newUser(response.user);
                console.log('user est enregistré');
                modalOn ("succes", 'Profil is created')

            } else {
                modalOn ("error", response.error)
            }

        }else{
            console.log('errors=', errors)
            modalOn ("error", errors.toLocaleString())
            
        }
    }
   
    return (
        <View >
        <ModalComponent 
        type={toModal.type}
        message={toModal.message}
        setModal={setModal}
        modal={modal}
        />        
         <ScrollView contentContainerStyle={{ flexDirection: 'column'}}>
                <KeyboardAvoidingView behavior="padding" style={{width: "90%", justifyContent: 'center' }}>
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
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => handleSubmitSignup()}
                    style={{
                        width: '40%', height: 40, backgroundColor: '#FF8200',
                        alignItems: 'center', justifyContent: 'center', borderRadius: 15 
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Inscription</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
    );
}

//Mise en place du composant conteneur qui va “englober” SignUpScreen
function mapDispatchToProps(dispatch) {
    return {
        // création de la fonction qui va devoir recevoir une info afin de déclencher une action nommée addToken qui enverra cette information auprès de Redux comme propriété
        newUser: function (user) {
            dispatch({ type: 'user', user })
        },
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