
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, ScrollView  } from 'react-native';
import { Avatar, Text, Divider, Badge } from 'react-native-elements';

//Initialisation de Redux
import { connect } from 'react-redux';

function ProfileMainScreen(props, { navigation }) {

  
  const [token, setToken] = useState(props.token);
  const [user, setUser] = useState(props.user);

  // useEffect(() => {
  //   const getUserfromStorage = () => {
  //       console.log('Read user from Redux');
  //       setUser(props.user);
  //     };
  //   getUserfromStorage ();
  // },[])

  console.log ('ProfilScreen, user=', user);
  if (user === undefined){
    props.navigation.navigate('SignInScreen');
  }
  return (
    <View style={{ flex: 1 }}>

      {/* AVATAR, NOM, PRENOM, VILLE */}

      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          size='xlarge'
          marginTop={10}
          marginBottom={10}
          rounded
          // onPress={() => navigation.navigate('ProfileAvatarModifScreen')}          
          source={{
            // uri : user.avatar
            uri:
              'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
          }}
        />
        <Text h4>John Doe</Text>
        <Text h5>Paris, FR</Text>
        <Divider marginTop={10} marginBottom={10} style={{ backgroundColor: '#EFB509', width: 250, height: 2 }} />
      </View>

      {/* PREFERENCES */}

      <View>
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text h4 fontWeight='bold'
            onPress={() => navigation.navigate('ProfilePreferenceScreen')}
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
          style={{
            width: '100%', height: 40, backgroundColor: '#D70026',
            alignItems: 'center', justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Me déconnecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};


function mapStateToProps(state){
  return {
    token: state.token,
    user : state.user}
}

export default connect(
  mapStateToProps,
  null
)(ProfileMainScreen);