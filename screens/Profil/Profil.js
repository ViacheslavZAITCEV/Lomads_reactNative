import React from "react";

//Initialisation de Redux
import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';
import Connexion from "./UserConnexion";


function Profil(props) {

  if (props.token === null){
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
    token: state.tokenReducer,
  }
}


export default connect(
  mapStateToProps,
  null
)(Profil);