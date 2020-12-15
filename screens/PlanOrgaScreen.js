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
  button: {
    backgroundColor: "#D70026",
  }
})

function PlanOrgaScreen(props, { navigation }) {

  const [friendsList, setFriendsList] = useState([])

  const [imageSortie, setImageSortie] = useState(props.newSortie.image)
  const [nameSortie, setNameSortie] = useState(props.newSortie.nomSortie)
  const [adresseSortie, setAdresseSortie] = useState(props.newSortie.adresse)
  const [dateDebut, setDateDebut] = useState(props.newSortie.date_debut)
  const [dateFin, setDateFin] = useState('')
  const [dureeSortie, setDureeSortie] = useState(props.newSortie.duree)
  const [codePostalSortie, setCodePostalSortie] = useState('')
  const [typeSortie, setTypeSortie] = useState('')

  const [invitedFriendsList, setInvitedFriendsList] = useState([])

  const imageNouvelleSortie = () => {
    if (imageSortie == '') {
      setImageSortie('https://www.meetinggame.fr/reseau-de-loisirs/images/sorties/fete-sortie-entre-amis.jpg')
    }
  }

  useEffect(() => {
    const getFriendsList = async () => {
      const data = await fetch(`${urlLocal}/pullFriendsList`)
      const body = await data.json()
      setFriendsList(body)
      console.log(friendsList)
    };
    getFriendsList();
    imageNouvelleSortie();
  }, [])

  const ListeAmis = friendsList.map((x, i) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
        <View style={{ justifyContent: 'flex-end', marginLeft: 15 }}>
          <Icon
            name="add-circle"
            type='materialicons'
            size={35}
            color="#D70026"
            onPress={() => console.log("ajout ami à l'invitation")}
          />
        </View>
        <View style={{ marginHorizontal: 15 }}>
          <Avatar
            size='medium'
            rounded
            source={{
              uri: body.avatar
            }}
          />
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            {body.prenom} {body.nom}
          </Text>
        </View>
      </View>
    )
  })

  var createSortie = async () => {
    const data = await fetch(`${urlLocal}/addSortie`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `evenementLie=${props.idEvent}&organisateur=${props.idUser}&image=${imageSortie}&nomSortie=${nameSortie}&adresse=${adresseSortie}&date_debut=${dateDebut}&date_fin=${dateFin}&cp=${codePostalSortie}&type=${typeSortie}&duree=${dureeSortie}&participants=${invitedFriendsList}`
    })
    const body = await data.json()
    console.log(body)
    console.log(body.sortie)
    props.onAddIdSortie(body._id)
    // props.onAddIdSortie(body.sortie._id)
    props.navigation.navigate('PlanDetailScreen')
  }


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

              <View style={{ marginLeft: 10 }}>

                {imageSortie}

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