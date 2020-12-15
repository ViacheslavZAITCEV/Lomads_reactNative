import React, {useEffect, useState} from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Avatar, Icon, CheckBox } from 'react-native-elements';

export default function FriendsAddScreen(props, { route }) {

  const [requestToBeFriendsList, setRequestToBeFriendsList] = useState([]);

  // const resultatNom = route.params.resultatNom;
  console.log("PROPS=>",props)
  console.log("NOM => ",props.navigation.state.params.friendsResult)
  const friendsResult = props.navigation.state.params.friendsResult;

  // -> map de nom

  const affichageFriendSearch = friendsResult.map((x,i) => {
    return(
      <View key={i} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
      <View style={{ justifyContent: 'flex-end', marginLeft: 15 }}>
        <Icon
          name="add-circle"
          type='materialicons'
          size={35}
          color="#D70026"
          onPress={() => console.log("envoi de demande d'amis")}
        />
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <Avatar
          size='medium'
          rounded
          source={{
            uri:
              x.avatar,
          }}
        />
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {x.prenom} {x.nom} 
          </Text>
      </View>
    </View>
    )
  })
  
  return (
    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#E55039' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
          AJOUTER À MES AMIS
        </Text>
      </View>

      <Text style={{ fontSize: 22, margin: 7, fontWeight: 'bold' }} >
        RESULTATS DE LA RECHERCHE :
        </Text>

      <ScrollView style={{ flexDirection: 'column', marginBottom: 40 }}>

      {affichageFriendSearch}
      

      </ScrollView>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('FriendsMainScreen')}
          style={{
            width: '100%', height: 40, backgroundColor: '#D70026',
            alignItems: 'center', justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Demander à rejoindre mes amis</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}