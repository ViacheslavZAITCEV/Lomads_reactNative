import React from 'react';
import { View, ScrollView, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Text, Image, Input, Avatar, Icon, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    width: 225,
    height: 35,
  },
  button: {
    backgroundColor: "#D70026",
  }
})
export default function PlanOrgaScreen(props, { navigation }) {
  return (
    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#E55039' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
          ORGANISER UNE SORTIE
        </Text>
      </View>

      <ScrollView style={{ flexDirection: 'column', marginBottom: 40 }}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <SafeAreaView>

            <Text style={{ fontSize: 18, margin: 7, fontWeight: 'bold' }} >
              INFORMATIONS SUR LA SORTIE
            </Text>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>

              <Text>Inclure la card de l'événement ici</Text>

              <Image
                source={{ uri: "https://www.mairie-francheville69.fr/wp-content/uploads/2017/11/image-test-1024x640.jpeg" }}
                style={{ height: 150, width: 250, resizeMode: "center" }}
              />

              <Input
                placeholder='Nom de la sortie'
                inputStyle={styles.input}
                inputContainerStyle={{ width: '80%', marginTop: 20, alignItems: 'center' }}
              />

              <View>

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

              </View>

            </View>

            <Text style={{ fontSize: 18, margin: 7, fontWeight: 'bold' }} >
              INVITER MES AMIS
            </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
              <View style={{ justifyContent: 'flex-end', marginLeft: 15 }}>
                <Icon
                  name="add-circle"
                  type='materialicons'
                  size={35}
                  color="#D70026"
                  onPress={() => console.log("ajout ami à l'invitation")}
                />
              </View>
              <View style={{ marginHorizontal: 15 }}>
                <Avatar
                  size='medium'
                  rounded
                  source={{
                    uri:
                      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
                  }}
                />
              </View>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Cédric Alinc
              </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
              <View style={{ justifyContent: 'flex-end', marginLeft: 15 }}>
                <Icon
                  name="add-circle"
                  type='materialicons'
                  size={35}
                  color="#D70026"
                  onPress={() => console.log("ajout ami à l'invitation")}
                />
              </View>
              <View style={{ marginHorizontal: 15 }}>
                <Avatar
                  size='medium'
                  rounded
                  source={{
                    uri:
                      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
                  }}
                />
              </View>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Alexandra Bui-Catel
              </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
              <View style={{ justifyContent: 'flex-end', marginLeft: 15 }}>
                <Icon
                  name="add-circle"
                  type='materialicons'
                  size={35}
                  color="#D70026"
                  onPress={() => console.log("ajout ami à l'invitation")}
                />
              </View>
              <View style={{ marginHorizontal: 15 }}>
                <Avatar
                  size='medium'
                  rounded
                  source={{
                    uri:
                      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
                  }}
                />
              </View>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Slava Zaitcev
              </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
              <View style={{ justifyContent: 'flex-end', marginLeft: 15 }}>
                <Icon
                  name="add-circle"
                  type='materialicons'
                  size={35}
                  color="#D70026"
                  onPress={() => console.log("ajout ami à l'invitation")}
                />
              </View>
              <View style={{ marginHorizontal: 15 }}>
                <Avatar
                  size='medium'
                  rounded
                  source={{
                    uri:
                      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
                  }}
                />
              </View>
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Emmanuelle Bouaziz
              </Text>
              </View>
            </View>

          </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('PlanMainScreen')}
          style={{
            width: '100%', height: 40, backgroundColor: '#D70026',
            alignItems: 'center', justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Valider et inviter mes amis</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}