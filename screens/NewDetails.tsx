import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const NewDetails = () => {
  return (
    <View style={styles.newDetails}>
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
      <View style={[styles.batteryThreeQuarters, styles.wifiLayout]} />
      <View style={[styles.wifi, styles.wifiPosition]} />
      <View style={styles.signal} />
      <Image
        style={[styles.vectorIcon2, styles.wifiPosition]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>{`9:40 `}</Text>
      <Image
        style={styles.newDetailsChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.youAskWe, styles.textTypo]}>you ASK we ANSWER</Text>
      <Image
        style={styles.whatsappImage20230922At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20230922-at-1607-12.png")}
      />
      <View style={styles.newDetailsItem} />
      <Text style={[styles.register, styles.registerTypo]}>Register</Text>
      <Text style={[styles.welcomeOnboard, styles.registerTypo]}>
        Welcome Onboard!!
      </Text>
      <View style={[styles.newDetailsInner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.user123gmailcom, styles.userTypo1]}>
        User123@gmail.com
      </Text>
      <View style={[styles.newDetailsChild1, styles.newChildLayout]} />
      <View style={[styles.newDetailsChild2, styles.newChildLayout]} />
      <Text style={[styles.user123456, styles.userTypo]}>user123456</Text>
      <Text style={[styles.user1234561, styles.userTypo]}>user123456</Text>
      <Text
        style={[styles.alreadyHaveAn, styles.signInTypo]}
      >{`Already have an account? `}</Text>
      <Text style={[styles.signIn, styles.signInTypo]}>Sign in</Text>
      <Text style={[styles.user, styles.userTypo1]}>User</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "97.34%",
  },
  wifiLayout: {
    height: "3.91%",
    backgroundColor: Color.colorGray,
    width: "6.94%",
  },
  wifiPosition: {
    right: "13.06%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  registerTypo: {
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 39,
    width: 258,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_81xl,
    left: 52,
    position: "absolute",
  },
  userTypo1: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  newChildLayout: {
    left: 51,
    height: 39,
    width: 258,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  userTypo: {
    left: 75,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  signInTypo: {
    fontSize: FontSize.size_base,
    top: 601,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
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
  batteryThreeQuarters: {
    top: "32.34%",
    right: "25%",
    bottom: "63.75%",
    left: "68.06%",
    backgroundColor: Color.colorGray,
    position: "absolute",
    overflow: "hidden",
  },
  wifi: {
    top: "2.66%",
    bottom: "93.44%",
    left: "80%",
    backgroundColor: Color.colorGray,
    height: "3.91%",
    width: "6.94%",
  },
  signal: {
    top: 321,
    left: 161,
    width: 25,
    height: 25,
    backgroundColor: Color.colorGray,
    position: "absolute",
    overflow: "hidden",
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
    width: 32,
    height: 14,
  },
  newDetailsChild: {
    top: 151,
    left: 98,
    width: 200,
    height: 200,
    display: "none",
    position: "absolute",
  },
  youAskWe: {
    top: 133,
    left: 96,
    width: 149,
    height: 20,
  },
  whatsappImage20230922At1: {
    top: 23,
    width: 179,
    height: 110,
    left: 79,
    position: "absolute",
  },
  newDetailsItem: {
    top: 554,
    backgroundColor: Color.colorLime_100,
    width: 268,
    height: 38,
    left: 45,
    position: "absolute",
  },
  register: {
    top: 553,
    left: 125,
    fontFamily: FontFamily.mitrRegular,
    color: Color.colorWhite,
  },
  welcomeOnboard: {
    top: 179,
    color: Color.colorCrimson,
    left: 45,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl,
  },
  newDetailsInner: {
    top: 274,
  },
  rectangleView: {
    top: 339,
  },
  user123gmailcom: {
    top: 347,
    left: 79,
  },
  newDetailsChild1: {
    top: 483,
  },
  newDetailsChild2: {
    top: 410,
  },
  user123456: {
    top: 419,
  },
  user1234561: {
    top: 491,
  },
  alreadyHaveAn: {
    left: 45,
    color: Color.colorBlack,
    top: 601,
  },
  signIn: {
    left: 264,
    color: Color.colorRed_100,
  },
  user: {
    top: 282,
    left: 92,
  },
  newDetails: {
    backgroundColor: Color.colorLightsteelblue,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default NewDetails;
