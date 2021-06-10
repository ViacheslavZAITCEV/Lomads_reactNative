import React from "react";

//Initialisation de Redux
import { connect } from 'react-redux';
import ProfileMainScreen from './ProfilePage';
import Connexion from "./UserConnexion";


function Profil(props) {

  if (props.token === null){
    return(
      <Connexion />
    )
  }else{
    return (
      <ProfileMainScreen />
    )
  }
};

function mapStateToProps(state){
  return {
    token: state.tokenReducer,
  }
}


export default connect(
  mapStateToProps,
  null
)(Profil);