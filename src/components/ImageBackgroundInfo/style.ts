import { StyleSheet } from "react-native";
import { SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
  imageBackgroundInfo: {
    width: '100%',
    aspectRatio: 200 / 250,
    justifyContent: 'space-between',
  },
  imageHeaderBarContainerWithBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageHeaderBarContainerWithoutBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})