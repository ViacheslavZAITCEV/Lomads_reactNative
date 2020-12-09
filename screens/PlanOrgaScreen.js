import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { Text } from 'react-native-elements';

import HeaderWithAvatar from './HeaderWithAvatar';

export default function PlanOrgaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <HeaderWithAvatar />

      <Button title="Go to PlanMainScreen"
        onPress={() => navigation.navigate('PlanMainScreen')}
      />      
      <Button title="Go to PlanInvitationScreen"
        onPress={() => navigation.navigate('PlanInvitationScreen')}
      />
      <Button title="Go to PlanDetailScreen"
        onPress={() => navigation.navigate('PlanDetailScreen')}
      />

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Plan organisation nouvelle sortie screen
      </Text>
      </ScrollView>
    </View>
  );
}