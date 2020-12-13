import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

import {connect} from 'react-redux';

function PlanInvitationScreen(props, { navigation }) {


  return (

    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#E55039' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
          REPONDRE À L'INVITATION
        </Text>
      </View>

      <View style={{ flex:1, alignItems: 'center', width: 300, margin: 5 }}>
          <Image style={{ width: 150, height: 210, margin: 5 }} source={{ uri: "https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg" }} />
          <AntDesign
            name="heart"
            size={25}
            color='#D70026'
            style={{ position: 'absolute', top: 5, left: 270 }}
            onPress={() => console.log("LIKÉ")}
          />
          <Text style={{ textAlign: 'center', marginTop: 3,fontWeight:'bold' }}>nom de l'evenement</Text>
         

        </View>

      <View style={{ flex: 1, alignItems: 'center' }}>

        <Button title="Go to PlanMainScreen"
          onPress={() => navigation.navigate('PlanMainScreen')}
        />
        <Button title="Go to PlanDetailScreen"
          onPress={() => navigation.navigate('PlanDetailScreen')}
        />
        <Button title="Go to PlanOrgaScreen"
          onPress={() => navigation.navigate('PlanOrgaScreen')}
        />

        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            Plan invitation screen
      </Text>
        </ScrollView>
      </View>
    </View>
  );
}

function mapStateToProps(state){
  return {idEvent: state.idEventReducer}
}

export default connect(
  null,
  null
)(PlanInvitationScreen);