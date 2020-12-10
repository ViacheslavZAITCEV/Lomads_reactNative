<<<<<<< HEAD
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Avatar, Text, Divider, Badge } from 'react-native-elements';
=======
import React, { useEffect, useState } from "react";
import { View, ScrollView } from 'react-native';
import { Text, Avatar, Divider, Button } from 'react-native-elements';
>>>>>>> 2e3f794f8297cff389ce59553224a3987d7fe6ce

//Initialisation de Redux
import { connect } from 'react-redux';

<<<<<<< HEAD
function ProfileMainScreen({ navigation }) {

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
=======
function ProfileMainScreen(props, {navigation}) {

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
      <View style={{ flex: 1, alignItems: 'center' }}>
  
        <Avatar
          size='xlarge'
          marginTop={15}
          marginBottom={25}
          rounded
          source={{
            // uri : user.avatar
            uri:
              'https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2019/05/justice-league-retour-a-un-batman-plus-traditionnel-et-heroique-une-e1559338081214.jpg',
          }}
          onPress={() => navigation.navigate('ProfileAvatarModifScreen')}
        />
        <Text h4>Bruce Wayne</Text>
        <Text h5>Paris, FR</Text>
  
        <Divider marginTop={10} marginBottom={10} style={{ backgroundColor: '#16253D', width: 250, height: 2 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Text h4 fontWeight='bold'>Mes préférences</Text>
          <Button 
            type='outline'
            title="Modifier"
            buttonStyle={{ backgroundColor: "#EFB509" }}
            titleStyle={{ color: 'white' }}
            onPress={() => navigation.navigate('ProfilePreferenceScreen')}
          />      
        </View>
  
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            Profile main screen
          </Text>
        </ScrollView>
  
      </View>
    );
  }
>>>>>>> 2e3f794f8297cff389ce59553224a3987d7fe6ce


<<<<<<< HEAD
function mapStateToProps(state) {
  return { token: state.token }
=======
function mapStateToProps(state){
  return {
    token: state.token,
    user : state.user}
>>>>>>> 2e3f794f8297cff389ce59553224a3987d7fe6ce
}

export default connect(
  mapStateToProps,
  null
)(ProfileMainScreen);