import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View,
} from "react-native";
import Colors from "../resource/theme/color";
import LinearGradient from "react-native-linear-gradient";
import Mixins from "../resource/mixins/appStyle";
import Fonts from "../resource/theme/font";
const { scaleSize, scaleFont } = Mixins;
interface Props {
  title?: string;
  onPress?: any;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  isDark?: boolean;
  isLoading?: boolean;
  ColorCodes?: any;
}

const CustomButton: React.FC<Props> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled,
  isDark = true,
  isLoading,
  ColorCodes = [],
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={isLoading || disabled}>
      <LinearGradient
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={
          ColorCodes?.length > 0
            ? ColorCodes
            : isDark
            ? [Colors.black(), Colors.black()]
            : [Colors.red(), Colors.red()]
        }
        style={[styles.button, style]}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            padding: scaleSize(20),
          }}
        >
          <Text style={[styles.buttonText, textStyle]}>{title}</Text>
          {isLoading && (
            <ActivityIndicator
              color={"white"}
              style={{ marginHorizontal: scaleSize(10) }}
            />
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.white(),
    fontSize: scaleFont(20),
    fontFamily: Fonts.RobotoBold,
  },
});

export default CustomButton;
