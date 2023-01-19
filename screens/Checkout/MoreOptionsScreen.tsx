import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import React, {useState} from "react";
import {Button, Icon, Input, Radio} from "native-base";
import Checkbox from 'expo-checkbox';
import {Calendar} from "react-native-calendars";

export default function MoreOptionsScreen({ navigation }: RootStackScreenProps<'MoreOptions'>) {
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{backgroundColor:"#FFF", flexDirection:"row", paddingVertical:20, borderRadius:13, marginTop: 10}}>

                <View style={{backgroundColor:"#FFF", marginLeft:15}}>
                    <Text lightColor={"#1D1E4E"} style={{fontSize: 20, fontWeight:"bold"}}>Color Preferences</Text>
                    <View style={{flexDirection:"row", marginTop:15}}>
                        <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
                            <Radio  color="#5EBC9D" value="3" size="lg" my={1}>
                                Color Clothes
                            </Radio>
                        </Radio.Group>
                        <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
                            <Radio value="3" color="#5EBC9D" size="lg" my={1} style={{marginLeft:20}}>
                                White Clothe
                            </Radio>
                        </Radio.Group>

                    </View>
                </View>
            </View>

            <View style={{backgroundColor:"#FFF", flexDirection:"row", paddingVertical:20, borderRadius:13, marginTop: 10}}>
                <View style={{backgroundColor:"#FFF", marginLeft:15}}>
                    <Text lightColor={"#1D1E4E"} style={{fontSize: 20, fontWeight:"bold"}}>Other</Text>
                    <View >
                        <View style={styles.section}>
                            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={"#1D1E4E"}  onChange={(v)=>alert(v)}/>
                            <Text style={styles.paragraph}> Dry Heater</Text>
                        </View>
                        <View style={styles.section}>
                            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={"#1D1E4E"}/>
                            <Text style={styles.paragraph}>Use Softener</Text>
                        </View>
                        <View style={styles.section}>
                            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={"#1D1E4E"} />
                            <Text style={styles.paragraph}>Iron my clothes</Text>
                        </View>
                        <View style={styles.section}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={"#1D1E4E"}
                            />
                            <Text style={styles.paragraph}> Scented Detergent</Text>
                        </View>
                    </View>



                </View>
            </View>

            <View style={{backgroundColor:"#FFF", flexDirection:"row", paddingVertical:20, borderRadius:13, marginTop: 10}}>
                <View style={{backgroundColor:"#FFF", marginHorizontal:15}}>
                    <Text lightColor={"#1D1E4E"} style={{fontSize: 20, fontWeight:"bold"}}>Additional Note</Text>
                    <View style={{flexDirection:"row", marginTop:15}}>
                        <Input w={{
                            base: "100%",
                            md: "23%",
                        }}
                               paddingTop={6}
                               paddingBottom={6}
                               borderRadius={10}
                               multiline={true}
                               h={{ base: "100%"}}
                               placeholder="Type here"
                               fontSize={17}
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


            <View style={{width:"100%", bottom:0,position: 'absolute', marginBottom:30, height:"7%"}}>
                <Button style={{backgroundColor:"#5EBC9D", height:"100%",borderRadius:10}} onPress={()=> navigation.navigate("DeliveryDetails")}>
                    <Text style={{color:"#FFF", fontSize:24, fontWeight:"bold"}}>Done</Text>
                </Button>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 32,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },
    container: {
        flex: 1,
        backgroundColor:"#F0F0F0",
        marginHorizontal: 10,


    },
    iconCircle: {
        width: 30,
        height: 30,
        borderRadius: 30/2,
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
