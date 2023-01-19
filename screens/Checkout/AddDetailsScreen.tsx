import {StyleSheet, FlatList} from 'react-native';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import {Button, ScrollView} from "native-base";
import React, {useEffect, useState} from "react";
import {ItemCard} from "./components/ItemCard";

let cartDefaultItems =[
    {
        title: "T-Shirt",
        pricePerItem: 10,
        iconUrl: require('../../assets/detailsIcons/t-shirt.png'),
        numOfItems: 0,
        gender:"Male/Female",
        id: 1
    },
    {
        title: "Dress",
        pricePerItem: 13,
        iconUrl: require('../../assets/detailsIcons/dress.png'),
        numOfItems: 0,
        gender:"Female",
        id: 2
    },
    {
        title: "Suit",
        pricePerItem: 13,
        iconUrl: require('../../assets/detailsIcons/suit.png'),
        numOfItems: 0,
        gender:"Male/Female",
        id: 3
    },
    {
        title: "Jacket",
        pricePerItem: 13,
        iconUrl: require('../../assets/detailsIcons/jacket.png'),
        numOfItems: 0,
        gender:"Male/Female",

        id: 4
    },
    {
        title: "Sweater",
        pricePerItem: 13,
        iconUrl: require('../../assets/detailsIcons/sweater.png'),
        numOfItems: 0,
        gender:"Male/Female",

        id: 5
    },
    {
        title: "Long Pants",
        pricePerItem: 13,
        iconUrl: require('../../assets/detailsIcons/long-pants.png'),
        numOfItems: 0,
        gender:"Male/Female",
        id: 6
    },
    {
        title: "Shorts",
        pricePerItem: 13,
        iconUrl: require('../../assets/detailsIcons/shots.png'),
        numOfItems: 0,
        gender:"Male/Female",
        id: 7
    },
    {
        title: "Skirts",
        pricePerItem: 13,
        iconUrl: require('../../assets/detailsIcons/skirt.png'),
        numOfItems: 0,
        gender:"Female",
        id: 8
    },
    {
        title: "Tank Top",
        pricePerItem: 13,
        iconUrl: require('../../assets/detailsIcons/tankTop.png'),
        numOfItems: 0,
        gender:"Male/Female",
        id: 9
    },
    {
        title: "Others",
        pricePerItem: 13,
        iconUrl: require('../../assets/detailsIcons/others.png'),
        numOfItems: 0,
        gender:"Male/Female",
        id: 10
    },

]

interface flatListArg {
    item:  {
        title: string,
        pricePerItem: number,
        iconUrl: any,
        numOfItems: number,
        gender: string,
        id: number,
    },
    index: number;
}

export default function AddDetailsScreen({ navigation }: RootTabScreenProps<'AddDetails'>) {

    const [isNextValid, setIsNextValid] = useState<boolean>(false);
    const [cartTotal, setCartTotal] = useState<number>(0);
    const [toggle, setToggle] = useState<boolean>(false);

    useEffect(()=>{
        let results = cartDefaultItems.filter(elm=>elm.numOfItems>0);

        if(results.length>0){
            setIsNextValid(true)

        }else{
            setIsNextValid(false)
        }
    },[])

    useEffect(()=>{
        let total:number = 0
        cartDefaultItems.forEach(elm=>{
            total += elm.pricePerItem*elm.numOfItems
        })
        setCartTotal(total)
    },[toggle])


    function renderItem(data: flatListArg) {
            return (
                <ItemCard
                    gender={data.item.gender}
                    imageSrc={data.item.iconUrl}
                    name={data.item.title}
                    id={data.item.id}
                    quantity={data.item.numOfItems}
                    price={data.item.pricePerItem}
                    updateCartItem = {(cartItems: number,id)=>{
                        let updatedConfigs: { title: string; pricePerItem: number; iconUrl: any; numOfItems: number; gender: string; id: number; }[] = [];
                        cartDefaultItems.forEach(elm=>{
                            if(elm.id==id){
                                elm.numOfItems = cartItems
                            }
                            if(elm.numOfItems>0){
                                setIsNextValid(true)
                            }
                            updatedConfigs.push(elm)

                        })

                        let results = cartDefaultItems.filter(elm=>elm.numOfItems>0);

                        if(results.length>0){
                            setIsNextValid(true)

                        }else{
                            setIsNextValid(false)
                        }
                        cartDefaultItems = updatedConfigs;
                        setToggle(!toggle)
                    }}
                />
            );

    }
  return (
    <View style={styles.container}>
        <FlatList
            ListHeaderComponentStyle={{ width: "100%" }}
            initialNumToRender={3}
            maxToRenderPerBatch={5}
            windowSize={4}
            keyExtractor={(item) => item.id+""}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            data={cartDefaultItems}
        />
        <View style={{width:"100%", bottom:30,position: 'absolute'}}>
            <View style={{marginHorizontal: 10, marginVertical:4}}>
                <Text lightColor={"#1D1E4E"} style={{fontSize: 15, fontWeight:"bold"}}>Total: R {cartTotal} </Text>
            </View>

            <Button style={{backgroundColor:!isNextValid ? "lightgrey":"#5EBC9D", height:"70%",borderRadius:10}} onPress={()=> {
                console.log(cartDefaultItems)
                navigation.navigate("MoreOptions")
            }} disabled={!isNextValid}>
                <Text style={{color: "#FFF", fontSize:24, fontWeight:"bold"}}>Done</Text>
            </Button>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
      backgroundColor:"#F0F0F0",
      paddingBottom: 100
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
    backgroundColor: "#EFEFEF",
    alignContent:"center",
    marginLeft: 20,
    justifyContent: "center"
  },
    servicesImage: {
        width: "13%",
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
