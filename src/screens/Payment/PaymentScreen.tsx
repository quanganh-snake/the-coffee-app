import {ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native'
import {useState} from 'react'
import {styles} from './style'
import {COLORS, FONTSIZE} from '../../theme/theme'
import GradientBGIcon from '../../components/GradientBGIcon'
import PaymentMethod from '../../components/PaymentMethod'
import PaymentFooter from '../../components/PaymentFooter'
import LinearGradient from 'react-native-linear-gradient'
import IconMoonCustom from '../../components/CustomIcon'
import {useStore} from '../../services/stores/zustand-store'
import {InitialStateZustand} from '../../types/zustand.type'
import PopUpAnimation from '../../components/PopUpAnimation'

const PaymentList = [
  {
    name: 'Wallet',
    icon: 'icon',
    isIcon: true,
  },
  {
    name: 'Google Pay',
    icon: require('../../assets/app_images/gpay.png'),
    isIcon: false,
  },
  {
    name: 'Apple Pay',
    icon: require('../../assets/app_images/applepay.png'),
    isIcon: false,
  },
  {
    name: 'Amazon Pay',
    icon: require('../../assets/app_images/amazonpay.png'),
    isIcon: false,
  },
]
const PaymentScreen = ({navigation, route}: any) => {
  const calculateCartPrice = useStore(
    (state: any) => (state as InitialStateZustand).calculateCartPrice,
  )

  const addToOrderHistoryListFromCart = useStore(
    (state: any) => (state as InitialStateZustand).addToOrderHistoryListFromCart,
  )

  const [paymentMode, setPaymentMode] = useState('Credit Card')
  const [showAnimation, setShowAnimation] = useState(false)

  const handlePayment = () => {
    setShowAnimation(true)
    addToOrderHistoryListFromCart()
    calculateCartPrice()
    setTimeout(() => {
      setShowAnimation(false)
      navigation.navigate('OrderHistory')
    }, 2000)
  }
  return (
    <View style={styles.paymentContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      {showAnimation ? (
        <PopUpAnimation
          source={require('../../assets/lottie/successful.json')}
          style={[styles.popupAnimationLottie]}
        />
      ) : (
        <></>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <GradientBGIcon
              name="left"
              color={COLORS.primaryLightGreyHex}
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Payments</Text>
          <View style={styles.emptyView} />
        </View>
        {/* END: headerContainer */}

        <View style={styles.paymentOptionsContainer}>
          <TouchableOpacity
            onPress={() => {
              setPaymentMode('Credit Card')
            }}>
            <View
              style={[
                styles.creditCardContainer,
                {
                  borderColor:
                    paymentMode === 'Credit Card'
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryBlackHex,
                },
              ]}>
              <Text style={styles.creditCartTitle}>Credit Card</Text>
              <View style={styles.creaditCardBG}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                  style={styles.linearGradientCreditCard}>
                  <View style={styles.creditCardView}>
                    <IconMoonCustom
                      name="chip"
                      size={FONTSIZE.size_20 * 2}
                      color={COLORS.primaryOrangeHex}
                    />
                    <IconMoonCustom
                      name="visa"
                      size={FONTSIZE.size_20 * 2}
                      color={COLORS.primaryWhiteHex}
                    />
                  </View>
                  <View style={styles.careditCardNumberConatiner}>
                    <Text style={styles.creditCardNumber}>3567</Text>
                    <Text style={styles.creditCardNumber}>3314</Text>
                    <Text style={styles.creditCardNumber}>4587</Text>
                    <Text style={styles.creditCardNumber}>6688</Text>
                  </View>
                  <View style={styles.creditCardRow}>
                    <View style={styles.creditCardBoxName}>
                      <Text style={styles.creditCardNameSubTitle}>Card Holder Name</Text>
                      <Text style={styles.creditCardNameTitle}>Tong Ba Quang Anh</Text>
                    </View>
                    <View style={styles.creditCardBoxDate}>
                      <Text style={styles.creditCardNameSubTitle}>Expiry Date</Text>
                      <Text style={styles.creditCardNameTitle}>27/07</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </TouchableOpacity>

          {PaymentList.map((pm: any, index: number) => {
            return (
              <TouchableOpacity key={index.toString()} onPress={() => setPaymentMode(pm.name)}>
                <PaymentMethod
                  paymentMode={paymentMode}
                  name={pm.name}
                  icon={pm.icon}
                  isIcon={pm.isIcon}
                />
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>

      <PaymentFooter
        price={{currency: '$', price: route.params.amount}}
        // price={{currency: '$', price: '100'}}
        buttonTitle={`Pay with ${paymentMode}`}
        buttonPressHandler={() => {
          handlePayment()
        }}
      />
    </View>
  )
}

export default PaymentScreen
