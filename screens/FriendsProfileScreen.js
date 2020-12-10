import React from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar, Text, Divider, Button, Badge, Card } from 'react-native-elements';

//Initialisation de Redux
import { connect } from 'react-redux';

function FriendsProfileScreen() {

  return (
    <View>

      {/* AVATAR, NOM, PRENOM, VILLE */}

      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          size='large'
          marginTop={10}
          marginBottom={10}
          rounded
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
          }}
        />
        <Text h4>Jane Doe</Text>
        <Text h5>Paris, FR</Text>
        <Divider marginTop={10} marginBottom={10} style={{ backgroundColor: '#EFB509', width: 250, height: 2 }} />
      </View>

      {/* PREFERENCES */}

      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text h4 fontWeight='bold'>
            Préférences
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop:5 }}>
          <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value='cinéma' />
          <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value='expositions' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='humour' />
          <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='action' />
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Divider marginTop={10} marginBottom={10} style={{ backgroundColor: '#EFB509', width: 250, height: 2 }} />
        </View>
      </View>

      {/* FAVORIS */}

      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text h4 fontWeight='bold'>Favoris</Text>
        </View>
        <ScrollView horizontal={true}>
          <Card
            containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '100%', backgroundColor: '#F8F5F2' }}>
            <Card.Image
              style={{ width: 85, height: 65 }}
              source={{ uri: 'https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg' }}
              resizeMode="cover"
            />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 5 }}>TENET</Text>
          </Card>
          <Card
            containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '100%', backgroundColor: '#F8F5F2' }}>
            <Card.Image
              style={{ width: 85, height: 65 }}
              source={{ uri: 'https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg' }}
              resizeMode="cover"
            />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 5 }}>TENET</Text>
          </Card>
          <Card
            containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '100%', backgroundColor: '#F8F5F2' }}>
            <Card.Image
              style={{ width: 85, height: 65 }}
              source={{ uri: 'https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg' }}
              resizeMode="cover"
            />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 5 }}>TENET</Text>
          </Card>
          <Card
            containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '100%', backgroundColor: '#F8F5F2' }}>
            <Card.Image
              style={{ width: 85, height: 65 }}
              source={{ uri: 'https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg' }}
              resizeMode="cover"
            />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 5 }}>TENET</Text>
          </Card>
        </ScrollView>
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Divider marginTop={10} marginBottom={10} style={{ backgroundColor: '#EFB509', width: 250, height: 2 }} />
      </View>

      {/* SORTIES PANIFIEES */}

      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text h4 fontWeight='bold'>Sorties Planifiées</Text>
        </View>
        <ScrollView horizontal={true}>
          <Card
            containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '100%', backgroundColor: '#F8F5F2' }}>
            <Card.Image
              style={{ width: 85, height: 65 }}
              source={{ uri: 'https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg' }}
              resizeMode="cover"
            />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 5 }}>TENET</Text>
          </Card>
          <Card
            containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '100%', backgroundColor: '#F8F5F2' }}>
            <Card.Image
              style={{ width: 85, height: 65 }}
              source={{ uri: 'https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg' }}
              resizeMode="cover"
            />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 5 }}>TENET</Text>
          </Card>
          <Card
            containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '100%', backgroundColor: '#F8F5F2' }}>
            <Card.Image
              style={{ width: 85, height: 65 }}
              source={{ uri: 'https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg' }}
              resizeMode="cover"
            />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 5 }}>TENET</Text>
          </Card>
          <Card
            containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '100%', backgroundColor: '#F8F5F2' }}>
            <Card.Image
              style={{ width: 85, height: 65 }}
              source={{ uri: 'https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg' }}
              resizeMode="cover"
            />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 5 }}>TENET</Text>
          </Card>
        </ScrollView>
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
)(FriendsProfileScreen);