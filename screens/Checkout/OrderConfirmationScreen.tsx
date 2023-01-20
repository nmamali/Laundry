import {FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import React, {useContext} from "react";
import {Button, Checkbox, Icon, Input, Radio, ScrollView} from "native-base";
import {AntDesign} from "@expo/vector-icons";
import {TotalsFooter} from "./components/TotalsFooter";
import {calculateOrderTotal} from "../../utils";
import {LoginContext} from "../../context/LoginContext";
import firebase from "firebase/compat";

export default function OrderConfirmationScreen({ navigation }: RootStackScreenProps<'OrderConfirmation'>) {

    const {orderObject , pickupAddress} = useContext(LoginContext);


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems:"center", alignContent:"center", marginTop: 60}}>
                <AntDesign name={"checkcircle"} size={160} color={"green"}/>
                <View style={{alignItems:"center", marginTop: 40}}>
                    <Text lightColor={"#1D1E4E"} style={{fontSize: 27, fontWeight:"bold", marginBottom:4}}>Thank you for choosing us!</Text>
                    <Text lightColor={"#1D1E4E"} style={{fontSize: 22, fontWeight:"bold", marginBottom:4}}>Order number #12345</Text>
                </View>
            </View>

            <View style={{backgroundColor:"#FFF", flexDirection:"row", borderRadius:13, marginTop: 20}}>
                <View style={{backgroundColor:"#FFF", marginLeft:15}}>
                    <Text lightColor={"#1D1E4E"} style={{fontSize: 22, fontWeight:"bold", marginBottom:4}}>Order Summary</Text>
                    <View style={{marginTop:3}}>

                        <FlatList
                            ListHeaderComponentStyle={{ width: "100%" }}
                            initialNumToRender={3}
                            maxToRenderPerBatch={5}
                            windowSize={4}
                            keyExtractor={(item) => item.id+""}
                            renderItem={({item})=>{
                               return (
                                   <Text lightColor={"#7C7F92"} style={{fontSize: 18, flexWrap: 'wrap', marginHorizontal:1}}>{item?.title} X {item.numOfItems} </Text>
                               )
                            }
                        }
                            showsVerticalScrollIndicator={false}
                            data={orderObject.orderItems.filter((x)=>x.numOfItems>0)}
                        />

                    </View>
                </View>
            </View>

            <View style={{backgroundColor:"#FFF", flexDirection:"row", borderRadius:13, marginTop: 10}}>
                <View style={{backgroundColor:"#FFF", marginLeft:15}}>
                    <Text lightColor={"#1D1E4E"} style={{fontSize: 22, fontWeight:"bold", marginBottom:4}}>Delivery Details</Text>
                    <View style={{marginTop:3}}>
                        <Text lightColor={"#7C7F92"} style={{fontSize: 18, flexWrap: 'wrap', marginHorizontal:1}}>Pick up address: {pickupAddress} </Text>
                        <Text lightColor={"#7C7F92"} style={{fontSize: 18, flexWrap: 'wrap', marginHorizontal:1}}>Date and Time: 11/01/22 at 10:00 </Text>
                    </View>
                </View>
            </View>
            <TotalsFooter/>
            </ScrollView>


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
