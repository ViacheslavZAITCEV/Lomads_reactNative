import React, {useState} from 'react';
import { View } from 'react-native';
import {Card, Text, Badge} from 'react-native-elements';

import { AntDesign } from '@expo/vector-icons';


import urlLocal from '../../urlDevsGoWizMe'

function CinemaCard (props){


  async function likeEvent(user, event){
    setLikeEventState( ! likeEventState );
    if (props.user  === null){
      console.log('props.navigation:', props.navigation);
      props.navigation.navigate('SignInScreen');
    }
    console.log("LIKÉ event", event._id);
    // console.log("user", user);
    console.log("user.id", user._id);

    var responseBE;
    if ( isUserLikedEvent(user._id, event.popularite)){
      event.popularite.splice(user._id, 1);
      responseBE = await fetch(`${urlLocal}/unlikeEvent?idEvent=${event._id}&idUser=${puser._id}`);
    }else{
      event.popularite.unshift(user._id);
      responseBE = await fetch(`${urlLocal}/likeEvent?idEvent=${event._id}&idUser=${user._id}`);
    }
    console.log(responseBE);
  }

  console.log('cinemaCard');
  console.log('props.x.id :', props.x._id);
  console.log('props.user :', props.user);

  const [likeEventState,setLikeEventState ] = useState ((props.user && isUserLikedEvent(props.user._id, props.x.popularite) ) ? '#D70026' : '#FFFFFF');
  


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



  return (
    // <View/>
    <Card 
          containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }}>
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: props.x.image }}
            resizeMode="cover"
            // onPress={() => {
            //     console.log(">>>>>>>>>>>>>>>>>>>>>>IMAGE CINEMA", props.x._id);
            //   props.onAddIdEvent(props.x._id);
            //   tokenOK();
            // }}
            />
          <AntDesign
            
            name="heart"
            size={25}
            style={{ position: 'absolute', top: 5, left: 140 }}
            // color={ likeEventState } 
            color={ (props.user && isUserLikedEvent(props.user._id, props.x.popularite) ) ? '#D70026' : '#FFFFFF' } 
            onPress={() => likeEvent(props.user, props.x)}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 5 }}>{props.x.nom}</Text>
          <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text>
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value={props.x.categories[0]} />
          </View>
    </Card>
    )
}

export default CinemaCard;
