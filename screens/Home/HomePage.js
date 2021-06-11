import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
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

import { connect } from 'react-redux';

// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';

import Heart from './components/cardEvenement'

import urlLocal from '../../urlDevs'

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
})


function HomePage(props) {

  const imageBackground = { uri: "https://us.123rf.com/450wm/zephyr18/zephyr181509/zephyr18150900028/44975226-nature-abstraite-arri%C3%A8re-plan-flou-dans-un-ton-bleu-turquoise-avec-un-soleil-%C3%A9clatant-des-reflets-et-un-.jpg?ver=6" };

  const [eventsList, setEventsList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [user, setUser] = useState(null);



  useEffect(() => {
    const getEvents = async () => {
      try{
        const data = await fetch(`${urlLocal}/pullEvents`)
        const body = await data.json()
        setEventsList(body)
      }catch(e){
         console.log(e)
      }
    }
      getEvents()
  }, [])

    useEffect(() => {
      const getUsers = async () => {
      try{
        const data = await fetch(`${urlLocal}/users/pullUsers`)
        const body = await data.json()
        setUsersList(body.users)
        // console.log('users=', body)
      }catch(e){
         console.log(e)
      }
    }
    getUsers()
  }, [])


  useEffect(() => {
    const updateUser = async () => {
        if(props.token){

        const userBD = await fetch(`${urlLocal}/users/getUser`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `token=${props.token}`
        })
        const body = await userBD.json();
        // console.log('AfficheMainScreen, updateUser(), user = ', body);
        setUser(body);
        props.onAddIdUser(body._id);
        setCurrentCity(body.ville);
        }else{
          setUser(null)
        }
    }
    updateUser ();
  },[props.token])

  // console.log('AfficheMainScreen, props.id = ', props.idUser);
  // console.log('AfficheMainScreen, user = ', user);
  // console.log('AfficheMainScreen, token = ', token);


  let tokenOK = () => {
    if (props.token) {
      // console.log("TOKEN:", props.token)
      props.navigation.navigate('AfficheSpecialScreen')
    } else {
      // console.log('token absent: user not connected')
      // props.navigation.navigate('AfficheSpecialScreen')
      props.navigation.navigate('SignInScreen')
    }
  }

  var events = eventsList.map((event,i) => {
    
      return (
        <Card
        key={i}
        containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }}>
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: event.image }}
            resizeMode="cover"
            onPress={() => {
              props.onAddIdEvent(event._id);
              tokenOK();
            }}
          />
          

          <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 5, textTransform: 'uppercase' }}>{event.nom}</Text>
          {/* <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text> */}
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value={event.categories[0]} />
          </View>
        </Card>
      )
  })

  var users = usersList.map((userMap, i) => {
      return (
        <Card key={i} containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }} >
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: userMap.avatar }}
            resizeMode="cover"
            onPress={() => {
              props.onAddIdEvent(userMap._id);
              tokenOK();
            }}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 1, textTransform: 'uppercase' }}>{userMap.nom}</Text>
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value={userMap.nom} />
          </View>
        </Card>
      )
  })

  return (
    <View style={{ flex: 1 }}>

      <ImageBackground source={imageBackground} style={styles.imageBackground}>

        <ScrollView style={{ flex: 2 }}>
          <Text
            style={{
              fontSize: 22,
              margin: 7,
              fontWeight: 'bold'
            }}>
            Users
            </Text>

          <View style={{ backgroundColor: '#FF8200', paddingBottom: 15 }}>
            <ScrollView horizontal={true}>
              {users}
            </ScrollView>
          </View>


          <Text
            style={{
              fontSize: 22,
              margin: 7,
              fontWeight: 'bold'
            }}>
            Events
            </Text>

          <View style={{ backgroundColor: '#C94B32', paddingBottom: 15 }}>
            <ScrollView horizontal={true}>
              {events}
            </ScrollView>
          </View>

        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({ type: 'saveToken', token });
    },
  }
}

function mapStateToProps(state) {
  return {
    token: state.tokenReducer,
    user : state.userReducer,
    currentCity: state.currentCityReducer
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);