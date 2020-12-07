import React, { useState } from 'react';
import { View } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';

//Initialisation de Redux
import { connect } from 'react-redux';

function SignInScreen({ navigation, addToken }) {

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')

    const [userExists, setUserExists] = useState(false)

    const [listErrorsSignin, setErrorsSignin] = useState([])

    var handleSubmitSignin = async () => {

        const data = await fetch('/users/sign-in', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `email=${signInEmail}&password=${signInPassword}`
        })

        const body = await data.json()

        if (body.result === true) {
            setUserExists(true)
            //si l'utilisateur arrive à sign-in, on appelle la fonction 'addToken' comme propriété de Redux et on ajoute dans Redux le token reçu du backend
            addToken(body.token)
        } else {
            setErrorsSignin(body.error)
        }
    }

    if (userExists) {
        return <Redirect to='/AfficheMainScreen' />
    }

    var tabErrorsSignin = listErrorsSignin.map((error, i) => {
        return (<p>{error}</p>)
    })

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Header
                backgroundColor='#16253D'
                height={40}
                leftComponent={{ text: 'GoWizMe', style: { color: '#F8F5F2', fontWeight: 'bold', fontSize: 15 } }}
                centerComponent={{ text: 'Paris', style: { color: '#F8F5F2', fontWeight: 'bold', fontSize: 25 } }}
            />

            <Input label="e-mail" placeholder="entrer mon adresse e-mail"
                onChangeText={(val) => setSignInEmail(val)} />

            <Input label="mot de passe" placeholder="entrer mon mot de passe" secureTextEntry={true}
                onChangeText={(val) => setSignInPassword(val)} />

            <Button
                title="Connexion"
                buttonStyle={{
                    color: '#FFFFFF',
                    backgroundColor: 'D70026'
                }}
                onPress={() => handleSubmitSignin()}
            />

            <Button
                title="Inscription"
                buttonStyle={{
                    color: '#FFFFFF',
                    backgroundColor: 'D70026'
                }}
                onPress={() => navigation.navigate('SignUpScreen')}
            />

        </View>
    );
}

//Mise en place du composant conteneur qui va “englober” SignInScreen
function mapDispatchToProps(dispatch) {
    return {
        // création de la fonction qui va devoir recevoir une info afin de déclencher une action nommée addToken qui enverra cette information auprès de Redux comme propriété
        addToken: function (token) {
            dispatch({ type: 'addToken', token })
        }
    }
}

//export modifié pour l’appliquer au composant conteneur
export default connect(
    null,
    mapDispatchToProps
)(SignInScreen);