import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LoginPage = () => {
  return (
    <View style={styles.loginPage}>
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
      <Image
        style={[styles.vectorIcon2, styles.wifiPosition]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>{`9:40 `}</Text>
      <Image
        style={styles.loginPageChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.youAskWe, styles.textTypo]}>you ASK we ANSWER</Text>
      <Image
        style={styles.whatsappImage20230922At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20230922-at-1607-12.png")}
      />
      <Text style={styles.login}>Login</Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <View style={[styles.loginPageItem, styles.loginLayout]} />
      <View style={[styles.loginPageInner, styles.loginLayout]} />
      <Text style={[styles.emailId, styles.emailIdTypo]}>Email id</Text>
      <Text style={[styles.enterPassword, styles.emailIdTypo]}>
        Enter password
      </Text>
      <View style={styles.rectangleView} />
      <Text style={styles.signIn}>Sign in</Text>
      <Text
        style={[styles.newMember, styles.registerTypo]}
      >{`New member? `}</Text>
      <Text style={[styles.register, styles.registerTypo]}>Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  wifiLayout: {
    backgroundColor: Color.colorGray,
    height: "3.91%",
    width: "6.94%",
  },
  wifiPosition: {
    right: "13.06%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    position: "absolute",
  },
  loginLayout: {
    width: 258,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_81xl,
    height: 39,
    position: "absolute",
  },
  emailIdTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  registerTypo: {
    textAlign: "center",
    fontSize: FontSize.size_xl,
    top: 472,
    fontFamily: FontFamily.mitrRegular,
    position: "absolute",
  },
  vectorIcon: {
    right: "19.44%",
    left: "73.61%",
    bottom: "97.34%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0.78%",
    height: "1.88%",
    position: "absolute",
    overflow: "hidden",
    width: "6.94%",
  },
  vectorIcon1: {
    width: "6.11%",
    right: "5%",
    left: "88.89%",
    bottom: "97.34%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0.78%",
    height: "1.88%",
    position: "absolute",
    overflow: "hidden",
  },
  batteryThreeQuarters: {
    top: "32.34%",
    right: "25%",
    bottom: "63.75%",
    left: "68.06%",
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
  loginPageChild: {
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
  login: {
    top: 180,
    left: 127,
    fontSize: 32,
    color: "#ff0303",
    width: 88,
    height: 39,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon3: {
    height: "3.33%",
    width: "6.08%",
    top: "6.56%",
    right: "91.15%",
    bottom: "90.11%",
    left: "2.78%",
    position: "absolute",
    overflow: "hidden",
  },
  loginPageItem: {
    top: 272,
    left: 48,
  },
  loginPageInner: {
    top: 338,
    left: 46,
  },
  emailId: {
    top: 280,
    left: 79,
  },
  enterPassword: {
    top: 346,
    left: 77,
  },
  rectangleView: {
    top: 421,
    left: 41,
    backgroundColor: Color.colorLime_100,
    width: 268,
    height: 38,
    position: "absolute",
  },
  signIn: {
    top: 420,
    left: 130,
    fontSize: FontSize.size_6xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.mitrRegular,
    textAlign: "left",
    position: "absolute",
  },
  newMember: {
    left: 54,
    width: 146,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    top: 472,
  },
  register: {
    left: 203,
    color: Color.colorRed_200,
    width: 87,
  },
  loginPage: {
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

export default LoginPage;
