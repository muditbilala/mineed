import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const AndroidSmall1 = () => {
  return (
    <View style={styles.androidSmall1}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={[styles.wifi, styles.wifiPosition]} />
      <Image
        style={[styles.vectorIcon2, styles.wifiPosition]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>{`9:40 `}</Text>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={styles.whatsappImage20230922At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20230922-at-1607-1.png")}
      />
      <Image
        style={[styles.androidSmall1Child, styles.mineedPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.mineed, styles.mineedPosition]}>Mineed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "97.34%",
  },
  wifiPosition: {
    right: "13.06%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  mineedPosition: {
    width: 52,
    left: 155,
    position: "absolute",
  },
  vectorIcon: {
    right: "19.44%",
    left: "73.61%",
    top: "0.78%",
    height: "1.88%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "97.34%",
    position: "absolute",
    overflow: "hidden",
    width: "6.94%",
  },
  vectorIcon1: {
    width: "6.11%",
    right: "5%",
    left: "88.89%",
    top: "0.78%",
    height: "1.88%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "97.34%",
    position: "absolute",
    overflow: "hidden",
  },
  wifi: {
    height: "3.91%",
    top: "2.66%",
    bottom: "93.44%",
    left: "80%",
    backgroundColor: Color.colorGray,
    width: "6.94%",
  },
  vectorIcon2: {
    height: "2.19%",
    width: "6.39%",
    top: "0.47%",
    left: "80.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "97.34%",
  },
  text: {
    top: 0,
    left: 16,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorBlack,
    width: 32,
    height: 14,
    position: "absolute",
  },
  image1Icon: {
    top: 23,
    left: 1,
    width: 359,
    height: 617,
    position: "absolute",
  },
  whatsappImage20230922At1: {
    top: 243,
    width: 50,
    height: 31,
    left: 155,
    position: "absolute",
  },
  androidSmall1Child: {
    top: 234,
    height: 48,
  },
  mineed: {
    top: 282,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    height: 19,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  androidSmall1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default AndroidSmall1;
