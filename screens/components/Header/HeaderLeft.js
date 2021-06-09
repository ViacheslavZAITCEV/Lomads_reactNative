import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HeaderLeft({ navigation }) {

    
  return (
    <View>
      <Text style={styles.headerText}
      onPress={() => navigation.navigate('AfficheMainScreen')}
      > 
      Menu 
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16253D'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#F8F5F2',
    left: 10
  }
});