import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { Text } from 'react-native-elements';

import HeaderWithAvatar from './HeaderWithAvatar';

export default function AfficheSpecialScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <HeaderWithAvatar />

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
          <Image style={{ width: 150, height: 210, margin: 5 }} source={{ uri: 'https://weheartit.com/entry/350627019?context_query=affiche+film&context_type=search' }} />
          <Text style={{ textAlign: 'center', marginTop: 3 }}>BLACK SWAN</Text>
          <Fab disabled aria-label="like"
            size="small"
            color="#D70026">
            <FavoriteIcon />
          </Fab>

        </View>
        <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
          <Text style={{ textAlign: 'center', marginTop: 3 }}>Thomas Leroy, le directeur du New York City Ballet, est à la recherche d'une nouvelle danseuse étoile depuis qu'il a décidé de se passer des services de la titulaire, Beth. Nina, depuis longtemps membre de la troupe, pense que son heure est venue. Une rivale inattendue se présente en la personne de la sensuelle Lily, nouvellement recrutée. Nina peut compter sur sa mère, Erica, une maîtresse-femme qui contrôle sa vie, pour intervenir auprès de Thomas.</Text>

        </View>

        <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
          <Button>Amis intéressés</Button>
          <Button>Personnes intéréssées</Button>
        </View>

        <View style={{ alignItems: 'center', width: 150, margin: 5 }}></View>

      </ScrollView>

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction input="PLANIFIER" />
        <BottomNavigationAction input="MESSAGES" />
        <BottomNavigationAction input="Réserver" />

      </BottomNavigation>

    </View>
  );
}