import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, ScrollView, Button, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

//Initialisation de Redux
import { connect } from 'react-redux';

function SignInScreen(props, { navigation, addToken }) {

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')

    const [userExists, setUserExists] = useState(false)

    const [listErrorsSignin, setErrorsSignin] = useState('')

    var handleSubmitSignin = async () => {

        console.log ('function handleSubmitSignin');
        const data = await fetch('http://172.17.1.111:3000/users/sign-in', {
        // const data = await fetch('http://192.168.1.98:3000/users/sign-in', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `email=${signInEmail}&password=${signInPassword}`
        })

        const body = await data.json()

        console.log('reponse Backend:', body);
        if (body.response === true) {
            // var userBE = {
            //     nom : body.nom,
            //     prenom : body.prenom,
            //     avatar : body.avatar,
            //     ville  : body.ville,
            //     preferences  : body.preferences,
            //     groupes  : body.groupes,
            //     eventsFavoris  : body.eventsFavoris,
            //     sorties  : body.sorties,
            //     amis  : body.amis,
            //     confidentialite  : body.confidentialite,
            //     age : body.age,
            // };
            AsyncStorage.setItem('user', JSON.stringify(body.token));
            setUserExists(true);

            //si l'utilisateur arrive à sign-in, on appelle la fonction 'addToken' comme propriété de Redux et on ajoute dans Redux le token reçu du backend
            props.addToken(body.token);
            // props.addUser(userBE);
            console.log('user est connecté');
            props.navigation.goBack();
        } else {
            setErrorsSignin(body.error)
        }
    }

    // if (userExists) {
    //     return <Redirect to='/AfficheMainScreen' />
    // }


    // var tabErrorsSignin = listErrorsSignin.map((error, i) => {
    //     return (<p>{error}</p>)
    // })

    return (
        <View style={{ flex: 1 }}>

            <View style={{ backgroundColor: '#E55039' }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
                    SE CONNECTER
                </Text>
            </View>

            <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'center' }}>
                    <SafeAreaView>
                        <Input label="e-mail" placeholder="entrer mon adresse e-mail"
                            onChangeText={(val) => setSignInEmail(val)} />

                        <Input label="mot de passe" placeholder="entrer mon mot de passe" secureTextEntry={true}
                            onChangeText={(val) => setSignInPassword(val)} />
                        <Button
                            title="Pas encore de profil? Créer mon profil"
                            onPress={() => props.navigation.navigate('SignUpScreen')}
                        />
                    </SafeAreaView>
                </KeyboardAvoidingView>
            </ScrollView>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => handleSubmitSignin()}
                    style={{
                        width: '100%', height: 40, backgroundColor: '#D70026',
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
        }
    }
}

//export modifié pour l’appliquer au composant conteneur
export default connect(
    null,
    mapDispatchToProps
)(SignInScreen);