import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HeaderCity({ navigation }) {

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerCity}> Paris </Text>
      </View>
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
  headerCity: {
    // fontWeight: 'bold',
    fontSize: 20,
    color: '#F8F5F2',
  }
});