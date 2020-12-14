import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button, Input, BottomSheet, ListItem, Card } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

//Initialisation de Redux
import { connect } from 'react-redux';

import urlLocal from '../urlDevsGoWizMe'

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
})

function PlanMainScreen(props, { navigation }) {

  useEffect(() => {
    const getIdUser = async () => {
      const data = await fetch(`${urlLocal}/pullUser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `id=${props.idUser}`
      })
      const body = await data.json()
      console.log(body)
      console.log(body.mesSorties)
      console.log(body.mesLikes)
      console.log(body.sortiesAffichees)
      console.log(body.LikesDesAmis)
    }
    getIdUser()
  }, [])

  const imageBackground = { uri: "https://us.123rf.com/450wm/zephyr18/zephyr181509/zephyr18150900028/44975226-nature-abstraite-arri%C3%A8re-plan-flou-dans-un-ton-bleu-turquoise-avec-un-soleil-%C3%A9clatant-des-reflets-et-un-.jpg?ver=6" };

  const [isVisible, setIsVisible] = useState(false);
  const FilterList = [
    { title: 'CINEMA' },
    { title: 'THÉÂTRE' },
    { title: 'EXPOS' },
    { title: 'CONCERT' },
    {
      title: 'Annuler',
      containerStyle: { backgroundColor: 'D70026' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  var SortiesDuUser = body.mesSorties.map((x, i) => {
    return (
      <Card containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '90%', backgroundColor: '#F8F5F2' }} >
        <Card.Image
          style={{ width: 85, height: 115 }}
          source={{ uri: x.image }}
          resizeMode="cover"
          onPress={() => {
            props.onAddIdSortie(x._id);
            navigation.navigate('PlanDetailScreen')}
          }
        />
        <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 1, margin: 1, marginLeft: "10%" }}>{x.nomSortie}</Text>
      </Card>
    )
  })

  var FavorisDuUser = body.mesLikes.map((x, i) => {
    return (
      <Card containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '90%', backgroundColor: '#F8F5F2' }} >
        <Card.Image
          style={{ width: 85, height: 115 }}
          source={{ uri: x.image }}
          resizeMode="cover"
          onPress={() => {
              props.onAddIdEvent(x._id);
              navigation.navigate('AfficheSpecialScreen')}
            }
        />
        <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 1, margin: 1, marginLeft: "10%" }}>{x.nom}</Text>
      </Card>
    )
  })

  var FavorisDesAmis = body.LikesDesAmis.map((x, i) => {
    return (
      <Card containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '90%', backgroundColor: '#F8F5F2' }} >
        <Card.Image
          style={{ width: 85, height: 115 }}
          source={{ uri: x.image }}
          resizeMode="cover"
          onPress={() => {
            props.onAddIdEvent(x._id);
            navigation.navigate('AfficheSpecialScreen')}
          }
        />
        <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 1, margin: 1, marginLeft: "10%" }}>{x.nom}</Text>
      </Card>
    )
  })

  var SortiesDesAmis = body.sortiesAffichees.map((x, i) => {
    return (
      <Card containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '90%', backgroundColor: '#F8F5F2' }} >
        <Card.Image
          style={{ width: 85, height: 115 }}
          source={{ uri: x.image }}
          resizeMode="cover"
          onPress={() => {
            props.onAddIdSortie(x._id);
            navigation.navigate('PlanDetailScreen')}
          }
        />
        <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 1, margin: 1, marginLeft: "10%" }}>{x.nomSortie}</Text>
      </Card>
    )
  })

  return (
    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#E55039' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
          MES OPTIONS DE SORTIES
        </Text>
      </View>

      <ImageBackground source={imageBackground} style={styles.imageBackground}>

        <ScrollView style={{ flex: 2 }}>

          {/* ====================================================================================
                                        MES SORTIES PLANIFIEES
          ==================================================================================== */}

          <Text style={{ fontSize: 22, margin: 7, fontWeight: 'bold' }} >
            MES SORTIES PLANIFIÉES
          </Text>

          <View style={{ backgroundColor: '#3C6382', paddingBottom: 15 }}>
            <ScrollView horizontal={true}>

              {SortiesDuUser}

            </ScrollView>
          </View>

          {/* ====================================================================================
                                        INVITATIONS RECUES
          ==================================================================================== */}

          {/* <Text style={{ fontSize: 22, margin: 7, fontWeight: 'bold' }}>
            INVITATIONS RECUES
          </Text>

          <View style={{ backgroundColor: '#F6E58D', paddingBottom: 25 }}>
            <ScrollView horizontal={true}>

              <Card containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '100%', backgroundColor: '#F8F5F2' }} >
                <Card.Image
                  style={{ width: 85, height: 115 }}
                  source={{ uri: "https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" }}
                  resizeMode="cover"
                  onPress={() => navigation.navigate('PlanInvitationScreen')
                  }
                />
                <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', maxWidth: "80%", padding: 1, margin: 1, marginLeft: "10%" }}>TENET</Text>
              </Card>

            </ScrollView>
          </View> */}


          {/* ====================================================================================
                                              MES FAVORIS
          ==================================================================================== */}

          <Text style={{ fontSize: 22, margin: 7, fontWeight: 'bold' }} >
            MES FAVORIS
          </Text>

          <View style={{ backgroundColor: '#E55039', paddingBottom: 25 }}>
            <ScrollView horizontal={true}>

            {FavorisDuUser}

            </ScrollView>
          </View>

          {/* ====================================================================================
                                        FAVORIS DE MES AMIS
          ==================================================================================== */}

          <Text style={{ fontSize: 22, margin: 7, fontWeight: 'bold' }} >
            FAVORIS DE MES AMIS
          </Text>

          <View style={{ backgroundColor: '#3C6382', paddingBottom: 25 }}>
            <ScrollView horizontal={true}>

              {FavorisDesAmis}

            </ScrollView>
          </View>

          {/* ====================================================================================
                                        ME JOINDRE A MES AMIS
          ==================================================================================== */}

          <Text style={{ fontSize: 22, margin: 7, fontWeight: 'bold' }} >
            LES SORTIES DE MES AMIS
          </Text>

          <View style={{ backgroundColor: '#F6E58D', paddingBottom: 25 }}>
            <ScrollView horizontal={true}>

              {SortiesDesAmis}

            </ScrollView>
          </View>

        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onAddIdEvent: function (idEvent) {
      dispatch({ type: 'addIdEvent', idEvent: idEvent });
    },
    onAddIdSortie: function (idSortie) {
      dispatch({ type: 'addIdSortie', idSortie: idSortie });
    }
  }
}

function mapStateToProps(state) {
  return {
    idUser: state.idUserReducer,
    token: state.tokenReducer,
    user: state.userReduceur,
    currentCity: state.currentCityReducer
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanMainScreen);