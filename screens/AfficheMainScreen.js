import React from "react";
import { StyleSheet, View, Image, ScrollView, TextInput, Button } from 'react-native';
import { Text, Header } from 'react-native-elements';
import Carousel from 'react-bootstrap/Carousel';

export default function AfficheMainScreen() {


  return (
    <View style={{flex: 1 }}>
      <Header style={styles.head}>
        <Image
            source = {require("../assets/logo2.png")}
            style={styles.logo}
        />
        <Text 
          onPress={ () => console.log(">>> ON PRESS CITY!")} 
          style={{fontSize:23, 
          justifyContent:'center', 
          alignSelf:'center',}}>
            PARIS
        </Text>
      </Header>

      <View style={{flexDirection:'row', alignItems:'center'}}>
        <TextInput
          placeholder="Recherche..."
          style={{justifyContent:'flex-start'}}
        />
        <Button
          title="Filtrer"
          style={{justifyContent:'flex-end'}}
        />
      </View>
      

      <ScrollView style={{flex:2}}>
{/* 
        <View style={styles.category}>
          <Text style={{color:'white', fontSize:20, padding:3}}>CINEMA</Text>
          <ScrollView horizontal= {true} style={styles.horizontal}>
            <Image source = {require("../assets/logo2.png")}/>
            <Image source = {require("../assets/logo2.png")}/>
            <Image source = {require("../assets/logo2.png")}/>
            <Image source = {require("../assets/logo2.png")}/>
          </ScrollView>
        </View>

        <View style={styles.category}>
          <Text style={{color:'white', fontSize:20, padding:3}}>CINEMA</Text>
          <Carousel horizontal= {true} style={styles.horizontal}>
            <Carousel.Item>
              <Image source = {require("../assets/logo2.png")}/>
            </Carousel.Item>
            <Carousel.Item>
              <Image source = {require("../assets/logo2.png")}/>
            </Carousel.Item>
            <Carousel.Item>
              <Image source = {require("../assets/logo2.png")}/>
            </Carousel.Item>
          </Carousel>
        </View> */}
        
      </ScrollView>
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  head:{
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height:500,
  },
  logo:{
    width: 70, 
    height: 70,

  },
  category:{
    backgroundColor: 'navy',
    margin:5,
    marginTop:15,
    height:30,
    justifyContent:'center',
  },
  horizontal:{
    flexDirection:'row',
  }
});