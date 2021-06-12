import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

import { FontAwesome } from '@expo/vector-icons';

import { connect } from 'react-redux';

function HeaderRightAvatar(props) {

  return (
<View style={styles.headerAvatar}>
      {props.user 
      ? <Avatar
        size='small'
        rounded
        onPress={()=>props.navigation.navigate('ProfileMainScreen')}
        source={{ uri: props.user.avatar }}
      />
      : <FontAwesome name='user-o' size={25} color="#FF8200" />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  headerAvatar: {
    right: 10
  },
});

function mapStateToProps(state) {
  return {
    user : state.userReducer,
  }
}

export default connect(
  mapStateToProps,
  null
)(HeaderRightAvatar)