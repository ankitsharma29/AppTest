import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CommenHeader from "../../Components/CommenHeader";
import Mixins from "../../resource/mixins/appStyle";
import CustomButton from "../../Components/CustomButton";
import Colors from "../../resource/theme/color";
import Fonts from "../../resource/theme/font";
import FooterComponent from "../../Components/FooterComponent";
const { scaleSize, scaleFont } = Mixins;
const AuthScreen = ({ navigation }: any) => {
  const ButtonData = [
    { title: "Continue with Apple", icon: "apple", color: "#000" },
    { title: "Continue with Facebook", icon: "facebook", color: "#1877F2" },
    { title: "Continue with Google", icon: "google", color: "#DB4437" },
  ];
  const IconComponent = ({ item }: any) => {
    return (
      <>
        <TouchableOpacity style={styles.socialButton}>
          <Icon
            name={item?.icon}
            size={20}
            color={item?.color}
            style={styles.icon}
          />
          <Text style={styles.socialButtonText}>{item?.title}</Text>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <>
      <CommenHeader
        title={"Create new account"}
        backIconDisabled={false}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <View style={styles.container}>
        <View style={{ flex: 0.9, gap: scaleSize(15) }}>
          <Text style={styles.subtitle}>
            Begin with creating new free account. This helps you keep your
            learning way easier.
          </Text>

          <CustomButton
            ColorCodes={[Colors.blue1(), Colors.blue1()]}
            title="Continue with email"
            textStyle={styles.buttonText}
            onPress={() => {
              console.log("Success");
              navigation.navigate('EmailScreen')
            }}
          />

          <Text style={styles.orText}>or</Text>
          <View>
            {ButtonData?.map((item) => {
              return <IconComponent item={item} />;
            })}
          </View>
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
    textAlign: "center",
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
  orText: {
    textAlign: "center",
    marginVertical: scaleSize(15),
    color: Colors.gray3(),
    fontWeight: "bold",
    fontSize: scaleFont(20),
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: scaleSize(12),
    borderRadius: scaleSize(10),
    justifyContent: "center",
    marginBottom: scaleSize(10),
  },
  socialButtonText: {
    fontSize: scaleFont(16),
    marginLeft: scaleSize(10),
    color: "#000",
  },
  icon: {
    marginRight: scaleSize(10),
  },
});

export default AuthScreen;
