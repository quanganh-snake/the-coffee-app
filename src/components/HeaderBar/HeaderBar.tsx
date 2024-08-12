import {Text, View} from 'react-native'
import React from 'react'
import {styles} from './style'
import GradientBGIcon from '../GradientBGIcon'
import ProfilePicture from '../ProfilePicture'
import {COLORS, FONTSIZE} from '../../theme/theme'

interface Props {
  title?: string
}

const HeaderBar = (props: Props) => {
  const {title} = props
  return (
    <View style={styles.headerContainer}>
      <GradientBGIcon name="menu" color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_20} />
      <Text style={styles.headerText}>{title}</Text>
      <ProfilePicture />
    </View>
  )
}

export default HeaderBar
