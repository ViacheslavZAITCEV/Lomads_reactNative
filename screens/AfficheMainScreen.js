import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  AsyncStorage
} from 'react-native';
import {
  Text,
  Input,
  Button,
  Card,
  Badge,
  BottomSheet,
  ListItem,
} from 'react-native-elements';

import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import CinemaCard from './component/cardEvenement'

import urlLocal from '../urlDevsGoWizMe'

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
})


function AfficheMainScreen(props) {

  const imageBackground = { uri: "https://us.123rf.com/450wm/zephyr18/zephyr181509/zephyr18150900028/44975226-nature-abstraite-arri%C3%A8re-plan-flou-dans-un-ton-bleu-turquoise-avec-un-soleil-%C3%A9clatant-des-reflets-et-un-.jpg?ver=6" };

  const [isVisible, setIsVisible] = useState(false);

  const [currentCity, setCurrentCity] = useState('');

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

  useEffect(() => {
    async function askPermissions() {
      var { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        
        Location.watchPositionAsync({distanceInterval: 10},
          (location) => {
            console.log("DATA GPS>>>>>>>",location);
          }
        );
      }
    }
    askPermissions();
  }, []);

  const [eventsList, setEventsList] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState (props.token);


  useEffect(() => {
    const getEvents = async () => {
      const data = await fetch(`${urlLocal}/pullEvents`)
      // const data = await fetch(`http://172.17.1.111:3000/pullEvents`)
    //   const data = await fetch(`http://192.168.1.17:3000/pullEvents`)
      const body = await data.json()
      setEventsList(body)
    }
    getEvents()
  }, [])

  useEffect(() => {
    const getUserfromStorage = async () => {

        var tokenStorageRAW;
        await AsyncStorage.getItem('user', async function (error, data){
            console.log('Read from Storage: user=', data);
            console.log('Read from Storage: error=', error);
            if (data){
                tokenStorageRAW = data.json();
            }
        });

        setToken(tokenStorageRAW);
    }
    getUserfromStorage ();
  },[])

  useEffect(() => {
    const updateUser = async () => {
        if(props.token){

        const userBD = await fetch(`${urlLocal}/users/getUser`, {
        // const userBD = await fetch('http://172.17.1.111:3000/users/getUser', {
        // const userBD = await fetch('http://192.168.1.98:3000/users/getUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `token=${props.token}`
        })
        const body = await userBD.json();
        console.log('AfficheMainScreen, updateUser(), user = ', body);
        setUser(body);
        setCurrentCity(body.ville);
        }
    }
    updateUser ();
  },[props.token])




  console.log('AfficheMainScreen, token = ', props.token);
  console.log('AfficheMainScreen, props.id = ', props.idUser);
  console.log('AfficheMainScreen, user = ', user);


  let tokenOK = () => {
    if (props.token) {
      console.log("TOKEN", props.token)
      props.navigation.navigate('AfficheSpecialScreen')
    } else {
      console.log('token absent')
      props.navigation.navigate('AfficheSpecialScreen')
    }
  }

  //likes
  async function likeEvent(event){
    if (user  === null){
      props.navigation.navigate('SignInScreen');
    }
    console.log("LIKÉ event", event._id);
    // console.log("user", user);
    console.log("user.id", user._id);

    var responseBE;
    if ( isUserLikedEvent(user._id, event.popularite)){
      event.popularite.splice(user._id, 1);
      responseBE = await fetch(`${urlLocal}/unlikeEvent?idEvent=${event._id}&idUser=${user._id}`);
    }else{
      event.popularite.unshift(user._id);
      responseBE = await fetch(`${urlLocal}/likeEvent?idEvent=${event._id}&idUser=${user._id}`);
    }
    console.log(responseBE);
  }


  function isUserLikedEvent (u, popularite){
    var i=0;
    var result = false;

    while ( !result && i<popularite.length){
      if (u == popularite[i]){
        result = true;
      }
      i++;
    }
    return result;
  }




  var cine = eventsList.map((x,i) => {
    
    // const [likeEventState,setLikeEventState ] = useState ((user && isUserLikedEvent(user._id, x.popularite) ) ? '#D70026' : '#FFFFFF');
    function likeEventComponent(x){
      // setLikeEventState( ! likeEventState );
      likeEvent(x);
    }
    
    if (x.type === 'film') {
      console.log("CINE>>>>>",x._id)
      return (
        // <View
        <CinemaCard key={i}
        i={i}
        x={x}
        user={user}
        onPress={() => {
          console.log(">>>>>>>>>>>>>>>>>>>>>>IMAGE CINEMA", props.x._id);
          props.onAddIdEvent(props.x._id);
          tokenOK();
        }}    
        />

        // <Card key={i}
        //   containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }}>
        //   <Card.Image
        //     style={{ width: 170, height: 230 }}
        //     source={{ uri: x.image }}
        //     resizeMode="cover"
        //     onPress={() => {
        //       console.log(">>>>>>>>>>>>>>>>>>>>>>IMAGE CINEMA", x._id);
        //       props.onAddIdEvent(x._id);
        //       tokenOK();
        //     }}
        //   />
        //   <AntDesign
          
            
        //     name="heart"
        //     size={25}
        //     style={{ position: 'absolute', top: 5, left: 140 }}
        //     // color={ likeEventState } 
        //     color={ (user && isUserLikedEvent(user._id, x.popularite) ) ? '#D70026' : '#FFFFFF' } 
        //     onPress={() => likeEventComponent(x)}
        //   />
        //   <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 5 }}>{x.nom}</Text>
        //   <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text>
        //   <View style={{ alignItems: 'center', margin: 2 }}>
        //     <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value={x.categories[0]} />
        //   </View>
        // </Card>
      )
    }
  })

  var theatre = eventsList.map((x,i) => {
    if (x.type === 'théâtre') {
      console.log("THEATRE>>>>>",x._id)
      return (

        <Card key={i} containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }} >
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => {
              console.log(">>>>>>>>>>>>>>>>>>>>>>IMAGE THEATRE");
              props.onAddIdEvent(x._id);
              tokenOK();
            }}          
          />
          <AntDesign
            name="heart"
            size={25}
            style={{ position: 'absolute', top: 5, left: 140 }}
            color={ (user && isUserLikedEvent(user._id, x.popularite) ) ? '#D70026' : '#FFFFFF' } 
            onPress={() => likeEvent(x)}
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

  var expos = eventsList.map((x,i) => {
    if (x.type === 'exposition') {
      console.log("EXPOS>>>>>",x._id)
      return (

        <Card  key={i} containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }} >
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => {
              console.log(">>>>>>>>>>>>>>>>>>>>>>IMAGE EXPOS");
              props.onAddIdEvent(x._id);
              tokenOK();
            }}          
          />
          <AntDesign
            name="heart"
            size={25}
            style={{ position: 'absolute', top: 5, left: 140 }}
            color={ (user && isUserLikedEvent(user._id, x.popularite) ) ? '#D70026' : '#FFFFFF' } 
            onPress={() => likeEvent(x)}
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

  var concert = eventsList.map((x,i) => {
    if (x.type === 'concert') {
      console.log("CONCERT>>>>>",x._id)
      return (

        <Card  key={i} containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }} >
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => {
              console.log(">>>>>>>>>>>>>>>>>>>>>>IMAGE CONCERT");
              props.onAddIdEvent(x._id);
              tokenOK();
            }}          
          />
          <AntDesign
            name="heart"
            size={25}
            style={{ position: 'absolute', top: 5, left: 140 }}
            color={ (user && isUserLikedEvent(user._id, x.popularite) ) ? '#D70026' : '#FFFFFF' } 
            onPress={() => likeEvent(x)}
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

      <View style={{ flexDirection: 'row', width: 300, cover: 'width', marginTop: 5, paddingBottom: 0, marginBottom:0 }}>
            <Input
              placeholder="CHERCHER"
              inputStyle={{ borderWidth: 1, borderColor: 'grey', backgroundColor: 'white', marginBottom:0 }}
            />
            <Button
              type='outline'
              title="Filtres"
              buttonStyle={{ backgroundColor: "#D70026", marginBottom:0 }}
              titleStyle={{ color: 'white' }}
              onPress={() => {
                console.log(">>>>>>>>>>>>>>>>>>>>>>IMAGE CINEMA");
                props.onAddIdEvent(x._id);
                tokenOK();
              }}            
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
              onPress={() => { console.log("OnPress EXPOS OK") }}>
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
              onPress={() => { console.log("OnPress CONCERTS OK") }}>
              CONCERT
            </Text>

              <View style={{ backgroundColor: '#3C6382', paddingBottom: 15 }}>
                <ScrollView horizontal={true}>
                  {concert}
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
            // onAddCurrentCity: function async (currentCity) {
            //   despatch({ type: 'addCurrentCity', currentCity: currentCity})
            // }
          }
  }
}

function mapStateToProps(state) {
  return { 
    token: state.tokenReducer,
    user : state.userReduceur,
    currentCity: state.currentCityReducer
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AfficheMainScreen);