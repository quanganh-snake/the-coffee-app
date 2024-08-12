import {ScrollView, StatusBar, Text, View} from 'react-native'
import {useStore} from '../../services/stores/zustand-store'
import {InitialStateZustand} from '../../types/zustand.type'
import {styles} from './style'
import {COLORS} from '../../theme/theme'

const DetailsScreen = ({navigation, route}: any) => {
  const itemOfIndex = useStore((state: any) =>
    route.params.type === 'Coffee'
      ? (state as InitialStateZustand).CoffeeList
      : (state as InitialStateZustand).BeanList,
  )[route.params.index]

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}></ScrollView>
    </View>
  )
}

export default DetailsScreen
