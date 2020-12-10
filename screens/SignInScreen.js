import React, { useState, useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';

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
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `email=${signInEmail}&password=${signInPassword}`
        })


        const body = await data.json()

        console.log('reponse Backend:', body);
        if (body.response) {
            var userBE = {
                nom : body.nom,
                prenom : body.prenom,
                avatar : body.avatar,
                ville  : body.ville,
                preferences  : body.preferences,
                groupes  : body.groupes,
                eventsFavoris  : body.eventsFavoris,
                sorties  : body.sorties,
                amis  : body.amis,
                confidentialite  : body.confidentialite,
                age : body.age,
            };
            AsyncStorage.setItem('user', JSON.stringify(userBE));
            setUserExists(true);
            //si l'utilisateur arrive à sign-in, on appelle la fonction 'addToken' comme propriété de Redux et on ajoute dans Redux le token reçu du backend
            props.addToken(body.token);
            props.addUser(userBE);
            console.log('user est connecté');
            props.navigation.navigate('AfficheMainScreen');
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Input label="e-mail" placeholder="entrer mon adresse e-mail"
                onChangeText={(val) => setSignInEmail(val)} />

            <Input label="mot de passe" placeholder="entrer mon mot de passe" secureTextEntry={true}
                onChangeText={(val) => setSignInPassword(val)} />

            <Button
                title="Connexion"
                buttonStyle={{
                    color: '#FFFFFF',
                    backgroundColor: '#D70026'
                }}
                onPress={() => handleSubmitSignin()}
            />

            <Button
                title="Inscription"
                buttonStyle={{
                    color: '#FFFFFF',
                    backgroundColor: '#16253D'
                }}
                onPress={() => props.navigation.navigate('SignUpScreen')}
            />

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
        addUser : function (user) {
            dispatch({ type: 'user', user});
        }
    }
}

//export modifié pour l’appliquer au composant conteneur
export default connect(
    null,
    mapDispatchToProps
)(SignInScreen);