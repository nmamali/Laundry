

import {Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {View,Text} from "../../../components/Themed";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";

interface Props {
    navigation: any,
    imageName: any
}

export const ServiceBlock: React.FC<Props> = ({navigation, imageName})=> {
    return (
            <TouchableOpacity onPress={()=> navigation.navigate("AddDetails")}>
                <Image
                    style={styles.servicesImage}
                    source={imageName}
                />
                <Text style={styles.serviceTitle} darkColor={"#1D1E4E"}>
                    Dry Cleaning
                </Text>
            </TouchableOpacity>
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
