import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Avatar, Icon, Button } from 'react-native-elements';

export default function FriendsAddScreen({ navigation }) {


  return (
    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#E55039' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
          AJOUTER MES AMIS
        </Text>
      </View>

      <Text style={{ fontSize: 22, margin: 7, fontWeight: 'bold' }} >
        RESULTATS DE LA RECHERCHE :
        </Text>

      <ScrollView style={{ flexDirection: 'column', marginBottom: 40 }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>

          <View style={{ marginHorizontal: 20 }}>
            <Avatar
              size='medium'
              rounded
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
              }}
            />
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Cédric Alinc
              </Text>
          </View>

          <View style={{ justifyContent: 'flex-end', marginHorizontal: 20 }}>
            <Icon
              name="add-circle"
              type='materialicons'
              size={35}
              color="#D70026"
              onPress={() => console.log('demande acceptée')}
            />
          </View>

        </View>

      </ScrollView>

    </View>
  );
}