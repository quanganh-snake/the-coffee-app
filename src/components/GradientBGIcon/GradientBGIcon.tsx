import {Text, View} from 'react-native'
import React from 'react'
import {styles} from './style'
import LinearGradient from 'react-native-linear-gradient'
import {COLORS} from '../../theme/theme'
import IconMoonCustom from '../CustomIcon'

interface Props {
  name: string
  color: string
  size: number
}

const GradientBGIcon = (props: Props) => {
  const {name, color, size} = props

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.linearGradientBG}>
        <IconMoonCustom name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  )
}

export default GradientBGIcon
