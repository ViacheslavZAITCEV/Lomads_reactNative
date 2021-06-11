import React from "react";

//Initialisation de Redux
import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';
import Connexion from "./UserConnexion";


function Profil(props) {

  console.log('props.user=', props.user)

  if ( !props.user.token ){
    return(
      <Connexion />
    )
  }else{
    return (
      <ProfilePage />
    )
  }
};

function mapStateToProps(state){
  return {
    user: state.userReducer,
  }
}


export default connect(
  mapStateToProps,
  null
)(Profil);