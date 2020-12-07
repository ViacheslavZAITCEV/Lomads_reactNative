import React from 'react';
import { View, ScrollView } from 'react-native';
import { Header, Text } from 'react-native-elements';

import { FontAwesome } from '@expo/vector-icons';

export default function PlanMainScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Header
        backgroundColor='#16253D'
        height={40}
        leftComponent={{ text: 'GoWizMe', style: { color: '#F8F5F2', fontWeight: 'bold', fontSize: 15 } }}
        centerComponent={{ text: 'Paris', style: { color: '#F8F5F2', fontWeight: 'bold', fontSize: 25 } }}
        rightComponent={<FontAwesome name='user-circle' size={25} color='#F8F5F2' />}
      />
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Plan main screen
      </Text>
      </ScrollView>
    </View>
  );
}