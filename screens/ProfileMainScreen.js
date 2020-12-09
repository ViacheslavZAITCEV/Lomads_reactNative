import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { Text, Avatar, Divider } from 'react-native-elements';

import HeaderWithSetting from './HeaderWithSetting';

function ProfileMainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <HeaderWithSetting />

      <Avatar
        size='xlarge'
        marginTop={15}
        marginBottom={10}
        rounded
        source={{
          uri:
            'https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2019/05/justice-league-retour-a-un-batman-plus-traditionnel-et-heroique-une-e1559338081214.jpg',
        }}
      />
      <Text h4>Bruce Wayne</Text>
      <Text h5>Paris, FR</Text>

      <Divider marginTop={10} marginBottom={10} style={{ backgroundColor: '#16253D', width: 250, height: 2 }} />

      <Text h6 fontWeight='bold'>Mes préférences</Text>

      <Button title="Go to ProfileSettingScreen"
        onPress={() => navigation.navigate('ProfileSettingScreen')}
      />
      <Button title="Go to ProfileAvatarModifScreen"
        onPress={() => navigation.navigate('ProfileAvatarModifScreen')}
      />
      <Button title="Go to ProfilePreferenceScreen"
        onPress={() => navigation.navigate('ProfilePreferenceScreen')}
      />

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Profile main screen
        </Text>
      </ScrollView>

    </View>
  );
}

export default ProfileMainScreen;