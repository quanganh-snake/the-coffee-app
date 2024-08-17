import {ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {useStore} from '../../services/stores/zustand-store'
import {InitialStateZustand} from '../../types/zustand.type'
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs'
import {styles} from './style'
import HeaderBar from '../../components/HeaderBar'
import {COLORS} from '../../theme/theme'
import EmptyListAnimation from '../../components/EmptyListAnimation'
import FavoritesItemCard from '../../components/FavoritesItemCard'

const FavoritesScreen = ({navigation}: any) => {
  const tabBarHeight = useBottomTabBarHeight()

  const FavoritesList = useStore((state: any) => (state as InitialStateZustand).FavoritesList)
  const addToFavoriteList = useStore(
    (state: any) => (state as InitialStateZustand).addToFavoriteList,
  )
  const deleteFavoriteList = useStore(
    (state: any) => (state as InitialStateZustand).deleteFavoriteList,
  )

  const onToggleFavorite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFavoriteList(type, id) : addToFavoriteList(type, id)
  }

  console.log('1 - data f: ', FavoritesList.length)
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View style={[styles.scrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.itemContainer}>
            <HeaderBar title="Favourites" />
            {FavoritesList.length === 0 ? (
              <EmptyListAnimation title="Favourites is empty" />
            ) : (
              <View style={styles.listItemContainer}>
                {FavoritesList.map((data: any, index: number) => {
                  return (
                    <TouchableOpacity
                      key={index.toString()}
                      onPress={() => {
                        navigation.navigate('Details', {
                          index: data.index,
                          id: data.id,
                          type: data.type,
                        })
                      }}>
                      <FavoritesItemCard
                        id={data.id}
                        name={data.name}
                        imagelink_portrait={data.imagelink_portrait}
                        special_ingredient={data.special_ingredient}
                        type={data.type}
                        ingredients={data.ingredients}
                        average_rating={data.average_rating}
                        ratings_count={data.ratings_count}
                        roasted={data.roasted}
                        description={data.description}
                        favourite={data.favourite}
                        onToggleFavorite={onToggleFavorite}
                      />
                    </TouchableOpacity>
                  )
                })}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default FavoritesScreen
