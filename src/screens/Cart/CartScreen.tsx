import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useStore} from '../../services/stores/zustand-store'
import {InitialStateZustand} from '../../types/zustand.type'

const CartScreen = () => {
  const cartList = useStore((state: any) => (state as InitialStateZustand).CartList)

  console.log('🚀 ~ file: CartScreen.tsx:9 ~ CartScreen ~ cartList:', cartList.length)

  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CartScreen
