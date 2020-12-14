
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, ScrollView  } from 'react-native';
import { Avatar, Text, Divider, Badge } from 'react-native-elements';

//Initialisation de Redux
import { connect } from 'react-redux';

import urlLocal from '../urlDevsGoWizMe'



function ProfileMainScreen(props) {

  
  const [token, setToken] = useState(props.token);
  const [user, setUser] = useState(null);

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [ville, setVille] = useState('');
  const [avatar, setAvatar] = useState('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png');
  

  useEffect(() => {
    const takeUserBD = async () => {
        if(props.token){
          const userBD = await fetch(`${urlLocal}/users/getUser`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: `token=${props.token}`
          })
          const body = await userBD.json();
          console.log('ProfileMainScreen, updateUser(), user = ', body);
          setUser(body);
        }else{
          setUser(null);
        }
    }
    takeUserBD ();
  },[props.token])

  useEffect(()=>{
    const updateState = ()=>{
      if (user){
        setPrenom(user.prenom);
        setNom(user.nom);
        setVille(user.ville);
        setAvatar(user.avatar);

      }
    }
    updateState();
  },[user])

  console.log('ProfileMainScreen, user=', user)

  if (token === null){
    props.navigation.navigate('SignInScreen');
  }

  async function deconnecter(){
    try{
      await AsyncStorage.setItem('user', null);
    }catch(e){
      console.log(e);
    }
    setToken(null);
    props.navigation.navigate('AfficheMainScreen');

  }


  return (
    <View style={{ flex: 1 }}>

      {/* AVATAR, NOM, PRENOM, VILLE */}
      {console.log('ProfilMainScreen, view. user=',user)}
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          size='xlarge'
          marginTop={10}
          marginBottom={10}
          rounded
          // onPress={() => navigation.navigate('ProfileAvatarModifScreen')}          
          source={{
            uri :  user ? user.avatar : ' '
            // uri:
            //   'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
          }}
        />
        <Text h4>
          {nom}
          {prenom} </Text>
        <Text h5>{ville}</Text>
        <Divider marginTop={10} marginBottom={10} style={{ backgroundColor: '#EFB509', width: 250, height: 2 }} />
      </View>

      {/* PREFERENCES */}

      <View>
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text h4 fontWeight='bold'
            onPress={() => props.navigation.navigate('ProfilePreferenceScreen')}
          >
            Mes préférences
          </Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
          <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Films' />
          <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Expositions' />
          <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Théatre' />
          <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Concerts' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Comédie' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Science-Fiction' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Classique' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Musique Urbaine' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Rock' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Pop' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Fantastique' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Musical' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Beaux-Arts' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Civilisations' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Contemporain' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Drame' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Histoire' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Musique Française' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='One-Man Show' />
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          onPress={ ()=> {
            deconnecter()
          }}
          style={{
            width: '100%', height: 40, backgroundColor: '#D70026',
            alignItems: 'center', justifyContent: 'center'
          }}
        >
          <Text 
            style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                Me déconnecter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

function mapStateToProps(state){
  return {
    token: state.tokenReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
      // création de la fonction qui va devoir recevoir une info afin de déclencher une action nommée addToken qui enverra cette information auprès de Redux comme propriété
      addToken: function () {
          dispatch({ type: 'deconnecter' })
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileMainScreen);