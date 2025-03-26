import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CommenHeader from "../../Components/CommenHeader";
import Mixins from "../../resource/mixins/appStyle";
import CustomButton from "../../Components/CustomButton";
import Colors from "../../resource/theme/color";
import Fonts from "../../resource/theme/font";
import Ionicons from "react-native-vector-icons/Entypo";
import FooterComponent from "../../Components/FooterComponent";
import Checkbox from "react-native-check-box";

const { scaleSize, scaleFont } = Mixins;
const VerifyEmailOtpScreen = ({ navigation }: any) => {
  const [password, setPassword] = useState("");
  const [isSecure, setIsSecure] = useState(true);

  // Password validation checks
  const minLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const strength =
    (minLength ? 1 : 0) + (hasNumber ? 1 : 0) + (hasSymbol ? 1 : 0);
  const progressColors = ["red", "orange", "yellow", "green"];
  const progressBarColor = progressColors[strength];
  return (
    <>
      <CommenHeader
        title={"Create your password 3 / 3"}
        backIconDisabled={false}
        onPress={() => {
          navigation.goBack();
        }}
      />
      {/* Progress Indicator */}
      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <View style={[styles.progressDot, styles.activeDot]} />
          <View style={[styles.progressDot, styles.activeDot]} />
          <View style={[styles.progressDot, styles.activeDot]} />
        </View>
        <View style={{ flex: 0.9, gap: scaleSize(15) }}>
          {/* Password Label */}
          <Text style={styles.label}>Password</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 10,
              marginVertical: 10,
            }}
          >
            <TextInput
              style={{ flex: 1, height: 40 }}
              secureTextEntry={isSecure}
              placeholderTextColor={Colors.gray3()}
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
              <Ionicons name={isSecure ? "eye-with-line" : "eye"} size={20} />
            </TouchableOpacity>
          </View>
          {/* Strength Bar */}
          <View style={{ height: 5, width: "100%", backgroundColor: "#ddd" }}>
            <View
              style={{
                height: "100%",
                width: `${(strength / 3) * 100}%`,
                backgroundColor: progressBarColor,
              }}
            />
          </View>
          {/* Password Requirements */}
          <View style={{ marginVertical: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Checkbox
                checkBoxColor={Colors.blue1()}
                uncheckedCheckBoxColor={Colors.gray1()}
                disabled={true}
                isChecked={minLength}
              />
              <Text style={{ color: minLength ? "green" : "black" }}>
                characters minimum
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Checkbox
                checkBoxColor={Colors.blue1()}
                uncheckedCheckBoxColor={Colors.gray1()}
                disabled={true}
                isChecked={hasNumber}
              />
              <Text style={{ color: hasNumber ? "green" : "black" }}>
                a number
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Checkbox
                checkBoxColor={Colors.blue1()}
                uncheckedCheckBoxColor={Colors.gray1()}
                disabled={true}
                isChecked={hasSymbol}
              />
              <Text style={{ color: hasSymbol ? "green" : "black" }}>
                a symbol
              </Text>
            </View>
          </View>

          {/* Verify Button */}
          <CustomButton
            ColorCodes={
              strength == 3
                ? [Colors.blue1(), Colors.blue1()]
                : [Colors.blue4(), Colors.blue4()]
            }
            title="Continue"
            textStyle={styles.buttonText}
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
          />
        </View>
        {/* Footer Section */}
        <View style={{ flex: 0.1 }}>
          <FooterComponent />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleSize(25),
    backgroundColor: Colors.white(),
  },
  buttonText: {
    fontSize: scaleFont(20),
    fontFamily: Fonts.RobotoBold,
    color: Colors.white(),
    fontWeight: "bold",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: scaleSize(20),
  },
  progressDot: {
    width: scaleSize(20),
    height: scaleSize(4),
    backgroundColor: Colors.gray1(),
    marginHorizontal: scaleSize(4),
    borderRadius: scaleSize(2),
  },
  activeDot: {
    backgroundColor: "purple",
  },
  label: {
    fontSize: 14,
    color: Colors.black(),
    marginBottom: 5,
  },
});

export default VerifyEmailOtpScreen;
