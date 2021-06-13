import React, {useState}  from "react";
import { View, TouchableOpacity} from 'react-native';
import { Text } from 'react-native-elements';


//Initialisation de Redux
import SignInScreen from "./SignInScreen";
import SignUpScreen from './SignUpScreen';

import { connect } from 'react-redux';


function Connexion() {


    const [index, setIndex] = useState(true)

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
                <TouchableOpacity style={styleTab} onPress={() => setIndex( true )}>
                    <Text 
                    style={ index ? {color : '#FF8200'} : {color : '#FFFFFF'} }
                    >
                        Sign In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleTab} onPress={() => setIndex( false )}>
                    <Text 
                    style={ ! index ? {color : '#FF8200'} : {color : '#FFFFFF'} }
                    >
                        Sign Up
                    </Text>
                </TouchableOpacity>
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