import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import React, {useContext, useState} from "react";
import {Button, Icon, Input, Radio, ScrollView} from "native-base";
import {AntDesign, EvilIcons, MaterialIcons} from "@expo/vector-icons";
import {LoginContext} from "../../context/LoginContext";
import {Calendar} from "react-native-calendars";

export default function DeliveryDetailsScreen({ navigation }: RootStackScreenProps<'DeliveryDetails'>) {
    const { isLoggedIn, login, logout, pickupAddress } = useContext(LoginContext);

    const [isPickUp, setIsPickUp] = useState(true);
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


                    <View style={{marginTop:30}}>
                        <Calendar
                            markedDates={{
                                '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
                                '2012-05-17': {marked: true},
                                '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                                '2012-05-19': {disabled: true, disableTouchEvent: true}
                            }}
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
                                       h={{ base: "100%"}}
                                       keyboardType={'name-phone-pad'}
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
                                       borderRadius={10}
                                       // paddingTop={6}
                                       // paddingBottom={6}

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

                    <View style={{backgroundColor:"#FFF", flexDirection:"row", paddingVertical:30, borderRadius:13, marginTop: 10}}>
                        <View style={{backgroundColor:"#FFF", marginLeft:15}}>
                            <Text lightColor={"#1D1E4E"} style={{fontSize: 22, fontWeight:"bold", marginBottom:4}}>Grand Totals</Text>
                            <View style={{marginTop:3}}>
                                <Text lightColor={"#7C7F92"} style={{fontSize: 18, flexWrap: 'wrap', marginHorizontal:1}}>Delivery: R50 </Text>
                                <Text lightColor={"#7C7F92"} style={{fontSize: 18, flexWrap: 'wrap', marginHorizontal:1}}>Items Selected: R100 </Text>
                                <Text lightColor={"#7C7F92"} style={{fontSize: 18, flexWrap: 'wrap', marginHorizontal:1}}>Extras: R50 </Text>
                                <Text lightColor={"#7C7F92"} style={{fontSize: 18, flexWrap: 'wrap', marginHorizontal:1}}>Grand Total: R200.00 </Text>

                            </View>
                        </View>
                    </View>
            </ScrollView>


            <View style={{width:"100%", bottom:0,position: 'absolute', marginBottom:30, height:"7%"}}>
                <Button style={{backgroundColor:"#5EBC9D", height:"100%",borderRadius:10}} onPress={()=> navigation.navigate("Payment")}>
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
