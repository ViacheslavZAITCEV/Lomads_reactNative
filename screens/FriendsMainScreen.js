import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';

import HeaderWithAvatar from './HeaderWithAvatar';

export default function FriendsMainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <HeaderWithAvatar />

      <View style={{ flexDirection: 'column', width: 300, cover: 'width', marginTop: 5, }}>
        <Text> Mes invitations </Text>
        <ScrollView>
          <Text> invitation 1</Text>
          <Text> invitation 2</Text>
          <Text> invitation 3</Text>
        </ScrollView>
      </View>

      <View style={{ flexDirection: 'row', width: 300, cover: 'width', marginTop: 5, }}>
        <Text> Mes amis </Text>
        <Button
          type='outline'
          title="Ajouter amis"
          buttonStyle={{ backgroundColor: "#EFB509" }}
          titleStyle={{ color: 'white' }}
          onPress={() => navigation.navigate('FriendsAddScreen')}
        />
      </View>

      <View>
        <ScrollView >
          <Text> ami 1</Text>
          <Button title="Go to FriendsProfileScreen"
            onPress={() => navigation.navigate('FriendsProfileScreen')}
          />
          <Text> ami 2</Text>
          <Button title="Go to FriendsProfileScreen"
            onPress={() => navigation.navigate('FriendsProfileScreen')}
          />
          <Text> ami 3</Text>
          <Button title="Go to FriendsProfileScreen"
            onPress={() => navigation.navigate('FriendsProfileScreen')}
          />
        </ScrollView>
      </View>

    </View>
  );
}