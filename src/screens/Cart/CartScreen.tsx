import {ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {useStore} from '../../services/stores/zustand-store'
import {InitialStateZustand} from '../../types/zustand.type'
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs'
import {styles} from './style'
import {COLORS} from '../../theme/theme'
import HeaderBar from '../../components/HeaderBar'
import EmptyListAnimation from '../../components/EmptyListAnimation'
import PaymentFooter from '../../components/PaymentFooter'
import CartItem from '../../components/CartItem'

const CartScreen = ({navigation}: any) => {
  const cartList = useStore((state: any) => (state as InitialStateZustand).CartList)
  const CartPrice = useStore((state: any) => (state as InitialStateZustand).CartPrice)
  const incrementCartItemQuantity = useStore(
    (state: any) => (state as InitialStateZustand).incrementCartItemQuantity,
  )
  const decrementCartItemQuantity = useStore(
    (state: any) => (state as InitialStateZustand).decrementCartItemQuantity,
  )
  const calculateCartPrice = useStore(
    (state: any) => (state as InitialStateZustand).calculateCartPrice,
  )

  const tabBarHeight = useBottomTabBarHeight()

  const handlePaymentOrder = () => {
    navigation.navigate('Payment', {
      amount: CartPrice,
    })
  }

  const incrementCartItemQuantityHandler = (id: string, size: string) => {
    incrementCartItemQuantity(id, size)
    calculateCartPrice()
  }

  const decrementCartItemQuantityHandler = (id: string, size: string) => {
    decrementCartItemQuantity(id, size)
    calculateCartPrice()
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View style={[styles.scrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.itemContainer}>
            <HeaderBar title="Cart" />
            {cartList.length === 0 ? (
              <EmptyListAnimation title="Cart is empty" />
            ) : (
              <View style={styles.listItemContainer}>
                {cartList.map((data: any) => {
                  return (
                    <TouchableOpacity
                      key={data.id}
                      onPress={() => {
                        navigation.navigate('Details', {
                          index: data.index,
                          id: data.id,
                          type: data.type,
                        })
                      }}>
                      <CartItem
                        id={data.id}
                        name={data.name}
                        imagelink_square={data.imagelink_square}
                        special_ingredient={data.special_ingredient}
                        roasted={data.roasted}
                        prices={data.prices}
                        type={data.type}
                        onIncrementCartItemQuantity={incrementCartItemQuantityHandler}
                        onDecrementCartItemQuantity={decrementCartItemQuantityHandler}
                      />
                    </TouchableOpacity>
                  )
                })}
              </View>
            )}
          </View>

          {cartList.length !== 0 ? (
            <PaymentFooter
              buttonPressHandler={handlePaymentOrder}
              buttonTitle="Pay"
              price={{price: CartPrice.toString(), currency: '$'}}
            />
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default CartScreen
