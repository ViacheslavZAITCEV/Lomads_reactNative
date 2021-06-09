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
            'https://res.cloudinary.com/dhtl1axxt/image/upload/v1607637597/sqmsxctqqkh1xpbbnjl2.png',
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