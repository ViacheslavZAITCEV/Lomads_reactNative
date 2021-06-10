import React, {useState}  from "react";
import { View} from 'react-native';
import { Text } from 'react-native-elements';


//Initialisation de Redux
import SignInScreen from "./SignInScreen";
import SignUpScreen from './SignUpScreen';

import { connect } from 'react-redux';


function Connexion() {


    const [index, setIndex] = useState(true)
    // const active ={
    //     color : '#FF8200',
    //     fontSize: 16,
    //     fontWeight: 'bold'
    // }
    // const inactive ={
    //     color : '#FFFFFF',
    //     fontSize: 16,
    //     fontWeight: 'bold'
    // }
    const styleTab ={
        flex: 1,
        backgroundColor: '#353C3F',
        alignItems: "center",
        justifyContent : "center",
        height: 50,
    }
    
    return (
        <View style={{ flex: 1}}>
            <View
            style={{
                flex: 0.45,
                flexDirection: "row",
                alignItems: "baseline",
            }}
            >
                <View style={styleTab}>
                    <Text 
                    style={ index ? {color : '#FF8200'} : {color : '#FFFFFF'} }
                    onPress={() => setIndex( true )}
                    >
                        Sign In
                    </Text>
                </View>
                <View style={styleTab }>
                    <Text 
                    style={ ! index ? {color : '#FF8200'} : {color : '#FFFFFF'} }
                    onPress={() => setIndex( false )}
                    >
                        Sign Up
                    </Text>
                </View>
            </View>
            <View 
            // style={{ flex : 1}}
            >
                {index 
                ? <SignInScreen />
                : <SignUpScreen />
                }
            </View>
        </View>
    )
};
// activeTintColor: '#FFEC5C',
// inactiveTintColor: '#F8F5F2',
// activeBackgroundColor: '#353C3F',
// inactiveBackgroundColor: '#353C3F',

export default Connexion;