import {ImageBackground, ImageProps, Text, TouchableOpacity, View} from 'react-native'
import {styles} from './style'
import GradientBGIcon from '../GradientBGIcon'
import {COLORS, FONTSIZE, SPACING} from '../../theme/theme'
import IconMoonCustom from '../CustomIcon'

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

        <View style={styles.imageInfoOuterContainer}>
          <View style={styles.imageInfoInnerContainer}>
            <View style={styles.infoContainerRow}>
              <View style={styles.infoTitleContainer}>
                <Text style={styles.infoTitleText}>{name}</Text>
                <Text style={styles.infoSubtitleText}>{special_ingredient}</Text>
              </View>
              {/* END: titleText */}
              <View style={styles.itemPropertiesContainer}>
                <View style={styles.propertiesFirst}>
                  <IconMoonCustom
                    name={type === 'Bean' ? 'bean' : 'beans'}
                    size={type === 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text
                    style={[
                      styles.propertyTextFirst,
                      {marginTop: type === 'Bean' ? SPACING.space_4 + SPACING.space_2 : 0},
                    ]}>
                    {type}
                  </Text>
                </View>
                {/* END: propertiesFirst */}
                <View style={styles.propertiesFirst}>
                  <IconMoonCustom
                    name={type === 'Bean' ? 'location' : 'drop'}
                    size={FONTSIZE.size_18}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={[styles.propertyTextFirst]}>{ingredients}</Text>
                </View>
              </View>
            </View>
            {/* END: infoContainerRow */}
            <View style={styles.infoContainerRow}>
              <View style={styles.ratingConatainer}>
                <IconMoonCustom
                  name="star"
                  size={FONTSIZE.size_20}
                  color={COLORS.primaryOrangeHex}
                />
                <Text style={styles.ratingText}>{average_rating}</Text>
                <Text style={styles.ratingCountText}>({ratings_count})</Text>
              </View>
              {/* END: ratingConatainer */}
              <View style={styles.roastedContainer}>
                <Text style={styles.roastedText}>{roasted}</Text>
              </View>
              {/* END: roastedContainer */}
            </View>
            {/* END: infoContainerRow */}
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default ImageBackgroundInfo
