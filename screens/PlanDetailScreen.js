import React from 'react';
import { View, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

export default function PlanDetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#E55039' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
          DETAILS DE LA SORTIE
        </Text>
      </View>

      <ScrollView style={{ flexDirection: 'column', marginBottom: 40 }}>

      <View style={{ flex: 1, alignItems: 'center' }}>
          <Text>
            Plan detail screen
          </Text>
        </View>

      </ScrollView>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PlanMainScreen')}
          style={{
            width: '100%', height: 40, backgroundColor: '#D70026',
            alignItems: 'center', justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Retour à mes options de sorties</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}