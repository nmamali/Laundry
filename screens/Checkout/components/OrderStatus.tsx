

import {StyleSheet, TouchableWithoutFeedback} from "react-native";
import {View,Text} from "../../../components/Themed";
import {MaterialCommunityIcons} from "@expo/vector-icons";

interface Props {

}

export default function OrderStatus() {

    return (
        <TouchableWithoutFeedback >
            <View style={styles.orderStatus}>
                <View style={styles.circle}>
                    <MaterialCommunityIcons name={"progress-clock"} size={30} color={"#FFF"}/>
                </View>
                <View style={{backgroundColor:"green", marginLeft:15}}>
                    <Text lightColor={"#FFF"} style={{fontSize: 20}}>Order In progress ....</Text>
                    <Text lightColor={"#FFF"} style={{fontSize: 20}}>Track the status of your order </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
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