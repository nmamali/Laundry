import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import { Text, View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import {Alert, Button, Icon, Input, Pressable, Spinner, Stack} from "native-base";
import React, {useContext, useState} from "react";
import Firebase from "../../Firebase";
import {LoginContext} from "../../context/LoginContext";
import {AuthTextInput} from "./components/AuthTextInput";
import {PasswordTextInput} from "./components/PasswordTextInput";
import { Formik } from 'formik'
import * as yup from 'yup'
import {bool} from "yup";

const loginValidationSchema = yup.object().shape({
  email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),

  firstName: yup
      .string()
      .required('FullName is required'),
  lastName: yup
      .string()
      .required('FullName is required'),
  password: yup
      .string()
      .required('Password is required'),
  confirmPassword: yup.mixed().test('isEqual', 'ConfirmPassword must match with password', (value, context) => {
    return context.parent.password == value;

  })

})

interface signUpValues{
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
}
export default function SignupScreen({ navigation }: RootStackScreenProps<'SignUp'>) {
  const { isLoggedIn, login, logout } = useContext(LoginContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigateApp = async (values:signUpValues) => {
    setIsLoading(true)
   Firebase.signupWithEmail(values.email, values.password).then(user=>{
     const userData ={
       //@ts-ignore
       uid: user.user.uid,
       fullName: values.firstName+" "+values.lastName
     }
     Firebase.createNewUser(userData).then(userDetails=>{
       login(true)
       navigation.navigate("Home")

     })
         .catch((error)=>{
           setIsLoading(false)
           alert(error.message)
         })
   })
       .catch((error)=>{
         setIsLoading(false)
         alert(error.message)
       })
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
          <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
              }}
              onSubmit={values => navigateApp(values)}
              validationSchema={loginValidationSchema}
              isInitialValid={true}
          >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                <>
                  <AuthTextInput
                      value={values.firstName}
                      onChangeText={handleChange('firstName')}

                      placeholder="First Name" iconName={"person"}/>
                  <Text style={{color:"red", alignSelf:"flex-start", marginHorizontal:'12.5%'}}>{errors.firstName?errors.firstName:""}</Text>

                  <AuthTextInput
                      value={values.lastName}
                      onChangeText={handleChange('lastName')}

                      placeholder="Last Name" iconName={"person"}/>
                    <Text style={{color:"red", alignSelf:"flex-start", marginHorizontal:'12.5%'}}>{errors.lastName?errors.lastName:""}</Text>

                  <AuthTextInput
                      value={values.email}
                      onChangeText={handleChange('email')}
                      placeholder="Email Address" iconName={"email"}/>
                  <Text style={{color:"red", alignSelf:"flex-start", marginHorizontal:'12.5%'}}>{errors.email?errors.email:""}</Text>

                  <PasswordTextInput
                      value={values.password}
                      onChangeText={handleChange('password')}
                      placeholder="Password"/>
                  <Text style={{color:"red", alignSelf:"flex-start", marginHorizontal:'12.5%'}}>{errors.password?errors.password:""}</Text>

                  <PasswordTextInput
                      value={values.confirmPassword}
                      onChangeText={handleChange('confirmPassword')}
                      placeholder="Confirm Password"/>
                  <Text style={{color:"red", alignSelf:"flex-start", marginHorizontal:'12.5%'}}>{errors.confirmPassword?errors.confirmPassword:""}</Text>

                  {!isLoading&& <View style={{width:"75%", marginHorizontal:"10%", marginTop: 0}}>
                    <Button disabled={!isValid} style={{backgroundColor:isValid? "#1D1E4E":"lightgrey", height:"22%", marginTop:2}} onPress={()=>handleSubmit()}>
                      <Text style={{color:"#FFF", fontSize:20}}>Signup</Text>
                    </Button>
                    <View style={{marginTop:9}}>
                      <Text style={{
                        textAlign:"center",
                        fontWeight:"bold",
                        fontSize:17,
                        paddingTop:7}} lightColor={"#4B84F3"}>
                        Have an account ? Login
                      </Text>
                    </View>

                  </View>}
                  { isLoading &&<View style={{width:"75%", marginHorizontal:"10%", marginTop: 0}}>
                    <Spinner/>
                  </View>}

                  </>

              )}

          </Formik>

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
