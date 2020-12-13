import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Avatar, Icon, CheckBox } from 'react-native-elements';

export default function FriendsAddScreen(props, { navigation }) {


  return (
    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#E55039' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
          AJOUTER MES AMIS
        </Text>
      </View>

      <Text style={{ fontSize: 22, margin: 7, fontWeight: 'bold' }} >
        RESULTATS DE LA RECHERCHE :
        </Text>

      <ScrollView style={{ flexDirection: 'column', marginBottom: 40 }}>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
          <View style={{ justifyContent: 'flex-end', marginLeft: 15 }}>
            <Icon
              name="add-circle"
              type='materialicons'
              size={35}
              color="#D70026"
              onPress={() => console.log("envoi de demande d'amis")}
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
              onPress={() => console.log("envoi de demande d'amis")}
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
              Thomas Alinc
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
              onPress={() => console.log("envoi de demande d'amis")}
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
              Lucie Alinc
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
              onPress={() => console.log("envoi de demande d'amis")}
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
              Sabrina Alinc
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
              onPress={() => console.log("envoi de demande d'amis")}
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
              Michel Alinc
              </Text>
          </View>
        </View>

      </ScrollView>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('FriendsMainScreen')}
          style={{
            width: '100%', height: 40, backgroundColor: '#D70026',
            alignItems: 'center', justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Demander à rejoindre mes amis</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}