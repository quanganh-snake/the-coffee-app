import {ScrollView, StatusBar, Text, View} from 'react-native'
import {useStore} from '../../services/stores/zustand-store'
import {InitialStateZustand} from '../../types/zustand.type'
import {styles} from './style'
import {COLORS} from '../../theme/theme'
import ImageBackgroundInfo from '../../components/ImageBackgroundInfo'

const DetailsScreen = ({navigation, route}: any) => {
  const itemOfIndex = useStore((state: any) =>
    route.params.type === 'Coffee'
      ? (state as InitialStateZustand).CoffeeList
      : (state as InitialStateZustand).BeanList,
  )[route.params.index]

  const addToFavoriteList = useStore(
    (state: any) => (state as InitialStateZustand).addToFavoriteList,
  )

  const deleteFavoriteList = useStore(
    (state: any) => (state as InitialStateZustand).deleteFavoriteList,
  )

  const hanleBack = () => {
    navigation.pop()
  }

  const handleToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFavoriteList(type, id) : addToFavoriteList(type, id)
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <ImageBackgroundInfo
          enabledBackHandler={true}
          onBackHandler={hanleBack}
          imagelink_portrait={itemOfIndex.imagelink_portrait}
          type={itemOfIndex.type}
          id={itemOfIndex.id}
          favourite={itemOfIndex.favourite}
          name={itemOfIndex.name}
          special_ingredient={itemOfIndex.special_ingredient}
          ingredients={itemOfIndex.ingredients}
          average_rating={itemOfIndex.average_rating}
          ratings_count={itemOfIndex.ratings_count}
          roasted={itemOfIndex.roasted}
          toggleFavourite={handleToggleFavourite}
        />
      </ScrollView>
    </View>
  )
}

export default DetailsScreen
