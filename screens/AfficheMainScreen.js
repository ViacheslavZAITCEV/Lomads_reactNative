import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground
} from 'react-native';
import {
  Text,
  Input,
  Button,
  Card,
  Badge,
  BottomSheet,
  ListItem,
  CheckBox
} from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import DropdownButton from 'react-bootstrap/DropdownButton'
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
})


//! ICONE HEART -> OK mais a voir avec EMMA


//! DEMANDER COMMENT FAIRE UN TAB INVERSE

//? TODO: 
//? -> Bouton filtre en dropdown
//? -> Icone coeur -> CLICK -> change couleur


function AfficheMainScreen(props) {


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

  const [eventsList, setEventsList] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetch(`http://192.168.0.14:3000/pullEvents`)
      const body = await data.json()
      setEventsList(body)
    }
    const getUser = ()=>{
      setUser(props.token);
    }
    getEvents();
    getUser();
  }, [user])

  let tokenOK = () => {
    if (props.token) {
      console.log("TOKEN", props.token)
      props.navigation.navigate('AfficheSpecialScreen')
    } else {
      console.log('token qbsent')
      props.navigation.navigate('AfficheSpecialScreen')
    }
  }

  var cine = eventsList.map(x => {
    if (x.type === 'film') {
      console.log('id evene,ent', x._id)
      return (

        <Card
          containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }}>
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => {
              console.log(">>>>>>>>>>>>>>>>>>>>>>IMAGE CINEMA");
              props.onAddIdEvent(x._id);
              tokenOK();
            }}
          />
          <AntDesign
            name="heart"
            size={25}
            color='#D70026'
            style={{ position: 'absolute', top: 5, left: 140 }}
            onPress={() => console.log("LIKÉ")}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 5 }}>{x.nom}</Text>
          <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text>
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value={x.categories[0]} />
          </View>
        </Card>
      )
    }
  })

  var theatre = eventsList.map(x => {
    if (x.type === 'théâtre') {
      return (

        <Card containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }} >
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => console.log(">>>>>>>>>>>>>>>>>>>>>>CARD THEATRE")}
          />
          <AntDesign
            name="heart"
            size={25}
            color='#D70026'
            style={{ position: 'absolute', top: 5, left: 140 }}
            onPress={() => console.log("LIKÉ")}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 1 }}>{x.nom}</Text>
          <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text>
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value={x.categories[0]} />
          </View>
        </Card>
      )
    }
  })

  var expos = eventsList.map(x => {
    if (x.type === 'exposition') {
      return (

        <Card containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }} >
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => console.log(">>>>>>>>>>>>>>>>>>>>>>CARD EXPOS")}
          />
          <AntDesign
            name="heart"
            size={25}
            color='#D70026'
            style={{ position: 'absolute', top: 5, left: 140 }}
            onPress={() => console.log("LIKÉ")}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 1 }}>{x.nom}</Text>
          <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text>
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value={x.categories[0]} />
          </View>
        </Card>
      )
    }
  })

  var concert = eventsList.map(x => {
    if (x.type === 'concert') {
      return (

        <Card containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }} >
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => console.log(">>>>>>>>>>>>>>>>>>>>>>CARD CONCERT")}
          />
          <AntDesign
            name="heart"
            size={25}
            color='#D70026'
            style={{ position: 'absolute', top: 5, left: 140 }}
            onPress={() => console.log("LIKÉ")}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 1 }}>{x.nom}</Text>
          <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text>
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value={x.categories[0]} />
          </View>
        </Card>
      )
    }
  })

  return (
    <View style={{ flex: 1 }}>

      <ImageBackground source={imageBackground} style={styles.imageBackground}>

        <View style={{ flexDirection: 'row', width: 300, cover: 'width', marginTop: 5, }}>
          <Input
            placeholder="CHERCHER"
            inputStyle={{ borderWidth: 1, borderColor: 'grey', backgroundColor: 'white' }}
          />
          <Button
            type='outline'
            title="Filtres"
            buttonStyle={{ backgroundColor: "#EFB509" }}
            titleStyle={{ color: 'white' }}
            onPress={() => console.log("filtres ok")}
          />

        </View>

        <ScrollView style={{ flex: 2 }}>

          <Text style={{ fontSize: 22, flexDirection: 'row', margin: 7, fontWeight: 'bold' }} onPress={() => { console.log("OnPress CINEMA OK") }}>CINEMA</Text>

          <View style={{ backgroundColor: '#16253D', paddingBottom: 15 }}>
            <ScrollView horizontal={true}>

              {cine}

            </ScrollView>
          </View>

          <Text style={{ fontSize: 22, flexDirection: 'row', margin: 7, fontWeight: 'bold' }} onPress={() => { console.log("OnPress THÉÂTRE OK") }}>THÉÂTRE
          </Text>
          <View style={{ flexDirection: 'row', width: 300, cover: 'width', marginTop: 5, paddingBottom: 0 }}>
            <Input
              placeholder="CHERCHER"
              inputStyle={{ borderWidth: 1, borderColor: 'grey', backgroundColor: 'white' }}
            />
            <Button
              type='outline'
              title="Filtres"
              buttonStyle={{ backgroundColor: "#D70026" }}
              titleStyle={{ color: 'white' }}
              onPress={() => console.log("filtres ok", setIsVisible(true))}
            />
          </View>

          <BottomSheet isVisible={isVisible}>
            {FilterList.map((l, i) => (
              <ListItem key={i} containerStyle={{ maxHeight: "100%" }} onPress={l.onPress}>
                <ListItem.Content>
                  <ListItem.Title style={{ fontWeight: 'bold' }} onPress={() => console.log(l.title)}>{l.title}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </BottomSheet>

          <ScrollView style={{ flex: 2 }}>

            <Text
              style={{
                fontSize: 22,
                margin: 7,
                fontWeight: 'bold'
              }}
              onPress={() => { console.log("OnPress CINEMA OK") }}>
              CINEMA
            </Text>

            <View style={{ backgroundColor: '#3C6382', paddingBottom: 15 }}>
              <ScrollView horizontal={true}>

                {cine}

              </ScrollView>
            </View>

            <View style={{ backgroundColor: 'red', paddingBottom: 15 }}>
              <ScrollView horizontal={true}>

                {theatre}

              </ScrollView>
            </View>

            <Text style={{ fontSize: 22, flexDirection: 'row', margin: 7, fontWeight: 'bold' }} onPress={() => { console.log("OnPress THÉÂTRE OK") }}>EXPOSITIONS & MUSÉES</Text>

            <View style={{ backgroundColor: 'orange', paddingBottom: 15 }}>
              <ScrollView horizontal={true}>

                {expos}

              </ScrollView>
            </View>

            <Text style={{ fontSize: 22, flexDirection: 'row', margin: 7, fontWeight: 'bold' }} onPress={() => { console.log("OnPress THÉÂTRE OK") }}>CONCERTS
            </Text>

            <View style={{ backgroundColor: 'purple', paddingBottom: 15 }}>
              <ScrollView horizontal={true}>

                {concert}

              </ScrollView>
            </View>
            <Text
              style={{
                fontSize: 22,
                margin: 7,
                fontWeight: 'bold'
              }}
              onPress={() => { console.log("OnPress THÉÂTRE OK") }}>
              THÉÂTRE
            </Text>

            <View style={{ backgroundColor: '#E55039', paddingBottom: 15 }}>
              <ScrollView horizontal={true}>

                {theatre}

              </ScrollView>
            </View>

            <Text
              style={{
                fontSize: 22,
                margin: 7,
                fontWeight: 'bold'
              }}
              onPress={() => { console.log("OnPress THÉÂTRE OK") }}>
              EXPOSITIONS & MUSÉES
            </Text>

            <View style={{ backgroundColor: '#F6E58D', paddingBottom: 15 }}>
              <ScrollView horizontal={true}>
                {expos}
              </ScrollView>
            </View>

            <Text
              style={{
                fontSize: 22,
                margin: 7,
                fontWeight: 'bold'
              }}
              onPress={() => { console.log("OnPress THÉÂTRE OK") }}>
              CONCERTS
            </Text>

            <View style={{ backgroundColor: '#3C6382', paddingBottom: 15 }}>
              <ScrollView horizontal={true}>
                {concert}
              </ScrollView>
            </View>

          </ScrollView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return {
            onAddIdEvent: function (idEvent) {
            dispatch({ type: 'addIdEvent', idEvent: idEvent })
          }
  }
}

function mapStateToProps(state) {
  return {token: state.token}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AfficheMainScreen);