import {StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import {ScrollView} from "native-base";
import OrderStatus from "./components/OrderStatus";
import Location from "./components/Location";
import firebase from "firebase/compat";
import {useContext, useEffect, useState} from "react";
import {LoginContext} from "../../context/LoginContext";

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
    const currentUser = firebase.auth().currentUser
    const db = firebase.firestore();
    const [name, setName] = useState<string>("");
    const [pickUpAddress, setPickUpAddress] = useState<string>("");
    const { isLoggedIn, login, logout, updatePickupAddress } = useContext(LoginContext);

    useEffect(()=>{
        const fetchData = async () => {
            //@ts-ignore
            const userDetails = await db.collection('users').doc(currentUser.uid).get()
            //@ts-ignore
            setName(userDetails.data().fullName)
            //@ts-ignore
            updatePickupAddress(userDetails.data().pickUpAddress)

        }
        fetchData().then(dat=>{
            console.log(dat)
        })

    },[])
    return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={{fontSize:25, paddingVertical: 5}}>
          Welcome back , {name.split(" ")[0]}
        </Text>
     <Location navigation={navigation}/>
     <OrderStatus/>

        <View style={{backgroundColor:"#F5F5F5"}}>
          <View style={styles.servicesRow}>
            <View style={styles.servicesRowLeft}>
                <TouchableOpacity onPress={()=> navigation.navigate("AddDetails")}>
                    <Image
                        style={styles.servicesImage}
                        source={require('../../assets/homeIcons/home1.png')}
                    />
                    <Text style={styles.serviceTitle} darkColor={"#1D1E4E"}>
                        Dry Cleaning
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.servicesRowRight}>
                <TouchableOpacity>
                    <Image
                      style={styles.servicesImage}
                      source={require('../../assets/homeIcons/home2.png')}
                  />
                    <Text style={styles.serviceTitle} darkColor={"#1D1E4E"}>
                       Wash & Iron
                    </Text>
                </TouchableOpacity>
            </View>

          </View>

            <View style={styles.servicesRow}>
                <View style={styles.servicesRowLeft}>
                    <TouchableOpacity>
                        <Image
                            style={styles.servicesImage}
                            source={require('../../assets/homeIcons/home3.png')}
                        />
                        <Text style={styles.serviceTitle} darkColor={"#1D1E4E"}>
                            Ironing
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.servicesRowRight}>
                    <TouchableOpacity>
                        <Image
                            style={styles.servicesImage}
                            source={require('../../assets/homeIcons/home4.png')}
                        />
                        <Text style={styles.serviceTitle} darkColor={"#1D1E4E"}>
                            Darning
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    </ScrollView>
  );
}

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
        backgroundColor:"#F5F5F5",

    },
    orderStatus: {
        backgroundColor:"green",
        flexDirection:"row",
        paddingVertical:30,
        borderRadius:7, marginTop: 10,
        shadowColor: "#444",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    servicesRowLeft: {
        width:"48%",
        marginRight: 5,
        padding: 30,
        borderRadius: 15,
        shadowColor: "#444",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    servicesRowRight: {
        width:"48%",
        marginLeft: 5,
        padding: 30,
        borderRadius: 15,
        shadowColor: "#444",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
});
