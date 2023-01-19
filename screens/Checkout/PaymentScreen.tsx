import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import React from "react";
import {Button, Checkbox, Icon, Input, Radio} from "native-base";
import {AntDesign} from "@expo/vector-icons";

export default function PaymentScreen({ navigation }: RootStackScreenProps<'Payment'>) {
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:"#FFF", flexDirection:"row", borderRadius:13, marginTop: 10, height:"10%", paddingHorizontal: 17}}>
                <AntDesign name={"checkcircleo"} size={27} style={{alignSelf:"center"}} color={"#5EBC9D"}/>
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

            <View style={{width:"100%", bottom:0,position: 'absolute', marginBottom:30, height:"7%"}}>
                <Button style={{backgroundColor:"#5EBC9D", height:"100%",borderRadius:10}} onPress={()=> navigation.navigate("OrderConfirmation")}>
                    <Text style={{color:"#FFF", fontSize:24, fontWeight:"bold"}}>Confirm Order</Text>
                </Button>
            </View>

        </View>
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
