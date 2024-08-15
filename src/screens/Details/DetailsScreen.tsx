import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import {useStore} from '../../services/stores/zustand-store'
import {InitialStateZustand} from '../../types/zustand.type'
import {styles} from './style'
import {COLORS, FONTSIZE} from '../../theme/theme'
import ImageBackgroundInfo from '../../components/ImageBackgroundInfo'
import {useState} from 'react'
import PaymentFooter from '../../components/PaymentFooter'

const DetailsScreen = ({navigation, route}: any) => {
  const itemOfIndex = useStore((state: any) =>
    route.params.type === 'Coffee'
      ? (state as InitialStateZustand).CoffeeList
      : (state as InitialStateZustand).BeanList,
  )[route.params.index]

  const [fullDesc, setFullDesc] = useState(false)
  const [price, setPrice] = useState(itemOfIndex.prices[0])

  const addToCart = useStore((state: any) => (state as InitialStateZustand).addToCart)
  const calculateCartPrice = useStore(
    (state: any) => (state as InitialStateZustand).calculateCartPrice,
  )

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

  const handleAddToCart = ({id, index, name, roasted, imagelink_square, type, price}: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      type,
      prices: [
        {
          ...price,
          quantity: 1,
        },
      ],
    })
    calculateCartPrice()
    navigation.navigate('Cart')
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

        <View style={styles.footerInfoArea}>
          <Text style={styles.infoTitle}>Description</Text>
          {fullDesc ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(!fullDesc)
              }}>
              <Text style={styles.descText}>{itemOfIndex.description}</Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(!fullDesc)
              }}>
              <Text style={styles.descText} numberOfLines={3}>
                {itemOfIndex.description}
              </Text>
            </TouchableWithoutFeedback>
          )}
          {/* END: description */}

          <Text style={styles.infoTitle}>Size</Text>
          <View style={styles.sizeOuterContainer}>
            {itemOfIndex.prices.map((data: any) => {
              return (
                <TouchableOpacity
                  key={data.size}
                  onPress={() => {
                    setPrice(data)
                  }}
                  style={[
                    styles.sizeBox,
                    {
                      borderColor:
                        data.size === price.size
                          ? COLORS.primaryOrangeHex
                          : COLORS.primaryDarkGreyHex,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.sizeText,
                      {
                        fontSize: itemOfIndex.type === 'bean' ? FONTSIZE.size_14 : FONTSIZE.size_16,
                        color:
                          data.size === price.size
                            ? COLORS.primaryOrangeHex
                            : COLORS.primaryWhiteHex,
                      },
                    ]}>
                    {data.size}
                  </Text>
                </TouchableOpacity>
              )
            })}
          </View>
          {/* END: size */}
        </View>
        {/* END: footerInfoArea */}
        <PaymentFooter
          price={price}
          buttonTitle={'Add to Cart'}
          buttonPressHandler={() => {
            handleAddToCart({
              id: itemOfIndex.id,
              index: itemOfIndex.index,
              name: itemOfIndex.name,
              roasted: itemOfIndex.roasted,
              imagelink_square: itemOfIndex.imagelink_square,
              type: itemOfIndex.type,
              price: price,
            })
          }}
        />
      </ScrollView>
    </View>
  )
}

export default DetailsScreen
