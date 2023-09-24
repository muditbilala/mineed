import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const StarHalf = () => {
  return <View style={styles.starHalf} />;
};

const styles = StyleSheet.create({
  starHalf: {
    backgroundColor: Color.colorGray,
    width: 25,
    height: 25,
    overflow: "hidden",
  },
});

export default StarHalf;
