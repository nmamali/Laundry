

import {Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {View,Text} from "../../../components/Themed";
import {AntDesign, Entypo, MaterialCommunityIcons} from "@expo/vector-icons";
import React, {useState} from "react";
import Checkbox from "expo-checkbox";

interface Props {
    imageSrc: any,
    name: string,
    price: number,
    quantity: number
    id: number
    gender: string,
    isIronNeeded: boolean,
    updateCartItem: (item:boolean, id: number)=>void
}

export const IronItemCard: React.FC<Props> = ({id, imageSrc, name, price, quantity, gender, updateCartItem, isIronNeeded})=> {
    return (
        <View style={{backgroundColor:"#FFF", flexDirection:"row", paddingVertical:20, borderRadius:13, marginTop: 10,         shadowColor: "#444",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65, }}>
            <Image
                style={styles.servicesImage}
                source={imageSrc}
            />
            <View style={{backgroundColor:"#FFF", marginLeft:15}}>
                <Text lightColor={"#1D1E4E"} style={{fontSize: 18, fontWeight:"bold"}}>{name}</Text>
                <View style={{flexDirection:"row", marginTop:3}}>
                    <Text lightColor={"#1D1E4E"} style={{fontSize: 15, fontWeight:"bold", marginLeft: 0}}>{gender}</Text>
                </View>


            </View>
            <View style={{flex:1, justifyContent: 'center', alignContent: 'flex-end', paddingRight: 15}}>
                <View style={{flexDirection:"row", alignSelf:"flex-end"}}>
                    <Checkbox
                        value={isIronNeeded}
                        onValueChange={()=>updateCartItem(!isIronNeeded,id)}
                        color={"#1D1E4E"}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    iconCircle: {
        width: 30,
        height: 30,
        borderRadius: 30/2,
        alignItems:"center",
        backgroundColor: "#EEEEEE",
        alignContent:"center",
        justifyContent: "center",
    },
    checkbox: {
        margin: 8,
    },
    servicesImage: {
        width: "14%",
        height: undefined,
        aspectRatio: 1,
        alignSelf: 'center',
        marginLeft:10
    },
});