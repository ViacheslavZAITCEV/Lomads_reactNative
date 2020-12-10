import React from 'react';
import { View, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Text, Button, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  text: {
    paddingBottom:10, 
    fontSize:20,
    marginTop:10, 
  },
  input:{
    borderWidth: 1, 
    borderColor: 'grey', 
    backgroundColor: 'white', 
    marginBottom:0, 
    paddingLeft:10, 
  },
  button:{
    backgroundColor: "#D70026", 
    marginBottom:20,
    marginTop:0,
    marginRight:'auto',
    marginLeft:'auto'
  }
})

export default function FriendsAddScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <KeyboardAvoidingView behavior="padding" style={{flex:1, justifyContent:'center'}}>
        <SafeAreaView>

          <View style={{marginBottom:30}}>
          <Text style={styles.text}>
            Chercher un ami avec son nom
          </Text>
            <Input
                placeholder='nom de famille'
                inputStyle={styles.input}
                inputContainerStyle={{width:'100%', marginBottom:0}}
              />
              <Button
                title='Chercher'
                type='outline'
                buttonStyle={styles.button}
                titleStyle={{ color: 'white' }}
                onPress={()=> console.log("CHERCHER")}
              />
          </View>
          
            
          <View style={{marginBottom:70}}>
            <Text style={styles.text}>
              Inviter des amis par email
            </Text>
              <Input
                  placeholder='email'
                  inputStyle={styles.input}
                  inputContainerStyle={{width:'100%', marginBottom:0}}
                  />
                <Button
                  title='Inviter'
                  type='outline'
                  buttonStyle={styles.button}
                  titleStyle={{ color: 'white' }}
                  onPress={()=> console.log("INVITER")}
                />
          </View>
          

        </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}