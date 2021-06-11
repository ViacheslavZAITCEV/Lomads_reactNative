import React, { useEffect, useState } from "react";
import { View, TouchableOpacity  } from 'react-native';
import { Avatar, Text, Divider, Badge } from 'react-native-elements';
import Changer from './components/Changer'

//Initialisation de Redux
import { connect } from 'react-redux';

import urlLocal from '../../urlDevs'


function ProfilePage(props) {

  const [token, setToken] = useState(props.token);
  const [user, setUser] = useState(props.user);

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');


  const [avatar, setAvatar] = useState('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png');
  
  const [badges, setBadges] = useState([]);

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
          setNom(body.nom);
          setPrenom(body.prenom);
          setAvatar(body.avatar);

        }else{
          setUser(null);
        }
    }
    takeUserBD ();
  },[props.token])



  useEffect(()=>{
    const updateState = ()=>{
      if (user !== null){
        setPrenom(user.prenom);
        setNom(user.nom);
        setAvatar(user.avatar);
        if (user.preferences !== undefined && user.preferences.length > 0){
          var prefs = user.preferences[0];
          var badgesTemp = [];
          console.log('user.preferences[0]=', user.preferences[0]);
          console.log('type of prefs=', typeof prefs);
          var keys = Object.getOwnPropertyNames(prefs);
          console.log('keys=', keys);
          keys.forEach( key => {
            console.log('prefs[key]=', prefs[key]);
            console.log('key=', key);
            console.log('badgesModel[key]=', badgesModel[key]);
            if (prefs[key] === true ){
              if(key === 'cinema' || key === 'theatre' || key === 'exposition' || key === 'concert'){
                badgesTemp.push(
                  // { style : `backgroundColor: '#3C6382', margin: 1`, value : badgesModel[key] }
                <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value={badgesModel[key]} />
                )
              }else{
                badgesTemp.push(
                  // { style : `backgroundColor: '#E55039', margin: 1`, value : badgesModel[key] }
                  <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value={badgesModel[key]} />
                )
              }
              setBadges(badgesTemp);
            }        
          });
        }
      }
    }
    updateState();
  },[props.user])

  console.log('ProfileMainScreen, user=', user)

  // if (props.token === null){
  //   props.navigation.navigate('SignInScreen');
  // }

  async function deconnecter(){
    console.log('deconnection...')
    try{
      AsyncStorage.setItem('user', null);
    }catch(e){
      console.log(e);
    }
    console.log('deconnection...en cours...');
    setToken(null);
    props.delToken();
    console.log('deconnection...complets');

  }

  return (
    <View style={{ flex: 1 }}>

      {/* AVATAR, NOM, PRENOM, VILLE */}
      {console.log('ProfilMainScreen, view. user=',user)}
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
    token: state.tokenReducer,
    user : state.userReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
      // création de la fonction qui va devoir recevoir une info afin de déclencher une action nommée addToken qui enverra cette information auprès de Redux comme propriété
      delToken: function () {
          dispatch({ type: 'deconnecter' })
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);