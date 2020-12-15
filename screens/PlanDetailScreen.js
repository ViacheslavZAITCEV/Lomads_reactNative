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

  useEffect(() => {
    const getSortieDetails = async () => {
      const data = await fetch(`${urlLocal}/pullSortieDetaillee`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `id=${props.idSortie}`
      })
      const body = await data.json()
      console.log(body)
      console.log(body.sorties)
      console.log(body.listAmisSortie)
    }
    getSortieDetails()
  }, [])


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
              <Image style={{ width: 150, height: 210, margin: 5 }} source={{ uri: evenement.image }} />
              <AntDesign
                name="heart"
                size={25}
                color='#D70026'
                style={{ position: 'absolute', top: 5, left: 270 }}
                onPress={() => console.log("LIKÉ")}
              />
              <Text style={{ textAlign: 'center', marginTop: 3, fontWeight: 'bold' }}>{evenement.nom}</Text>


            </View>
            <View style={{ alignItems: 'center', width: 300, margin: 5 }}>
              <Text style={{ textAlign: 'center', marginTop: 3 }}>{evenement.description}</Text>

            </View>

            <View style={{ alignItems: 'center', width: 500, margin: 5 }}>
              <Text style={{ textAlign: 'center', marginTop: 3 }}>Type : {evenement.type}</Text>

            </View>

            <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
              <Text style={{ textAlign: 'center', marginTop: 3 }}>Catégories : </Text>

            </View>

            <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
              <Text style={{ textAlign: 'center', marginTop: 3 }}>Durée :  minutes</Text>

            </View>

            <View style={{ alignItems: 'center', width: 150, margin: 5 }}>

              <Picker
                selectedValue={lieuTransit}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectLieuEvenement({ itemValue })
                }>
                <Picker.Item label='Lieu(x)' value='Lieux' />
                {lieux}
              </Picker>
            </View>
            <View style={{ alignItems: 'center', width: 150, margin: 5 }}>

              <Picker
                onPress={() => { horaires() }}
                selectedValue={horaireTransit}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectDateEvenement({ itemValue })
                }>
                <Picker.Item label='Date(s) et horaire(s)' value='2020-12-24T00:00:00.000Z' />
                {dates}
              </Picker>
            </View>

            <View style={{ alignItems: 'center', width: 200, margin: 5 }}>
              <Text style={{ textAlign: 'center', marginTop: 3 }}>Votre choix de lieu : </Text>
              <Text style={{ textAlign: 'center', marginTop: 3, fontWeight: 'bold', color: "#16253D" }}>{selectLieuEvenement.itemValue}</Text>
              <Text style={{ textAlign: 'center', marginTop: 8 }}>Votre choix de séance : </Text>
              <Text style={{ textAlign: 'center', marginTop: 3, fontWeight: 'bold', color: "#16253D" }}>{selectDateEvenement.itemValue}</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center', width: 200, margin: 5 }}>
              <Button
                type='outline'
                title="Créer une sortie"
                buttonStyle={{ backgroundColor: "#D70026", marginBottom: 0, width: 150, margin: 5 }}
                titleStyle={{ color: 'white' }}
                onPress={() => {
                  console.log(">>>>>>>>>>>>>>>>>>>>>>SORTIE");

                }}
              />
              <Button
                type='outline'
                title="Réserver"
                buttonStyle={{ backgroundColor: "#D70026", marginBottom: 0, width: 150, margin: 5 }}
                titleStyle={{ color: 'white' }}
                onPress={() => {
                  console.log(">>>>>>>>>>>>>>>>>>>>>>Reserver");

                }}
              />

            </View>

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