import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { Text } from 'react-native-elements';

import HeaderWithAvatar from './HeaderWithAvatar';

export default function PlanInvitationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <HeaderWithAvatar />

      <Button title="Go to PlanMainScreen"
        onPress={() => navigation.navigate('PlanMainScreen')}
      />
      <Button title="Go to PlanDetailScreen"
        onPress={() => navigation.navigate('PlanDetailScreen')}
      />
      <Button title="Go to PlanOrgaScreen"
        onPress={() => navigation.navigate('PlanOrgaScreen')}
      />

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Plan invitation screen
      </Text>
      </ScrollView>
    </View>
  );
}