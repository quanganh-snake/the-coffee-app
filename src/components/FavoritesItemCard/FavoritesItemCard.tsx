import {ImageProps, Text, View} from 'react-native'
import React from 'react'
import {styles} from './style'
import ImageBackgroundInfo from '../ImageBackgroundInfo'
import LinearGradient from 'react-native-linear-gradient'
import {COLORS} from '../../theme/theme'
interface Props {
  id: string
  name: string
  imagelink_portrait: ImageProps
  special_ingredient: string
  type: string
  ingredients: string
  average_rating: number
  ratings_count: string
  roasted: string
  description: string
  favourite: boolean
  onToggleFavorite: (favourite: boolean, type: string, id: string) => void
}

const FavoritesItemCard = (props: Props) => {
  const {
    average_rating,
    description,
    favourite,
    id,
    imagelink_portrait,
    ingredients,
    name,
    ratings_count,
    roasted,
    special_ingredient,
    type,
    onToggleFavorite,
  } = props

  return (
    <View style={styles.favouriteContainer}>
      <ImageBackgroundInfo
        average_rating={average_rating}
        enabledBackHandler={false}
        favourite={favourite}
        id={id}
        imagelink_portrait={imagelink_portrait}
        ingredients={ingredients}
        name={name}
        ratings_count={ratings_count}
        roasted={roasted}
        special_ingredient={special_ingredient}
        toggleFavourite={onToggleFavorite}
        type={type}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.containerLinearGradient}>
        <Text style={styles.descTitle}>Description</Text>
        <Text style={styles.descText}>{description}</Text>
      </LinearGradient>
    </View>
  )
}

export default FavoritesItemCard
