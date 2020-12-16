import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { Text, Image } from 'react-native-elements';

//Initialisation de Redux
import { connect } from 'react-redux';

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

  useEffect(() => {
    const getSortieDetails = async () => {
      const data = await fetch(`${urlLocal}/pullSortieDetaillee`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `id=${props.idSortie}`
      })
      const body = await data.json()
      setPlanDetailInfo(body);
    }
    getSortieDetails()
  }, [])

  const affichageAmisParticipants = planDetailInfo.listAmisSortie.map((x, i) => {
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
  })


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

            <View style={{ flex: 1, alignItems: 'center', width: 300, margin: 5 }}>
              <Image style={{ width: 150, height: 210, margin: 5 }} source={{ uri: planDetailInfo.sortie.image }} />
              <AntDesign
                name="heart"
                size={25}
                color='#D70026'
                style={{ position: 'absolute', top: 5, left: 270 }}
                onPress={() => console.log("LIKÉ")}
              />
              <Text style={{ textAlign: 'center', marginTop: 3, fontWeight: 'bold' }}>{planDetailInfo.sortie.nomSortie}</Text>

            </View>

            <View style={{ alignItems: 'center', width: 500, margin: 5 }}>
              <Text style={{ textAlign: 'center', marginTop: 3 }}>Type : {planDetailInfo.sortie.type}</Text>
            </View>

            <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
              <Text style={{ textAlign: 'center', marginTop: 3 }}>Adresse : {planDetailInfo.sortie.adresse}</Text>
            </View>

            <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
              <Text style={{ textAlign: 'center', marginTop: 3 }}>Code postal : {planDetailInfo.sortie.cp}</Text>
            </View>

            <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
              <Text style={{ textAlign: 'center', marginTop: 3 }}>Date début : {planDetailInfo.sortie.date_debut}</Text>
            </View>

            <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
              <Text style={{ textAlign: 'center', marginTop: 3 }}>Date fin : {planDetailInfo.sortie.date_fin}</Text>
            </View>

            {affichageAmisParticipants}

          </ImageBackground>

        </View>

      </ScrollView>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity

          onPress={() => navigation.navigate('PlanMainScreen')}
          
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