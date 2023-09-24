import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Feedback = () => {
  return (
    <View style={styles.feedback}>
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
        style={styles.feedbackChild}
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
        style={[styles.feedbackItem, styles.textLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <View style={[styles.arrowLeft, styles.wifiBg]} />
      <Text style={[styles.feedback1, styles.hiUserTypo]}>Feedback</Text>
      <Text style={[styles.rateUs, styles.textTypo]}>{`Rate us `}</Text>
      <Image
        style={[styles.feedbackInner, styles.feedbackChildLayout]}
        contentFit="cover"
        source={require("../assets/star-1.png")}
      />
      <Image
        style={[styles.starIcon, styles.feedbackChildLayout]}
        contentFit="cover"
        source={require("../assets/star-1.png")}
      />
      <Image
        style={[styles.feedbackChild1, styles.feedbackChildLayout]}
        contentFit="cover"
        source={require("../assets/star-1.png")}
      />
      <Image
        style={[styles.feedbackChild2, styles.feedbackChildLayout]}
        contentFit="cover"
        source={require("../assets/star-1.png")}
      />
      <Image
        style={[styles.feedbackChild3, styles.feedbackChildLayout]}
        contentFit="cover"
        source={require("../assets/star-1.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.typeYourFeedback, styles.youCanGiveTypo]}>
        Type your feedback here...
      </Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <View style={styles.feedbackChild4} />
      <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
      <Text
        style={[styles.youCanGive, styles.submitTypo]}
      >{`You can give feedbacks every 7 day so that
we can improve ourselves constantly for
your ease.`}</Text>
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
  textTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
  },
  feedbackChildLayout: {
    height: 26,
    width: 33,
    top: 171,
    position: "absolute",
  },
  youCanGiveTypo: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  submitTypo: {
    fontFamily: FontFamily.mitrRegular,
    textAlign: "left",
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
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: 16,
  },
  feedbackChild: {
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
    color: Color.colorBlack,
  },
  feedbackItem: {
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
  feedback1: {
    top: 93,
    color: Color.colorRed_200,
    left: 16,
  },
  rateUs: {
    top: 165,
    left: 26,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  feedbackInner: {
    left: 132,
  },
  starIcon: {
    left: 165,
  },
  feedbackChild1: {
    left: 198,
  },
  feedbackChild2: {
    left: 229,
  },
  feedbackChild3: {
    left: 265,
  },
  rectangleView: {
    top: 240,
    borderRadius: 30,
    backgroundColor: Color.colorGainsboro,
    width: 293,
    height: 209,
    left: 21,
    position: "absolute",
  },
  typeYourFeedback: {
    top: 254,
    left: 32,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon3: {
    height: "3.33%",
    width: "6.08%",
    top: "6.56%",
    right: "89.76%",
    bottom: "90.11%",
    left: "4.17%",
  },
  feedbackChild4: {
    top: 476,
    left: 91,
    borderRadius: Border.br_81xl,
    backgroundColor: "#05ff00",
    width: 153,
    height: 34,
    position: "absolute",
  },
  submit: {
    top: 473,
    left: 122,
    color: Color.colorWhite,
    fontSize: FontSize.size_6xl,
  },
  youCanGive: {
    top: 550,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    left: 21,
  },
  feedback: {
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

export default Feedback;
