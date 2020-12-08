import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { Text } from 'react-native-elements';

import HeaderWithAvatar from './HeaderWithAvatar';

export default function AfficheSpecialScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      
      <HeaderWithAvatar />

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Affiche special screen
        </Text>
      </ScrollView>
    </View>
  );
}