import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Overlay, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'; 


export default function HeaderCity() {

  return (
    <View style={styles.header}>
        <Text style={styles.headerCity}>
          Lomads
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
  headerCity: {
    // fontWeight: 'bold',
    fontSize: 20,
    color: '#F8F5F2',
  },
  overlay:{
    width:200,
  }
});
