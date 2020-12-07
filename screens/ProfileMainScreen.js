import React from 'react';
import { View, ScrollView } from 'react-native';
import { Header, Text } from 'react-native-elements';

import { AntDesign } from '@expo/vector-icons';

export default function ProfileMainScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <Header
        backgroundColor='#16253D'
        height={40}
        leftComponent={{ text: 'GoWizMe', style: { color: '#F8F5F2', fontWeight: 'bold', fontSize: 15 } }}
        centerComponent={{ text: 'Paris', style: { color: '#F8F5F2', fontWeight: 'bold', fontSize: 25  }}}
        rightComponent={<AntDesign name="setting" size={25} color='#F8F5F2' />}
      />
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Profile main screen
        </Text>        
      </ScrollView>

    </View>
  );
}