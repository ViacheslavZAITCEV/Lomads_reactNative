import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Avatar, Text, Divider, Badge, Card } from 'react-native-elements';

//Initialisation de Redux
import { connect } from 'react-redux';

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
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text h4 fontWeight='bold'
            onPress={() => navigation.navigate('ProfilePreferenceScreen')}
          >
            Mes préférences
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
          <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value='cinéma' />
          <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value='expositions' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='humour' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='action' />
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
  );
}

function mapStateToProps(state) {
  return { token: state.token }
}

export default connect(
  mapStateToProps,
  null
)(ProfileMainScreen);