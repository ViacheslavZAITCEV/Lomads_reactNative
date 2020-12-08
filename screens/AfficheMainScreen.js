import React from "react";
import { 
  StyleSheet, 
  View, 
  Image, 
  ScrollView,  } from 'react-native';
import { 
  Text, 
  Header, 
  Input,
  Button,
   } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';



export default function AfficheMainScreen() {


  return (
    <View style={{ flex: 1}}>
    <Header
      backgroundColor='#16253D'
      height={40}
      leftComponent={{ text: 'GoWizMe', style: { color: '#F8F5F2', fontWeight: 'bold', fontSize: 15 } }}
      centerComponent={{ 
        text: 'Paris', 
        style: { color: '#F8F5F2', fontWeight: 'bold', fontSize: 25  }, 
        onPress:()=> {console.log("OnPress VILLE OK")}}}
      rightComponent={<FontAwesome name='user-circle' size={25} color='#F8F5F2' />}

    />

    <View style={{flexDirection:'row', width: 300, alignItems:'center'}}>
      <Input
        placeholder="Recherche"
      />
      <Button
        type='outline'
        title="Filtres"
        buttonStyle={{backgroundColor: "#EFB509"}}  
        titleStyle={{color:'white'}}
        onPress={()=> console.log("filtres ok")}
      />
      
    </View>
  
   
      <ScrollView style={{flex:2}}>
        <Text style={{fontSize:20, flexDirection:'flex-start', marginTop:10, fontWeight:'bold'}} onPress={()=> {console.log("OnPress CINEMA OK")}}>CINEMA</Text>
          <ScrollView horizontal={true}>
          <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210}} source={{uri:'https://files.offi.fr/evenement/79246/images/120/ad64f2fe27d2be710398ae79fc1b862b.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>TENET</Text>
            </View>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210}} source={{uri:'https://files.offi.fr/evenement/78407/images/120/14d4f207ad9eaff63fdaa68f0133f322.jpg'}}/>
              <Text style={{textAlign:'center'}}>PETIT PAYS</Text>
            </View>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210}} source={{uri:'https://files.offi.fr/evenement/78623/images/120/790cbdd6b7492218877f4acb86d8963b.jpg'}}/>
              <Text style={{textAlign:'center'}}>POLICE</Text>
            </View>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210}} source={{uri:'https://files.offi.fr/evenement/79384/images/120/235e8ac6037292a3d5d90802e4c11623.jpg'}}/>            
              <Text style={{textAlign:'center'}}>LES CHOSES QU'ON DIT LES CHOSES QU'ON FAIT</Text>
            </View>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210}} source={{uri:'https://files.offi.fr/evenement/79310/images/120/4501c939178d73695a5a0f93bb2e77d4.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>EFFACER L'HISTORIQUE</Text>
            </View>

          </ScrollView>

        <Text style={{fontSize:20, flexDirection:'flex-start', marginTop:10, fontWeight:'bold'}} onPress={()=> {console.log("OnPress THEATRE OK")}}>THÉÂTRE</Text>
          <ScrollView horizontal={true}>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/programmation/1412736/images/120/287ab115dfd9c92800e7c1c9c56de302.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>DESPERATE HOUSEMEN</Text>
            </View>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/programmation/1488905/images/120/8905d5365e767287fb63aaa6189885c6.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>LES FRANGLAISES</Text>
            </View>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/programmation/956706/images/120/2be53cdeef1450da1b5a9fb3e259b97c.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>LES FAUX BRITISH</Text>
            </View>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/programmation/1544211/images/120/27caab587e67f01a5d7aeaa16be23a87.jpeg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>MIGRANDO</Text>
            </View>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/programmation/962546/images/120/cf332ea55f6402003ab297f60087352c.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>LE PORTEUR D'HISTOIRE</Text>
            </View>
          </ScrollView>

        <Text style={{fontSize:20, flexDirection:'flex-start', marginTop:10, fontWeight:'bold'}} onPress={()=> {console.log("OnPress EXPOS/MUSEES OK")}}>EXPOSITIONS & MUSÉE</Text>
          <ScrollView horizontal={true}>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/programmation/1640628/images/120/5622f9282e8008bdd4092482a080e759.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3, }}>MATISSE, COMME UN ROMAN</Text>
            </View>

            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/programmation/1680419/images/120/1286a7c630590d52506ba6164c6d9046.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>CHRISTIAN LOUBOUTIN, L'EXHIBITION[NISTE]</Text>
            </View>

            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/programmation/1676208/images/120/2d4315cce880da8fcdf65512d96d6ad3.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>OTTO FREUNDKUCH (1878-1943), La révélation de l'abstraction</Text>
            </View>

            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/programmation/1711217/images/120/41c77f9a475517aaabce0648cc01f045.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>Voyage sur la route du Kisokaidō</Text>
            </View>

            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/programmation/1748200/images/120/d1f00afd4202048cf3af666584b81fe8.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>Pierre Dac, Du côté d'ailleurs</Text>
            </View>

          </ScrollView>

        <Text style={{fontSize:20, flexDirection:'flex-start', marginTop:10, fontWeight:'bold'}} onPress={()=> {console.log("OnPress CONCERTS OK")}}>CONCERTS</Text>
          <ScrollView horizontal={true}>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/programmation/1745784/images/120/14c5a0bfdbf63b0621fa69c67dedd5ea.png'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>MARINA KAYE</Text>
            </View>

            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/programmation/1690525/images/120/c52b1748aeea9d287c5e3378dbba88d9.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>VIANEY</Text>
            </View>

            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/lieu/1756/images/120/7050b0cb5781bf590ac18ea8756d6731.png'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>« L'Olimpiade » opera seria de Vivaldi</Text>
            </View>

            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/programmation/1702061/images/120/a52bed7ec87997ae22a3af0299df9d07.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>ASAF AVIDAN</Text>
            </View>

            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/programmation/1690463/images/200/319574944cbd30de78a99aff0cc668b7.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>Céline Dion - Courage World Tour</Text>
            </View>
          </ScrollView>

        <Text style={{fontSize:20, flexDirection:'flex-start', marginTop:10, fontWeight:'bold'}} onPress={()=> {console.log("OnPress FESTIVALS OK")}}>FESTIVALS</Text>
          <ScrollView horizontal={true}>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://files.offi.fr/medias/img/affiche-jeunes-talents-2020.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>Festival Européen Jeunes Talents</Text>
          </View>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://lh3.googleusercontent.com/proxy/JoVe3qsg7K5pcketv7w2YOmOj9bHeiCho9PSiE2C-7P62Nj3gbw5IApQrNd5kbH1TtwrzJnvLbv2qAYwAXP8XVI7QSvQKckquPml3cJXkeYkCNfBbjllt3ahjXMGNZ0YByvimxedrxKDiWnroV873W-TE9q_igfHbBlunImnO57H6QLOus3tJgjC'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>LOLLAPALOOZA 2021</Text>
            </View>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://lh3.googleusercontent.com/proxy/lnaaULiy6DLWN7wYYHoQw2fPD2v9m2vAcIXPskVUl0JOCS4wMxPvk_ntyZA35WQBepqBUujFDOojBEX9TteD9wqrygf5B9Aw-aJg96yU-f8JmjxCJfd1XrCAetClTIGWZcwnqtno7muGW-fAmmmGJwWsP13gZL-R4G7N6VND977dFppVfawndto7Uh1miaxH-xczvbkMFyFG7_JIXgdZaFUON0oV'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>DREAM NATION 2020</Text>
            </View>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://www.histoire-immigration.fr/sites/default/files/thumbnails/image/gf_2020.jpg'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>LE GRAND FESTIVAL 2020</Text>
            </View>
            <View style={{alignItems:'center', width:150, margin:5}}>
              <Image style={{width:150, height:210, margin:5}} source={{uri:'https://lh3.googleusercontent.com/proxy/Co03Euji6E5_5xOuEF-VPZjW5xQB8BGjhk2JOW6vdRQE4IcA2MYVEQadEdfSRUnyJIt5GJD_RdingJQdVXMAUPn_81uEF6rJaK5jew'}}/>
              <Text style={{textAlign:'center', marginTop:3}}>PARIS MUSIC FESTIVAL</Text>
            </View>
          </ScrollView>

      </ScrollView>
    </View>
  );
}
