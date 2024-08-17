import {Image, Text, View} from 'react-native'
import {styles} from './style'
import LinearGradient from 'react-native-linear-gradient'
import {COLORS, FONTSIZE} from '../../theme/theme'
import IconMoonCustom from '../CustomIcon'
interface Props {
  paymentMode: string
  name: string
  icon: any
  isIcon: boolean
}
const PaymentMethod = (props: Props) => {
  const {icon, isIcon, name, paymentMode} = props

  return (
    <View
      style={[
        styles.paymentMethodContainer,
        {
          borderColor: paymentMode === name ? COLORS.primaryOrangeHex : COLORS.primaryBlackHex,
        },
      ]}>
      {isIcon ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.linearGradientWallet}>
          <View style={styles.walletRow}>
            <IconMoonCustom name="wallet" size={FONTSIZE.size_30} color={COLORS.primaryOrangeHex} />
            <Text style={styles.paymentTitle}>{name}</Text>
          </View>
          <Text style={styles.paymentPrice}>$ 100.50</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.linearGradientWalletRegular}>
          <Image source={icon} style={styles.paymentImage} />
          <Text style={styles.paymentTitle}>{name}</Text>
        </LinearGradient>
      )}
    </View>
  )
}

export default PaymentMethod
