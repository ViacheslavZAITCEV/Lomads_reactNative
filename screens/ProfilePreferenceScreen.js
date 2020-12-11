import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, CheckBox } from 'react-native-elements';

import { connect } from 'react-redux';

function ProfilePreferenceScreen(props) {

  // =========================================================================
  //                         TYPE D'EVENEMENTS
  // =========================================================================

  const [typeFilms, setTypeFilms] = useState(true)
  const [typeConcerts, setTypeConcerts] = useState(true)
  const [typeExpositions, setTypeExpositions] = useState(true)
  const [typeTheatre, setTypeTheatre] = useState(true)


  // =========================================================================
  //                         CATEGORIES D'EVENEMENTS
  // =========================================================================

  const [categorieBeauxArts, setCategorieBeauxArts] = useState(true)
  const [categorieClassique, setCategorieClassique] = useState(true)
  const [categorieComedie, setCategorieComedie] = useState(true)
  const [categorieOneManShow, setCategorieOneManShow] = useState(true)
  const [categorieContemporain, setCategorieContemporain] = useState(true)
  const [categorieDrame, setCategorieDrame] = useState(true)
  const [categorieFantastique, setCategorieFantastique] = useState(true)
  const [categorieScienceFiction, setCategorieScienceFiction] = useState(true)
  const [categorieHistoire, setCategorieHistoire] = useState(true)
  const [categorieCivilisations, setCategorieCivilisations] = useState(true)
  const [categorieMusical, setCategorieMusical] = useState(true)
  const [categorieMusiqueFrancaise, setCategorieMusiqueFrancaise] = useState(true)
  const [categorieMusiqueUrbaine, setCategorieMusiqueUrbaine] = useState(true)
  const [categoriePop, setCategoriePop] = useState(true)
  const [categorieRock, setCategorieRock] = useState(true)


    
  const [token, setToken] = useState(props.token);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const updateUser = async () => {
        if(props.token){
          const userBD = await fetch('http://172.17.1.111:3000/users/getUser', {
          // const userBD = await fetch('http://192.168.1.98:3000/users/getUser', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: `token=${props.token}`
          })
          const body = await userBD.json();
          console.log('ProfilePreferencesScreen, updateUser(), user = ', body);
          setUser(body);
        }
    }
    updateUser ();
  },[props.token])

  useEffect(() => {
    const updateUserBD = async () => {
      const data = await fetch('http://172.17.1.111:3000/users/sign-up', {
        // const data = await fetch('http://192.168.1.98:3000/users/sign-up', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            // body: `prenom=${signUpUserFirstname}&nom=${signUpUserLastname}&email=${signUpEmail}&password=${signUpPassword}&ville=${signUpCity}`
        })
        const body = await data.json()
        if (body.response){
          console.log('ProfilPreferenceScreen, update est enregistré dans BD');
        }else {
          console.log('ProfilPreferenceScreen, enregistrement dans BD est refusé, error=', body.error);
        }        
    }
    updateUserBD ();
  },[typeFilms, typeConcerts, typeExpositions, typeTheatre])

  return (
    <View style={{ flex: 1 }}>

      <View style={{ backgroundColor: '#E55039' }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', maxWidth: "100%", marginTop: 10, marginBottom: 10 }}>
          DEFINIR MES PREFERENCES
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>

        {/* =============================================================================
                                     CHECKBOX POUR TYPES
        ============================================================================= */}

        <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'bold', maxWidth: "100%", marginTop: 15 }}>
          TYPES D'EVENEMENTS
            </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <CheckBox
            title='Films'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={typeFilms}
            onPress={() => setTypeFilms(!typeFilms)}
          />
          <CheckBox
            title='Concerts'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={typeConcerts}
            onPress={() => setTypeConcerts(!typeConcerts)}
          />
          <CheckBox
            title='Expositions'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={typeExpositions}
            onPress={() => setTypeExpositions(!typeExpositions)}
          />
          <CheckBox
            title='Théatre'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={typeTheatre}
            onPress={() => setTypeTheatre(!typeTheatre)}
          />
        </View>

        {/* =============================================================================
                                      CHECKBOX POUR CATEGORIES
          ============================================================================= */}

        <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'bold', maxWidth: "100%", marginTop: 15 }}>
          CATEGORIES
            </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 40 }}>
          <CheckBox
            title='Beaux-Arts'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categorieBeauxArts}
            onPress={() => setCategorieBeauxArts(!categorieBeauxArts)}
          />
          <CheckBox
            title='Civilisations'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categorieCivilisations}
            onPress={() => setCategorieCivilisations(!categorieCivilisations)}
          />
          <CheckBox
            title='Classique'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categorieClassique}
            onPress={() => setCategorieClassique(!categorieClassique)}
          />
          <CheckBox
            title='Comédie'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categorieComedie}
            onPress={() => setCategorieComedie(!categorieComedie)}
          />
          <CheckBox
            title='Contemporain'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categorieContemporain}
            onPress={() => setCategorieContemporain(!categorieContemporain)}
          />
          <CheckBox
            title='Drame'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categorieDrame}
            onPress={() => setCategorieDrame(!categorieDrame)}
          />
          <CheckBox
            title='Fantastique'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categorieFantastique}
            onPress={() => setCategorieFantastique(!categorieFantastique)}
          />
          <CheckBox
            title='Histoire'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categorieHistoire}
            onPress={() => setCategorieHistoire(!categorieHistoire)}
          />
          <CheckBox
            title='Musical'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categorieMusical}
            onPress={() => setCategorieMusical(!categorieMusical)}
          />
          <CheckBox
            title='Musique Française'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categorieMusiqueFrancaise}
            onPress={() => setCategorieMusiqueFrancaise(!categorieMusiqueFrancaise)}
          />
          <CheckBox
            title='Musique Urbaine'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categorieMusiqueUrbaine}
            onPress={() => setCategorieMusiqueUrbaine(!categorieMusiqueUrbaine)}
          />
          <CheckBox
            title='One-Man Show'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categorieOneManShow}
            onPress={() => setCategorieOneManShow(!categorieOneManShow)}
          />
          <CheckBox
            title='Pop'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categoriePop}
            onPress={() => setCategoriePop(!categoriePop)}
          />
          <CheckBox
            title='Rock'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categorieRock}
            onPress={() => setCategorieRock(!categorieRock)}
          />
          <CheckBox
            title='Science-Fiction'
            checkedIcon='check-square'
            uncheckedIcon='square'
            checkedColor='#EFB509'
            uncheckedColor='#dfe4ea'
            checked={categorieScienceFiction}
            onPress={() => setCategorieScienceFiction(!categorieScienceFiction)}
          />
        </View>
      </ScrollView>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          style={{
            width: '100%', height: 40, backgroundColor: '#D70026',
            alignItems: 'center', justifyContent: 'center'
          }}
          onPress={() => props.navigation.navigate('ProfileMainScreen')}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Valider les changements</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


function mapStateToProps(state){
  return {
    token: state.tokenReducer
  }
}

export default connect(
  mapStateToProps,
  null
)(ProfilePreferenceScreen);