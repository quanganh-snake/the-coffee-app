import {ImageBackground, ImageProps, Text, TouchableOpacity, View} from 'react-native'
import {styles} from './style'
import GradientBGIcon from '../GradientBGIcon'
import {COLORS, FONTSIZE} from '../../theme/theme'

interface Props {
  enabledBackHandler: boolean
  onBackHandler?: () => void
  imagelink_portrait: ImageProps
  type: string
  id: string
  favourite: boolean
  name: string
  special_ingredient: string
  ingredients: string
  average_rating: number
  ratings_count: string
  roasted: string
  toggleFavourite: any
}
const ImageBackgroundInfo = (props: Props) => {
  const {
    average_rating,
    enabledBackHandler,
    favourite,
    id,
    imagelink_portrait,
    ingredients,
    name,
    onBackHandler,
    ratings_count,
    roasted,
    special_ingredient,
    toggleFavourite,
    type,
  } = props

  return (
    <View>
      <ImageBackground source={imagelink_portrait} style={styles.imageBackgroundInfo}>
        {enabledBackHandler ? (
          <View style={styles.imageHeaderBarContainerWithBack}>
            <TouchableOpacity onPress={onBackHandler}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                toggleFavourite(favourite, type, id)
              }}>
              <GradientBGIcon
                name="like"
                color={favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.imageHeaderBarContainerWithoutBack}>
            <TouchableOpacity
              onPress={() => {
                toggleFavourite(favourite, type, id)
              }}>
              <GradientBGIcon
                name="like"
                color={favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </View>
  )
}

export default ImageBackgroundInfo
