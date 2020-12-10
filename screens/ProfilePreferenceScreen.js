import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, CheckBox, Button } from 'react-native-elements';

export default function ProfilePreferenceScreen({ navigation }) {

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


  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <View>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', maxWidth: "100%", marginTop: 15, marginBottom: 15 }}>
          DEFINIR MES PREFERENCES
        </Text>
      </View>

      <Button

        type='outline'
        title="valider"
        buttonStyle={{ backgroundColor: "#D70026" }}
        titleStyle={{ color: 'white' }}
        onPress={() => navigation.navigate('ProfileMainScreen')}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

      {/* =============================================================================
                                     CHECKBOX POUR TYPES
      ============================================================================= */}

        <View>
          <View>
            <Text style={{ textAlign: 'left', fontSize: 15, fontWeight: 'bold', maxWidth: "100%", marginTop: 15 }}>
              TYPES
            </Text>
            <View>
              <ScrollView contentContainerStyle={{ flexDirection: 'column', alignItems: 'left', justifyContent: 'center' }}>
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
              </ScrollView>
            </View>
          </View>
        </View>

        {/* =============================================================================
                                      CHECKBOX POUR CATEGORIES
        ============================================================================= */}

        <View>
          <View>
            <Text style={{ textAlign: 'left', fontSize: 15, fontWeight: 'bold', maxWidth: "100%", marginTop: 15 }}>
              CATEGORIES
            </Text>
            <View>
              <ScrollView contentContainerStyle={{ flexDirection: 'column', alignItems: 'left', justifyContent: 'center' }}>
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
                  title='OneMan Show'
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
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}