import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../resource/theme/color";
import Mixins from "../resource/mixins/appStyle";
import Fonts from "../resource/theme/font";

const { scaleSize, scaleFont } = Mixins;
const FooterComponent = () => {
  return (
    <>
      <Text style={styles.footerText}>
        By using Classroom, you agree to the
      </Text>
      <Text style={styles.linkText}>Terms and Privacy Policy</Text>
    </>
  );
};

const styles = StyleSheet.create({
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

export default FooterComponent;
