import React from 'react';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HeaderRightSetting({navigation}) {

  const goToProfileSettings = () => {
    navigation.navigate('ProfileSettingScreen')
  }

  return (
      <AntDesign name='setting' size={25} onPress={goToProfileSettings} style={styles.icon} />      
  )
}

const styles = StyleSheet.create({
  icon: {
    color: '#F8F5F2',
    right: 10
  }
});

