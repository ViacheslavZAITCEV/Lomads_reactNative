import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default function ProfilePreferenceScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Profile preferences screen
        </Text>
        <Button 
          type='outline'
          title="valider"
          buttonStyle={{ backgroundColor: "#EFB509" }}
          titleStyle={{ color: 'white' }}
          onPress={() => navigation.navigate('ProfileMainScreen')}
        /> 
      </ScrollView>

    </View>
  );
}