import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ALERTLocationPermisssion = () => {
  return (
    <View style={styles.alertLocationPermisssion}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <View style={[styles.wifi, styles.wifiBg]} />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Text style={[styles.text, styles.textLayout]}>{`9:40 `}</Text>
      <Image
        style={styles.alertLocationPermisssionChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.whatsappImage20230922At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20230922-at-1607-11.png")}
      />
      <Text style={[styles.hiUser, styles.textTypo]}>Hi, User</Text>
      <Image
        style={[styles.alertLocationPermisssionItem, styles.textLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <View style={[styles.arrowLeft, styles.wifiBg]} />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={styles.locationPermissionCropped1}
        contentFit="cover"
        source={require("../assets/location-permission-cropped-1.png")}
      />
      <View style={styles.alertLocationPermisssionInner} />
      <Text style={styles.mineedApp}>Mineed App</Text>
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
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  vectorIcon: {
    right: "19.44%",
    left: "73.61%",
    bottom: "97.34%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0.78%",
    height: "1.87%",
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
    height: "1.87%",
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
    left: 16,
    fontSize: FontSize.size_sm,
    width: 32,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  alertLocationPermisssionChild: {
    top: 151,
    left: 98,
    width: 200,
    height: 200,
    display: "none",
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
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  alertLocationPermisssionItem: {
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
  vectorIcon3: {
    height: "3.33%",
    width: "6.08%",
    top: "6.56%",
    right: "89.76%",
    bottom: "90.11%",
    left: "4.17%",
  },
  locationPermissionCropped1: {
    top: 121,
    left: 26,
    width: 295,
    height: 420,
    position: "absolute",
  },
  alertLocationPermisssionInner: {
    top: 158,
    left: 102,
    backgroundColor: "#efefef",
    width: 109,
    height: 20,
    position: "absolute",
  },
  mineedApp: {
    top: 155,
    left: 32,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    width: 250,
    color: Color.colorBlack,
    position: "absolute",
  },
  alertLocationPermisssion: {
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
    height: 653,
    overflow: "hidden",
  },
});

export default ALERTLocationPermisssion;
