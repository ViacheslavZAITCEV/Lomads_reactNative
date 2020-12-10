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
            'https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2019/05/justice-league-retour-a-un-batman-plus-traditionnel-et-heroique-une-e1559338081214.jpg',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerAvatar: {
    right: 10
  }
});