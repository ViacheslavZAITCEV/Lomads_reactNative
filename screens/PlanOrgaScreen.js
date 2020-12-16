import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Text, Input, Avatar, Icon, Image } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Initialisation de Redux
import { connect } from 'react-redux';

import urlLocal from '../urlDevsGoWizMe'

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    width: 225,
    height: 35,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#D70026",
  }
})

function PlanOrgaScreen(props, { navigation }) {

  const [friendsList, setFriendsList] = useState([])

  const [imageSortie, setImageSortie] = useState(props.newSortie.image.toString())
  const [nameSortie, setNameSortie] = useState(props.newSortie.nomSortie)
  const [adresseSortie, setAdresseSortie] = useState(props.newSortie.adresse.itemValue)
  const [dateDebut, setDateDebut] = useState(props.newSortie.date_debut.itemValue)
  const [dateFin, setDateFin] = useState('')
  const [dureeSortie, setDureeSortie] = useState(props.newSortie.duree.toString())
  const [codePostalSortie, setCodePostalSortie] = useState('')
  const [typeSortie, setTypeSortie] = useState('')

  console.log(imageSortie);
  console.log(nameSortie);
  console.log(adresseSortie);
  console.log(dateDebut);
  console.log(dureeSortie);

  const [invitedFriendsList, setInvitedFriendsList] = useState([])

  const imageNouvelleSortie = () => {
    if (imageSortie == '') {
      setImageSortie('https://www.meetinggame.fr/reseau-de-loisirs/images/sorties/fete-sortie-entre-amis.jpg')
    }
  }

  // console.log('idUser=', props.idUser)

  useEffect(() => {
    const getFriendsList = async () => {
      const data = await fetch(`${urlLocal}/pullFriendsList`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `id=${props.idUser}`
      })
      const body = await data.json();
      setFriendsList(body);
    };
    getFriendsList();
    imageNouvelleSortie();
  }, [])

  // console.log(friendsList)


  var ListeAmis;
  if (friendsList.listAmis == undefined) {
    ListeAmis =
      <Text>Chargement</Text>
  } else if (friendsList.listAmis.length > 0) {
    ListeAmis = friendsList.listAmis.map((x, i) => {
      return (
        <View key={i} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
          <View style={{ justifyContent: 'flex-end', marginLeft: 15 }}>
            <Icon
              name="add-circle"
              type='materialicons'
              size={35}
              color="#D70026"
              onPress={() => {
                console.log("ajout ami à l'invitation");
                inviteFriends(x._id)
              }}
            />
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <Avatar
              size='medium'
              rounded
              source={{
                uri: x.avatar
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
  } else {
    <Text>Pas encore d'amis enregistrés</Text>
  }

  var inviteFriends = (idAmi) => {
    setInvitedFriendsList([...invitedFriendsList, idAmi])
  }

  var createSortie = async () => {
    const data = await fetch(`${urlLocal}/addSortie`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `evenementLie=${props.idEvent}&organisateur=${props.idUser}&image=${imageSortie}&nomSortie=${nameSortie}&adresse=${adresseSortie}&date_debut=${dateDebut}&date_fin=${dateFin}&cp=${codePostalSortie}&type=${typeSortie}&duree=${dureeSortie}&part=${invitedFriendsList}`
    })
    const body = await data.json();
    console.log(body)
    console.log(body.sortie)
    props.onAddIdSortie(body._id)
    props.navigation.navigate('PlanDetailScreen')
  }

  console.log(invitedFriendsList);

  return (
    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#E55039' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
          ORGANISER UNE SORTIE
        </Text>
      </View>

      <ScrollView style={{ flexDirection: 'column', marginBottom: 40 }}>

          <KeyboardAvoidingView behavior="padding" enabled>
            <SafeAreaView>

              <Text style={{ fontSize: 18, margin: 7, fontWeight: 'bold' }} >
                INFORMATIONS SUR LA SORTIE
            </Text>

              <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>

                <View style={{ flex: 1, alignItems: 'center', width: 300, margin: 5 }}>
                  <Image style={{ width: 210, height: 297, margin: 5 }} source={{ uri: imageSortie }} />
                </View>


                <View>
                  <Input
                    // placeholder='Nom de la sortie'
                    inputStyle={styles.input}
                    inputContainerStyle={{ width: '80%', marginTop: 20, alignItems: 'center' }}
                    onChange={(e) => setNameSortie(e.target.value)}
                    value={nameSortie}
                  />
                </View>

                <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Text>Date début:</Text>
                  <Input
                    inputContainerStyle={styles.inputContainer}
                    rightIcon={<MaterialCommunityIcons name="clock-time-eight-outline" size={22} color="black" />}
                    onChange={(e) => setDateDebut(e.target.value)}
                    value={dateDebut}
                  />
                </View>

                <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Text>Date fin:</Text>
                  <Input
                    inputContainerStyle={styles.inputContainer}
                    rightIcon={<MaterialCommunityIcons name="clock-time-eight-outline" size={22} color="black" />}
                    onChange={(e) => setDateFin(e.target.value)}
                    value={dateFin}
                  />
                </View>

                <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Text>Durée:</Text>
                  <Input
                    inputContainerStyle={styles.inputContainer}
                    rightIcon={<MaterialCommunityIcons name="clock-time-eight-outline" size={22} color="black" />}
                    onChange={(e) => setDureeSortie(e.target.value)}
                    value={dureeSortie}
                  />
                </View>

                <View>
                  <Text>Adresse:</Text>
                  <Input
                    inputContainerStyle={styles.inputContainer}
                    rightIcon={<MaterialIcons name="location-on" size={22} color="black" />}
                    onChange={(e) => setAdresseSortie(e.target.value)}
                    value={adresseSortie}
                  />
                </View>

                <View>
                  <Text>Code postal:</Text>
                  <Input
                    placeholder='par ex. "75010"'
                    inputContainerStyle={styles.inputContainer}
                    rightIcon={<MaterialIcons name="location-city" size={22} color="black" />}
                    onChange={(e) => setCodePostalSortie(e.target.value)}
                    value={codePostalSortie}
                  />
                </View>

                <View>
                  <Text>Type:</Text>
                  <Input
                    placeholder='privée, amis ou publique'
                    inputContainerStyle={styles.inputContainer}
                    rightIcon={<MaterialCommunityIcons name="eye" size={22} color="black" />}
                    onChange={(e) => setTypeSortie(e.target.value)}
                    value={typeSortie}
                  />
                </View>

              </View>

              <Text style={{ fontSize: 18, margin: 7, fontWeight: 'bold' }} >
                INVITER MES AMIS
            </Text>

              {ListeAmis}

            </SafeAreaView>
          </KeyboardAvoidingView>

      </ScrollView>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          onPress={() => createSortie()}
          style={{
            width: '100%', height: 40, backgroundColor: '#D70026',
            alignItems: 'center', justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Valider et inviter mes amis</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


function mapStateToProps(state) {
  return {
    token: state.tokenReducer,
    user: state.userReduceur,
    currentCity: state.currentCityReducer,

    idEvent: state.idEventReducer,
    idUser: state.idUserReducer,
    newSortie: state.newSortieReducer,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onAddIdSortie: function (idSortie) {
      dispatch({ type: 'addIdSortie', idSortie: idSortie });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanOrgaScreen);