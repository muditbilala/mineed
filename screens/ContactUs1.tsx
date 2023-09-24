import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ContactUs1 = () => {
  return (
    <View style={styles.contactUs}>
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
      <View style={[styles.wifi, styles.wifiBg]} />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={[styles.text, styles.textLayout]}>{`9:40 `}</Text>
      <Image
        style={styles.contactUsChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.whatsappImage20230922At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20230922-at-1607-11.png")}
      />
      <Text style={[styles.hiUser, styles.hiUserTypo]}>Hi, User</Text>
      <Image
        style={[styles.contactUsItem, styles.textLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <View style={[styles.arrowLeft, styles.wifiBg]} />
      <Text style={[styles.contactUs1, styles.hiUserTypo]}>Contact Us</Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Text style={[styles.youCanEmail, styles.youTypo]}>{`You can email us at
mineedhelpdesk@gmail.com `}</Text>
      <Text style={[styles.or, styles.youTypo]}>OR</Text>
      <Text
        style={[styles.youCanCall, styles.youTypo]}
      >{`You can call at mineed help desk
according to your region`}</Text>
      <Text
        style={[styles.north92565xxxxxWest, styles.youTypo]}
      >{`North- 92565xxxxx
West  -90790xxxxx
East    -76520xxxxx
South-84670xxxxx`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wifiBg: {
    backgroundColor: Color.colorGray,
    position: "absolute",
    overflow: "hidden",
  },
  textLayout: {
    height: 14,
    position: "absolute",
  },
  hiUserTypo: {
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  youTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
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
  },
  wifi: {
    height: "3.91%",
    top: "2.66%",
    bottom: "93.44%",
    left: "80%",
    right: "13.06%",
    width: "6.94%",
  },
  vectorIcon2: {
    height: "2.19%",
    width: "6.39%",
    top: "0.47%",
    left: "80.56%",
    right: "13.06%",
    bottom: "97.34%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  text: {
    top: 0,
    fontSize: FontSize.size_sm,
    width: 32,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    height: 14,
    color: Color.colorBlack,
    left: 16,
  },
  contactUsChild: {
    left: 98,
    width: 200,
    height: 200,
    display: "none",
    top: 151,
    position: "absolute",
  },
  whatsappImage20230922At1: {
    top: 29,
    left: 278,
    width: 65,
    height: 40,
    position: "absolute",
  },
  hiUser: {
    top: 27,
    left: 63,
    color: Color.colorBlack,
    fontSize: FontSize.size_11xl,
  },
  contactUsItem: {
    top: 77,
    left: 0,
    width: 360,
  },
  arrowLeft: {
    top: 343,
    left: -578,
    width: 25,
    height: 25,
  },
  contactUs1: {
    top: 93,
    color: Color.colorRed_200,
    fontSize: FontSize.size_11xl,
    left: 16,
  },
  vectorIcon3: {
    height: "3.33%",
    width: "6.08%",
    top: "6.56%",
    right: "89.76%",
    bottom: "90.11%",
    left: "4.17%",
  },
  youCanEmail: {
    left: 13,
    fontSize: FontSize.size_xl,
    top: 151,
  },
  or: {
    top: 229,
    left: 145,
  },
  youCanCall: {
    top: 277,
    left: 13,
    fontSize: FontSize.size_xl,
  },
  north92565xxxxxWest: {
    top: 358,
    left: 51,
  },
  contactUs: {
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

export default ContactUs1;
