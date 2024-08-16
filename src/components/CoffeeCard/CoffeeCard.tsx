import {Dimensions, ImageBackground, ImageProps, Text, TouchableOpacity, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {styles} from './style'
import {COLORS, FONTSIZE} from '../../theme/theme'
import IconMoonCustom from '../CustomIcon'
import BGRIcon from '../BGRIcon'

const CARD_WIDTH = Dimensions.get('window').width * 0.32

interface Props {
  id: string
  index: number
  type: string
  roasted: string
  imagelink_square: ImageProps
  name: string
  special_ingredient: string
  average_rating: number
  price: any
  buttonPressHandler: any
}

const CoffeeCard = (props: Props) => {
  const {
    average_rating,
    buttonPressHandler,
    id,
    imagelink_square,
    index,
    name,
    price,
    roasted,
    special_ingredient,
    type,
  } = props

  return (
    <LinearGradient
      start={{
        x: 0,
        y: 0,
      }}
      end={{
        x: 1,
        y: 1,
      }}
      style={styles.cardLinearGradientBox}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={
          imagelink_square
            ? imagelink_square
            : require('../../assets/coffee_assets/americano/square/americano_pic_1_square.png')
        }
        style={styles.cardImageBG}
        resizeMode="cover">
        <View style={styles.cardRatingBox}>
          <IconMoonCustom name={'star'} color={COLORS.primaryOrangeHex} size={FONTSIZE.size_14} />
          <Text style={styles.cardRatingText}>{average_rating}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardSubTitle}>{special_ingredient}</Text>
      <View style={styles.cardFooterBox}>
        <Text style={styles.cardPriceCurrency}>
          $ <Text style={styles.cardPrice}>{price.price}</Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            buttonPressHandler &&
              buttonPressHandler({
                id,
                index,
                name,
                roasted: roasted,
                imagelink_square: imagelink_square,
                type: type,
                prices: [{...price, quantity: 1}],
              })
          }}>
          <BGRIcon
            name="add"
            color={COLORS.primaryWhiteHex}
            size={FONTSIZE.size_10}
            bgrColor={COLORS.primaryOrangeHex}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default CoffeeCard
