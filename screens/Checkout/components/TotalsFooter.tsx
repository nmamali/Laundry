

import {Image, StyleSheet, TouchableOpacity} from "react-native";
import {View,Text} from "../../../components/Themed";
import React, {useContext, useEffect, useState} from "react";
import {calculateOrderTotal} from "../../../utils";
import {LoginContext} from "../../../context/LoginContext";

interface Props {

}

export const TotalsFooter: React.FC<Props> = ({})=> {
    const { orderObject } = useContext(LoginContext);
    const [ironPrice, setIronPrice] = useState<number>(0);

    useEffect(()=>{
        let numOfItems = 0;
        orderObject.orderItems.forEach((elm)=>{
            // @ts-ignore
            if(elm.isIronNeeded){
                // @ts-ignore
                numOfItems+= elm.numOfItems
            }
        });
        setIronPrice(numOfItems*10)


    },[orderObject])
    return (
        <View style={{backgroundColor:"#FFF", flexDirection:"row", paddingVertical:30, borderRadius:13, marginTop: 10}}>
            <View style={{backgroundColor:"#FFF", marginLeft:15}}>
                <Text lightColor={"#1D1E4E"} style={{fontSize: 22, fontWeight:"bold", marginBottom:4}}>Grand Totals</Text>
                <View style={{marginTop:3}}>
                    <Text lightColor={"#7C7F92"} style={{fontSize: 18, flexWrap: 'wrap', marginHorizontal:1}}>Delivery: R50 </Text>
                    <Text lightColor={"#7C7F92"} style={{fontSize: 18, flexWrap: 'wrap', marginHorizontal:1}}>Items Selected: R {calculateOrderTotal(orderObject.orderItems)}.00 </Text>
                    <Text lightColor={"#7C7F92"} style={{fontSize: 18, flexWrap: 'wrap', marginHorizontal:1}}>Extras: R{ironPrice}.00 </Text>
                    <Text lightColor={"#7C7F92"} style={{fontSize: 18, flexWrap: 'wrap', marginHorizontal:1}}>Grand Total: {calculateOrderTotal(orderObject.orderItems)+ironPrice+50}.00 </Text>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        backgroundColor:"#F5F5F5"
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
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        alignItems:"center",
        backgroundColor: "#F9A18B",
        alignContent:"center",
        marginLeft: 20,
        justifyContent: "center"
    },
    servicesImage: {
        width: "65%",
        height: undefined,
        aspectRatio: 1,
        alignSelf: 'center',
    },
    serviceTitle: {
        textAlign:"center",
        fontWeight:"bold",
        fontSize:17,
        paddingTop:7
    },
    servicesRow: {
        flexDirection:"row",
        marginTop: 30,
        backgroundColor:"#F5F5F5"
    },
    orderStatus: {
        backgroundColor:"green",
        flexDirection:"row",
        paddingVertical:30,
        borderRadius:7, marginTop: 10
    },
    servicesRowLeft: {
        width:"45%",
        marginRight: 5,
        padding: 30,
        borderRadius: 15
    },
    servicesRowRight: {
        width:"45%",
        marginLeft: 5,
        padding: 30,
        borderRadius: 15
    }
});
