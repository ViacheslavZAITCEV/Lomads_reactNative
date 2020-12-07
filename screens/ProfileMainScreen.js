import React from 'react';
import { View, ScrollView } from 'react-native';
import { Header, Text, Avatar, Divider } from 'react-native-elements';

import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function ProfileMainScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <Header
        backgroundColor='#16253D'
        height={40}
        leftComponent={{ text: 'GoWizMe', style: { color: '#F8F5F2', fontWeight: 'bold', fontSize: 15 } }}
        centerComponent={{ text: 'Paris', style: { color: '#F8F5F2', fontWeight: 'bold', fontSize: 25 } }}
        rightComponent={<AntDesign name="setting" size={25} color='#F8F5F2' />}
      />

      <Avatar
        size='xlarge'
        marginTop={15}
        marginBottom={10}
        rounded
        source={{
          uri:
            'https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2019/05/justice-league-retour-a-un-batman-plus-traditionnel-et-heroique-une-e1559338081214.jpg',
        }}
      />
      <Text h4>Bruce Wayne</Text> 
      <Text h5>Paris, FR</Text> 

      <Divider marginTop={10} marginBottom={10} style={{ backgroundColor: '#16253D', width: 250, height: 2 }} />

      <Text h6 fontWeight='bold'>Mes préférences</Text> 

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Profile main screen
        </Text>
      </ScrollView>

    </View>
  );
}