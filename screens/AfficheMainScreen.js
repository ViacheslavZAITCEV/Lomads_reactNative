import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground
} from 'react-native';
import {
  Text,
  Input,
  Button,
  Card,
  Badge,
  BottomSheet,
  ListItem,
} from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
})




function AfficheMainScreen(props) {


  const imageBackground = { uri: "https://us.123rf.com/450wm/zephyr18/zephyr181509/zephyr18150900028/44975226-nature-abstraite-arri%C3%A8re-plan-flou-dans-un-ton-bleu-turquoise-avec-un-soleil-%C3%A9clatant-des-reflets-et-un-.jpg?ver=6" };

  const [isVisible, setIsVisible] = useState(false);

  const [currentCity, setCurrentCity] = useState('');

  const FilterList = [
    { title: 'CINEMA' },
    { title: 'THÉÂTRE' },
    { title: 'EXPOS' },
    { title: 'CONCERT' },
    {
      title: 'Annuler',
      containerStyle: { backgroundColor: 'D70026' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  useEffect(() => {
    async function askPermissions() {
      var { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        
        Location.watchPositionAsync({distanceInterval: 10},
          (location) => {
            console.log("DATA GPS>>>>>>>",location);
          }
        );
      }
    }
    askPermissions();
  }, []);

  const [eventsList, setEventsList] = useState([ {
    "categories": [
        "fantastique"
    ],
    "popularite": [],
    "_id": "5fce2f0e78b44832e81463c1",
    "nom": "tenet",
    "type": "film",
    "description": "film de Nolan sur le temps et son cours",
    "image": "https://files.offi.fr/evenement/79246/images/200/ad64f2fe27d2be710398ae79fc1b862b.jpg",
    "lieux_dates": [
        {
            "_id": "5fce2f0e78b44832e81463c2",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T10:00:00.000Z",
            "date_fin": "2020-12-15T12:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce3e7619af0e4c706164ae",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T10:00:00.000Z",
            "date_fin": "2020-12-17T12:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4acc6697a656d4d4ea79",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-15T14:00:00.000Z",
            "date_fin": "2020-12-15T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ae76697a656d4d4ea7a",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b1c6697a656d4d4ea7b",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b336697a656d4d4ea7c",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T14:00:00.000Z",
            "date_fin": "2020-12-16T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b696697a656d4d4ea7d",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b796697a656d4d4ea7e",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b876697a656d4d4ea7f",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T14:00:00.000Z",
            "date_fin": "2020-12-17T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b906697a656d4d4ea80",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b9e6697a656d4d4ea81",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ba86697a656d4d4ea82",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T14:00:00.000Z",
            "date_fin": "2020-12-18T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4bd26697a656d4d4ea83",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4be26697a656d4d4ea84",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4bf96697a656d4d4ea85",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T14:00:00.000Z",
            "date_fin": "2020-12-19T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c036697a656d4d4ea86",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c186697a656d4d4ea87",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T11:00:00.000Z",
            "date_fin": "2020-12-20T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c1f6697a656d4d4ea88",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T14:00:00.000Z",
            "date_fin": "2020-12-20T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c276697a656d4d4ea89",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c336697a656d4d4ea8a",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T11:00:00.000Z",
            "date_fin": "2020-12-21T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c426697a656d4d4ea8b",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T14:00:00.000Z",
            "date_fin": "2020-12-21T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c4b6697a656d4d4ea8c",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T18:00:00.000Z",
            "date_fin": "2020-12-21T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c566697a656d4d4ea8d",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-22T11:00:00.000Z",
            "date_fin": "2020-12-22T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cb86697a656d4d4ea8e",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T14:00:00.000Z",
            "date_fin": "2020-12-15T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cc16697a656d4d4ea8f",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ccd6697a656d4d4ea90",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cd96697a656d4d4ea91",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T14:00:00.000Z",
            "date_fin": "2020-12-16T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d246697a656d4d4ea92",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d386697a656d4d4ea93",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d6a6697a656d4d4ea94",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T14:00:00.000Z",
            "date_fin": "2020-12-17T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d736697a656d4d4ea95",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d856697a656d4d4ea96",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d916697a656d4d4ea97",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T14:00:00.000Z",
            "date_fin": "2020-12-18T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dc16697a656d4d4ea98",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dd26697a656d4d4ea99",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4de06697a656d4d4ea9a",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T14:00:00.000Z",
            "date_fin": "2020-12-19T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4df06697a656d4d4ea9b",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dff6697a656d4d4ea9c",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-20T11:00:00.000Z",
            "date_fin": "2020-12-20T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e386697a656d4d4ea9d",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-15T11:00:00.000Z",
            "date_fin": "2020-12-15T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e446697a656d4d4ea9e",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e4d6697a656d4d4ea9f",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e546697a656d4d4eaa0",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e5e6697a656d4d4eaa1",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e7e6697a656d4d4eaa2",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-15T11:00:00.000Z",
            "date_fin": "2020-12-15T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e866697a656d4d4eaa3",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e8d6697a656d4d4eaa4",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4eb26697a656d4d4eaa5",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4eba6697a656d4d4eaa6",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "comédie"
    ],
    "popularite": [],
    "_id": "5fce42206697a656d4d4ea53",
    "nom": "Les Faux British",
    "type": "théâtre",
    "description": "une troupe de théâtre comme vous en avez rarement vu ! ",
    "image": "https://files.offi.fr/programmation/956706/images/200/2be53cdeef1450da1b5a9fb3e259b97c.jpg",
    "lieux_dates": [
        {
            "_id": "5fce42206697a656d4d4ea54",
            "salle": "Théâtre St Georges",
            "adresse": "51 rue Saint-Georges",
            "cp": "75009",
            "date_debut": "2020-12-17T20:30:00.000Z",
            "date_fin": "2020-12-17T22:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce5199656ebe5bdc566350",
            "salle": "Théâtre St Georges",
            "adresse": "51 rue Saint-Georges",
            "cp": "75009",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce51b1656ebe5bdc566351",
            "salle": "Théâtre St Georges",
            "adresse": "51 rue Saint-Georges",
            "cp": "75009",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce51b8656ebe5bdc566352",
            "salle": "Théâtre St Georges",
            "adresse": "51 rue Saint-Georges",
            "cp": "75009",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce51c2656ebe5bdc566353",
            "salle": "Théâtre St Georges",
            "adresse": "51 rue Saint-Georges",
            "cp": "75009",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce51cc656ebe5bdc566354",
            "salle": "Théâtre St Georges",
            "adresse": "51 rue Saint-Georges",
            "cp": "75009",
            "date_debut": "2020-12-21T18:00:00.000Z",
            "date_fin": "2020-12-21T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce51d3656ebe5bdc566355",
            "salle": "Théâtre St Georges",
            "adresse": "51 rue Saint-Georges",
            "cp": "75009",
            "date_debut": "2020-12-22T18:00:00.000Z",
            "date_fin": "2020-12-22T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "drame"
    ],
    "popularite": [],
    "_id": "5fce428c6697a656d4d4ea55",
    "nom": "À la recherche du temps perdu",
    "type": "théâtre",
    "description": "Vous connaissez l'oeuvre littéraire ? vous l'avez aimée ? alors vous risquer d'adorer cette mise en scène tout à fait singulière",
    "image": "https://files.offi.fr/programmation/1650507/images/200/bbac311d7b00c4369fc2043473dd0bb3.jpg",
    "lieux_dates": [
        {
            "_id": "5fce428c6697a656d4d4ea56",
            "salle": "Théâtre de la Contrescarpe",
            "adresse": "5 rue Blainville ",
            "cp": "75005",
            "date_debut": "2020-12-17T19:00:00.000Z",
            "date_fin": "2020-12-17T21:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce52071724ff470813e911",
            "salle": "Théâtre de la Contrescarpe",
            "adresse": "5 rue Blainville ",
            "cp": "75005",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce52101724ff470813e912",
            "salle": "Théâtre de la Contrescarpe",
            "adresse": "5 rue Blainville ",
            "cp": "75005",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce52181724ff470813e913",
            "salle": "Théâtre de la Contrescarpe",
            "adresse": "5 rue Blainville ",
            "cp": "75005",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce521f1724ff470813e914",
            "salle": "Théâtre de la Contrescarpe",
            "adresse": "5 rue Blainville ",
            "cp": "75005",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce52271724ff470813e915",
            "salle": "Théâtre de la Contrescarpe",
            "adresse": "5 rue Blainville ",
            "cp": "75005",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce52301724ff470813e916",
            "salle": "Théâtre de la Contrescarpe",
            "adresse": "5 rue Blainville ",
            "cp": "75005",
            "date_debut": "2020-12-21T18:00:00.000Z",
            "date_fin": "2020-12-21T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce52361724ff470813e917",
            "salle": "Théâtre de la Contrescarpe",
            "adresse": "5 rue Blainville ",
            "cp": "75005",
            "date_debut": "2020-12-22T18:00:00.000Z",
            "date_fin": "2020-12-22T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "comédie"
    ],
    "popularite": [],
    "_id": "5fce431c6697a656d4d4ea57",
    "nom": "Dîner de famille",
    "type": "théâtre",
    "description": "Vous pensez que vos repas de familles sont particuliers ? que des schémas de familles sont impossibles à reproduire ? allez voir ce spectacle et vous vous rendrez sûrement compte que c'est pareil pour tout le monde !",
    "image": "https://files.offi.fr/programmation/1548145/images/200/dbc3d69f3bbc3a943733556ca503454e.jpg",
    "lieux_dates": [
        {
            "_id": "5fce431c6697a656d4d4ea58",
            "salle": "Café de la Gare",
            "adresse": "41 rue du Temple",
            "cp": "75004",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce526955d25a32ace325dc",
            "salle": "Café de la Gare",
            "adresse": "41 rue du Temple",
            "cp": "75004",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce528955d25a32ace325dd",
            "salle": "Café de la Gare",
            "adresse": "41 rue du Temple",
            "cp": "75004",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce529155d25a32ace325de",
            "salle": "Café de la Gare",
            "adresse": "41 rue du Temple",
            "cp": "75004",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce529855d25a32ace325df",
            "salle": "Café de la Gare",
            "adresse": "41 rue du Temple",
            "cp": "75004",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce52a455d25a32ace325e0",
            "salle": "Café de la Gare",
            "adresse": "41 rue du Temple",
            "cp": "75004",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce52ac55d25a32ace325e1",
            "salle": "Café de la Gare",
            "adresse": "41 rue du Temple",
            "cp": "75004",
            "date_debut": "2020-12-21T18:00:00.000Z",
            "date_fin": "2020-12-21T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce52b355d25a32ace325e2",
            "salle": "Café de la Gare",
            "adresse": "41 rue du Temple",
            "cp": "75004",
            "date_debut": "2020-12-22T18:00:00.000Z",
            "date_fin": "2020-12-22T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "musical"
    ],
    "popularite": [],
    "_id": "5fce436e6697a656d4d4ea59",
    "nom": "The Black Legends Show",
    "type": "théâtre",
    "description": "Un hymne aux luttes de la communauté afro-américaine au travers de musiques somptueuses",
    "image": "https://files.offi.fr/programmation/1689042/images/200/adf662a7501ad420ba9e4272495dc002.jpg",
    "lieux_dates": [
        {
            "_id": "5fce436e6697a656d4d4ea5a",
            "salle": "Les Folies Bergère",
            "adresse": "32 rue richer",
            "cp": "75009",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce52f7619cbc0a98818663",
            "salle": "Les Folies Bergère",
            "adresse": "32 rue richer",
            "cp": "75009",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce5318619cbc0a98818664",
            "salle": "Les Folies Bergère",
            "adresse": "32 rue richer",
            "cp": "75009",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce5328619cbc0a98818665",
            "salle": "Les Folies Bergère",
            "adresse": "32 rue richer",
            "cp": "75009",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce5331619cbc0a98818666",
            "salle": "Les Folies Bergère",
            "adresse": "32 rue richer",
            "cp": "75009",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "contemporain"
    ],
    "popularite": [],
    "_id": "5fce43f16697a656d4d4ea5b",
    "nom": "Kadoc",
    "type": "théâtre",
    "description": "S'agit-il des chèques payés par le CE ? du frère de Karadoc dans Kaamelott ? ou bien de tout autre chose ? Découvrez ...",
    "image": "https://files.offi.fr/programmation/1561674/images/200/e8bb2f2c24888e88e3960cd26eb96a7c.jpg",
    "lieux_dates": [
        {
            "_id": "5fce43f16697a656d4d4ea5c",
            "salle": "Théâtre du Rond-Point",
            "adresse": "Rond-Point des Champs-Elysées",
            "cp": "75008",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce536ced0b4a48106760dd",
            "salle": "Théâtre du Rond-Point",
            "adresse": "Rond-Point des Champs-Elysées",
            "cp": "75008",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce5374ed0b4a48106760de",
            "salle": "Théâtre du Rond-Point",
            "adresse": "Rond-Point des Champs-Elysées",
            "cp": "75008",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce537aed0b4a48106760df",
            "salle": "Théâtre du Rond-Point",
            "adresse": "Rond-Point des Champs-Elysées",
            "cp": "75008",
            "date_debut": "2020-12-21T18:00:00.000Z",
            "date_fin": "2020-12-21T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce5382ed0b4a48106760e0",
            "salle": "Théâtre du Rond-Point",
            "adresse": "Rond-Point des Champs-Elysées",
            "cp": "75008",
            "date_debut": "2020-12-22T18:00:00.000Z",
            "date_fin": "2020-12-22T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "contemporain"
    ],
    "popularite": [],
    "_id": "5fce44376697a656d4d4ea5d",
    "nom": "12 hommes en colère",
    "type": "théâtre",
    "description": "Vous allez les voir défiler un par un, racontant leurs névroses, leurs coups de sang, leurs fragilités pour au final arriver sur ...",
    "image": "https://files.offi.fr/programmation/1226561/images/200/85bc887e66d505e9fa8204e3c568d6af.jpg",
    "lieux_dates": [
        {
            "_id": "5fce44376697a656d4d4ea5e",
            "salle": "Théâtre Hébertot",
            "adresse": "78 bis boulevard des Batignolles ",
            "cp": "75017",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce53b4913d39642c87dc7c",
            "salle": "Théâtre Hébertot",
            "adresse": "78 bis boulevard des Batignolles ",
            "cp": "75017",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce53d2913d39642c87dc7d",
            "salle": "Théâtre Hébertot",
            "adresse": "78 bis boulevard des Batignolles ",
            "cp": "75017",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce53dd913d39642c87dc7e",
            "salle": "Théâtre Hébertot",
            "adresse": "78 bis boulevard des Batignolles ",
            "cp": "75017",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce53e5913d39642c87dc7f",
            "salle": "Théâtre Hébertot",
            "adresse": "78 bis boulevard des Batignolles ",
            "cp": "75017",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce53f2913d39642c87dc80",
            "salle": "Théâtre Hébertot",
            "adresse": "78 bis boulevard des Batignolles ",
            "cp": "75017",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "one man show, comédie"
    ],
    "popularite": [],
    "_id": "5fce449e6697a656d4d4ea5f",
    "nom": "Paul Taylor : So British ou presque",
    "type": "théâtre",
    "description": "\"vulez-vu cuché avec moi ce soar ?\" est pour vous la seule phrase connue des anglosaxons ? découvrez cet artiste complet ...",
    "image": "https://files.offi.fr/programmation/1689347/images/200/45d33a850a4b6cc774ecf5ce70e23137.jpg",
    "lieux_dates": [
        {
            "_id": "5fce449e6697a656d4d4ea60",
            "salle": "Le Grand Rex",
            "adresse": "1 boulevard Poissonnière",
            "cp": "75002",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce541cfd96c50c340970da",
            "salle": "Le Grand Rex",
            "adresse": "1 boulevard Poissonnière",
            "cp": "75002",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce543efd96c50c340970db",
            "salle": "Le Grand Rex",
            "adresse": "1 boulevard Poissonnière",
            "cp": "75002",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce5446fd96c50c340970dc",
            "salle": "Le Grand Rex",
            "adresse": "1 boulevard Poissonnière",
            "cp": "75002",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce546efd96c50c340970dd",
            "salle": "Le Grand Rex",
            "adresse": "1 boulevard Poissonnière",
            "cp": "75002",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "classique"
    ],
    "popularite": [],
    "_id": "5fce44f06697a656d4d4ea61",
    "nom": "Orchestre philharmonique et Maîtrise de Radio France et Hilary Hahn",
    "type": "concert",
    "description": "Un petit concert philharmonique pour finir votre longue semaine ? découvrez une oeuvre majestueuse au sein des locaux ...",
    "image": "https://files.offi.fr/lieu/2674/images/200/6d9bca7fe4d2aeafd2e4608b7338c48c.jpg",
    "lieux_dates": [
        {
            "_id": "5fce44f06697a656d4d4ea62",
            "salle": "Maison de la Radio",
            "adresse": "116 avenue du Président Kennedy",
            "cp": "75016",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce549be5995d558876bbc6",
            "salle": "Maison de la Radio",
            "adresse": "116 avenue du Président Kennedy",
            "cp": "75016",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce5539e5995d558876bbc7",
            "salle": "Maison de la Radio",
            "adresse": "116 avenue du Président Kennedy",
            "cp": "75016",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce5541e5995d558876bbc8",
            "salle": "Maison de la Radio",
            "adresse": "116 avenue du Président Kennedy",
            "cp": "75016",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce554ae5995d558876bbc9",
            "salle": "Maison de la Radio",
            "adresse": "116 avenue du Président Kennedy",
            "cp": "75016",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce5553e5995d558876bbca",
            "salle": "Maison de la Radio",
            "adresse": "116 avenue du Président Kennedy",
            "cp": "75016",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "musique française"
    ],
    "popularite": [],
    "_id": "5fce455d6697a656d4d4ea65",
    "nom": "Laurent Voulzy",
    "type": "concert",
    "description": "Au sein de l'accoustique fabuleuse de Saint Susu, allez vous régaler des chansons de...",
    "image": "https://files.offi.fr/programmation/1745331/images/200/aa50eaceb6a0d79cfe18490c23059c1e.jpg",
    "lieux_dates": [
        {
            "_id": "5fce455d6697a656d4d4ea66",
            "salle": "Église Saint-Sulpice",
            "adresse": "Place Saint-Sulpice",
            "cp": "75006",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce55a226a9a244cc0dadd4",
            "salle": "Église Saint-Sulpice",
            "adresse": "Place Saint-Sulpice",
            "cp": "75006",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce55d626a9a244cc0dadd5",
            "salle": "Église Saint-Sulpice",
            "adresse": "Place Saint-Sulpice",
            "cp": "75006",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce55de26a9a244cc0dadd6",
            "salle": "Église Saint-Sulpice",
            "adresse": "Place Saint-Sulpice",
            "cp": "75006",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce55e526a9a244cc0dadd7",
            "salle": "Église Saint-Sulpice",
            "adresse": "Place Saint-Sulpice",
            "cp": "75006",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce560526a9a244cc0dadd8",
            "salle": "Église Saint-Sulpice",
            "adresse": "Place Saint-Sulpice",
            "cp": "75006",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce560e26a9a244cc0dadd9",
            "salle": "Église Saint-Sulpice",
            "adresse": "Place Saint-Sulpice",
            "cp": "75006",
            "date_debut": "2020-12-21T18:00:00.000Z",
            "date_fin": "2020-12-21T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "musique française"
    ],
    "popularite": [],
    "_id": "5fce459c6697a656d4d4ea67",
    "nom": "Francis Cabrel",
    "type": "concert",
    "description": "\"FRANCIIIIIIIIIIIS\" ... ah non pardon, c'est pas Patrick ... une petite corrida ou une envie d'aller dans la cabane ...",
    "image": "https://files.offi.fr/programmation/1751223/images/200/8f6a9f340e9cf83be6dff31a790b3817.jpg",
    "lieux_dates": [
        {
            "_id": "5fce459c6697a656d4d4ea68",
            "salle": "Les Folies Bergère",
            "adresse": "32 rue Richer",
            "cp": "75009",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce56915d016d2970b578d7",
            "salle": "Les Folies Bergère",
            "adresse": "32 rue Richer",
            "cp": "75009",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce56ac5d016d2970b578d8",
            "salle": "Les Folies Bergère",
            "adresse": "32 rue Richer",
            "cp": "75009",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce56d25d016d2970b578d9",
            "salle": "Les Folies Bergère",
            "adresse": "32 rue Richer",
            "cp": "75009",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce56da5d016d2970b578da",
            "salle": "Les Folies Bergère",
            "adresse": "32 rue Richer",
            "cp": "75009",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce56e45d016d2970b578db",
            "salle": "Les Folies Bergère",
            "adresse": "32 rue Richer",
            "cp": "75009",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "musique française"
    ],
    "popularite": [],
    "_id": "5fce45f36697a656d4d4ea69",
    "nom": "Hommage à Georges Brassens",
    "type": "concert",
    "description": "c'est à travers de larges grilles que vous aurez le plaisir de contempler les oeuvres de Brassens. ",
    "image": "https://files.offi.fr/programmation/1658787/images/200/0b60469e2c553a624cc8918c90a02290.jpeg",
    "lieux_dates": [
        {
            "_id": "5fce45f36697a656d4d4ea6a",
            "salle": "Studio Hébertot",
            "adresse": "78 bis bd des Batignolles",
            "cp": "75017",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce57ae042fbe320c796f54",
            "salle": "Studio Hébertot",
            "adresse": "78 bis bd des Batignolles",
            "cp": "75017",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce57e1042fbe320c796f55",
            "salle": "Studio Hébertot",
            "adresse": "78 bis bd des Batignolles",
            "cp": "75017",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "pop",
        "rock"
    ],
    "popularite": [],
    "_id": "5fce46546697a656d4d4ea6b",
    "nom": "One Night of Queen",
    "type": "concert",
    "description": "toniiiight, i'm gonna ... vous l'avez en tête maintenant ? alors cessez de la chantonnez et prenez votre billet pour aller vous déchainer dans la fosse !",
    "image": "https://files.offi.fr/programmation/1727767/images/200/42aeb7cff723bd34f7116af21bcec0ca.jpg",
    "lieux_dates": [
        {
            "_id": "5fce46546697a656d4d4ea6c",
            "salle": "Le Dôme de Paris - Palais des Sports",
            "adresse": "1 place de la Porte de Versaille",
            "cp": "75015",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce586356c6cc06ac6abcb4",
            "salle": "Le Dôme de Paris - Palais des Sports",
            "adresse": "1 place de la Porte de Versaille",
            "cp": "75015",
            "date_debut": "2020-12-21T18:00:00.000Z",
            "date_fin": "2020-12-21T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce586956c6cc06ac6abcb5",
            "salle": "Le Dôme de Paris - Palais des Sports",
            "adresse": "1 place de la Porte de Versaille",
            "cp": "75015",
            "date_debut": "2020-12-22T18:00:00.000Z",
            "date_fin": "2020-12-22T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce587056c6cc06ac6abcb6",
            "salle": "Le Dôme de Paris - Palais des Sports",
            "adresse": "1 place de la Porte de Versaille",
            "cp": "75015",
            "date_debut": "2020-12-23T18:00:00.000Z",
            "date_fin": "2020-12-23T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "musique urbaine"
    ],
    "popularite": [],
    "_id": "5fce46a56697a656d4d4ea6d",
    "nom": "Mister V - MVP Tour",
    "type": "concert",
    "description": "Après l'humour, MV se lance à la chanson ... ça vous fera peut-être rire tout autant :-)",
    "image": "https://files.offi.fr/programmation/1689877/images/200/efeff1549bd95a1f74e5de32c47a610e.jpg",
    "lieux_dates": [
        {
            "_id": "5fce46a56697a656d4d4ea6e",
            "salle": "Le Zénith",
            "adresse": "211 boulevard Jean-Jaurès Parc de La Villette",
            "cp": "75019",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce594b7b83a621444c5dc5",
            "salle": "Le Zénith",
            "adresse": "211 boulevard Jean-Jaurès Parc de La Villette",
            "cp": "75019",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce59527b83a621444c5dc6",
            "salle": "Le Zénith",
            "adresse": "211 boulevard Jean-Jaurès Parc de La Villette",
            "cp": "75019",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce59727b83a621444c5dc7",
            "salle": "Le Zénith",
            "adresse": "211 boulevard Jean-Jaurès Parc de La Villette",
            "cp": "75019",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce59797b83a621444c5dc8",
            "salle": "Le Zénith",
            "adresse": "211 boulevard Jean-Jaurès Parc de La Villette",
            "cp": "75019",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce59817b83a621444c5dc9",
            "salle": "Le Zénith",
            "adresse": "211 boulevard Jean-Jaurès Parc de La Villette",
            "cp": "75019",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "Beaux-arts"
    ],
    "popularite": [],
    "_id": "5fce470f6697a656d4d4ea6f",
    "nom": "Matisse, comme un roman",
    "type": "exposition",
    "description": "Quand Matisse patisse, de métisses épices s'esquissent",
    "image": "https://files.offi.fr/programmation/1640628/images/200/5622f9282e8008bdd4092482a080e759.jpg",
    "lieux_dates": [
        {
            "_id": "5fce470f6697a656d4d4ea70",
            "salle": "Centre Georges-Pompidou",
            "adresse": "Place Georges-Pompidou",
            "cp": "75004",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce59d2013569496411aa31",
            "salle": "Centre Georges-Pompidou",
            "adresse": "Place Georges-Pompidou",
            "cp": "75004",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce59ed013569496411aa32",
            "salle": "Centre Georges-Pompidou",
            "adresse": "Place Georges-Pompidou",
            "cp": "75004",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce59f7013569496411aa33",
            "salle": "Centre Georges-Pompidou",
            "adresse": "Place Georges-Pompidou",
            "cp": "75004",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "Beaux-arts"
    ],
    "popularite": [],
    "_id": "5fce47416697a656d4d4ea71",
    "nom": "Voyage sur la route du Kisokaidō",
    "type": "exposition",
    "description": "Vous aimez les estampes japonaises et les histoires de ronin ?  alors foncez voir ...",
    "image": "https://files.offi.fr/programmation/1711217/images/200/41c77f9a475517aaabce0648cc01f045.jpg",
    "lieux_dates": [
        {
            "_id": "5fce47416697a656d4d4ea72",
            "salle": "Musée Cernuschi",
            "adresse": "7 avenue Vélazquez",
            "cp": "75008",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce5a1e42394708d41f7b8c",
            "salle": "Musée Cernuschi",
            "adresse": "7 avenue Vélazquez",
            "cp": "75008",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce5a2642394708d41f7b8d",
            "salle": "Musée Cernuschi",
            "adresse": "7 avenue Vélazquez",
            "cp": "75008",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "Histoire / Civilisations"
    ],
    "popularite": [],
    "_id": "5fce47726697a656d4d4ea73",
    "nom": "Pierre Dac, Du côté d'ailleurs",
    "type": "exposition",
    "description": "Que dire de cet homme aux si grands talents ...",
    "image": "https://files.offi.fr/programmation/1748200/images/200/d1f00afd4202048cf3af666584b81fe8.jpg",
    "lieux_dates": [
        {
            "_id": "5fce5a5fea644a51dc042615",
            "salle": "Musée d'Art et d'Histoire du Judaïsme",
            "adresse": "71 rue du Temple",
            "cp": "75008",
            "date_debut": "2020-12-16T00:00:00.000Z",
            "date_fin": "2020-12-23T00:00:00.000Z",
            "duree": null
        }
    ],
    "__v": 0
},
{
    "categories": [
        "Histoire / Civilisations"
    ],
    "popularite": [],
    "_id": "5fce47b06697a656d4d4ea75",
    "nom": "Paris 1910-1937 : promenades dans les collections Albert-Kahn",
    "type": "exposition",
    "description": "En plus d'avoir un joli parc, découvrez ses collections ",
    "image": "https://files.offi.fr/programmation/1691993/images/200/ee149bda591e634083d674939ee48978.png",
    "lieux_dates": [
        {
            "_id": "5fce5b020aafad2e2cef5050",
            "salle": "Cité de l'Architecture et du Patrimoine",
            "adresse": "1 place du Trocadéro ",
            "cp": "75016",
            "date_debut": "2020-12-16T00:00:00.000Z",
            "date_fin": "2020-12-23T00:00:00.000Z",
            "duree": null
        }
    ],
    "__v": 0
},
{
    "categories": [
        "Beaux-arts"
    ],
    "popularite": [],
    "_id": "5fce47f76697a656d4d4ea77",
    "nom": "Léon Spilliaert (1881-1946), Lumière et solitude",
    "type": "exposition",
    "description": "Vous avez lu serpillère ? c'est tout comme, prévoyez votre soirée car après cette exposition, vous serez lessivé.e de tant de beauté !",
    "image": "https://files.offi.fr/programmation/1644512/images/200/e8c38dae834adbbf33810fefc4008b8a.jpg",
    "lieux_dates": [
        {
            "_id": "5fce5b270ebc4b2770fcf0c1",
            "salle": "Musée d'Orsay",
            "adresse": "1 rue de la Légion d'Honneur",
            "cp": "75007",
            "date_debut": "2020-12-16T00:00:00.000Z",
            "date_fin": "2020-12-23T00:00:00.000Z",
            "duree": null
        }
    ],
    "__v": 0
},
{
    "categories": [
        "comédie"
    ],
    "popularite": [],
    "_id": "5fce4f8cbdb5fec20da3d7ba",
    "nom": "Adieu les cons",
    "type": "film",
    "description": "film de DUPONTEL sur la gestion des émotions avec ...",
    "image": "https://files.offi.fr/evenement/79130/images/200/7d2f56a063010e6cadb73e326a4e3056.jpg",
    "lieux_dates": [
        {
            "_id": "5fce2f0e78b44832e81463c2",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T10:00:00.000Z",
            "date_fin": "2020-12-15T12:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce3e7619af0e4c706164ae",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T10:00:00.000Z",
            "date_fin": "2020-12-17T12:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4acc6697a656d4d4ea79",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-15T14:00:00.000Z",
            "date_fin": "2020-12-15T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ae76697a656d4d4ea7a",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b1c6697a656d4d4ea7b",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b336697a656d4d4ea7c",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T14:00:00.000Z",
            "date_fin": "2020-12-16T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b696697a656d4d4ea7d",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b796697a656d4d4ea7e",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b876697a656d4d4ea7f",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T14:00:00.000Z",
            "date_fin": "2020-12-17T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b906697a656d4d4ea80",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b9e6697a656d4d4ea81",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ba86697a656d4d4ea82",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T14:00:00.000Z",
            "date_fin": "2020-12-18T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4bd26697a656d4d4ea83",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4be26697a656d4d4ea84",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4bf96697a656d4d4ea85",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T14:00:00.000Z",
            "date_fin": "2020-12-19T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c036697a656d4d4ea86",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c186697a656d4d4ea87",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T11:00:00.000Z",
            "date_fin": "2020-12-20T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c1f6697a656d4d4ea88",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T14:00:00.000Z",
            "date_fin": "2020-12-20T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c276697a656d4d4ea89",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c336697a656d4d4ea8a",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T11:00:00.000Z",
            "date_fin": "2020-12-21T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c426697a656d4d4ea8b",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T14:00:00.000Z",
            "date_fin": "2020-12-21T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c4b6697a656d4d4ea8c",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T18:00:00.000Z",
            "date_fin": "2020-12-21T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c566697a656d4d4ea8d",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-22T11:00:00.000Z",
            "date_fin": "2020-12-22T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cb86697a656d4d4ea8e",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T14:00:00.000Z",
            "date_fin": "2020-12-15T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cc16697a656d4d4ea8f",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ccd6697a656d4d4ea90",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cd96697a656d4d4ea91",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T14:00:00.000Z",
            "date_fin": "2020-12-16T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d246697a656d4d4ea92",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d386697a656d4d4ea93",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d6a6697a656d4d4ea94",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T14:00:00.000Z",
            "date_fin": "2020-12-17T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d736697a656d4d4ea95",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d856697a656d4d4ea96",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d916697a656d4d4ea97",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T14:00:00.000Z",
            "date_fin": "2020-12-18T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dc16697a656d4d4ea98",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dd26697a656d4d4ea99",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4de06697a656d4d4ea9a",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T14:00:00.000Z",
            "date_fin": "2020-12-19T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4df06697a656d4d4ea9b",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dff6697a656d4d4ea9c",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-20T11:00:00.000Z",
            "date_fin": "2020-12-20T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e386697a656d4d4ea9d",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-15T11:00:00.000Z",
            "date_fin": "2020-12-15T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e446697a656d4d4ea9e",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e4d6697a656d4d4ea9f",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e546697a656d4d4eaa0",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e5e6697a656d4d4eaa1",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e7e6697a656d4d4eaa2",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-15T11:00:00.000Z",
            "date_fin": "2020-12-15T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e866697a656d4d4eaa3",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e8d6697a656d4d4eaa4",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4eb26697a656d4d4eaa5",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4eba6697a656d4d4eaa6",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "drame"
    ],
    "popularite": [
        "5fcf5c36c8e4a03a74b74e72"
    ],
    "_id": "5fce4ff2bdb5fec20da3d7bb",
    "nom": "Dans un jardin qu'on dirait éternel",
    "type": "film",
    "description": "Film dramatique sur la gestion d'une relation ...",
    "image": "https://files.offi.fr/evenement/73878/images/200/953f4b72da1d2c183217cb36f0af6ba5.jpg",
    "lieux_dates": [
        {
            "_id": "5fce2f0e78b44832e81463c2",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T10:00:00.000Z",
            "date_fin": "2020-12-15T12:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce3e7619af0e4c706164ae",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T10:00:00.000Z",
            "date_fin": "2020-12-17T12:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4acc6697a656d4d4ea79",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-15T14:00:00.000Z",
            "date_fin": "2020-12-15T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ae76697a656d4d4ea7a",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b1c6697a656d4d4ea7b",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b336697a656d4d4ea7c",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T14:00:00.000Z",
            "date_fin": "2020-12-16T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b696697a656d4d4ea7d",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b796697a656d4d4ea7e",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b876697a656d4d4ea7f",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T14:00:00.000Z",
            "date_fin": "2020-12-17T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b906697a656d4d4ea80",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b9e6697a656d4d4ea81",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ba86697a656d4d4ea82",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T14:00:00.000Z",
            "date_fin": "2020-12-18T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4bd26697a656d4d4ea83",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4be26697a656d4d4ea84",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4bf96697a656d4d4ea85",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T14:00:00.000Z",
            "date_fin": "2020-12-19T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c036697a656d4d4ea86",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c186697a656d4d4ea87",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T11:00:00.000Z",
            "date_fin": "2020-12-20T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c1f6697a656d4d4ea88",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T14:00:00.000Z",
            "date_fin": "2020-12-20T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c276697a656d4d4ea89",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c336697a656d4d4ea8a",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T11:00:00.000Z",
            "date_fin": "2020-12-21T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c426697a656d4d4ea8b",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T14:00:00.000Z",
            "date_fin": "2020-12-21T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c4b6697a656d4d4ea8c",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T18:00:00.000Z",
            "date_fin": "2020-12-21T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c566697a656d4d4ea8d",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-22T11:00:00.000Z",
            "date_fin": "2020-12-22T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cb86697a656d4d4ea8e",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T14:00:00.000Z",
            "date_fin": "2020-12-15T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cc16697a656d4d4ea8f",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ccd6697a656d4d4ea90",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cd96697a656d4d4ea91",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T14:00:00.000Z",
            "date_fin": "2020-12-16T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d246697a656d4d4ea92",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d386697a656d4d4ea93",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d6a6697a656d4d4ea94",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T14:00:00.000Z",
            "date_fin": "2020-12-17T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d736697a656d4d4ea95",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d856697a656d4d4ea96",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d916697a656d4d4ea97",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T14:00:00.000Z",
            "date_fin": "2020-12-18T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dc16697a656d4d4ea98",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dd26697a656d4d4ea99",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4de06697a656d4d4ea9a",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T14:00:00.000Z",
            "date_fin": "2020-12-19T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4df06697a656d4d4ea9b",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dff6697a656d4d4ea9c",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-20T11:00:00.000Z",
            "date_fin": "2020-12-20T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e386697a656d4d4ea9d",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-15T11:00:00.000Z",
            "date_fin": "2020-12-15T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e446697a656d4d4ea9e",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e4d6697a656d4d4ea9f",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e546697a656d4d4eaa0",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e5e6697a656d4d4eaa1",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e7e6697a656d4d4eaa2",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-15T11:00:00.000Z",
            "date_fin": "2020-12-15T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e866697a656d4d4eaa3",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e8d6697a656d4d4eaa4",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4eb26697a656d4d4eaa5",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4eba6697a656d4d4eaa6",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "comédie"
    ],
    "popularite": [],
    "_id": "5fce502dbdb5fec20da3d7bc",
    "nom": "Le Bonheur des uns...",
    "type": "film",
    "description": "fera surement votre bonheur !",
    "image": "https://files.offi.fr/evenement/79306/images/200/b93fa6806bbc2d54396628a7b11e257f.jpg",
    "lieux_dates": [
        {
            "_id": "5fce2f0e78b44832e81463c2",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T10:00:00.000Z",
            "date_fin": "2020-12-15T12:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce3e7619af0e4c706164ae",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T10:00:00.000Z",
            "date_fin": "2020-12-17T12:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4acc6697a656d4d4ea79",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-15T14:00:00.000Z",
            "date_fin": "2020-12-15T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ae76697a656d4d4ea7a",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b1c6697a656d4d4ea7b",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b336697a656d4d4ea7c",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T14:00:00.000Z",
            "date_fin": "2020-12-16T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b696697a656d4d4ea7d",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b796697a656d4d4ea7e",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b876697a656d4d4ea7f",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T14:00:00.000Z",
            "date_fin": "2020-12-17T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b906697a656d4d4ea80",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b9e6697a656d4d4ea81",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ba86697a656d4d4ea82",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T14:00:00.000Z",
            "date_fin": "2020-12-18T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4bd26697a656d4d4ea83",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4be26697a656d4d4ea84",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4bf96697a656d4d4ea85",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T14:00:00.000Z",
            "date_fin": "2020-12-19T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c036697a656d4d4ea86",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c186697a656d4d4ea87",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T11:00:00.000Z",
            "date_fin": "2020-12-20T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c1f6697a656d4d4ea88",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T14:00:00.000Z",
            "date_fin": "2020-12-20T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c276697a656d4d4ea89",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c336697a656d4d4ea8a",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T11:00:00.000Z",
            "date_fin": "2020-12-21T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c426697a656d4d4ea8b",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T14:00:00.000Z",
            "date_fin": "2020-12-21T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c4b6697a656d4d4ea8c",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T18:00:00.000Z",
            "date_fin": "2020-12-21T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c566697a656d4d4ea8d",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-22T11:00:00.000Z",
            "date_fin": "2020-12-22T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cb86697a656d4d4ea8e",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T14:00:00.000Z",
            "date_fin": "2020-12-15T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cc16697a656d4d4ea8f",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ccd6697a656d4d4ea90",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cd96697a656d4d4ea91",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T14:00:00.000Z",
            "date_fin": "2020-12-16T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d246697a656d4d4ea92",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d386697a656d4d4ea93",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d6a6697a656d4d4ea94",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T14:00:00.000Z",
            "date_fin": "2020-12-17T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d736697a656d4d4ea95",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d856697a656d4d4ea96",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d916697a656d4d4ea97",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T14:00:00.000Z",
            "date_fin": "2020-12-18T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dc16697a656d4d4ea98",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dd26697a656d4d4ea99",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4de06697a656d4d4ea9a",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T14:00:00.000Z",
            "date_fin": "2020-12-19T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4df06697a656d4d4ea9b",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dff6697a656d4d4ea9c",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-20T11:00:00.000Z",
            "date_fin": "2020-12-20T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e386697a656d4d4ea9d",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-15T11:00:00.000Z",
            "date_fin": "2020-12-15T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e446697a656d4d4ea9e",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e4d6697a656d4d4ea9f",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e546697a656d4d4eaa0",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e5e6697a656d4d4eaa1",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e7e6697a656d4d4eaa2",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-15T11:00:00.000Z",
            "date_fin": "2020-12-15T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e866697a656d4d4eaa3",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e8d6697a656d4d4eaa4",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4eb26697a656d4d4eaa5",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4eba6697a656d4d4eaa6",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "drame"
    ],
    "popularite": [],
    "_id": "5fce5070bdb5fec20da3d7bd",
    "nom": "Petit Pays",
    "type": "film",
    "description": "Inspiré du livre de Foé ...",
    "image": "https://files.offi.fr/evenement/78407/images/200/14d4f207ad9eaff63fdaa68f0133f322.jpg",
    "lieux_dates": [
        {
            "_id": "5fce2f0e78b44832e81463c2",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T10:00:00.000Z",
            "date_fin": "2020-12-15T12:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce3e7619af0e4c706164ae",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T10:00:00.000Z",
            "date_fin": "2020-12-17T12:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4acc6697a656d4d4ea79",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-15T14:00:00.000Z",
            "date_fin": "2020-12-15T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ae76697a656d4d4ea7a",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b1c6697a656d4d4ea7b",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b336697a656d4d4ea7c",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T14:00:00.000Z",
            "date_fin": "2020-12-16T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b696697a656d4d4ea7d",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b796697a656d4d4ea7e",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b876697a656d4d4ea7f",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T14:00:00.000Z",
            "date_fin": "2020-12-17T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b906697a656d4d4ea80",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b9e6697a656d4d4ea81",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ba86697a656d4d4ea82",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T14:00:00.000Z",
            "date_fin": "2020-12-18T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4bd26697a656d4d4ea83",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4be26697a656d4d4ea84",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4bf96697a656d4d4ea85",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T14:00:00.000Z",
            "date_fin": "2020-12-19T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c036697a656d4d4ea86",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c186697a656d4d4ea87",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T11:00:00.000Z",
            "date_fin": "2020-12-20T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c1f6697a656d4d4ea88",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T14:00:00.000Z",
            "date_fin": "2020-12-20T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c276697a656d4d4ea89",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c336697a656d4d4ea8a",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T11:00:00.000Z",
            "date_fin": "2020-12-21T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c426697a656d4d4ea8b",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T14:00:00.000Z",
            "date_fin": "2020-12-21T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c4b6697a656d4d4ea8c",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T18:00:00.000Z",
            "date_fin": "2020-12-21T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c566697a656d4d4ea8d",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-22T11:00:00.000Z",
            "date_fin": "2020-12-22T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cb86697a656d4d4ea8e",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T14:00:00.000Z",
            "date_fin": "2020-12-15T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cc16697a656d4d4ea8f",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ccd6697a656d4d4ea90",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cd96697a656d4d4ea91",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T14:00:00.000Z",
            "date_fin": "2020-12-16T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d246697a656d4d4ea92",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d386697a656d4d4ea93",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d6a6697a656d4d4ea94",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T14:00:00.000Z",
            "date_fin": "2020-12-17T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d736697a656d4d4ea95",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d856697a656d4d4ea96",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d916697a656d4d4ea97",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T14:00:00.000Z",
            "date_fin": "2020-12-18T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dc16697a656d4d4ea98",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dd26697a656d4d4ea99",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4de06697a656d4d4ea9a",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T14:00:00.000Z",
            "date_fin": "2020-12-19T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4df06697a656d4d4ea9b",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dff6697a656d4d4ea9c",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-20T11:00:00.000Z",
            "date_fin": "2020-12-20T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e386697a656d4d4ea9d",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-15T11:00:00.000Z",
            "date_fin": "2020-12-15T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e446697a656d4d4ea9e",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e4d6697a656d4d4ea9f",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e546697a656d4d4eaa0",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e5e6697a656d4d4eaa1",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e7e6697a656d4d4eaa2",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-15T11:00:00.000Z",
            "date_fin": "2020-12-15T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e866697a656d4d4eaa3",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e8d6697a656d4d4eaa4",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4eb26697a656d4d4eaa5",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4eba6697a656d4d4eaa6",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
},
{
    "categories": [
        "comédie"
    ],
    "popularite": [],
    "_id": "5fce50bfbdb5fec20da3d7be",
    "nom": "Effacer l'historique",
    "type": "film",
    "description": "... sinon tous vos secrets seront découverts ! ce film retrace l'histoire d'amis qui pensent être sincères entre eux, mais leur historique, lors d'un jeu un soir, va révéler leurs vrais secrets ",
    "image": "https://files.offi.fr/evenement/79310/images/200/4501c939178d73695a5a0f93bb2e77d4.jpg",
    "lieux_dates": [
        {
            "_id": "5fce2f0e78b44832e81463c2",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T10:00:00.000Z",
            "date_fin": "2020-12-15T12:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce3e7619af0e4c706164ae",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T10:00:00.000Z",
            "date_fin": "2020-12-17T12:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4acc6697a656d4d4ea79",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-15T14:00:00.000Z",
            "date_fin": "2020-12-15T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ae76697a656d4d4ea7a",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b1c6697a656d4d4ea7b",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b336697a656d4d4ea7c",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T14:00:00.000Z",
            "date_fin": "2020-12-16T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b696697a656d4d4ea7d",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b796697a656d4d4ea7e",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b876697a656d4d4ea7f",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T14:00:00.000Z",
            "date_fin": "2020-12-17T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b906697a656d4d4ea80",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4b9e6697a656d4d4ea81",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ba86697a656d4d4ea82",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T14:00:00.000Z",
            "date_fin": "2020-12-18T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4bd26697a656d4d4ea83",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4be26697a656d4d4ea84",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4bf96697a656d4d4ea85",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T14:00:00.000Z",
            "date_fin": "2020-12-19T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c036697a656d4d4ea86",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c186697a656d4d4ea87",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T11:00:00.000Z",
            "date_fin": "2020-12-20T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c1f6697a656d4d4ea88",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T14:00:00.000Z",
            "date_fin": "2020-12-20T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c276697a656d4d4ea89",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-20T18:00:00.000Z",
            "date_fin": "2020-12-20T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c336697a656d4d4ea8a",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T11:00:00.000Z",
            "date_fin": "2020-12-21T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c426697a656d4d4ea8b",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T14:00:00.000Z",
            "date_fin": "2020-12-21T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c4b6697a656d4d4ea8c",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-21T18:00:00.000Z",
            "date_fin": "2020-12-21T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4c566697a656d4d4ea8d",
            "salle": "UGC Bercy",
            "adresse": "2 Cour Saint-Emilion",
            "cp": "75012",
            "date_debut": "2020-12-22T11:00:00.000Z",
            "date_fin": "2020-12-22T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cb86697a656d4d4ea8e",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T14:00:00.000Z",
            "date_fin": "2020-12-15T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cc16697a656d4d4ea8f",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-15T18:00:00.000Z",
            "date_fin": "2020-12-15T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4ccd6697a656d4d4ea90",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4cd96697a656d4d4ea91",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T14:00:00.000Z",
            "date_fin": "2020-12-16T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d246697a656d4d4ea92",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-16T18:00:00.000Z",
            "date_fin": "2020-12-16T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d386697a656d4d4ea93",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d6a6697a656d4d4ea94",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T14:00:00.000Z",
            "date_fin": "2020-12-17T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d736697a656d4d4ea95",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-17T18:00:00.000Z",
            "date_fin": "2020-12-17T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d856697a656d4d4ea96",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4d916697a656d4d4ea97",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T14:00:00.000Z",
            "date_fin": "2020-12-18T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dc16697a656d4d4ea98",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-18T18:00:00.000Z",
            "date_fin": "2020-12-18T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dd26697a656d4d4ea99",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4de06697a656d4d4ea9a",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T14:00:00.000Z",
            "date_fin": "2020-12-19T16:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4df06697a656d4d4ea9b",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-19T18:00:00.000Z",
            "date_fin": "2020-12-19T20:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4dff6697a656d4d4ea9c",
            "salle": "UGC Chatelet",
            "adresse": "101 Rue Berger",
            "cp": "75001",
            "date_debut": "2020-12-20T11:00:00.000Z",
            "date_fin": "2020-12-20T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e386697a656d4d4ea9d",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-15T11:00:00.000Z",
            "date_fin": "2020-12-15T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e446697a656d4d4ea9e",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e4d6697a656d4d4ea9f",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e546697a656d4d4eaa0",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e5e6697a656d4d4eaa1",
            "salle": "UGC Bordeaux",
            "adresse": "13-15 Rue Georges Bonnac",
            "cp": "33000",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e7e6697a656d4d4eaa2",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-15T11:00:00.000Z",
            "date_fin": "2020-12-15T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e866697a656d4d4eaa3",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-16T11:00:00.000Z",
            "date_fin": "2020-12-16T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4e8d6697a656d4d4eaa4",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-17T11:00:00.000Z",
            "date_fin": "2020-12-17T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4eb26697a656d4d4eaa5",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-18T11:00:00.000Z",
            "date_fin": "2020-12-18T13:00:00.000Z",
            "duree": 120
        },
        {
            "_id": "5fce4eba6697a656d4d4eaa6",
            "salle": "UGC Lille",
            "adresse": "40 Rue de Béthune",
            "cp": "59800",
            "date_debut": "2020-12-19T11:00:00.000Z",
            "date_fin": "2020-12-19T13:00:00.000Z",
            "duree": 120
        }
    ],
    "__v": 0
}]);
//   useEffect(() => {
//     const getEvents = async () => {
//       const data = await fetch(`http://192.168.1.17:3000/pullEvents`)
//       const body = await data.json()
//       setEventsList(body)
//     }
//     getEvents()
//   }, [])

  let tokenOK = () => {
    if (props.token) {
      console.log("TOKEN", props.token)
      props.navigation.navigate('AfficheSpecialScreen')
    } else {
      console.log('token absent')
      props.navigation.navigate('AfficheSpecialScreen')
    }
  }

  var cine = eventsList.map((x,i) => {
    if (x.type === 'film') {
      console.log("CINE>>>>>",x._id)
      return (

        <Card key={i}
          containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }}>
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => {
              console.log(">>>>>>>>>>>>>>>>>>>>>>IMAGE CINEMA", x._id);
              props.onAddIdEvent(x._id);
              tokenOK();
            }}
          />
          <AntDesign
            name="heart"
            size={25}
            color='#D70026'
            style={{ position: 'absolute', top: 5, left: 140 }}
            onPress={() => console.log("LIKÉ")}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 5 }}>{x.nom}</Text>
          <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text>
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value={x.categories[0]} />
          </View>
        </Card>
      )
    }
  })

  var theatre = eventsList.map((x,i) => {
    if (x.type === 'théâtre') {
      console.log("THEATRE>>>>>",x._id)
      return (

        <Card key={i} containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }} >
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => {
              console.log(">>>>>>>>>>>>>>>>>>>>>>IMAGE THEATRE");
              props.onAddIdEvent(x._id);
              tokenOK();
            }}          
          />
          <AntDesign
            name="heart"
            size={25}
            color='#D70026'
            style={{ position: 'absolute', top: 5, left: 140 }}
            onPress={() => console.log("LIKÉ")}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 1 }}>{x.nom}</Text>
          <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text>
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value={x.categories[0]} />
          </View>
        </Card>
      )
    }
  })

  var expos = eventsList.map((x,i) => {
    if (x.type === 'exposition') {
      console.log("EXPOS>>>>>",x._id)
      return (

        <Card  key={i} containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }} >
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => {
              console.log(">>>>>>>>>>>>>>>>>>>>>>IMAGE EXPOS");
              props.onAddIdEvent(x._id);
              tokenOK();
            }}          
          />
          <AntDesign
            name="heart"
            size={25}
            color='#D70026'
            style={{ position: 'absolute', top: 5, left: 140 }}
            onPress={() => console.log("LIKÉ")}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 1 }}>{x.nom}</Text>
          <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text>
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value={x.categories[0]} />
          </View>
        </Card>
      )
    }
  })

  var concert = eventsList.map((x,i) => {
    if (x.type === 'concert') {
      console.log("CONCERT>>>>>",x._id)
      return (

        <Card  key={i} containerStyle={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, maxWidth: '47%', backgroundColor: '#F8F5F2' }} >
          <Card.Image
            style={{ width: 170, height: 230 }}
            source={{ uri: x.image }}
            resizeMode="cover"
            onPress={() => {
              console.log(">>>>>>>>>>>>>>>>>>>>>>IMAGE CONCERT");
              props.onAddIdEvent(x._id);
              tokenOK();
            }}          
          />
          <AntDesign
            name="heart"
            size={25}
            color='#D70026'
            style={{ position: 'absolute', top: 5, left: 140 }}
            onPress={() => console.log("LIKÉ")}
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: "80%", padding: 1 }}>{x.nom}</Text>
          <Text style={{ margin: 2 }}>Une ville</Text><Text> 200m.</Text>
          <View style={{ alignItems: 'center', margin: 2 }}>
            <Badge badgeStyle={{ backgroundColor: '#16253D', margin: 1 }} value={x.categories[0]} />
          </View>
        </Card>
      )
    }
  })

  return (
    <View style={{ flex: 1 }}>

      <ImageBackground source={imageBackground} style={styles.imageBackground}>

      <View style={{ flexDirection: 'row', width: 300, cover: 'width', marginTop: 5, paddingBottom: 0, marginBottom:0 }}>
            <Input
              placeholder="CHERCHER"
              inputStyle={{ borderWidth: 1, borderColor: 'grey', backgroundColor: 'white', marginBottom:0 }}
            />
            <Button
              type='outline'
              title="Filtres"
              buttonStyle={{ backgroundColor: "#D70026", marginBottom:0 }}
              titleStyle={{ color: 'white' }}
              onPress={() => {
                console.log(">>>>>>>>>>>>>>>>>>>>>>IMAGE CINEMA");
                props.onAddIdEvent(x._id);
                tokenOK();
              }}            
            />
          </View>

          <BottomSheet isVisible={isVisible}>
            {FilterList.map((l, i) => (
              <ListItem key={i} containerStyle={{ maxHeight: "100%" }} onPress={l.onPress}>
                <ListItem.Content>
                  <ListItem.Title style={{ fontWeight: 'bold' }} onPress={() => console.log(l.title)}>{l.title}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </BottomSheet>

          <ScrollView style={{ flex: 2 }}>

            <Text
              style={{
                fontSize: 22,
                margin: 7,
                fontWeight: 'bold'
              }}
              onPress={() => { console.log("OnPress CINEMA OK") }}>
              CINEMA
            </Text>

              <View style={{ backgroundColor: '#3C6382', paddingBottom: 15 }}>
                <ScrollView horizontal={true}>
                  {cine}
                </ScrollView>
              </View>

           
            <Text
              style={{
                fontSize: 22,
                margin: 7,
                fontWeight: 'bold'
              }}
              onPress={() => { console.log("OnPress THÉÂTRE OK") }}>
              THÉÂTRE
            </Text>

              <View style={{ backgroundColor: '#E55039', paddingBottom: 15 }}>
                <ScrollView horizontal={true}>
                  {theatre}
                </ScrollView>
              </View>


            <Text
              style={{
                fontSize: 22,
                margin: 7,
                fontWeight: 'bold'
              }}
              onPress={() => { console.log("OnPress EXPOS OK") }}>
              EXPOSITIONS & MUSÉES
            </Text>

              <View style={{ backgroundColor: '#F6E58D', paddingBottom: 15 }}>
                <ScrollView horizontal={true}>
                  {expos}
                </ScrollView>
              </View>

            <Text
              style={{
                fontSize: 22,
                margin: 7,
                fontWeight: 'bold'
              }}
              onPress={() => { console.log("OnPress CONCERTS OK") }}>
              CONCERT
            </Text>

              <View style={{ backgroundColor: '#3C6382', paddingBottom: 15 }}>
                <ScrollView horizontal={true}>
                  {concert}
                </ScrollView>
              </View>

          </ScrollView>
      </ImageBackground>
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return {
            onAddIdEvent: function (idEvent) {
            dispatch({ type: 'addIdEvent', idEvent: idEvent });
            // onAddCurrentCity: function async (currentCity) {
            //   despatch({ type: 'addCurrentCity', currentCity: currentCity})
            // }
          }
  }
}

function mapStateToProps(state) {
  return { token: state.tokenReducer, currentCity: state.currentCityReducer }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AfficheMainScreen);