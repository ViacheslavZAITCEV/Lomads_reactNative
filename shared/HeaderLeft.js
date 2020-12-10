import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HeaderLeft({ navigation }) {

    
  return (
    <View>
      <Text style={styles.headerText}
      onPress={() => navigation.navigate('AfficheMainScreen')}
      > 
      GoWizMe 
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#F8F5F2',
    left: 10
  }
});