import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import React, {useContext, useEffect, useState} from "react";
import {Button, Icon, Input, Radio, ScrollView} from "native-base";
import { MaterialIcons} from "@expo/vector-icons";
import {LoginContext} from "../../context/LoginContext";
import {Calendar} from "react-native-calendars";
import DateTimePicker, {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {calculateOrderTotal} from "../../utils";
import {TotalsFooter} from "./components/TotalsFooter";
import firebase from "firebase/compat";

export default function DeliveryDetailsScreen({ navigation }: RootStackScreenProps<'DeliveryDetails'>) {
    const { pickupAddress, orderObject, updateOrderItems } = useContext(LoginContext);
    const [date, setDate] = useState(new Date());
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [deliveryNote, setDeliveryNote] = useState<string>("");


    const [ironPrice, setIronPrice] = useState<number>(0);
    const currentUser = firebase.auth().currentUser

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
    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };
    const [isPickUp, setIsPickUp] = useState(true);

    // @ts-ignore
    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{backgroundColor:"#FFF", flexDirection:"row", paddingVertical:20, borderRadius:13, marginTop: 10}}>
                        <View style={{backgroundColor:"#FFF", marginLeft:15}}>
                            <Text lightColor={"#1D1E4E"} style={{fontSize: 20, fontWeight:"bold"}}>Preferences</Text>
                            <View style={{flexDirection:"row", marginTop:15}}>
                                <Radio.Group name="exampleGroup" defaultValue="1" style={{flexDirection:"row"}} flexDirection={"row"} onChange={()=>{}}>
                                    <Radio color="#5EBC9D" value={isPickUp?"1":"2"} size="lg" my={1} >
                                      Pick Up
                                    </Radio>
                                    <Radio value={!isPickUp?"1":"2"} color="#5EBC9D" size="lg" my={1} style={{marginLeft:20}} >
                                        I want to deliver
                                    </Radio>
                                </Radio.Group>
                            </View>
                        </View>
                    </View>


                    <View style={{backgroundColor:"#FFF", flexDirection:"row", paddingVertical:30, borderRadius:13, marginTop: 10}}>
                        <View style={{backgroundColor:"#FFF", marginLeft:15}}>
                            <Text lightColor={"#1D1E4E"} style={{fontSize: 22, fontWeight:"bold", marginBottom:4}}>Pickup Address</Text>
                            <View style={{marginTop:3}}>
                                <Text lightColor={"#7C7F92"} style={{fontSize: 18, flexWrap: 'wrap', marginHorizontal:1}}>{pickupAddress} </Text>
                            </View>

                            <TouchableOpacity style={{marginTop:14}} onPress={()=>{ // @ts-ignore
                                navigation.navigate('Modal',{from:"DeliveryDetails"})}}>

                                <Text lightColor={"#3AB6D4"} style={{fontSize: 18, flexWrap: 'wrap'}}>Update Pickup </Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                <View style={{backgroundColor:"#FFF", borderRadius:13, marginTop: 10}}>
                        <Text lightColor={"#1D1E4E"} style={{fontSize: 20, fontWeight:"bold", padding: 10}}> Pick Up Date and Time</Text>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={"datetime"}
                            onChange={onChange}
                            textColor={"#7C7F92"}
                            style={{alignSelf:"flex-start", marginBottom:20, marginLeft:7}}
                        />
                    </View>

                    <View style={{backgroundColor:"#FFF", flexDirection:"row", paddingVertical:20, borderRadius:13, marginTop: 10}}>
                        <View style={{backgroundColor:"#FFF", marginHorizontal:15}}>
                            <Text lightColor={"#1D1E4E"} style={{fontSize: 20, fontWeight:"bold"}}>Contact Information</Text>
                            <View style={{flexDirection:"row", marginTop:15}}>
                                <Input w={{
                                    base: "100%",
                                    md: "23%",
                                }}

                                      onChangeText={(text)=>{
                                          setPhoneNumber(text)
                                      }}
                                       h={{ base: "100%"}}
                                       keyboardType={"number-pad"}
                                       paddingTop={3}
                                       paddingBottom={3}
                                       borderRadius={10}
                                       placeholder="Phone Number"
                                       fontSize={17}
                                       InputLeftElement={<Icon as={<MaterialIcons name={"phone"} />} size={7} ml="2" color="muted.500" />}

                            />
                            </View>
                            <View style={{flexDirection:"row", marginTop:15}}>
                                <Input w={{
                                    base: "100%",
                                    md: "23%",
                                }}
                                       onChangeText={(text)=>{setDeliveryNote(text)}}
                                       borderRadius={10}
                                      style={{minHeight:45}}
                                       multiline={true}
                                       h={{ base: "100%"}}
                                       placeholder="More Information"
                                       fontSize={17}
                                       InputLeftElement={<Icon as={<MaterialIcons name={"note"} />} size={7} ml="2" color="muted.500" />}

                                />
                            </View>
                        </View>
                    </View>
                  <TotalsFooter/>
            </ScrollView>


            <View style={{width:"100%", bottom:0,position: 'absolute', marginBottom:30, height:"7%"}}>
                <Button style={{backgroundColor:"#5EBC9D", height:"100%",borderRadius:10}} onPress={()=> {
                    let tempOrderObject = {...orderObject};

                    tempOrderObject.deliveryDetails = {
                       pickupDate : date,
                        phoneNumber : phoneNumber,
                        deliveryNote : deliveryNote,
                        pickupAddress : pickupAddress,
                        isPickUp : isPickUp,
                    }

                    // @ts-ignore
                    tempOrderObject.orderItems = tempOrderObject.orderItems.filter(x=>x.numOfItems>0);
                    tempOrderObject.totals ={
                        delivery: 50,
                        itemsOrdered: calculateOrderTotal(orderObject.orderItems),
                        extras: ironPrice,
                        total: ironPrice+50+calculateOrderTotal(orderObject.orderItems),
                    }
                    tempOrderObject.userId = currentUser.uid;
                    // @ts-ignore
                    tempOrderObject.paymentDetails = {
                        paymentSelected : "cash"
                    }
                    tempOrderObject.status= "Pending"

                    updateOrderItems(tempOrderObject);

                    navigation.navigate("Payment")
                }}>
                    <Text style={{color:"#FFF", fontSize:24, fontWeight:"bold"}}>Done</Text>
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
        width: "13%",
        height: undefined,
        aspectRatio: 1,
        alignSelf: 'center',
    },
});
