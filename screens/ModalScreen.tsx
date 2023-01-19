import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as Location from 'expo-location';
import axios from 'axios';
// navigator.geolocation = require('react-native-geolocation-service');

import React, {useContext, useEffect, useState} from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {LoginContext} from "../context/LoginContext";
import {Button} from "native-base";
import firebase from "firebase/compat";
import {useRoute} from "@react-navigation/native";
// @ts-ignore
export default function ModalScreen({navigation}) {

    const route = useRoute()
    // @ts-ignore
    const fromScreen = route.params?.from;

    const db = firebase.firestore();
    const currentUser = firebase.auth().currentUser

    const { isLoggedIn, login, logout, updatePickupAddress } = useContext(LoginContext);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                // @ts-ignore
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            // @ts-ignore
            setLocation(location);

            const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.coords.latitude},${location.coords.longitude}&radius=5000&key=AIzaSyBAypE0X4dlD6ESi1EXuE__AVhm45bTEOQ`);
            // console.log(response.data);
        })();

    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
    <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder='Search location'
          enableHighAccuracyLocation={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // @ts-ignore
              updatePickupAddress(details?.description)
              // @ts-ignore
              const washingtonRef = db.collection("users").doc(currentUser.uid);

// Set the "capital" field of the city 'DC'
              return washingtonRef.update({
                  // @ts-ignore
                  pickUpAddress: details?.description
              })
                  .then(function() {
                      console.log("Document successfully updated!");
                  })
                  .catch(function(error) {
                      // The document probably doesn't exist.
                      console.error("Error updating document: ", error);
                  });


          }}
          // currentLocation={true}
          // currentLocationLabel='Current location'

          query={{
            key: 'AIzaSyBAypE0X4dlD6ESi1EXuE__AVhm45bTEOQ',
            language: 'en',
          }}
          styles={{
              textInputContainer: {
                  backgroundColor: "rgba(0,0,0,0)",
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  marginHorizontal: 8,
                  marginTop: 5,
                  padding:10
              },
              textInput: {
                  marginLeft: 0,
                  marginRight: 0,
                  height: 50,
                  color: "#5d5d5d",
                  fontSize: 16,
                  borderColor:"#444",
                  borderWidth:1,

              },
              description: { marginHorizontal:8},

              predefinedPlacesDescription: {
                  color: "#1faadb",
              },
          }}
      />

        <View style={{bottom:30, marginHorizontal:30}}>
            <Button style={{backgroundColor:"#1D1E4E"}} onPress={()=>{navigation.navigate(fromScreen)}}>
                <Text style={{color:"#FFF"}}>Done</Text>
            </Button>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
