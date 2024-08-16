import {Image, ImageProps, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {COLORS, FONTSIZE} from '../../theme/theme'
import {styles} from './style'
import IconMoonCustom from '../CustomIcon'

interface Props {
  id: string
  name: string
  imagelink_square: ImageProps
  special_ingredient: string
  roasted: string
  prices: any
  type: string
  onIncrementCartItemQuantity: (id: string, size: string) => void
  onDecrementCartItemQuantity: (id: string, size: string) => void
}
const CartItem = (props: Props) => {
  const {
    id,
    name,
    imagelink_square,
    special_ingredient,
    roasted,
    prices,
    type,
    onIncrementCartItemQuantity,
    onDecrementCartItemQuantity,
  } = props

  return (
    <View>
      {prices.length !== 1 ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.cartItemLinearGradient}>
          <View style={styles.cartItemRow}>
            <Image source={imagelink_square} style={styles.cartItemImage} />
            <View style={styles.cartItemInfo}>
              <View style={styles.cartItemBoxTitle}>
                <Text style={styles.cartItemName}>{name}</Text>
                <Text style={styles.cartItemSubName}>{special_ingredient}</Text>
              </View>
              {/* END: cartItemBoxTitle */}
              <View style={styles.cartItemRoastedContainer}>
                <Text style={styles.cartItemRoastedText}>{roasted}</Text>
              </View>
              {/* END: cartItemRoastedContainer */}
            </View>
          </View>
          {prices.map((data: any, index: number) => {
            return (
              <View key={index.toString()} style={styles.cartItemSizeRowContainer}>
                <View style={styles.cartItemSizeValueContainer}>
                  <View style={styles.sizeBox}>
                    <Text
                      style={[
                        styles.sizeText,
                        {
                          fontSize: type === 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                        },
                      ]}>
                      {data.size}
                    </Text>
                  </View>
                  {/* END: sizeBox */}
                  <View style={styles.priceBox}>
                    <Text style={styles.priceCurrencyText}>{data.currency}</Text>
                    <Text style={styles.priceText}>{data.price}</Text>
                  </View>
                  {/* END: priceBox */}
                </View>
                {/* END: cartItemSizeValueContainer */}
                <View style={styles.cartItemSizeValueContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      onDecrementCartItemQuantity(id, data.size)
                    }}
                    style={styles.cartItemIcon}>
                    <IconMoonCustom
                      name="minus"
                      color={COLORS.primaryWhiteHex}
                      size={FONTSIZE.size_10}
                    />
                  </TouchableOpacity>
                  <View style={styles.cartItemQuantityContainer}>
                    <Text style={styles.cartItemQuantityText}>{data.quantity}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      onIncrementCartItemQuantity(id, data.size)
                    }}
                    style={styles.cartItemIcon}>
                    <IconMoonCustom
                      name="add"
                      color={COLORS.primaryWhiteHex}
                      size={FONTSIZE.size_10}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.cartItemSingleLinearGradient}>
          <View>
            <Image source={imagelink_square} style={styles.cartItemSingleImage} />
          </View>
          <View style={styles.cartItemSingleInfoContainer}>
            <View style={styles.cartItemBoxTitle}>
              <Text style={styles.cartItemName}>{name}</Text>
              <Text style={styles.cartItemSubName}>{'special_ingredient'}</Text>
            </View>
            {/* END: cartItemBoxTitle */}
            <View style={styles.cartItemSingleSizeValueContainer}>
              <View style={styles.sizeBox}>
                <Text
                  style={[
                    styles.sizeText,
                    {
                      fontSize: type === 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                    },
                  ]}>
                  {prices[0].size}
                </Text>
              </View>
              {/* END: sizeBox */}
              <View style={styles.priceBox}>
                <Text style={styles.priceCurrencyText}>{prices[0].currency}</Text>
                <Text style={styles.priceText}>{prices[0].price}</Text>
              </View>
              {/* END: priceBox */}
            </View>
            {/* END: cartItemSingleSizeValueContainer */}
            <View style={styles.cartItemSizeValueContainer}>
              <TouchableOpacity
                onPress={() => {
                  onDecrementCartItemQuantity(id, prices[0].size)
                }}
                style={styles.cartItemIcon}>
                <IconMoonCustom
                  name="minus"
                  color={COLORS.primaryWhiteHex}
                  size={FONTSIZE.size_10}
                />
              </TouchableOpacity>
              <View style={styles.cartItemQuantityContainer}>
                <Text style={styles.cartItemQuantityText}>{prices[0].quantity}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  onIncrementCartItemQuantity(id, prices[0].size)
                }}
                style={styles.cartItemIcon}>
                <IconMoonCustom name="add" color={COLORS.primaryWhiteHex} size={FONTSIZE.size_10} />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  )
}

export default CartItem
