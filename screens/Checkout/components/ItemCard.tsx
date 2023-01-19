

import {Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {View,Text} from "../../../components/Themed";
import {AntDesign, Entypo, MaterialCommunityIcons} from "@expo/vector-icons";
import React, {useState} from "react";

interface Props {
    imageSrc: any,
    name: string,
    price: number,
    quantity: number
    id: number
    gender: string,
    updateCartItem: (item:number, id: number)=>void
}

export const ItemCard: React.FC<Props> = ({id, imageSrc, name, price, quantity, gender, updateCartItem})=> {

    const [numOfCartItems, setNumOfCartItems] = useState<number>(quantity);
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
                    <Text lightColor={"#1D1E4E"} style={{fontSize: 15, fontWeight:"bold"}}>R{price}.00 </Text>
                    <Text lightColor={"#1D1E4E"} style={{fontSize: 15, fontWeight:"bold", marginLeft: 11}}>{gender}</Text>
                </View>


            </View>
            <View style={{flex:1, justifyContent: 'center', alignContent: 'flex-end', paddingRight: 15}}>
                <View style={{flexDirection:"row", alignSelf:"flex-end"}}>
                    <TouchableOpacity style={styles.iconCircle} onPress={()=>{
                        if(numOfCartItems>0){
                            let count = numOfCartItems-1;
                            updateCartItem(count,id)
                            setNumOfCartItems(count)

                        }
                    }}>
                        <AntDesign name={"minus"} size={20}/>
                    </TouchableOpacity>
                    <Text style={{marginHorizontal:10, fontWeight:"bold", fontSize:17, textAlign:"center", alignSelf:"center"}}>{numOfCartItems}</Text>
                    <TouchableOpacity style={styles.iconCircle} onPress={()=>{
                        let count = numOfCartItems+1;
                        setNumOfCartItems(count)
                        updateCartItem(count,id)
                    }}>
                        <AntDesign name={"plus"} size={20}/>
                    </TouchableOpacity>
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
    servicesImage: {
        width: "14%",
        height: undefined,
        aspectRatio: 1,
        alignSelf: 'center',
        marginLeft:10
    },
});