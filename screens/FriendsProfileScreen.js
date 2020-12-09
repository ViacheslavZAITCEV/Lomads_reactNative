import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { Text } from 'react-native-elements';

import HeaderWithAvatar from './HeaderWithAvatar';

export default function FriendsProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      
      <HeaderWithAvatar />

      <Button title="Go back to FriendsMainScreen"
        onPress={() => navigation.navigate('FriendsMainScreen')}
      />

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Friends profile screen
        </Text>
      </ScrollView>
    </View>
  );
}