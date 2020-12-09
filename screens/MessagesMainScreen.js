import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { Text } from 'react-native-elements';

import HeaderWithAvatar from './HeaderWithAvatar';

export default function MessagesMainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <HeaderWithAvatar />

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Messages main screen
      </Text>
      </ScrollView>
    </View>
  );
}