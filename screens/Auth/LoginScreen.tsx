import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import {Stack, Button, Spinner} from "native-base";
import React, {useContext, useEffect, useState} from "react";
import firebase from "firebase/compat";
import Firebase from "../../Firebase";
import {LoginContext} from "../../context/LoginContext";
import {AuthTextInput} from "./components/AuthTextInput";
import {PasswordTextInput} from "./components/PasswordTextInput";

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
  const [show, setShow] = React.useState(false);
    const { isLoggedIn, login, logout } = useContext(LoginContext);
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(()=>{
       console.log( firebase.auth().currentUser?.email)
       console.log( firebase.auth().currentUser?.uid)
    },[isLoggedIn])
    const navigateApp = async () => {
        setIsLoading(true)
       const user = await Firebase.loginWithEmail(email, "123456");
       login(true)
       navigation.navigate("Home")
    };
  return (
      <View style={styles.container}>
        <Stack space={5} w="100%" alignItems="center">
          <Image
              style={{
                width: "80%",
                height: "25%",
                alignSelf: 'center',
                marginBottom: -10,
              }}
              source={require('../../assets/images/logo.png')}
          />

            <AuthTextInput onChangeText={(text)=>{ setEmail(text)}} placeholder="Email" iconName={"email"} value={email}/>
            <PasswordTextInput onChangeText={(text)=>{ setPassword(text)}} placeholder="Password" value={password}/>
          <View style={{width:"75%", marginHorizontal:"10%", marginTop: -16}}>
              <Text style={{
                  alignSelf:"flex-end",
                  fontWeight:"bold",
                  fontSize:17,
                  paddingTop:7}} lightColor={"#4B84F3"}>
                  FORGOT PASSWORD
              </Text>
              {!isLoading && <Button style={{backgroundColor:"#1D1E4E", height:"25%", marginTop:10}} onPress={()=> navigateApp()}>
              <Text style={{color:"#FFF", fontSize:20}}>Login</Text>
            </Button>
              }
              {isLoading && <View style={{marginTop:10}}>
                  <Spinner color={"#1D1E4E"}/>
              </View>
              }


              {!isLoading &&  <TouchableOpacity style={{marginTop:9}} onPress={()=> navigation.navigate("SignUp")}>

                  <Text style={{
                      textAlign:"center",
                      fontWeight:"bold",
                      fontSize:17,
                      paddingTop:7}} lightColor={"#4B84F3"}>
                      Don't have an account ? Signup
                  </Text>
              </TouchableOpacity>}

          </View>
        </Stack>


      </View>
      );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container1: {
        flex: 1,
    },
    topNav: {
        marginTop: 30,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    logo: {
        fontWeight: "normal",
        fontSize: 50,
        color: "#fff",
        marginBottom: 70,
    },
    inputView: {
        width: "82%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#B32120",
        borderRadius: 10,
        height: 50,
        borderBottomWidth: 0,
        margin: 10,
        marginLeft: 10,
    },
    inputText: {
        flex: 1,
        height: 50,
        padding: 10,
        color: "#ebeff5",
    },
    forgot: {
        color: "#B32120",
        fontSize: 15,
        marginTop: 18,
    },
    loginBtn: {
        width: "82%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 40,
        backgroundColor: "#B32120",
        marginHorizontal: 30,
    },
    SignUpText: {
        color: "#B32120",
        fontSize: 15,
        textDecorationLine: "underline",
    },
});

