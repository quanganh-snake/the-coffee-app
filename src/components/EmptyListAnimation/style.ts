import { StyleSheet } from 'react-native'
import { COLORS, FONTFAMILY, FONTSIZE } from '../../theme/theme'

export const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  lottieStyle: {
    height: 300
  },
  lottieTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: 'center'
  },

})
