import React, {useState} from 'react';
import { View } from 'react-native';
import {Card, Text, Badge} from 'react-native-elements';

import { AntDesign } from '@expo/vector-icons';


import urlLocal from '../../urlDevsGoWizMe'

function Heart (props){

  
  console.log('cinemaCard');
  console.log('props.x.id :', props.x._id);
  console.log('props.user :', props.user);
  
  const [likeEventState,setLikeEventState ] = useState ((props.user && isUserLikedEvent(props.user._id, props.x.popularite) ) ? '#D70026' : '#FFFFFF');
  
  

  async function likeEvent(user, event){

    console.log("LIKÉ event", event._id);
    
    if (user  === null){
      console.log('props.navigation:', props.navigation);
      props.navigation.navigate('SignInScreen');
    }
    console.log("user.id", user._id);

    var responseBE;
    if ( isUserLikedEvent(user._id, event.popularite)){
      setLikeEventState( '#FFFFFF' );
      event.popularite.splice(user._id, 1);
      responseBE = await fetch(`${urlLocal}/unlikeEvent?idEvent=${event._id}&idUser=${user._id}`);
    }else{
      setLikeEventState( '#D70026' );
      event.popularite.unshift(user._id);
      responseBE = await fetch(`${urlLocal}/likeEvent?idEvent=${event._id}&idUser=${user._id}`);
    }
    console.log(responseBE);
  }




  function isUserLikedEvent (u, popularite){
    console.log('isUserLikedEvent');
    var result = false;
    if (u){
      var i=0;
      while ( !result && i<popularite.length){
        if (u == popularite[i]){
          result = true;
          console.log('User liked');
        }
        i++;
      }
    }
    console.log('result=', result)
    return result;
  }



  return (

          <AntDesign
            
            name="heart"
            size={25}
            style={{ position: 'absolute', top: 5, left: 140 }}
            color={ likeEventState } 
            // color={ (props.user && isUserLikedEvent(props.user._id, props.x.popularite) ) ? '#D70026' : '#FFFFFF' } 
            onPress={() => likeEvent(props.user, props.x)}
          />

    )
}

export default Heart;
