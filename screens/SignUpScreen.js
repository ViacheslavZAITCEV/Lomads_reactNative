import React, {useState} from 'react';
import { View, AsyncStorage } from 'react-native';
import { Header, Text, Input, Button } from 'react-native-elements';

//Initialisation de Redux
import { connect } from 'react-redux';

function SignUpScreen(props) {

    const [signUpUserFirstname, setSignUpUserFirstname] = useState('')
    const [signUpUserLastname, setSignUpUserLastname] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [signUpCity, setSignUpCity] = useState('')

    const [isVisible, setVisible] = useState(false);
    const [textModal, setTextModal] = useState('');

    const [userExists, setUserExists] = useState(false)

    var handleSubmitSignup = async () => {

        const data = await fetch('http://172.17.1.111:3000/users/sign-up', {
        // const data = await fetch('http://192.168.1.98:3000/users/sign-up', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `prenom=${signUpUserFirstname}&nom=${signUpUserLastname}&email=${signUpEmail}&password=${signUpPassword}&ville=${signUpCity}`
        })

        const body = await data.json()

        if (body.response) {
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
            // }
            AsyncStorage.setItem('user', JSON.stringify(body.token));
            setUserExists(true)
            //si l'utilisateur a bien été enregistré en BDD (le sign-up a fonctionné), on appelle la fonction 'addToken' comme propriété de Redux et on ajoute dans Redux le token reçu du backend
            props.addToken(body.token);
            // props.addUser(userBE);
            console.log('user est enregistré');
            props.navigation.navigate('AfficheMainScreen');
        } else {
            setErrorsSignup(body.error)
        }

    }

    // if (userExists) {
    //     return <Redirect to='/AfficheMainScreen' />
    // }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>Inscription à GoWizMe</Text>
                <Input label="prénom" placeholder="entrer mon prénom"
                    onChangeText={(val) => setSignUpUserFirstname(val)} />
                <Input label="nom" placeholder="entrer mon nom"
                    onChangeText={(val) => setSignUpUserLastname(val)} />
                <Input label="ville de résidence" placeholder="entrer ma ville"
                    onChangeText={(val) => setSignUpCity(val)} />
                <Input label="e-mail" placeholder="entrer mon adresse e-mail"
                    onChangeText={(val) => setSignUpEmail(val)} />
                <Input label="mot de passe" placeholder="entrer mon mot de passe" secureTextEntry={true}
                    onChangeText={(val) => setSignUpPassword(val)} />

                <Button
                title="Inscription"
                buttonStyle={{
                    color: '#FFFFFF',
                    backgroundColor: '#16253D'
                }}
                    onPress={ ()=> handleSubmitSignup()}
                />
        </View>
    );
}

//Mise en place du composant conteneur qui va “englober” SignUpScreen
function mapDispatchToProps(dispatch) {
    return {
        // création de la fonction qui va devoir recevoir une info afin de déclencher une action nommée addToken qui enverra cette information auprès de Redux comme propriété
        addToken: function (token) {
            dispatch({ type: 'saveToken', token })
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