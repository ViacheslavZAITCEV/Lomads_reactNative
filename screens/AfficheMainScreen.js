import React from "react";
import { 
  StyleSheet, 
  View, 
  Image, 
  ScrollView,
  ImageBackground  } from 'react-native';
import { 
  Text, 
  Header, 
  Input,
  Button,
  Card,
  Badge,
   } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import DropdownButton from 'react-bootstrap/DropdownButton'


const styles= StyleSheet.create({
  imageBackground:{
    flex:1,
    resizeMode:"cover",
    justifyContent:"center",
  }
})

//? COULEUR BACKGROUND CARD scroll->  couleur 
// background card -> couleur 3/4/5
// badge -> navbar color
// sans bordures``

//! DONNER LES LIGNES DE CODE DE L'ICONE HEART A EMMA 

export default function AfficheMainScreen() {

  const imageBackground= {uri: "https://us.123rf.com/450wm/zephyr18/zephyr181509/zephyr18150900028/44975226-nature-abstraite-arri%C3%A8re-plan-flou-dans-un-ton-bleu-turquoise-avec-un-soleil-%C3%A9clatant-des-reflets-et-un-.jpg?ver=6"}

  
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
    <ImageBackground source={imageBackground} style={styles.imageBackground}>

      <View style={{flexDirection:'row', width: 300, cover:'width', marginTop:5,}}>
        <Input
          placeholder="CHERCHER"
          inputStyle= {{borderWidth:1, borderColor:'grey', backgroundColor:'white'}}
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

          <Text style={{fontSize:22, flexDirection:'flex-start', margin:7, fontWeight:'bold'}} onPress={()=> {console.log("OnPress CINEMA OK")}}>CINEMA</Text>
        
            <View style={{backgroundColor:'#16253D', paddingBottom:15}}>
                <ScrollView horizontal={true}>
                  
                  <Card containerStyle={{}} >
                    <Card.Image 
                      style={{width:150, height:210}} 
                      source={{uri:'https://files.offi.fr/evenement/79246/images/120/ad64f2fe27d2be710398ae79fc1b862b.jpg'}}
                      resizeMode="cover"
                      />
                    <AntDesign 
                      name="hearto" 
                      size={25} 
                      color='red'
                      style={{ position: 'absolute', top:5, left: 115 }}
                      onPress={()=>console.log("LIKÉ")}
                      />
                    <Text style={{textAlign:'center', fontWeight:'bold', maxWidth:"90%", padding:1 }}>TENET</Text>
                       <Text>Asnières </Text><Text> 200m.</Text>
                    <View style = {{alignItems:'center', margin:2}}>
                      <Badge badgeStyle={{backgroundColor:'blue', margin:1 }}value='SCIENCE-FICTION'/>
                      <Badge badgeStyle={{backgroundColor:'green', margin:1}}value='ACTION'/>
                    </View>
                  </Card>

                  <Card containerStyle={{}} >
                    <Card.Image 
                      style={{width:150, height:210}} 
                      source={{uri:'https://files.offi.fr/evenement/78407/images/120/14d4f207ad9eaff63fdaa68f0133f322.jpg'}}
                      resizeMode="cover"
                      />
                    <AntDesign 
                      name="hearto" 
                      size={25} 
                      color='red'
                      style={{ position: 'absolute', top:5, left: 115 }}
                      onPress={()=>console.log("LIKÉ")}
                    />                  
                    <Text style={{textAlign:'center', fontWeight: 'bold', maxWidth:"90%", padding:1}}>PETIT PAYS</Text>
                       <Text>Asnières</Text><Text> 200m.</Text>
                    <View style = {{alignItems:'center', margin:2}}>
                      <Badge badgeStyle={{backgroundColor:'orange'}}value='DRAME'/>
                    </View>
                  </Card>

                  <Card containerStyle={{}} >
                    <Card.Image 
                      style={{width:150, height:210}} 
                      source={{uri:'https://files.offi.fr/evenement/78623/images/120/790cbdd6b7492218877f4acb86d8963b.jpg'}}
                      resizeMode="cover"
                      />
                    <AntDesign 
                      name="hearto" 
                      size={25} 
                      color='red'
                      style={{ position: 'absolute', top:5, left: 115 }}
                      onPress={()=>console.log("LIKÉ")}
                    />
                    <Text style={{textAlign:'center', fontWeight: 'bold', maxWidth:"90%", padding:1}}>POLICE</Text>
                       <Text>Asnières</Text><Text> 200m.</Text>
                    <View style = {{alignItems:'center', margin:2}}>
                      <Badge badgeStyle={{backgroundColor:'orange'}}value='DRAME'/>
                      <Badge badgeStyle={{backgroundColor:'grey'}}value='THRILLER'/>
                    </View>
                  </Card>

                </ScrollView>
              </View>


            <Text style={{fontSize:22, flexDirection:'flex-start', margin:7, fontWeight:'bold'}} onPress={()=> {console.log("OnPress THÉÂTRE OK")}}>THÉÂTRE</Text>

            <View style={{backgroundColor:'red', paddingBottom:15}}>
                <ScrollView horizontal={true}>
                  
                  <Card containerStyle={{maxWidth:'90%'}}>
                    <Card.Image 
                      style={{width:150, height:210, alignContent:'center'}} 
                      source={{uri:'https://files.offi.fr/programmation/1412736/images/120/287ab115dfd9c92800e7c1c9c56de302.jpg'}}
                      resizeMode="cover"
                      />
                    <AntDesign 
                      name="hearto" 
                      size={25} 
                      color='red'
                      style={{ position: 'absolute', top:5, left: 115 }}
                      onPress={()=>console.log("LIKÉ")}
                      />
                    <Text style={{textAlign:'center', fontWeight: 'bold', maxWidth:"90%", padding:1}}>DESPERATE HOUSEMEN</Text>
                       <Text>Le grand Point Virgule </Text><Text> XXXX m.</Text>
                    <View style = {{alignItems:'center', margin:2}}>
                      <Badge badgeStyle={{backgroundColor:'blue', margin:1 }}value='HUMOUR'/>
                    </View>
                  </Card>

                  <Card containerStyle={{paddingTop:0, paddingLeft:0, paddingRight:0, paddingBottom:5, maxWidth:'25%'}} >
                    <Card.Image 
                      style={{width:150, height:210}} 
                      source={{uri:'https://files.offi.fr/programmation/1488905/images/120/8905d5365e767287fb63aaa6189885c6.jpg'}}
                      resizeMode="cover"
                      />
                    <AntDesign 
                      name="hearto" 
                      size={25} 
                      color='red'
                      style={{ position: 'absolute', top:5, left: 115 }}
                      onPress={()=>console.log("LIKÉ")}
                    />                  
                    <Text style={{textAlign:'center', fontWeight: 'bold', maxWidth:"90%", padding:1,}}>LES FRANGLAISES</Text>
                       <Text>Bobino</Text><Text> XXXX m.</Text>
                    <View style = {{alignItems:'center', margin:2}}>
                      <Badge badgeStyle={{backgroundColor:'orange'}}value='SPECTACLE MUSICAUX'/>
                    </View>
                  </Card>

                  <Card containerStyle={{paddingTop:0, paddingLeft:0, paddingRight:0, paddingBottom:5, maxWidth:'25%'}} >
                    <Card.Image 
                      style={{width:150, height:210}} 
                      source={{uri:'https://files.offi.fr/programmation/962546/images/120/cf332ea55f6402003ab297f60087352c.jpg'}}
                      resizeMode="cover"
                      />
                    <AntDesign 
                      name="hearto" 
                      size={25} 
                      color='red'
                      style={{ position: 'absolute', top:5, left: 115 }}
                      onPress={()=>console.log("LIKÉ")}
                    />
                    <Text style={{textAlign:'center', fontWeight:'bold', maxWidth:"90%", padding:1}}>LE PORTEUR D'HISTOIRE</Text>
                       <Text>Théâtre des Béliers parisiens</Text><Text> XXX m.</Text>
                    <View style = {{alignItems:'center', margin:2}}>
                      <Badge badgeStyle={{backgroundColor:'orange'}}value='THÉÂTRE CONTEMPORAIN'/>
                    </View>
                  </Card>

                </ScrollView>
              </View>



            <Text style={{fontSize:22, flexDirection:'flex-start', margin:7, fontWeight:'bold'}} onPress={()=> {console.log("OnPress THÉÂTRE OK")}}>EXPOSITIONS & MUSÉES</Text>

            <View style={{backgroundColor:'orange', paddingBottom:15}}>
                <ScrollView horizontal={true}>
                  
                  <Card containerStyle={{paddingTop:0, paddingLeft:0, paddingRight:0, paddingBottom:5, maxWidth:'25%'}} >
                    <Card.Image 
                      style={{width:150, height:210, justifyContent:'center'}} 
                      source={{uri:'https://files.offi.fr/programmation/1640628/images/120/5622f9282e8008bdd4092482a080e759.jpg'}}
                      resizeMode="cover"
                      />
                    <AntDesign 
                      name="hearto" 
                      size={25} 
                      color='red'
                      style={{ position: 'absolute', top:5, left: 115 }}
                      onPress={()=>console.log("LIKÉ")}
                      />
                    <Text style={{textAlign:'center', fontWeight: 'bold', maxWidth:"90%", padding:1}}>MATISSE, COMME UN ROMAN</Text>
                      <Text>Centre Georges-Pompidou</Text><Text> XXXX m.</Text>
                    <View style = {{alignItems:'center', margin:2}}>
                      <Badge badgeStyle={{backgroundColor:'blue', margin:1 }}value='BEAUX-ARTS'/>
                    </View>
                  </Card>

                  <Card containerStyle={{paddingTop:0, paddingLeft:0, paddingRight:0, paddingBottom:5, maxWidth:'35%'}} >
                    <Card.Image 
                      style={{width:150, height:210}} 
                      source={{uri:'https://files.offi.fr/programmation/1680419/images/120/1286a7c630590d52506ba6164c6d9046.jpg'}}
                      resizeMode="cover"
                      />
                    <AntDesign 
                      name="hearto" 
                      size={25} 
                      color='red'
                      style={{ position: 'absolute', top:5, left: 115 }}
                      onPress={()=>console.log("LIKÉ")}
                    />                  
                    <Text style={{textAlign:'center', fontWeight: 'bold', maxWidth:"100%", padding:1,}}>CHRISTIAN LOUBOUTINL'EXHIBITION[NISTE]</Text>
                      <Text>Palais de la Porte Dorée</Text><Text> XXXX m.</Text>
                    <View style = {{alignItems:'center', margin:2}}>
                      <Badge badgeStyle={{backgroundColor:'orange'}}value='ARCHITECTURE/DESIGN'/>
                    </View>
                  </Card>

                  <Card containerStyle={{paddingTop:0, paddingLeft:0, paddingRight:0, paddingBottom:5, maxWidth:'25%'}} >
                    <Card.Image 
                      style={{width:150, height:210}} 
                      source={{uri:'https://files.offi.fr/programmation/1741255/images/120/125b6b1f95c267e9fc6112ddb9b1edd9.jpg'}}
                      resizeMode="cover"
                      />
                    <AntDesign 
                      name="hearto" 
                      size={25} 
                      color='red'
                      style={{ position: 'absolute', top:5, left: 115 }}
                      onPress={()=>console.log("LIKÉ")}
                    />
                    <Text style={{textAlign:'center', fontWeight:'bold', maxWidth:"90%", padding:1,}}>KINSHASA CHRONIQUES</Text>
                      <Text>Cité de l'Architecture et du Patrimoine</Text><Text> XXX m.</Text>
                    <View style = {{alignItems:'center', margin:2}}>
                      <Badge badgeStyle={{backgroundColor:'orange', maxWidth:"90%"}}value='ART CONTEMPORAIN'/>
                    </View>
                  </Card>

                </ScrollView>
              </View>

            <Text style={{fontSize:22, flexDirection:'flex-start', margin:7, fontWeight:'bold'}} onPress={()=> {console.log("OnPress THÉÂTRE OK")}}>CONCERTS</Text>

            <View style={{backgroundColor:'purple', paddingBottom:15}}>
                <ScrollView horizontal={true}>

                  <Card containerStyle={{paddingTop:0, paddingLeft:0, paddingRight:0, paddingBottom:5, maxWidth:'100%'}} >
                    <Card.Image 
                      style={{width:150, height:210, justifyContent:'center'}} 
                      source={{uri:'https://files.offi.fr/programmation/1745784/images/120/14c5a0bfdbf63b0621fa69c67dedd5ea.png'}}
                      resizeMode="cover"
                      />
                    <AntDesign 
                      name="hearto" 
                      size={25} 
                      color='red'
                      style={{ position: 'absolute', top:5, left: 115 }}
                      onPress={()=>console.log("LIKÉ")}
                      />
                    <Text style={{textAlign:'center', fontWeight: 'bold', maxWidth:"90%", padding:1}}>MARINA KAYE</Text>
                      <Text>Alhambra</Text><Text> XXXX m.</Text>
                    <View style = {{alignItems:'center', margin:2}}>
                      <Badge badgeStyle={{backgroundColor:'grey', margin:1 }}value='POP/ROCK'/>
                    </View>
                  </Card>

                </ScrollView>
            </View>

            <Text style={{fontSize:22, flexDirection:'flex-start', margin:7, fontWeight:'bold'}} onPress={()=> {console.log("OnPress THÉÂTRE OK")}}>FESTIVALS</Text>

            <View style={{backgroundColor:'green', paddingBottom:15}}>
                <ScrollView horizontal={true}>

                  <Card containerStyle={{justifyContent:'center', maxWidth:'70%'}} >
                    <Card.Image 
                      style={{width:150, height:210, justifyContent:'center', alignContent:'center'}} 
                      source={{uri:'https://www.fnacspectacles.com/static/0/visuel/300/431/LOLLAPALOOZA-PARIS-2020_4315040126748623093.jpg'}}
                      resizeMode="cover"
                      />
                    <AntDesign 
                      name="hearto" 
                      size={25} 
                      color='red'
                      style={{ position: 'absolute', top:5, left: 115 }}
                      onPress={()=>console.log("LIKÉ")}
                      />
                    <Text style={{textAlign:'center', fontWeight: 'bold', maxWidth:"90%", padding:1}}>LOLLAPALOOZA</Text>
                      <Text style={{ maxWidth:'99%'}}>Hippodrome ParisLongchamp</Text><Text> XXXX m.</Text>
                    <View style = {{alignItems:'center', margin:2}}>
                      <Badge badgeStyle={{backgroundColor:'grey', margin:1 }}value='POP/ELECTRO'/>
                    </View>
                  </Card>

                </ScrollView>
            </View>

        </ScrollView>

      </ImageBackground>
    </View>
  );
}
