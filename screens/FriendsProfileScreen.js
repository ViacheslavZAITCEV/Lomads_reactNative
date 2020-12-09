import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { Text } from 'react-native-elements';

import HeaderWithAvatar from './HeaderWithAvatar';

export default function FriendsProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      
      <HeaderWithAvatar />

      <Button title="Go to FriendsMainScreen"
        onPress={() => navigation.navigate('FriendsMainScreen')}
      />
      <Button title="Go to FriendsAddScreen"
        onPress={() => navigation.navigate('FriendsAddScreen')}
      />

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Friends profile screen
        </Text>
      </ScrollView>
    </View>
  );
}