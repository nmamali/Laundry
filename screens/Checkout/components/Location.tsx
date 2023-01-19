

import {StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {View,Text} from "../../../components/Themed";
import {Entypo, MaterialCommunityIcons} from "@expo/vector-icons";
import {useContext} from "react";
import {LoginContext} from "../../../context/LoginContext";

interface Props {

}

// @ts-ignore
export default function Location({navigation}) {
    const { isLoggedIn, login, logout, pickupAddress } = useContext(LoginContext);

    return (
        <TouchableOpacity
            onPress={()=>{navigation.navigate('Modal',{from:"Home"})}}
            style={{backgroundColor:"#1D1E4E", flexDirection:"row", paddingVertical:30, borderRadius:7, marginTop: 10, shadowColor: "#000",

            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,}}>
            <View style={styles.circle}>
                <Entypo name={"location-pin"} size={30} color={"#FFF"}/>
            </View>
            {/*<View style={{backgroundColor:"#1D1E4E" }}>*/}
                <Text lightColor={"#FFF"} style={{fontSize: 20, paddingLeft: 19, flex: 1, flexWrap: 'wrap'}}>{pickupAddress? pickupAddress:"Update Pick Up Address" }</Text>
                {/*<Text lightColor={"#FFF"} style={{fontSize: 20}}>Royal Ln, Mesa, New Jersey </Text>*/}
            {/*</View>*/}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
    orderStatus: {
        backgroundColor:"green",
        flexDirection:"row",
        paddingVertical:30,
        borderRadius:7, marginTop: 10
    },
});