import React, { useState } from "react";
import { View, ScrollView, KeyboardAvoidingView, TouchableOpacity  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Avatar, Text, Divider } from 'react-native-elements';
import Changer from './components/Changer'
import ModalComponent from '../components/Modal'

//Initialisation de Redux
import { connect } from 'react-redux';

import urlLocal from '../../urlDevs'


function ProfilePage(props) {

  const [user, setUser] = useState(props.user);

  const [nom, setNom] = useState(props.user.nom);
  const [prenom, setPrenom] = useState(props.user.prenom);
  const [email, setEmail] = useState(props.user.email);
  const [avatar, setAvatar] = useState(props.user ? props.user.avatar : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png');

  const [changeNom, setChangeNom] = useState(false)
  const [changePrenom, setChangePrenom] = useState(false)

  const [toModal, setToModal]= useState({})
  const [modal, setModal] = useState(false)


  console.log('=ProfilePage, user=', user)

  const updateBD = async ()=>{
      // useCallback (  ()=>{

          console.log('ProfilePage.updateBD')
          let newUser = {...props.user}
          newUser.email = email
          newUser.nom = nom
          newUser.prenom = prenom
          newUser.avatar = avatar
          const userJSON = JSON.stringify(newUser);
          console.log('newUser=', newUser)
          const data = await fetch(`${urlLocal}/users/update`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `token=${props.user.token}&userJSON=${userJSON}`
          })
          const response = await data.json()
          
          console.log('reponse Backend:', response);
          if (response.response === true) {
            
            props.newUser(response.user);
          } else {

            modalOn ("error", response.error)
            setNom(response.user.nom)
            setPrenom(response.user.prenom)
            setEmail(response.user.email)
            setAvatar(response.user.avatar)
          }

      // }, user)
  }

  const modalOn = (type, message)=>{
    setToModal( {type, message, setModal, modal} )   
    setModal(true)
  }

  function deconnecter(){
    console.log('deconnection...en cours...');
    props.newUser( {} );
    console.log('deconnection...complets');

  }

  return (
    <View style={{ flex: 1, justifyContent:'space-around' }}>

      <ModalComponent 
      type={toModal.type}
      message={toModal.message}
      setModal={setModal}
      modal={modal}
      />
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
  
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text h4 fontWeight='bold'
            onPress={() => props.navigation.navigate('ProfilePreferenceScreen')}
          >
            My profil
          </Text>
        </View>
        <Divider marginTop={10} marginBottom={10} style={{ backgroundColor: '#EFB509', width: 250, height: 2 }} />
        <Avatar
          size='xlarge'
          marginTop={10}
          marginBottom={10}
          rounded
          // onPress={() => navigation.navigate('ProfileAvatarModifScreen')}          
          source={{
            uri :  user ? user.avatar : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
            
          }}
          />
        <View style={{ flexDirection: 'row'}}>
          <Changer
            style={{ justifyContent: 'flex-end' }}
            placeholder='name'
            state={prenom}
            setState={setPrenom}
            setSave={updateBD}
            fontSize={24}
          />
          <Changer
            placeholder='Family'
            state={nom}
            setState={setNom}
            setSave={updateBD}
            fontSize={24}
          />
          
        </View>
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
          <KeyboardAvoidingView behavior="padding" style={{  justifyContent: 'center' }}>
            <SafeAreaView style={{ flexDirection : 'column', justifyContent : 'center' }}>
        
              <Changer
                label="e-mail"
                secureTextEntry={false}
                placeholder='email'
                state={email}
                setState={setEmail}
                setSave={updateBD}
                icon
              />
              {/* <Changer
                label="password"
                secureTextEntry={true}
                placeholder='password'
                state={pass}
                setState={setPass}
                setSave={updatePassBD}
                icon
              /> */}
            </SafeAreaView>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>


      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={ ()=> {
            deconnecter()
          }}
          style={{
            width: '40%', height: 40, backgroundColor: '#FF8200',
            alignItems: 'center', justifyContent: 'center', borderRadius: 15 
          }}
        >
          <Text 
            style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                Sign out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

function mapStateToProps(state){
  return {
    user : state.userReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
      // création de la fonction qui va devoir recevoir une info afin de déclencher une action nommée addToken qui enverra cette information auprès de Redux comme propriété
      newUser: function (user) {
          dispatch({ type: 'user', user })
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);