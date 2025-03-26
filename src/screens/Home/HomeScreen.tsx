import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AppImages } from "../../assets/constant";
import Mixins from "../../resource/mixins/appStyle";
import Colors from "../../resource/theme/color";
import Fonts from "../../resource/theme/font";
import CustomButton from "../../Components/CustomButton";
const { scaleSize, scaleFont } = Mixins;
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.9 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={AppImages.Accountcreated} // Replace with your icon/image
            style={styles.icon}
          />
          <View>
            <Text style={styles.title}>Your account</Text>
            <Text style={styles.subtitle}>was successfully created!</Text>
          </View>
          <Text style={styles.description}>
            Only one click to explore online education.
          </Text>
        </View>
        <View style={{ marginTop: scaleSize(10) }}>
          <CustomButton
            ColorCodes={[Colors.blue1(), Colors.blue1()]}
            title="Log in"
            textStyle={styles.buttonText}
            onPress={() => {
              console.log("Success");
            }}
          />
        </View>
      </View>
      {/* Footer Section */}
      <View style={{ flex: 0.1 }}>
        <Text style={styles.footerText}>
          By using Classroom, you agree to the
        </Text>
        <Text style={styles.linkText}>Terms and Privacy Policy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white(),
    paddingHorizontal: 20,
    gap: scaleSize(15),
  },
  icon: {
    width: scaleSize(300),
    height: scaleSize(300),
    marginTop: scaleSize(60),
  },
  title: {
    fontSize: scaleFont(25),
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: Fonts.RobotoBold,
    color: Colors.black(),
  },
  subtitle: {
    fontSize: scaleFont(25),
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: Fonts.RobotoBold,
    color: Colors.black(),
  },
  description: {
    fontSize: scaleFont(18),
    color: Colors.black(),
    textAlign: "center",
  },
  buttonText: {
    fontSize: scaleFont(20),
    fontFamily: Fonts.RobotoBold,
    color: Colors.white(),
  },
  footerText: {
    fontSize: scaleFont(18),
    fontFamily: Fonts.RobotoRegular,
    color: Colors.black(),
    textAlign: "center",
    marginTop: 20,
  },
  linkText: {
    color: Colors.gray3(),
    fontSize: scaleFont(16),
    fontFamily: Fonts.RobotoRegular,
    textAlign: "center",
  },
});

export default HomeScreen;
