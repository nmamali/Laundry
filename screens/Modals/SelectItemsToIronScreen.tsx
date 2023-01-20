import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import { View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import React, {useContext} from "react";
import {LoginContext} from "../../context/LoginContext";
import {IronItemCard} from "../Checkout/components/IronItemCard";

export default function SelectItemsToIronScreen({ navigation }: RootStackScreenProps<'SelectItemsToIron'>) {
  const {orderObject } = useContext(LoginContext);
  const {updateOrderItems } = useContext(LoginContext);

  function renderItem(data: any) {
    return (
        <IronItemCard
            gender={data.item.gender}
            imageSrc={data.item.iconUrl}
            name={data.item.title}
            id={data.item.id}
            quantity={data.item.numOfItems}
            price={data.item.pricePerItem}
            isIronNeeded={data?.item?.isIronNeeded}
            updateCartItem = {(isIronNeeded: boolean,id)=>{
              let tempOrder = {...orderObject};

              // @ts-ignore
                tempOrder.orderItems.forEach(elm=>{
                  // @ts-ignore
                  if(elm.id==id){
                      // @ts-ignore
                      elm.isIronNeeded = isIronNeeded
                }
              });
              updateOrderItems(tempOrder);
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
          // @ts-ignore
          data={orderObject.orderItems.filter((x: { numOfItems: number; })=>x.numOfItems>0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  checkbox: {
    margin: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
