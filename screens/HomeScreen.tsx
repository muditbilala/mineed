import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Image
        style={styles.homeScreenChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.frame, styles.frameLayout2]}>
        <Image
          style={[styles.frameIcon, styles.frameLayout2]}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
      </View>
      <View style={styles.frame1}>
        <View style={[styles.frame2, styles.frame2Layout]}>
          <View style={[styles.frame3, styles.frame3Layout]}>
            <View style={[styles.signal, styles.signalPosition]} />
          </View>
          <Text style={[styles.welcomeToMineed, styles.textTypo]}>
            Welcome to MINEED, we are here to answer your queries related to
            mining industry.Whether you are an individual, businessman, firm
            member all your queries will be answered in a personalised way
          </Text>
        </View>
      </View>
      <View style={[styles.frame4, styles.frameLayout1]}>
        <View style={[styles.frame5, styles.frameLayout1]}>
          <Text style={styles.getStarted}>Get Started</Text>
        </View>
      </View>
      <View style={[styles.frame6, styles.frameLayout]}>
        <Image
          style={styles.frameIcon1}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <View style={[styles.frame7, styles.textPosition]}>
          <Text style={[styles.text, styles.textPosition]}>{`9:40 `}</Text>
        </View>
        <Image
          style={styles.frameIcon2}
          contentFit="cover"
          source={require("../assets/frame2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout2: {
    height: 176,
    position: "absolute",
    overflow: "hidden",
  },
  frame2Layout: {
    width: 320,
    height: 234,
  },
  frame3Layout: {
    width: 25,
    overflow: "hidden",
  },
  signalPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
  },
  frameLayout1: {
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    height: 42,
    overflow: "hidden",
  },
  textPosition: {
    width: 32,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeScreenChild: {
    top: 151,
    left: 98,
    width: 200,
    height: 200,
    display: "none",
    position: "absolute",
  },
  frameIcon: {
    left: 32,
    width: 251,
    top: 0,
  },
  frame: {
    top: 78,
    width: 283,
    left: 16,
  },
  signal: {
    backgroundColor: Color.colorGray,
    height: 25,
    width: 25,
    overflow: "hidden",
  },
  frame3: {
    top: 28,
    left: 136,
    height: 207,
    position: "absolute",
  },
  welcomeToMineed: {
    fontSize: FontSize.size_xl,
    color: "#9a6148",
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
    width: 320,
    height: 234,
  },
  frame2: {
    left: 9,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame1: {
    top: 293,
    width: 329,
    height: 234,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  getStarted: {
    left: 63,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.mitrRegular,
    color: Color.colorWhite,
    width: 206,
    height: 31,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  frame5: {
    left: 26,
    backgroundColor: Color.colorLime_100,
    width: 268,
    top: 0,
  },
  frame4: {
    top: 566,
    width: 294,
    left: 16,
  },
  frameIcon1: {
    top: 5,
    left: 304,
    width: 22,
    height: 37,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    height: 14,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  frame7: {
    height: 42,
    overflow: "hidden",
  },
  frameIcon2: {
    top: 3,
    left: 249,
    width: 48,
    height: 39,
    position: "absolute",
    overflow: "hidden",
  },
  frame6: {
    width: 326,
    top: 0,
    left: 16,
    position: "absolute",
  },
  homeScreen: {
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

export default HomeScreen;
