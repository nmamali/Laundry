import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import React from "react";
import {Button, Checkbox, Icon, Input, Radio} from "native-base";
import {AntDesign} from "@expo/vector-icons";

export default function OrderConfirmationScreen({ navigation }: RootStackScreenProps<'OrderConfirmation'>) {
    return (
        <View style={styles.container}>
            <View style={{alignItems:"center", alignContent:"center", marginTop: 60}}>
                <AntDesign name={"checkcircle"} size={180} color={"green"}/>
                <View style={{alignItems:"center", marginTop: 40}}>
                    <Text lightColor={"#1D1E4E"} style={{fontSize: 27, fontWeight:"bold", marginBottom:4}}>Thank you for choosing us!</Text>
                    <Text lightColor={"#1D1E4E"} style={{fontSize: 22, fontWeight:"bold", marginBottom:4}}>Order number #12345</Text>

                    <Text lightColor={"#1D1E4E"} style={{fontSize: 16, fontWeight:"bold", marginBottom:4}}>Pick up from: Address Details</Text>
                    <Text lightColor={"#1D1E4E"} style={{fontSize: 16, fontWeight:"bold", marginBottom:4}}>Driver Contact Details: 111 1111 1111</Text>
                </View>
            </View>

            <View style={{marginHorizontal:30, marginTop:30}}>
                <Text lightColor={"#1D1E4E"} style={{fontSize: 20, fontWeight:"bold", marginBottom:4}}>Order Summary</Text>
                <View style={{justifyContent:"flex-start"}}>
                    <View style={{ marginTop:10}}>
                        <Text lightColor={"#444"} style={{fontSize: 18, marginBottom:4}}>Delivery : R50</Text>
                        <Text lightColor={"#444"} style={{fontSize: 18, marginBottom:4}}>Item A : R50</Text>
                        <Text lightColor={"#444"} style={{fontSize: 18, marginBottom:4}}>Item B : R50</Text>
                        <Text lightColor={"#444"} style={{fontSize: 18, marginBottom:4}}>Item C : R50</Text>
                        <Text lightColor={"#444"} style={{fontSize: 18, marginBottom:4}}>Tax : R50</Text>
                        <Text lightColor={"#1D1E4E"} style={{fontSize: 22, fontWeight:"bold", marginBottom:4}}>Totals : R250</Text>
                    </View>


                </View>

            </View>
            <View style={{width:"100%", bottom:0,position: 'absolute', marginBottom:30, height:"7%"}}>
                <Button style={{backgroundColor:"#5EBC9D", height:"100%",borderRadius:10}} onPress={()=> navigation.navigate("Home")}>
                    <Text style={{color:"#FFF", fontSize:24, fontWeight:"bold"}}>Done</Text>
                </Button>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#FFF",
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
        width: "20%",
        height: "20%",
        // height: undefined,
        resizeMode:"contain",
        aspectRatio: 1,
        alignSelf: 'center',
        // marginLeft: "25%"
    },
});
