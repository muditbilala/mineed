import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
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
        style={styles.dashboardChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.whatsappImage20230922At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20230922-at-1607-11.png")}
      />
      <Text style={[styles.hiUser, styles.textTypo]}>Hi, User</Text>
      <Text
        style={[styles.weAreDelighted, styles.toFindTheTypo]}
      >{`We are delighted  to have you on
MINEED and we are 24/7 available
to help you out in the field of 
mining industry.`}</Text>
      <Text
        style={[styles.toFindThe, styles.toFindTheTypo]}
      >{`To find the answer of your 
questions click on Chatbot `}</Text>
      <Text
        style={[styles.ifYouWant, styles.toFindTheTypo]}
      >{`If you want to contact us for  any 
type of issue we are available 
24/7
Feel free to give us a feedback,we
are eagerly waiting for your
feedback. `}</Text>
      <Image
        style={[styles.dashboardItem, styles.dashboardPosition]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.dashboardInner, styles.dashboardPosition]}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <View style={[styles.rectangleView, styles.dashboardChildPosition]} />
      <View style={[styles.dashboardChild1, styles.dashboardChildPosition]} />
      <View style={[styles.dashboardChild2, styles.dashboardChildPosition]} />
      <View style={styles.lineView} />
      <Image
        style={styles.vectorIcon3}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Text style={[styles.contactUs, styles.textTypo]}>{`
Contact
      Us`}</Text>
      <Text style={[styles.feedback, styles.chatbotTypo]}>Feedback!</Text>
      <View style={[styles.phoneAlt, styles.phoneAltLayout]} />
      <View style={[styles.arrowLeft, styles.phoneAltLayout]} />
      <View style={[styles.phoneAlt, styles.phoneAltLayout]} />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Text style={[styles.chatbot, styles.chatbotTypo]}>Chatbot</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.alert, styles.textTypo]}>ALERT</Text>
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
    position: "absolute",
  },
  toFindTheTypo: {
    fontSize: FontSize.size_xl,
    left: 8,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  dashboardPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  dashboardChildPosition: {
    height: 53,
    backgroundColor: Color.colorGainsboro,
    top: 587,
    position: "absolute",
  },
  chatbotTypo: {
    top: 602,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  phoneAltLayout: {
    height: 25,
    width: 25,
    backgroundColor: Color.colorGray,
    position: "absolute",
    overflow: "hidden",
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
    fontSize: FontSize.size_sm,
    width: 32,
    height: 14,
    color: Color.colorBlack,
    left: 16,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  dashboardChild: {
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
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    left: 16,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  weAreDelighted: {
    top: 109,
    color: Color.colorRed_200,
  },
  toFindThe: {
    top: 242,
    color: Color.colorSeagreen,
  },
  ifYouWant: {
    top: 328,
    color: Color.colorBlack,
  },
  dashboardItem: {
    top: 77,
    height: 14,
  },
  dashboardInner: {
    top: 581,
    height: 6,
  },
  rectangleView: {
    width: 113,
    height: 53,
    backgroundColor: Color.colorGainsboro,
    left: 0,
  },
  dashboardChild1: {
    left: 113,
    width: 132,
    height: 53,
    backgroundColor: Color.colorGainsboro,
  },
  dashboardChild2: {
    left: 247,
    width: 113,
    height: 53,
    backgroundColor: Color.colorGainsboro,
  },
  lineView: {
    left: 108,
    borderStyle: "solid",
    borderColor: Color.colorMediumslateblue,
    borderRightWidth: 1,
    width: 1,
    height: 54,
    top: 587,
    position: "absolute",
  },
  vectorIcon3: {
    top: "94.06%",
    right: "20%",
    bottom: "2.03%",
    left: "73.06%",
    height: "3.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.94%",
    position: "absolute",
    overflow: "hidden",
  },
  contactUs: {
    top: 580,
    left: 297,
    fontSize: FontSize.size_2xs,
    width: 62,
    height: 56,
    color: Color.colorBlack,
  },
  feedback: {
    fontSize: FontSize.size_mid,
    left: 8,
    top: 602,
  },
  phoneAlt: {
    top: 303,
    left: 61,
  },
  arrowLeft: {
    top: 343,
    left: -578,
  },
  vectorIcon4: {
    height: "4.69%",
    width: "10.42%",
    top: "93.59%",
    right: "58.19%",
    bottom: "1.72%",
    left: "31.39%",
    position: "absolute",
    overflow: "hidden",
  },
  chatbot: {
    left: 158,
    fontSize: FontSize.size_lg,
  },
  ellipseIcon: {
    top: 495,
    left: 257,
    width: 79,
    height: 67,
    position: "absolute",
  },
  alert: {
    top: 511,
    left: 261,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
  },
  dashboard: {
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

export default Dashboard;
