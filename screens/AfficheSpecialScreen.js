import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,

} from 'react-native';
import {
  Text,
  Input,
  Button,
  Image
  
} from 'react-native-elements';

import {Picker} from '@react-native-picker/picker';

import {connect} from 'react-redux';

function AfficheSpecialScreen(props) {
  const [evenement,setEvenement] = useState({});
  const [lieuEvenement,setLieuEvenement] = useState([]);
  const [selectLieuEvenement,setSelectLieuEvenement] = useState('');
  const [dateEvenement,setDateEvenement] = useState([]);

  useEffect(() => {
    const findEvent = async() => {
      console.log("PROPS RECU", props.idEvent)
      const data = await fetch(`http://192.168.1.142:3000/pullEventDetaille`, {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'id='+props.idEvent});

      const body = await data.json()
      
      setEvenement (body) 
    }
    findEvent ()    
  },[])

  var recupLieu = () => {
    for (var i = 0; evenement.lieux_dates.length;i++) {
      console.log("coucou")
      //console.log("lqlqlqlq",lieux_dates[i].salle )
      //setLieuEvenement([...lieuEvenement, {salle:lieux_dates[i].salle, adresse:lieux_dates[i].adresse,cp:lieux_dates[i].cp}])
    }
  }
  recupLieu();
  console.log("lieu evene,ent",lieuEvenement)

  // var lieu = lieuEvenement.map((lieu,i)=>{
  //   return(<Picker.Item label="Java" value={lieu.salle} />)
  // })
 
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>

        <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
          <Image style={{ width: 150, height: 210, margin: 5 }} source={{ uri: evenement.image }} />
          <Text style={{ textAlign: 'center', marginTop: 3 }}>{evenement.nom}</Text>
         

        </View>
        <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
          <Text style={{ textAlign: 'center', marginTop: 3 }}>{evenement.description}</Text>

        </View>

        <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
          <Button>Amis intéressés</Button>
          <Button>Personnes intéréssées</Button>
        </View>

        <View style={{ alignItems: 'center', width: 150, margin: 5 }}></View>
        {/* <Picker
          selectedValue={lieuEvenement}
         style={{height: 50, width: 100}}
         onValueChange={(itemValue, itemIndex) =>
          setSelectLieuEvenement({itemValue})
          }>
         {lieu}
        </Picker> */}

     

  
    </View>
    )
  

}
function mapStateToProps(state){
  return {idEvent: state.idEventReducer}
}


export default connect(
  mapStateToProps,
  null
)(AfficheSpecialScreen);
