import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  ImageBackground,ScrollView

} from 'react-native';
import {
  Text,
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
  const [token, setToken] = useState(props.token);
  const [user, setUser] = useState(null);


  const imageBackground = { uri: "https://us.123rf.com/450wm/zephyr18/zephyr181509/zephyr18150900028/44975226-nature-abstraite-arri%C3%A8re-plan-flou-dans-un-ton-bleu-turquoise-avec-un-soleil-%C3%A9clatant-des-reflets-et-un-.jpg?ver=6" };

  var lieuTransit=[];
  var lieux;
  var uniqueset;
  var backarray;
  var horaireTransit=[];
  var dates;


  useEffect(() => {
    const updateUser = async () => {
      console.log('AfficheSpecialScreen: useEffect, function updateUser')
        if(props.token){

        const userBD = await fetch(`${urlLocal}/users/getUser`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `token=${props.token}`
        })
        const body = await userBD.json();
        console.log('AfficheSpecialScreen, updateUser(), user = ', body);
        setToken(props.token);
        setUser(body);

        // setCurrentCity(body.ville);
        }
    }
    updateUser ();
  },[props.token])

  useEffect(() => {
    const findEvent = async() => {
      console.log("PROPS RECU", props.idEvent)
      const data = await fetch(`${urlLocal}/pullEventDetaille`, {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'id='+props.idEvent});

      const body = await data.json()
      setEvenement(body);
      backarray = recupLieu(body);
      setLieuEvenementSansDoublons(backarray);
      createLieuPicker(backarray);
    };
    findEvent();
  },[])

  useEffect(() => {
    async function horairesEvent() {
      setSelectDateEvenement('');
      horaires()
    };
    horairesEvent();
  },[selectLieuEvenement])

  function recupLieu (event){
    console.log("function 'recupLieu'");
    var backy = [];
    if (event.lieux_dates){
      // console.log ('evenement.lieux_dates = ', event.lieux_dates)
      for (var i = 0; i < event.lieux_dates.length;i++) {
        lieuTransit.push(event.lieux_dates[i].salle)
      }
      uniqueset = new Set(lieuTransit)
      backy=[...uniqueset];
      console.log('backy = ', backy);
    }
    return backy;
  }

 
   var horaires= ()=>{
    console.log("coucou from function 'horares'");
    var dateFormat = function(date){
      var newDate = new Date(date);
      var format = newDate.getDate()+'/'+(newDate.getMonth()+1)+'/'+newDate.getFullYear()+' - '+newDate.getHours()+'h'+newDate.getMinutes();
      return format;
    }
    if (evenement.lieux_dates){
      for (var i = 0; i< evenement.lieux_dates.length; i++) {
        if(selectLieuEvenement.itemValue==evenement.lieux_dates[i].salle) {
          horaireTransit.push(dateFormat(evenement.lieux_dates[i].date_debut));
      }}
    }
    console.log("HORAIRE TRANSIT",horaireTransit);
    setDateEvenement(horaireTransit);
  }

  if (lieuEvenementSansDoublons.length > 0){
    createLieuPicker(lieuEvenementSansDoublons);
  }

  function createLieuPicker (lieuEvenementSansDoublons){
    lieux = lieuEvenementSansDoublons.map((lieu,i)=>{
      return(
      <Picker.Item 
        key={i} 
        label={lieu} 
        value={lieu} 
      />)
    })
  }
  // console.log("selectLieuEvenement",selectLieuEvenement)
  console.log("Affiche SpecialScreen :  token=",token)
  console.log("Affiche SpecialScreen :  user=",user)

  if (dateEvenement.length > 0){
    dates = dateEvenement.map((date,i)=>{
      return(<Picker.Item key={i} label={date} value={date} />)
    });
  }

    return (
      <ScrollView style={{ flex: 1}}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        
         <ImageBackground source={imageBackground} style={styles.imageBackground}>
      
        <View style={{ flex:1, alignItems: 'center', width: 300, margin: 5 }}>
          <Image style={{ width: 210, height: 297, margin: 5 }} source={{ uri: evenement.image }} />

      <Heart
        size={25}
        style={{ position: 'absolute', top: 5, left: 140 }}
        token={props.token}      
        i={0}
        x={evenement}
        user={user}
        navigation={props.navigation}
        style={{ position: 'absolute', top: 5, left: 270 }}
      />

      <Text style={{ textAlign: 'center', marginTop: 3,fontWeight:'bold', textTransform: 'uppercase' }}>{evenement.nom}</Text>
     

    </View>
    <View style={{ alignItems: 'center', width: 300, margin: 5 }}>
      <Text style={{ textAlign: 'center', marginTop: 3 }}>{evenement.description}</Text>

    </View>

    <View style={{ alignItems: 'center', width: 500, margin: 5 }}>
      <Text style={{ textAlign: 'center', marginTop: 3 }}>Type: {evenement.type}</Text>
      <Text style={{ textAlign: 'center', marginTop: 3, maxWidth:'100%' }}>
        Catégories: {evenement.categories} 
      </Text>
      <Text style={{ textAlign: 'center', marginTop: 3 }}>Durée: { (evenement && evenement.lieux_dates && evenement.lieux_dates.length >0) ? evenement.lieux_dates[0].duree : ''}  minutes</Text>

    </View>

    <View style={{ alignItems: 'center', width: 150, margin: 5, marginBottom:70 }}>
  
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
    <View style={{ alignItems: 'center', width: 150, margin: 5, marginBottom:100 }}>
   
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
    
    <View style={{ alignItems: 'center', width: 200, margin: 5, marginTop:50 }}>
    <Text style={{ textAlign: 'center', marginTop: 3 }}>Votre choix de lieu : </Text>
    <Text style={{ textAlign: 'center', marginTop: 3,fontWeight:'bold',color: "#16253D"  }}>{selectLieuEvenement.itemValue}</Text>
    <Text style={{ textAlign: 'center', marginTop: 8 }}>Votre choix de séance : </Text>
    <Text style={{ textAlign: 'center', marginTop: 3,fontWeight:'bold', color: "#16253D" }}>{selectDateEvenement.itemValue}</Text>
    </View>

    <View style={{ flex:1, alignItems: 'center', width: 200, margin: 5 }}>
    <Button
          type='outline'
          title="Créer une sortie"
          buttonStyle={{ 
            backgroundColor: (selectLieuEvenement !== '' && selectDateEvenement !== '') ? "#D70026" : "#16253D", 
            marginBottom:0,width: 150, margin: 5 }}
          titleStyle={{ color: 'white' }}
          onPress={() => {
            console.log(">>>>>>>>>>>>>>>>>>>>>>SORTIE");
            
          }}            
        />
        <Button
              type='outline'
              title="Créer une sortie"
              buttonStyle={{ 
                backgroundColor: (selectLieuEvenement !== '' && selectDateEvenement !== '') ? "#D70026" : "#16253D", 
                marginBottom:0,width: 150, margin: 5 }}
              titleStyle={{ color: 'white' }}
              onPress={() => {
                (selectLieuEvenement !== '' && selectDateEvenement !== '') ? console.log('Création une sortie') : console.log(">>>>>>>>>>>>>>>>>>>>>>SORTIE");
              }}            
              />
            <Button
              type='outline'
              title="Réserver"
              buttonStyle={{ 
                backgroundColor: (selectLieuEvenement !== '' && selectDateEvenement !== '') ? "#D70026" : "#16253D", 
                marginBottom:0,  width: 150, margin: 5 }}
                titleStyle={{ color: 'white' }}
                onPress={() => {
                (selectLieuEvenement !== '' && selectDateEvenement !== '') ? console.log('redirect à site de Reservation') : console.log(">>>>>>>>>>>>>>>>>>>>>>SORTIE");
              }}            
            />

    </View>

</ImageBackground>
   
</View>
</ScrollView>
)
  
}
function mapStateToProps(state){
  return {
    idEvent: state.idEventReducer,
    token : state.token
  }
}

export default connect(
  mapStateToProps,
  null
)(AfficheSpecialScreen);