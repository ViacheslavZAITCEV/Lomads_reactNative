import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Overlay, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'; 


export default function HeaderCity({ navigation }) {

  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const [ville, setVille] = useState('');

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerCity} onPress={()=> toggleOverlay()}><FontAwesome name="map-marker" size={22} color="white" />  {ville}</Text>
      <View>
        <Overlay isVisible={visible} onBackdropPress={()=> toggleOverlay()} overlayStyle={styles.overlay}>
          <Text style={{textAlign:'center', fontSize:18}}>VILLE</Text>
          <Input
            placeholder="entrez votre ville"
            onChangeText={(valeur)=> setVille(valeur)}
          />
          <Button
            title="Valider"
            buttonStyle={{ backgroundColor: "#D70026"}}
            type='outline'
            titleStyle={{ color: 'white' }}
            onPress={()=> console.log("VALIDER OK :)")}
          />
        </Overlay>
      </View>
        

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16253D'
  },
  headerCity: {
    // fontWeight: 'bold',
    fontSize: 20,
    color: '#F8F5F2',
  },
  overlay:{
    width:200,
  }
});
