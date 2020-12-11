import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function HeaderRightAvatar({ navigation }) {

  const goToProfileMainScreen = () => {
    navigation.navigate('ProfileMainScreen')
  }

  return (
    <View style={styles.headerAvatar}>
      <Avatar
        size='small'
        rounded
        onPress={goToProfileMainScreen}
        source={{
          uri:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        }}
      />
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
  headerAvatar: {
    right: 10
  }
});