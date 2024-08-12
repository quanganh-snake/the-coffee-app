import {View, Image} from 'react-native'
import {styles} from './style'

const ProfilePicture = () => {
  return (
    <View style={styles.imageContainer}>
      <Image source={require('../../assets/app_images/avatar.png')} style={styles.image} />
    </View>
  )
}

export default ProfilePicture
