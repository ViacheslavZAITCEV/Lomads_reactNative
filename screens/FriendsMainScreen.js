import React from 'react';
import { View, ScrollView} from 'react-native';
import { Text, Button, Avatar, Icon, CheckBox, Badge } from 'react-native-elements';

export default function FriendsMainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column', width: 450 , cover: 'fullScreen', marginTop: 5}}>
      <ScrollView>
        <View >
          <Button
              type='outline'
              title="Ajouter des amis"
              buttonStyle={{ backgroundColor: "#E55039", color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}
              titleStyle={{ color: 'white' }}
              onPress={() => navigation.navigate('FriendsAddScreen')}
          />
        </View>
        
        <Text h1> Mes invitations </Text>
        <View style={{ flexDirection: 'row', width: 450, alignItems: 'center', cover: 'width', marginTop: 5, }}>
          
          <Avatar
          size='small'
          rounded
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
          }}
          />
            <Text> CEDRIC vous invite a être son ami </Text>
            <Button
            type='outline'
            title="ADD"
            size={0,2}
            margin= {5}
            buttonStyle={{ backgroundColor: "#F8F5F2" }}
            titleStyle={{ color: 'red' }}
            />
            <Button
            type='outline'
            title="NO"
            size={1}
            buttonStyle={{ backgroundColor: "#F8F5F2" }}
            titleStyle={{ color: 'red' }}
            />
        </View>
          
        <View style={{ flexDirection: 'row', width: 450, alignItems: 'center', cover: 'width', marginTop: 5, }}>
            <Avatar
          size='small'
          rounded
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
          }}
          />
            <Text> SLAVA vous invite a être son ami</Text>
            <Button
            type='outline'
            title="ADD"
            size={1}
            buttonStyle={{ backgroundColor: "#F8F5F2" }}
            titleStyle={{ color: 'red' }}
            />
            <Button
            type='outline'
            title="NO"
            size={1}
            buttonStyle={{ backgroundColor: "#F8F5F2" }}
            titleStyle={{ color: 'red' }}
            />
          </View>
          {/* <Avatar
        size='small'
        rounded
        source={{
          uri:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        }}
        />
          <Text> ALEXANDRA vous invite a être son ami</Text>
          <Button
          type='outline'
          title="ADD"
          size={5}
          buttonStyle={{ backgroundColor: "#F8F5F2" }}
          titleStyle={{ color: 'red' }}
          />
          <Button
          type='outline'
          title="NO"
          size={5}
          buttonStyle={{ backgroundColor: "#F8F5F2" }}
          titleStyle={{ color: 'red' }}
          />
          
          <Avatar
        size='small'
        rounded
        source={{
          uri:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        }}
        />
          <Text> MIKE vous invite a être son ami</Text>
          <Button
          type='outline'
          title="ADD"
          size={2}
          buttonStyle={{ backgroundColor: "#F8F5F2" }}
          titleStyle={{ color: 'red' }}
        
          />
          <Button
          type='outline'
          title="NO"
          size={5}
          buttonStyle={{ backgroundColor: "#F8F5F2" }}
          titleStyle={{ color: 'red' }}
         
          /> */}
        
        
      

      <View style={{flexDirection: 'row', width: 300, cover: 'width', marginTop: 5, }}>
        <Text h1> Mes amis </Text>
        
      </View>

      <View style={{flexDirection: 'row', width: 300, alignItems: 'center', cover: 'width', marginTop: 5, }}>
        
        <Avatar
        size='medium'
        rounded
        source={{
          uri:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        }}
        />
          <Button title="Emmanuelle"
            onPress={() => navigation.navigate('FriendsProfileScreen')}
          />
      </View>
      <View style={{flexDirection: 'row', width: 300, cover: 'width', alignItems: 'center', marginTop: 5, }}>    
          <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Films' />
          <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Théatre' />
          <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Concerts' />
      </View>  
      {/* <View style={{flexDirection: 'row', width: 300, cover: 'width', marginTop: 5, }}>    
          <Avatar
        size='medium'
        rounded
        source={{
          uri:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        }}
        />
          <Button title="Mike"
            onPress={() => navigation.navigate('FriendsProfileScreen')}
          />
        
           <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Films' />
          <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Théatre' />
          <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Concerts' />
          
         
          <Avatar
        size='medium'
        rounded
        source={{
          uri:
            'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        }}
        />
          <Button title="Slava"
            onPress={() => navigation.navigate('FriendsProfileScreen')}
          />
           <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Films' />
          <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Théatre' />
          <Badge badgeStyle={{ backgroundColor: '#3C6382', margin: 1 }} value='Concerts' />
           */}
      
      {/* </View> */}
      </ScrollView>
    </View>
  );
}