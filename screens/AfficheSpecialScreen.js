import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  ImageBackground,ScrollView

} from 'react-native';
import {
  Text,
  Input,
  Button,
  Image,  

  
} from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})

import {Picker} from '@react-native-picker/picker';

import Heart from './components/cardEvenement'

import {connect} from 'react-redux';

import urlLocal from '../urlDevsGoWizMe'

function AfficheSpecialScreen(props) {
  const [evenement,setEvenement] = useState({})    
  const [lieuEvenementSansDoublons,setLieuEvenementSansDoublons] = useState([]);
  const [selectLieuEvenement,setSelectLieuEvenement] = useState('');
  const [dateEvenement,setDateEvenement] = useState([]);
  const [selectDateEvenement,setSelectDateEvenement] = useState('');
  var lieuTransit=[];
  var lieux;
  var uniqueset;
  var backarray;
  var horaireTransit=[];
  var dates;

  useEffect(() => {
    const findEvent = async() => {
      console.log("PROPS RECU", props.idEvent)
      const data = await fetch(`${urlLocal}/pullEventDetaille`, {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'id='+props.idEvent});

      const body = await data.json()
      
      setEvenement(body) 
    };
    async function representations() {
      recupLieu();
      console.log("evene,ent", evenement)
        console.log("LIEU", lieuTransit)
        console.log("LIEU nombre", lieuTransit.length)
        console.log("backarray ", backarray)
        console.log("lieux", lieux)
       };
    findEvent() ;
    representations();   
  },[])

   useEffect(() => {
        async function horairesEvent() {
        horaires()
      };
     horairesEvent();
  },[selectLieuEvenement])




  var recupLieu = () => {
    for (var i = 0; i< evenement.lieux_dates.length;i++) {
      lieuTransit.push(evenement.lieux_dates[i].salle)
    }
    uniqueset = new Set(lieuTransit)
    backarray=[...uniqueset];
    setLieuEvenementSansDoublons(backarray)
  }
 
   var horaires= ()=>{
    console.log("coucou")
    var dateFormat = function(date){
      var newDate = new Date(date);
      var format = newDate.getDate()+'/'+(newDate.getMonth()+1)+'/'+newDate.getFullYear()+' - '+newDate.getHours()+'h'+newDate.getMinutes();
      return format;
    }
    for (var i = 0; i< evenement.lieux_dates.length;i++) {
      if(selectLieuEvenement.itemValue==evenement.lieux_dates[i].salle) {
        horaireTransit.push(dateFormat(evenement.lieux_dates[i].date_debut))
      }}
      console.log("HORAIRE TRANSIT",horaireTransit)
    setDateEvenement(horaireTransit)}




  
  lieux = lieuEvenementSansDoublons.map((lieu,i)=>{
    return(<Picker.Item key={i} label={lieu} value={lieu} />)})
 
  console.log("selectLieuEvenement",selectLieuEvenement)

  dates = dateEvenement.map((date,i)=>{
    return(<Picker.Item key={i} label={date} value={date} />)
  })
  
  const imageBackground = { uri: "https://us.123rf.com/450wm/zephyr18/zephyr181509/zephyr18150900028/44975226-nature-abstraite-arri%C3%A8re-plan-flou-dans-un-ton-bleu-turquoise-avec-un-soleil-%C3%A9clatant-des-reflets-et-un-.jpg?ver=6" };

    return (
      <ScrollView style={{ flex: 1}}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        
         <ImageBackground source={imageBackground} style={styles.imageBackground}>
      
        <View style={{ flex:1, alignItems: 'center', width: 300, margin: 5 }}>
          <Image style={{ width: 150, height: 210, margin: 5 }} source={{ uri: evenement.image }} />


          {/* <Heart
            size={25}
            style={{ position: 'absolute', top: 5, left: 140 }}
            token={props.token}      
            i={0}
            x={evenement}
            user={user}
            navigation={props.navigation}
          /> */}



          <AntDesign
            name="heart"
            size={25}
            color='#D70026'
            style={{ position: 'absolute', top: 5, left: 270 }}
            onPress={() => console.log("LIKÉ")}
          />
          <Text style={{ textAlign: 'center', marginTop: 3,fontWeight:'bold' }}>{evenement.nom}</Text>
         

        </View>
        <View style={{ alignItems: 'center', width: 300, margin: 5 }}>
          <Text style={{ textAlign: 'center', marginTop: 3 }}>{evenement.description}</Text>

        </View>

        <View style={{ alignItems: 'center', width: 500, margin: 5 }}>
          <Text style={{ textAlign: 'center', marginTop: 3 }}>Type : {evenement.type}</Text>

        </View>

        <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
          <Text style={{ textAlign: 'center', marginTop: 3 }}>Catégories : </Text>

        </View>

        <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
          <Text style={{ textAlign: 'center', marginTop: 3 }}>Durée :  minutes</Text>

        </View>

        <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
      
        <Picker
          selectedValue={lieuTransit}
         style={{height: 50, width: 200}}
         onValueChange={(itemValue, itemIndex) =>
          setSelectLieuEvenement({itemValue})
          }>
          <Picker.Item  label='Lieu(x)' value='Lieux' />
         {lieux}
        </Picker>
        </View>
        <View style={{ alignItems: 'center', width: 150, margin: 5 }}>
       
        <Picker
        onPress={() => {horaires()}}
        selectedValue={horaireTransit}
         style={{height: 50, width: 200}}
         onValueChange={(itemValue, itemIndex) =>
          setSelectDateEvenement({itemValue})
          }>
           <Picker.Item label='Date(s) et horaire(s)' value='2020-12-24T00:00:00.000Z' />
         {dates}
        </Picker>
        </View>
        
        <View style={{ alignItems: 'center', width: 200, margin: 5 }}>
        <Text style={{ textAlign: 'center', marginTop: 3 }}>Votre choix de lieu : </Text>
        <Text style={{ textAlign: 'center', marginTop: 3,fontWeight:'bold',color: "#16253D"  }}>{selectLieuEvenement.itemValue}</Text>
        <Text style={{ textAlign: 'center', marginTop: 8 }}>Votre choix de séance : </Text>
        <Text style={{ textAlign: 'center', marginTop: 3,fontWeight:'bold', color: "#16253D" }}>{selectDateEvenement.itemValue}</Text>
        </View>

        <View style={{ flex:1, alignItems: 'center', width: 200, margin: 5 }}>
        <Button
              type='outline'
              title="Créer une sortie"
              buttonStyle={{ backgroundColor: "#D70026", marginBottom:0,width: 150, margin: 5 }}
              titleStyle={{ color: 'white' }}
              onPress={() => {
                console.log(">>>>>>>>>>>>>>>>>>>>>>SORTIE");
                
              }}            
            />
            <Button
              type='outline'
              title="Réserver"
              buttonStyle={{ backgroundColor: "#D70026", marginBottom:0,  width: 150, margin: 5 }}
              titleStyle={{ color: 'white' }}
              onPress={() => {
                console.log(">>>>>>>>>>>>>>>>>>>>>>Reserver");
                
              }}            
            />

        </View>
    
    </ImageBackground>
   
    </View>
    </ScrollView>
    )
  

}
function mapStateToProps(state){
  return {idEvent: state.idEventReducer}
}


export default connect(
  mapStateToProps,
  null
)(AfficheSpecialScreen);
