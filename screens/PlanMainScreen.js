import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Text, Button, Input, BottomSheet, ListItem, Card } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
})

export default function PlanMainScreen({ navigation }) {

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

  return (
    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#E55039' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
          PLANIFIER MES SORTIES
        </Text>
      </View>

      <ImageBackground source={imageBackground} style={styles.imageBackground}>

        <ScrollView style={{ flex: 2 }}>

          <Text style={{ fontSize: 22, margin: 7, fontWeight: 'bold' }}>
            INVITATIONS RECUES
          </Text>

          <View style={{ backgroundColor: '#3C6382', paddingBottom: 25 }}>
            <ScrollView horizontal={true}>

              <Card containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '100%', backgroundColor: '#F8F5F2' }} >
                <Card.Image
                  style={{ width: 85, height: 115 }}
                  source={{ uri: "https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" }}
                  resizeMode="cover"
                  onPress={() => navigation.navigate('PlanInvitationScreen')
                  }
                />
                <Text style={{ textAlign: 'center', fontSize: 15,fontWeight: 'bold', maxWidth: "80%", padding: 1, margin: 1, marginLeft: "10%" }}>TENET</Text>
              </Card>

            </ScrollView>
          </View>

          <Text style={{ fontSize: 22, margin: 7, fontWeight: 'bold' }} >
            MES FAVORIS
            </Text>
          <View style={{ backgroundColor: '#F6E58D', paddingBottom: 25 }}>
            <ScrollView horizontal={true}>
              <Card containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '90%', backgroundColor: '#F8F5F2' }} >
                <Card.Image
                  style={{ width: 170, height: 230 }}
                  source={{ uri: "https://fr.web.img2.acsta.net/medias/nmedia/18/62/89/48/18708437.jpg" }}
                  resizeMode="cover"
                  onPress={() => {
                    console.log(">>>>>>>>>>>>>>>>>>>>>>AFFICHE");
                  }}
                />
                <AntDesign
                  name="heart"
                  size={25}
                  color='#D70026'
                  style={{ position: 'absolute', top: 5, left: 140 }}
                  onPress={() => console.log("LIKÉ")}
                />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 1, margin: 1, marginLeft: "10%" }}>À LA RECHERCHE DU BONHEUR</Text>
              </Card>
            </ScrollView>
          </View>


          <Text style={{ fontSize: 22, margin: 7, fontWeight: 'bold' }} >
            MES SORTIES PLANNIFIÉES
            </Text>
          <View style={{ backgroundColor: '#E55039', paddingBottom: 15 }}>
            <ScrollView horizontal={true}>
              <Card containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '90%', backgroundColor: '#F8F5F2' }} >
                <Card.Image
                  style={{ width: 170, height: 230 }}
                  source={{ uri: "https://img-4.linternaute.com/bP9KkO-A0XlmVkNuDafaeRXE4Ww=/1240x/39cc6a34b26041f9b7c79fdf4829e7bd/ccmcms-linternaute/37498.jpg" }}
                  resizeMode="cover"
                  onPress={() => {
                    console.log(">>>>>>>>>>>>>>>>>>>>>>AFFICHE");
                  }}
                />
                <AntDesign
                  name="heart"
                  size={25}
                  color='#D70026'
                  style={{ position: 'absolute', top: 5, left: 140 }}
                  onPress={() => console.log("LIKÉ")}
                />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 1, margin: 1, marginLeft: "10%" }}>PYJAMA PARTY ENTRE GIRLS</Text>
                <Text style={{ textAlign: 'center', maxWidth: "80%", padding: 1, margin: 1, marginLeft: "10%" }}>8 participants</Text>
              </Card>
            </ScrollView>
          </View>

          <Text style={{ fontSize: 22, margin: 7, fontWeight: 'bold' }} >
            FAVORIS DES MES AMIS
            </Text>
          <View style={{ backgroundColor: '#F6E58D', paddingBottom: 25 }}>
            <ScrollView horizontal={true}>
              <Card containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '90%', backgroundColor: '#F8F5F2' }} >
                <Card.Image
                  style={{ width: 170, height: 230 }}
                  source={{ uri: "https://fr.web.img2.acsta.net/medias/nmedia/18/62/89/48/18708437.jpg" }}
                  resizeMode="cover"
                  onPress={() => {
                    console.log(">>>>>>>>>>>>>>>>>>>>>>AFFICHE");
                  }}
                />
                <AntDesign
                  name="heart"
                  size={25}
                  color='#D70026'
                  style={{ position: 'absolute', top: 5, left: 140 }}
                  onPress={() => console.log("LIKÉ")}
                />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 1, margin: 1, marginLeft: "10%" }}>À LA RECHERCHE DU BONHEUR</Text>
              </Card>
            </ScrollView>
          </View>

          <Text style={{ fontSize: 22, margin: 7, fontWeight: 'bold' }} >
            PLANNIFIÉES PAR MES AMIS
            </Text>
          <View style={{ backgroundColor: '#3C6382', paddingBottom: 25 }}>
            <ScrollView horizontal={true}>
              <Card containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '90%', backgroundColor: '#F8F5F2' }} >
                <Card.Image
                  style={{ width: 170, height: 230 }}
                  source={{ uri: "https://files.offi.fr/programmation/956706/images/200/2be53cdeef1450da1b5a9fb3e259b97c.jpg" }}
                  resizeMode="cover"
                  onPress={() => {
                    console.log(">>>>>>>>>>>>>>>>>>>>>>AFFICHE");
                  }}
                />
                <AntDesign
                  name="heart"
                  size={25}
                  color='#D70026'
                  style={{ position: 'absolute', top: 5, left: 140 }}
                  onPress={() => console.log("LIKÉ")}
                />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 1, margin: 1, marginLeft: "10%" }}>SORTIE au théâtre entre amis</Text>
                <Text style={{ textAlign: 'center', maxWidth: "80%", padding: 1, margin: 1, marginLeft: "10%" }}>2 participants</Text>
              </Card>
            </ScrollView>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Button title="Go to PlanInvitationScreen"
              onPress={() => navigation.navigate('PlanInvitationScreen')}
            />
            <Button title="Go to PlanDetailScreen"
              onPress={() => navigation.navigate('PlanDetailScreen')}
            />
            <Button title="Go to PlanOrgaScreen"
              onPress={() => navigation.navigate('PlanOrgaScreen')}
            />
          </View>

        </ScrollView>
      </ImageBackground>
    </View>
  );
}