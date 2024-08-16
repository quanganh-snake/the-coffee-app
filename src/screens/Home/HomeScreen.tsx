import React, {useRef, useState} from 'react'
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native'
import {useStore} from '../../services/stores/zustand-store'
import {InitialStateZustand} from '../../types/zustand.type'
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs'
import {styles} from './style'
import {COLORS, FONTSIZE} from '../../theme/theme'
import HeaderBar from '../../components/HeaderBar'
import IconMoonCustom from '../../components/CustomIcon'
import CoffeeCard from '../../components/CoffeeCard'
import AppRoutes from '../../routes'

const getCategoriesFromData = (data: any) => {
  let temp: any = {}
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] === undefined) {
      temp[data[i].name] = 1
    } else {
      temp[data[i].name]++
    }
  }

  let categories = Object.keys(temp)
  categories.unshift('All')
  return categories
}

const getCoffeeList = (category: string, data: any) => {
  if (category === 'All') {
    return data
  } else {
    let coffeelist = data.filter((item: any) => item.name === category)
    return coffeelist
  }
}

const HomeScreen = ({navigation}: any) => {
  const listRef: any = useRef<FlatList>()
  const tabBarHeight = useBottomTabBarHeight()
  const CoffeeList = useStore((state: any) => (state as InitialStateZustand).CoffeeList)
  const BeanList = useStore((state: any) => (state as InitialStateZustand).BeanList)

  const [categoris, setCategories] = useState(getCategoriesFromData(CoffeeList))
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categoris[0],
  })
  const [searchText, setSearchText] = useState('')
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  )
  const addToCart = useStore((state: any) => (state as InitialStateZustand).addToCart)
  const calculateCartPrice = useStore(
    (state: any) => (state as InitialStateZustand).calculateCartPrice,
  )

  const handleSearchCoffee = (keywordsSearch: string) => {
    if (keywordsSearch !== '') {
      listRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      })
      setCategoryIndex({index: 0, category: categoris[0]})
      setSortedCoffee([
        ...CoffeeList.filter((item: any) =>
          item.name.toLowerCase().includes(keywordsSearch.toLowerCase()),
        ),
      ])
    }
  }

  const handleClearSearch = () => {
    setSearchText('')
    listRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    })
    setCategoryIndex({index: 0, category: categoris[0]})
    setSortedCoffee([...CoffeeList])
  }

  const handleAddToCart = ({id, index, name, roasted, imagelink_square, type, prices}: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      type,
      prices,
    })
    calculateCartPrice()
    ToastAndroid.showWithGravity(
      `${name} is added to cart!`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    )
  }

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        {/* START: 1. App Header */}
        <HeaderBar title="The Coffee House" />
        {/* END: App Header */}

        <Text style={styles.title}>Find the best {'\n'}coffee for you</Text>

        {/* START: 2. Search Input */}
        <View style={styles.inputSearchContainer}>
          <TouchableOpacity
            onPress={() => {
              handleSearchCoffee(searchText)
            }}>
            <IconMoonCustom
              style={styles.inputSearchIcon}
              name="search"
              size={FONTSIZE.size_18}
              color={searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Coffee..."
            value={searchText}
            onChangeText={text => {
              setSearchText(text)
              handleSearchCoffee(text)
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.inputSearchText}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                handleClearSearch()
              }}>
              <IconMoonCustom
                name="close"
                size={FONTSIZE.size_16}
                color={COLORS.primaryLightGreyHex}
                style={styles.inputSearchCloseIcon}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
        {/* END: Search Input */}

        {/* START: 3. Category ScrollHorizontal */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollViewBox}>
          {categoris.map((ct, index) => (
            <View key={index} style={styles.categoryItemBox}>
              <TouchableOpacity
                style={styles.categoryItemInner}
                onPress={() => {
                  setCategoryIndex({index: index, category: ct})
                  setSortedCoffee([...getCoffeeList(ct, CoffeeList)])
                  listRef.current?.scrollToOffset({animated: true, offset: 0})
                }}>
                <Text
                  style={[
                    styles.categoryText,
                    categoryIndex.index === index
                      ? styles.categoryTextActive
                      : styles.categoryTextInActive,
                  ]}>
                  {ct}
                </Text>
                {categoryIndex.index === index ? <View style={styles.activeCategory} /> : ''}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        {/* END: Category ScrollHorizontal */}

        {/* START: 4. Coffee FlatList */}
        <FlatList
          ref={listRef}
          horizontal
          ListEmptyComponent={
            <View style={styles.emptyCoffeeBox}>
              <Text style={styles.emptyCoffeeText}>No Coffee Available!</Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={styles.flatListCoffeeContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation &&
                    navigation.push(AppRoutes.DetailsScreen.name, {
                      index: item.index,
                      id: item.id,
                      type: item.type,
                    })
                }}>
                <CoffeeCard
                  average_rating={item.average_rating}
                  buttonPressHandler={handleAddToCart}
                  id={item.id}
                  imagelink_square={item.imagelink_square}
                  index={item.index}
                  name={item.name}
                  price={item.prices[2]}
                  roasted={item.roasted}
                  special_ingredient={item.special_ingredient}
                  type={item.type}
                />
              </TouchableOpacity>
            )
          }}
        />
        {/* END: Coffee FlatList */}

        <Text style={styles.coffeeBeansTitle}>Coffee Beans</Text>
        {/* START: 5. Coffee Beans FlatList */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BeanList}
          contentContainerStyle={[styles.flatListCoffeeContainer, {marginBottom: tabBarHeight}]}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation &&
                    navigation.push(AppRoutes.DetailsScreen.name, {
                      index: item.index,
                      id: item.id,
                      type: item.type,
                    })
                }}>
                <CoffeeCard
                  average_rating={item.average_rating}
                  buttonPressHandler={handleAddToCart}
                  id={item.id}
                  imagelink_square={item.imagelink_square}
                  index={item.index}
                  name={item.name}
                  price={item.prices[2]}
                  roasted={item.roasted}
                  special_ingredient={item.special_ingredient}
                  type={item.type}
                />
              </TouchableOpacity>
            )
          }}
        />
        {/* END: Coffee Beans FlatList */}
      </ScrollView>
    </View>
  )
}

export default HomeScreen
