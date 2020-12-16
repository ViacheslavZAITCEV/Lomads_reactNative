import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { Text, Avatar, Image } from 'react-native-elements';

//Initialisation de Redux
import { connect } from 'react-redux';

import urlLocal from '../urlDevsGoWizMe'

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})

function PlanDetailScreen(props, { navigation }) {

  const imageBackground = { uri: "https://us.123rf.com/450wm/zephyr18/zephyr181509/zephyr18150900028/44975226-nature-abstraite-arri%C3%A8re-plan-flou-dans-un-ton-bleu-turquoise-avec-un-soleil-%C3%A9clatant-des-reflets-et-un-.jpg?ver=6" };

  const [planDetailInfo, setPlanDetailInfo] = useState({});

  // console.log(props.idSortie);

  useEffect(() => {
    const getSortieDetails = async () => {
      // console.log(props.idSortie);
      const data = await fetch(`${urlLocal}/pullSortieDetaillee`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `id=${props.idSortie}`
      })
      const body = await data.json()
      // console.log(body)
      setPlanDetailInfo(body);
    }
    getSortieDetails()
  }, [])

  console.log(planDetailInfo);

  var affichageAmisParticipants
  var functionAfficherAmisParticipants = () => {
    if (planDetailInfo.listAmisSortie != undefined) {
      affichageAmisParticipants = planDetailInfo.listAmisSortie.map((x, i) => {
        return (
          <View key={i} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <View style={{ justifyContent: 'flex-end', marginHorizontal: 15, marginLeft: 15 }}>
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
              <View style={{ flexDirection: 'row', alignItems: 'center', textAlign: 'left' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  {x.prenom} {x.nom}
                </Text>
              </View>
            </View>
          </View>
        )
      });
    } else {
      affichageAmisParticipants = <Text>Aucun participant pour cette sortie</Text>
    }
  }
  functionAfficherAmisParticipants();

  var affichageDetailsSortie
  var functionAfficherDetailsSortie = () => {
    if (planDetailInfo.sortie != undefined) {
      affichageDetailsSortie =
        <View>
          <View style={{ flex: 1, alignItems: 'center', width: 300, margin: 5 }}>
            <Image style={{ width: 150, height: 210, margin: 5 }} source={{ uri: planDetailInfo.sortie.image }} />

            <Text style={{ textAlign: 'center', marginTop: 3, fontWeight: 'bold' }}> {planDetailInfo.sortie.nomSortie} </Text>

          </View>

          <View style={{ alignItems: 'center', width: 500, margin: 5 }}>
            <Text style={{ textAlign: 'center', marginTop: 3 }}>Type : {(planDetailInfo && planDetailInfo.sortie.type) ? planDetailInfo.sortie.type : ''} </Text>
          </View>

          <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
            <Text style={{ textAlign: 'center', marginTop: 3 }}>Adresse : {(planDetailInfo && planDetailInfo.sortie.adresse) ? planDetailInfo.sortie.adresse : ''} </Text>
          </View>

          <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
            <Text style={{ textAlign: 'center', marginTop: 3 }}>Code postal : {(planDetailInfo && planDetailInfo.sortie.cp) ? planDetailInfo.sortie.cp : ''} </Text>
          </View>

          <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
            <Text style={{ textAlign: 'center', marginTop: 3 }}>Date début : {(planDetailInfo && planDetailInfo.sortie.date_debut) ? planDetailInfo.sortie.date_debut : ''} </Text>
          </View>

          <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
            <Text style={{ textAlign: 'center', marginTop: 3 }}>Date fin : {(planDetailInfo && planDetailInfo.sortie.date_fin) ? planDetailInfo.sortie.date_fin : ''} </Text>
          </View>
        </View>
    } else {
      affichageDetailsSortie = <Text>Chargement</Text>
    }
  }
  functionAfficherDetailsSortie();


  return (
    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#E55039' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
          DETAILS DE LA SORTIE
        </Text>
      </View>

      <ScrollView style={{ flexDirection: 'column', marginBottom: 40 }}>

        <View style={{ flex: 1, alignItems: 'center' }}>

          <ImageBackground source={imageBackground} style={styles.imageBackground}>

            {affichageDetailsSortie}

            {affichageAmisParticipants}

          </ImageBackground>

        </View>

      </ScrollView>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity

          onPress={() => props.navigation.navigate('PlanMainScreen')}

          style={{
            width: '100%', height: 40, backgroundColor: '#D70026',
            alignItems: 'center', justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Ne plus participer à cette sortie</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

function mapStateToProps(state) {
  return {
    idUser: state.idUserReducer,
    token: state.tokenReducer,
    user: state.userReduceur,
    idSortie: state.idSortieReducer,
    currentCity: state.currentCityReducer
  }
}

export default connect(
  mapStateToProps,
  null
)(PlanDetailScreen);