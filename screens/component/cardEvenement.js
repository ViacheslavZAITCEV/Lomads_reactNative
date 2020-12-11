import React, {useState} from 'react';
import { View } from 'react-native';
import {Card, Text, Badge} from 'react-native-elements';

import { AntDesign } from '@expo/vector-icons';

function CinemaCard (props){
  // console.log('cinemaCard');
  // console.log('props.x.id :', props.x._id);
  // console.log('props.x.id :', props.user);

  // // const [likeEventState,setLikeEventState ] = useState ((user && isUserLikedEvent(user._id, x.popularite) ) ? '#D70026' : '#FFFFFF');
  // function likeEventComponent(x){
  //   // setLikeEventState( ! likeEventState );
  //   likeEvent(x);
  // }

  return (
    <View/>
    // <Card key={props.i}
    //       containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }}>
    //       <Card.Image
    //         style={{ width: 170, height: 230 }}
    //         source={{ uri: props.x.image }}
    //         resizeMode="cover"
    //         onPress={() => {
    //             console.log(">>>>>>>>>>>>>>>>>>>>>>IMAGE CINEMA", props.x._id);
    //           props.onAddIdEvent(props.x._id);
    //           tokenOK();
    //         }}
    //         />
    //       <AntDesign
            
    //         name="heart"
    //         size={25}
    //         style={{ position: 'absolute', top: 5, left: 140 }}
    //         // color={ likeEventState } 
    //         color={ (props.user && isUserLikedEvent(props.user._id, x.popularite) ) ? '#D70026' : '#FFFFFF' } 
    //         onPress={() => likeEventComponent(props.x)}
    //       />
    //       <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 5 }}>{x.nom}</Text>
    //       <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text>
    //       <View style={{ alignItems: 'center', margin: 2 }}>
    //         <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value={x.categories[0]} />
    //       </View>
    // </Card>
    )
}

export default CinemaCard;
