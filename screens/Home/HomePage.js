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
import CardEvenement from './components/cardEvenement'
import CreateEvent from './components/createEvent'

import { connect } from 'react-redux';


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
  const [user, setUser] = useState(props.user);



  useEffect(() => {
    const getEvents = async () => {
      try{
        const data = await fetch(`${urlLocal}/event/pullEvents`)
        const events = await data.json()
        console.log('events=', events.length);
        setEventsList(events)
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
        const response = await data.json()
        response.response && setUsersList(response.users)
      }catch(e){
         console.log(e)
      }
    }
    getUsers()
  }, [props.user])


  let events = eventsList.map((event,i) => <CardEvenement event={event} key={i} />)

  const users = usersList?.map((userMap, i) => {
      return (
        <Card key={i} containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }} >
          <Card.Image
            style={{ width: 130, height: 170 }}
            source={{ uri: userMap.avatar }}
            resizeMode="cover"
            onPress={() => {
              props.onAddIdEvent(userMap._id);
            }}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 1, textTransform: 'uppercase' }}>{userMap.prenom}</Text>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 1, textTransform: 'uppercase' }}>{userMap.nom}</Text>
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value={userMap.events.length > 0 ?? `${userMap.events.length} evens`} />
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
            Events
            </Text>

          <View style={{ backgroundColor: '#C94B32', paddingBottom: 15 }}>
            <ScrollView horizontal={true}>
              <CreateEvent navigation={props.navigation} />
              {events}
            </ScrollView>
          </View>

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
    user : state.userReducer,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);