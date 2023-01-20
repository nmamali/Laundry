import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import React, {useContext, useEffect, useState} from "react";
import {Button, Checkbox, Icon, Input, Radio, ScrollView} from "native-base";
import {AntDesign} from "@expo/vector-icons";
import {TotalsFooter} from "./components/TotalsFooter";
import {LoginContext} from "../../context/LoginContext";
import Firebase from "../../Firebase";
import { getDatabase, ref, onValue} from "firebase/database";
import firebase from "firebase/compat";
import database = firebase.database;


export default function PaymentScreen({ navigation }: RootStackScreenProps<'Payment'>) {
    const { pickupAddress, orderObject, updateOrderItems } = useContext(LoginContext);
    const currentUser = firebase.auth().currentUser
    // const db = getDatabase();
    //
    // useEffect(() => {
    //     const onValueChange = database()
    //         .ref(`/orders`)
    //         .on('value', snapshot => {
    //             alert("A")
    //             console.log('User data: ', snapshot.val());
    //         });
    //     // Stop listening for updates when no longer required
    //     return () => database().ref(`/orders`).off('value', onValueChange);
    // }, []);

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={{backgroundColor:"#FFF", flexDirection:"row", borderRadius:13, marginTop: 10, height:"10%", paddingHorizontal: 17}}>
                <AntDesign name={"checkcircleo"} size={27} style={{alignSelf:"center"}} color={"#5EBC9D"}/>
                <View style={{flex:1, alignContent:"center", alignItems:"center", alignSelf:"center"}}>
                    <Text
                        lightColor={"#1D1E4E"}
                        style={{fontSize: 20, fontWeight:"bold", alignContent:"center", alignSelf:"center", textAlign:"center"}}>
                        Cash on delivery
                    </Text>
                </View>

            </View>

            <View style={{backgroundColor:"#FFF", flexDirection:"row", borderRadius:13, marginTop: 10, height:"10%", paddingHorizontal: 17}}>
                <AntDesign name={"checkcircleo"} size={27} style={{alignSelf:"center"}} color={"lightgrey"}/>
                <Image
                    style={styles.servicesImage}
                    source={require('../../assets/payments/cards.png')}
                />
            </View>

            <View style={{backgroundColor:"#FFF", flexDirection:"row", borderRadius:13, marginTop: 10, height:"10%", paddingHorizontal: 17}}>
                <AntDesign name={"checkcircleo"} size={27} style={{alignSelf:"center"}} color={"lightgrey"}/>
                <Image
                    style={styles.servicesImage}
                    source={require('../../assets/payments/ebucks.png')}
                />
            </View>

            <View style={{backgroundColor:"#FFF", flexDirection:"row", borderRadius:13, marginTop: 10, height:"10%", paddingHorizontal: 17}}>
                <AntDesign name={"checkcircleo"} size={27} style={{alignSelf:"center"}} color={"lightgrey"}/>
                <Image
                    style={styles.servicesImage}
                    source={require('../../assets/payments/ozow.png')}
                />
            </View>

            <View style={{backgroundColor:"#FFF", flexDirection:"row", borderRadius:13, marginTop: 10, height:"10%", paddingHorizontal: 17}}>
                <AntDesign name={"checkcircleo"} size={27} style={{alignSelf:"center"}} color={"lightgrey"}/>
                <Image
                    style={styles.servicesImage}
                    source={require('../../assets/payments/zapper.png')}
                />
            </View>

            <View style={{backgroundColor:"#FFF", flexDirection:"row", borderRadius:13, marginTop: 10, height:"10%", paddingHorizontal: 17}}>
                <AntDesign name={"checkcircleo"} size={27} style={{alignSelf:"center"}} color={"lightgrey"}/>
                <Image
                    style={styles.servicesImage}
                    source={require('../../assets/payments/snapscan.png')}
                />
            </View>
            <TotalsFooter/>


            <View style={{width:"100%", bottom:0,position: 'absolute', marginBottom:30, height:"7%"}}>
                <Button style={{backgroundColor:"#5EBC9D", height:"100%",borderRadius:10}} onPress={()=> {
                    Firebase.createOrder(orderObject).then(r => {alert("A")})

                }}>
                    <Text style={{color:"#FFF", fontSize:24, fontWeight:"bold"}}>Confirm Order</Text>
                </Button>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F0F0F0",
        marginHorizontal: 10,


    },
    iconCircle: {
        width: 38,
        height: 38,
        borderRadius: 38/2,
        alignItems:"center",
        backgroundColor: "#EEEEEE",
        alignContent:"center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    servicesImage: {
        width: "30%",
        height: "20%",
        // height: undefined,
        resizeMode:"contain",
        aspectRatio: 1,
        alignSelf: 'center',
        marginLeft: "25%"
    },
});
