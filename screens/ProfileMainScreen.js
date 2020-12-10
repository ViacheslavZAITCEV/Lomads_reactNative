import React, { useEffect, useState } from "react";
import { View, ScrollView } from 'react-native';
import { Text, Avatar, Divider, Button } from 'react-native-elements';

//Initialisation de Redux
import { connect } from 'react-redux';

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


function mapStateToProps(state){
  return {
    token: state.token,
    user : state.user}
}

export default connect(
  mapStateToProps,
  null
)(ProfileMainScreen);