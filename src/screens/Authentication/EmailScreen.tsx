import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CommenHeader from "../../Components/CommenHeader";
import Mixins from "../../resource/mixins/appStyle";
import CustomButton from "../../Components/CustomButton";
import Colors from "../../resource/theme/color";
import Fonts from "../../resource/theme/font";
import FooterComponent from "../../Components/FooterComponent";
import { ScrollView } from "react-native";
const { scaleSize, scaleFont } = Mixins;
const EmailScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  return (
    <>
      <CommenHeader
        title={"Add your email 1/3"}
        backIconDisabled={false}
        onPress={() => {
          navigation.goBack();
        }}
      />
      {/* Progress Indicator */}
      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <View style={[styles.progressDot, styles.activeDot]} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
        </View>
        <View style={{ flex: 0.9, gap: scaleSize(15) }}>
          <Text style={styles.subtitle}>Email</Text>
          <View style={styles.input}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your email"
              keyboardType="email-address"
              placeholderTextColor={Colors.gray3()}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <CustomButton
            ColorCodes={[Colors.blue1(), Colors.blue1()]}
            title="Create an account"
            textStyle={styles.buttonText}
            onPress={() => {
              navigation.navigate('VerifyEmailOtpScreen',{
                email:email
              })
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
  subtitle: {
    fontSize: scaleFont(18),
    fontFamily: Fonts.RobotoRegular,
    color: Colors.black(),
    marginTop: scaleSize(20),
  },

  buttonText: {
    fontSize: scaleFont(20),
    fontFamily: Fonts.RobotoBold,
    color: Colors.white(),
    fontWeight: "bold",
  },
  input: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.black(),
    borderRadius: scaleSize(12),
    marginBottom: scaleSize(20),
    backgroundColor: Colors.white(),
  },
  inputStyle: {
    fontSize: scaleFont(18),
    backgroundColor: Colors.white(),
    color: Colors.black()
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
});

export default EmailScreen;
