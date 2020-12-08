import React from 'react';
import { Header, Avatar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

function HeaderWithAvatar() {
  return (
    <Header
      backgroundColor='#16253D'
      height={40}
      leftComponent={{
        text: 'GoWizMe',
        style: { color: '#F8F5F2', fontWeight: 'bold', fontSize: 15 }
      }}
      centerComponent={{
        text: 'Paris',
        style: { color: '#F8F5F2', fontWeight: 'bold', fontSize: 25 },
        onPress: () => { console.log("OnPress VILLE OK") }
      }}
      rightComponent={
        <Avatar
          size='small'
          rounded
          onPress={() => console.log("onPress Avatar")}
          source={{
            uri:
              'https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2019/05/justice-league-retour-a-un-batman-plus-traditionnel-et-heroique-une-e1559338081214.jpg',
          }}
        />
      }
    />
  )
}

export default HeaderWithAvatar;