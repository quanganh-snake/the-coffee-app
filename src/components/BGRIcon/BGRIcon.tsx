import {Text, View} from 'react-native'
import {styles} from './style'
import IconMoonCustom from '../CustomIcon'

interface Props {
  name: string
  color: string
  size: number
  bgrColor: string
}

const BGRIcon = (props: Props) => {
  const {bgrColor, color, name, size} = props

  return (
    <View
      style={[
        styles.iconBgr,
        {
          backgroundColor: bgrColor,
        },
      ]}>
      <IconMoonCustom name={name} color={color} size={size} />
    </View>
  )
}

export default BGRIcon
