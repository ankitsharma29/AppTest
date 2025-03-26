import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../resource/theme/color";
import Icon from "react-native-vector-icons/FontAwesome";
interface Props {
  title?: string;
  onPress?: any;
  navigation?: any;
  backIconDisabled?: boolean;
}

const CommenHeader = ({
  title,
  onPress,
  backIconDisabled = true,
}: any) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress} disabled={!backIconDisabled}>
        <View style={styles.leftContainer}>
          <Icon name="arrow-left" size={20} color={Colors.black()} />
          <Text style={styles.textStyle}>{title}</Text>
          <Text></Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 55,
    backgroundColor: Colors.white(),
    justifyContent: "center",
  },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginStart: 8,
  },
  textStyle: {
    textAlign: "center",
    color: Colors.black(),
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 4,
  },
});

export default CommenHeader;
