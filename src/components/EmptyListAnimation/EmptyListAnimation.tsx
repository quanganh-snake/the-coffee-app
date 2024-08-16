import {Text, View} from 'react-native'
import React from 'react'
import {styles} from './style'
import LottieView from 'lottie-react-native'

interface Props {
  title: string
}

const EmptyListAnimation = (props: Props) => {
  const {title} = props

  return (
    <View style={styles.emptyContainer}>
      <LottieView
        source={require('../../assets/lottie/coffeecup.json')}
        style={styles.lottieStyle}
        autoPlay
        loop
      />
      <Text style={styles.lottieTitle}>{title}</Text>
    </View>
  )
}

export default EmptyListAnimation
