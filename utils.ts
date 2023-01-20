export const calculateOrderTotal = (orderItems:any) => {
    let total:number = 0
    orderItems.forEach((elm: { pricePerItem: number; numOfItems: number })=>{
        total += elm.pricePerItem*elm.numOfItems
    })
    return total;
}