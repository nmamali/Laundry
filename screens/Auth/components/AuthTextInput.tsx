

import {Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {View,Text} from "../../../components/Themed";
import {AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import React, {useState} from "react";
import {Icon, Input} from "native-base";

interface Props {

    iconName?:string|any,
    placeholder: string,
    value: string,
    onChangeText: (text:string)=>void
}

export const AuthTextInput: React.FC<Props> = ({placeholder, onChangeText,iconName,value})=> {
    return (
            <Input
                w={{
                    base: "75%",
                    md: "23%",
                }}
                isRequired={true}
                value={value}
                marginBottom={2}
                h={{ base: "6%"}}
                InputLeftElement={<Icon as={<MaterialIcons name={iconName} />} size={7} ml="2" color="muted.500" />}
                placeholder= {placeholder}
                fontSize={17}
                onChangeText={(text)=>{
                    onChangeText(text)
                }}
            />
    );
};

const styles = StyleSheet.create({

});