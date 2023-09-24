import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const VerificationOfEmail = () => {
  return (
    <View style={styles.verificationOfEmail}>
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
      <Text style={[styles.text, styles.textFlexBox]}>{`9:40 `}</Text>
      <Image
        style={styles.verificationOfEmailChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.youAskWe, styles.youAskWePosition]}>
        you ASK we ANSWER
      </Text>
      <Image
        style={styles.whatsappImage20230922At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20230922-at-1607-12.png")}
      />
      <Text
        style={[styles.pleaseVerifyYour, styles.submitTypo]}
      >{`Please verify your email by the
verification code send to your 
email `}</Text>
      <Text style={[styles.user123gmailcom, styles.submitTypo]}>
        user123@gmail.com
      </Text>
      <View
        style={[styles.verificationOfEmailItem, styles.verificationChildLayout]}
      />
      <View
        style={[
          styles.verificationOfEmailInner,
          styles.verificationChildLayout,
        ]}
      />
      <View style={[styles.rectangleView, styles.verificationChildLayout]} />
      <View
        style={[
          styles.verificationOfEmailChild1,
          styles.verificationChildLayout,
        ]}
      />
      <View
        style={[
          styles.verificationOfEmailChild2,
          styles.verificationChildLayout,
        ]}
      />
      <View
        style={[
          styles.verificationOfEmailChild3,
          styles.verificationChildLayout,
        ]}
      />
      <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
      <Text style={[styles.didntGetThe, styles.resendCodeTypo]}>
        didn’t get the code?
      </Text>
      <Text style={[styles.resendCode, styles.resendCodeTypo]}>
        Resend code
      </Text>
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
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  youAskWePosition: {
    left: 96,
    textAlign: "left",
  },
  submitTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  verificationChildLayout: {
    height: 40,
    position: "absolute",
  },
  resendCodeTypo: {
    fontSize: FontSize.size_mini,
    top: 450,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
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
    width: 32,
    height: 14,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
    left: 16,
  },
  verificationOfEmailChild: {
    top: 151,
    left: 98,
    width: 200,
    height: 200,
    display: "none",
    position: "absolute",
  },
  youAskWe: {
    top: 133,
    width: 149,
    height: 20,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  whatsappImage20230922At1: {
    top: 23,
    width: 179,
    height: 110,
    left: 79,
    position: "absolute",
  },
  pleaseVerifyYour: {
    top: 198,
    left: 29,
    textAlign: "left",
    color: Color.colorBlack,
  },
  user123gmailcom: {
    top: 258,
    color: Color.colorRed_200,
    left: 96,
    textAlign: "left",
  },
  verificationOfEmailItem: {
    left: 32,
    width: 47,
    backgroundColor: Color.colorGainsboro,
    top: 320,
    height: 40,
  },
  verificationOfEmailInner: {
    left: 89,
    width: 47,
    backgroundColor: Color.colorGainsboro,
    top: 320,
    height: 40,
  },
  rectangleView: {
    left: 147,
    width: 47,
    backgroundColor: Color.colorGainsboro,
    top: 320,
    height: 40,
  },
  verificationOfEmailChild1: {
    left: 205,
    width: 47,
    backgroundColor: Color.colorGainsboro,
    top: 320,
    height: 40,
  },
  verificationOfEmailChild2: {
    left: 266,
    width: 47,
    backgroundColor: Color.colorGainsboro,
    top: 320,
    height: 40,
  },
  verificationOfEmailChild3: {
    top: 392,
    borderRadius: Border.br_81xl,
    backgroundColor: "#00ff0a",
    width: 172,
    left: 79,
  },
  submit: {
    top: 397,
    left: 109,
    color: Color.colorWhite,
    textAlign: "center",
    width: 112,
  },
  didntGetThe: {
    color: Color.colorBlack,
    left: 16,
  },
  resendCode: {
    left: 179,
    color: Color.colorRed_200,
  },
  verificationOfEmail: {
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

export default VerificationOfEmail;
