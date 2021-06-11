import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import {Card, Text, Badge} from 'react-native-elements';

import { AntDesign } from '@expo/vector-icons';
import urlLocal from '../../../urlDevs';





function Heart (props){
  
  const [likeEventState,setLikeEventState ] = useState ( '#FFFFFF' );
  
  useEffect( ()=>{
    const upStateHeart = ()=> {
      setLikeEventState((props.user && props.x.popularite && isUserLikedEvent(props.user._id, props.x.popularite) !== -1 ) ? '#D70026' : '#FFFFFF')
    }
    upStateHeart();
  }, [props.user])
  
  
  async function likeEvent(user, event){
    
    console.log("LIKÉ event", event._id);
    
    if (user  === null){
      console.log('props.navigation:', props.navigation);
      props.navigation.navigate('SignInScreen');
    }else{
      console.log("Heart : user.id=", user._id);

      var responseBE;
      var index = isUserLikedEvent(user._id, event.popularite); 

      console.log ('analise likes: index=', index);
      if (  index !== -1 ){
        setLikeEventState( '#FFFFFF' );
        event.popularite.splice(index, 1);
        responseBE = await fetch(`${urlLocal}/unlikeEvent?idEvent=${event._id}&idUser=${user._id}`);
        console.log('Result: unLike event=', event._id, ' user=', user._id)
      }else{
        setLikeEventState( '#D70026' );
        event.popularite.unshift(user._id);
        responseBE = await fetch(`${urlLocal}/likeEvent?idEvent=${event._id}&idUser=${user._id}`);
        console.log('Result: Like event=', event._id, ' user=', user._id)
      }
      console.log(responseBE);
    }
  }




  function isUserLikedEvent (u, popularite){
    console.log('isUserLikedEvent; popularite=', popularite);
    var result = false;
    if (u){
      var i=0;
      while ( !result &&  i < popularite.length){
        if (u == popularite[i]){
          result = true;
          console.log('User liked, index = ', i);
        }
        i++;
      }
    }
    console.log('result=', result);
    if ( result ){
      return  i-1;
    }
    return -1;
  }



  return (

          <AntDesign
            
            name="heart"
            size={25}
            style={props.style}
            color={ likeEventState } 
            // color={ (props.user && isUserLikedEvent(props.user._id, props.x.popularite) ) ? '#D70026' : '#FFFFFF' } 
            onPress={() => likeEvent(props.user, props.x)}
          />

    )
}

export default Heart;
