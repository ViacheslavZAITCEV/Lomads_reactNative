import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button, Avatar, Icon, CheckBox } from 'react-native-elements';

export default function FriendsMainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <View style={{ flexDirection: 'column', width: 300, cover: 'width', marginTop: 5, }}>
      <Button
          type='outline'
          title="Ajouter amis"
          buttonStyle={{ backgroundColor: "red" }}
          titleStyle={{ color: '#F8F5F2' }}
          onPress={() => navigation.navigate('FriendsAddScreen')}
        />
        
        <Text h1> Mes invitations </Text>
        <ScrollView>
          <Text> CEDRIC vous invite a être son ami </Text>
          <Button
          type='outline'
          title="ADD"
          size={5}
          buttonStyle={{ backgroundColor: "#F8F5F2" }}
          titleStyle={{ color: 'red' }}
          />
          
          
          <Text> SLAVA vous invite a être son ami</Text>
          <Button
          type='outline'
          title="ADD"
          size={5}
          buttonStyle={{ backgroundColor: "#F8F5F2" }}
          titleStyle={{ color: 'red' }}
          />
          <Text> ALEXANDRA vous invite a être son ami</Text>
          <Button
          type='outline'
          title="ADD"
          size={5}
          buttonStyle={{ backgroundColor: "#F8F5F2" }}
          titleStyle={{ color: 'red' }}
          />
          <Text> MIKE vous invite a être son ami</Text>
          <Button
          type='outline'
          title="ADD"
          size={5}
          buttonStyle={{ backgroundColor: "#F8F5F2" }}
          titleStyle={{ color: 'red' }}
          />
        </ScrollView>
      </View>

      <View style={{ flexDirection: 'row', width: 300, cover: 'width', marginTop: 5, }}>
        <Text h1> Mes amis </Text>
        
      </View>

      <View>
        <ScrollView >
          <Text> EMMANUELLE </Text>
          <Button title="Go to FriendsProfileScreen"
            onPress={() => navigation.navigate('FriendsProfileScreen')}
          />
          <Text> MIKE</Text>
          <Button title="Go to FriendsProfileScreen"
            onPress={() => navigation.navigate('FriendsProfileScreen')}
          />
          <Text> SLAVA</Text>
          <Button title="Go to FriendsProfileScreen"
            onPress={() => navigation.navigate('FriendsProfileScreen')}
          />
        </ScrollView>
      </View>

    </View>
  );
}