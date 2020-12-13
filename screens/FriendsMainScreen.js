import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button, Avatar, Icon, Badge } from 'react-native-elements';

export default function FriendsMainScreen(props, { navigation }) {

  const [friendsRequests, setFriendsRequests] = useState([])

  // if (friendsRequests.length === 0) {
  //   return {
  //     code pour afficher "Aucune nouvelle demande d'amis"
  //   }
  // }





  return (
    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#E55039' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
          GERER MES AMIS
        </Text>
      </View>

      <ScrollView style={{ flexDirection: 'column', marginBottom: 40 }}>

        <Text style={{ fontSize: 18, margin: 7, fontWeight: 'bold' }} >
          DEMANDES D'AMIS
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginVertical: 5 }}>

          <Avatar
            size='small'
            rounded
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
            }}
          />

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              Cédric Alinc
              </Text>
            <Text> veut faire partie de vos amis </Text>
          </View>

          <Icon
            name="checkcircle"
            type='antdesign'
            size={30}
            color="#D70026"
            onPress={() => console.log('demande acceptée')}
          />

          <Icon
            name="closecircle"
            type='antdesign'
            size={30}
            color="#D70026"
            onPress={() => console.log('demande refusée')}
          />

        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginVertical: 5 }}>

          <Avatar
            size='small'
            rounded
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
            }}
          />

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              Emmanuelle Bouaziz
            </Text>
            <Text> veut faire partie de vos amis </Text>
          </View>

          <Icon
            name="checkcircle"
            type='antdesign'
            size={30}
            color="#D70026"
            onPress={() => console.log('demande acceptée')}
          />

          <Icon
            name="closecircle"
            type='antdesign'
            size={30}
            color="#D70026"
            onPress={() => console.log('demande refusée')}
          />

        </View>

        <Text style={{ fontSize: 18, margin: 7, fontWeight: 'bold' }} >
          MES AMIS
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginVertical: 5, marginLeft: 15 }}>

          <Avatar
            onPress={() => props.navigation.navigate('FriendsProfileScreen')}
            size='medium'
            rounded
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
            }}
          />

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>
              Slava Zaitcev
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', maxWidth: 300 }}>
              <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Films' />
              <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Science-Fiction' />
              <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Musique Urbaine' />
              <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Fantastique' />
              <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Histoire' />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginVertical: 5, marginLeft: 15 }}>

          <Avatar
            onPress={() => props.navigation.navigate('FriendsProfileScreen')}
            size='medium'
            rounded
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
            }}
          />

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>
              Alexandra Bui-Catel
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', maxWidth: 300 }}>
              <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Expositions' />
              <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Théatre' />
              <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Musical' />
              <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Beaux-Arts' />
              <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Contemporain' />
              <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Drame' />
              <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Histoire' />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginVertical: 5, marginLeft: 15 }}>

          <Avatar
            onPress={() => props.navigation.navigate('FriendsProfileScreen')}
            size='medium'
            rounded
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
            }}
          />

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>
              Clément Simonneau 
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', maxWidth: 300 }}>
              <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Films' />
              <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Concerts' />
              <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Comédie' />
              <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Science-Fiction' />
              <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Rock' />
              <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='Fantastique' />
              <Badge badgeStyle={{ backgroundColor: '#E55039', margin: 1 }} value='One-Man Show' />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginVertical: 5, marginLeft: 15 }}>

          <Avatar
            onPress={() => props.navigation.navigate('FriendsProfileScreen')}
            size='medium'
            rounded
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
            }}
          />

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>
              Antoine Dury
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', maxWidth: 300 }}>
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
        </View>

      </ScrollView>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('FriendsResearchScreen')}
          style={{
            width: '100%', height: 40, backgroundColor: '#D70026',
            alignItems: 'center', justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Rechercher mes amis sur GoWizMe</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}