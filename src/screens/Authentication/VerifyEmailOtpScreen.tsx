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
import FooterComponent from "../../Components/FooterComponent";
const { scaleSize, scaleFont } = Mixins;
const VerifyEmailOtpScreen = ({ navigation }: any) => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const inputs = useRef([]);
  const [disabled, setDisable] = useState<boolean>(false);
  console.log("disabled", disabled);

  // Handle OTP input
  const handleChange = (text, index) => {
    if (text.length === 1 && index < 4) {
      inputs.current[index + 1].focus();
    }
    const newCode = [...code];
    newCode[index] = text;
    console.log("text.length", text.length);

    if (index == 4) {
      setDisable(true);
    }
    setCode(newCode);
  };
  return (
    <>
      <CommenHeader
        title={"Add your email 2/3"}
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
          <View style={styles.progressDot} />
        </View>
        <View style={{ flex: 0.9, gap: scaleSize(15) }}>
          {/* Subtitle */}
          <Text style={styles.subtitle}>
            We just sent a 5-digit code to sarah.jansen@gmail.com, enter it
            below:
          </Text>
          {/* Code Label */}
          <Text style={styles.label}>Code</Text>

          {/* OTP Input */}
          <View style={styles.otpContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                style={[styles.otpInput, digit ? styles.otpActive : null]}
                keyboardType="number-pad"
                placeholderTextColor={Colors.gray3()}
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
              />
            ))}
          </View>
          {/* Verify Button */}
          <CustomButton
            ColorCodes={
              disabled
                ? [Colors.blue1(), Colors.blue1()]
                : [Colors.blue4(), Colors.blue4()]
            }
            title="Verify email"
            textStyle={styles.buttonText}
            onPress={() => {
              navigation.navigate("CreatePassword");
            }}
          />
          {/* Wrong Email */}
          <Text style={styles.wrongEmailText}>
            Wrong email?{" "}
            <Text style={styles.linkText}>Send to different email</Text>
          </Text>
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
  subtitle: {
    fontSize: scaleFont(18),
    fontFamily: Fonts.RobotoRegular,
    color: Colors.black(),
    marginTop: scaleSize(20),
    textAlign: "center",
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

  emailText: {
    fontWeight: "bold",
  },
  label: {
    fontSize: 14,
    color: Colors.black(),
    marginBottom: 5,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInput: {
    width: scaleFont(50),
    height: scaleFont(50),
    borderWidth: 1,
    borderColor: Colors.black(),
    textAlign: "center",
    fontSize: scaleFont(18),
    borderRadius: 8,
    color: Colors.black(),
  },
  otpActive: {
    borderColor: "purple",
    color: Colors.black()
  },
  verifyButton: {
    backgroundColor: "#B185E6",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  verifyButtonText: {
    color: Colors.white(),
    fontSize: scaleFont(16),
    fontWeight: "bold",
  },
  wrongEmailText: {
    textAlign: "center",
    marginTop: scaleSize(15),
    fontSize: scaleFont(18),
    color: Colors.black(),
    fontFamily: Fonts.RobotoRegular,
  },
  linkText: {
    color: Colors.black(),
    fontWeight: "bold",
    fontSize: scaleFont(18),
    fontFamily: Fonts.RobotoBold,
  },
});

export default VerifyEmailOtpScreen;
