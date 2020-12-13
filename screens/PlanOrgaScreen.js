import React from 'react';
import { View, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Text, Image, Input, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    alignItems:'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    width: 225, 
    height:35,
  },
  button: {
    backgroundColor:"#D70026",
  }
})
export default function PlanOrgaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <Button title="Go to PlanMainScreen"
        onPress={() => navigation.navigate('PlanMainScreen')}
      />
      <Button title="Go to PlanInvitationScreen"
        onPress={() => navigation.navigate('PlanInvitationScreen')}
      />
      <Button title="Go to PlanDetailScreen"
        onPress={() => navigation.navigate('PlanDetailScreen')}
      />

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center'}}>
        <KeyboardAvoidingView behavior="padding" enabled>
        <SafeAreaView>

          <View>

            <Image 
              source={{ uri:"https://www.mairie-francheville69.fr/wp-content/uploads/2017/11/image-test-1024x640.jpeg" }}
              style={{height:200, width:300, resizeMode:"center"}}
            />

            <Input
               placeholder='Nom de la sortie'
               inputStyle={styles.input}
               inputContainerStyle={{ width: '80%',marginTop:20, alignItems:'center' }}
             />

              <View>
                <Text>Date:</Text>
                <Input
                   inputContainerStyle={styles.inputContainer}
                   rightIcon={<MaterialIcons name="date-range" size={22} color="black" />}
                />
              </View>

              <View>
                <Text>Horaire:</Text>
                <Input
                  inputContainerStyle={styles.inputContainer}
                  rightIcon={<MaterialCommunityIcons name="clock-time-eight-outline" size={22} color="black" />}
                />
              </View>

            <View>
              <Text>INVITER UN AMI</Text>
                <Text>AMI 1</Text>
                <Text>AMI 2</Text>
                <Text>AMI 3</Text>
            </View>
            <Text>Evenement privé</Text>
            <Button
              title="VALIDER"
              style= {styles.button}
              titleStyle={{ color: 'white' }}
            />
          </View>
        </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}