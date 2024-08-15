import {Text, TouchableOpacity, View} from 'react-native'
import {styles} from './style'

interface PriceProps {
  price: string
  currency: string
}

interface PaymentFooterProps {
  price: PriceProps
  buttonPressHandler: any
  buttonTitle: string
}

const PaymentFooter = (props: PaymentFooterProps) => {
  const {buttonPressHandler, buttonTitle, price} = props
  return (
    <View style={styles.priceFooter}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Price</Text>
        <View style={styles.priceTextContainer}>
          <Text style={[styles.priceText, styles.priceCurrency]}>{price.currency}</Text>
          <Text style={[styles.priceText, styles.price]}>{price.price}</Text>
        </View>
      </View>
      {/* END: price */}
      <TouchableOpacity onPress={() => buttonPressHandler()} style={styles.paymentBotton}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PaymentFooter
