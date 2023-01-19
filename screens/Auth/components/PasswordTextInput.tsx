

import {Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {View,Text} from "../../../components/Themed";
import {AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import React, {useState} from "react";
import {Icon, Input, Pressable} from "native-base";

interface Props {

    placeholder: string,
    value: string,

    onChangeText: (text:string)=>void
}

export const PasswordTextInput: React.FC<Props> = ({placeholder, onChangeText, value})=> {
    const [show, setShow] = React.useState(false);

    return (
        <Input w={{
            base: "75%",
            md: "25%"
        }}
               isRequired={true}
               value={value}
               marginBottom={2}
               h={{ base: "6%"}}
               fontSize={17}
               onChangeText={(text)=>{
                   onChangeText(text)
               }}
               type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
        </Pressable>
        } placeholder={placeholder} />
    );
};

const styles = StyleSheet.create({

});