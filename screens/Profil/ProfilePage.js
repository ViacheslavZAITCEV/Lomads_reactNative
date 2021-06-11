import React, { useEffect, useState } from "react";
import { View, TouchableOpacity  } from 'react-native';
import { Avatar, Text, Divider, Badge } from 'react-native-elements';
import Changer from './components/Changer'

//Initialisation de Redux
import { connect } from 'react-redux';

import urlLocal from '../../urlDevs'


function ProfilePage(props) {

  const [user, setUser] = useState(props.user);

  const [nom, setNom] = useState(props.user.nom);
  const [prenom, setPrenom] = useState(props.user.prenom);
  const [email, setEmail] = useState(props.user.email);
  const [avatar, setAvatar] = useState(props.user ? props.user.avatar : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png');
  

  // useEffect(() => {
  //   const takeUserBD = async () => {
  //       if(props.token){
  //         const userBD = await fetch(`${urlLocal}/users/getUser`, {
  //             method: 'POST',
  //             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //             body: `token=${props.token}`
  //         })
  //         const body = await userBD.json();
  //         console.log('ProfilePage, updateUser(), user = ', body);
  //         setUser(body);
  //         setNom(body.nom);
  //         setPrenom(body.prenom);
  //         setAvatar(body.avatar);

  //       }else{
  //         setUser(null);
  //       }
  //   }
  //   takeUserBD ();
  // },[props.user])





  console.log('=ProfilePage, user=', user)


  async function deconnecter(){
    console.log('deconnection...')
    try{
      AsyncStorage.setItem('user', null);
    }catch(e){
      console.log(e);
    }
    console.log('deconnection...en cours...');
    setUser({});
    props.signOut();
    console.log('deconnection...complets');

  }

  return (
    <View style={{ flex: 1 }}>

      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
  
        <View>
          <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text h4 fontWeight='bold'
              onPress={() => props.navigation.navigate('ProfilePreferenceScreen')}
            >
              My profil
            </Text>
          </View>
          <Divider marginTop={10} marginBottom={10} style={{ backgroundColor: '#EFB509', width: 250, height: 2 }} />
        </View>
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
        <Text h4>{prenom} {nom}</Text>
          
        <Changer
          label="e-mail"
          secureTextEntry={false}
          placeholder='email'
          state={email}
          setState={setEmail}
        />
      </View>


      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          onPress={ ()=> {
            deconnecter()
          }}
          style={{
            width: '100%', height: 40, backgroundColor: '#FF8200',
            alignItems: 'center', justifyContent: 'center'
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
      signOut: function () {
          dispatch({ type: 'user', user : {} })
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);