import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import CommentsScreen from "./CommentsScreen";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image2Stack}>
        <ImageBackground
          source={require("../../assets/images/FB.jpg")}
          resizeMode="contain"
          style={styles.image2}
          imageStyle={styles.image2_imageStyle}
        >
          <EvilIconsIcon name="archive" style={styles.icon6}></EvilIconsIcon>
        </ImageBackground>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Untitled")}
          style={styles.button}
        >
          <Text style={styles.loremIpsum}>Ingresar Codigo del Producto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Untitled2")}
          style={styles.button2}
        >
          <View style={styles.escanearCodigoRow}>
            <Text style={styles.escanearCodigo}>Escanear Código</Text>
            <EntypoIcon name="camera" style={styles.icon2}></EntypoIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.button3}
        >
          <Text style={styles.menu}>Menú</Text>
        </TouchableOpacity>
        <EntypoIcon name="arrow-bold-left" style={styles.icon3}></EntypoIcon>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Comments")}
          style={styles.button4}
        >
          <View style={styles.comentariosRow}>
            <Text style={styles.comentarios}>Comentarios</Text>
            <EntypoIcon name="open-book" style={styles.icon4}></EntypoIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Untitled")}
          style={styles.button5}
        >
          <View style={styles.egresosYIngresosRow}>
            <Text style={styles.egresosYIngresos}>Egresos y Ingresos</Text>
            <EntypoIcon name="credit" style={styles.icon5}></EntypoIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Untitled2")}
          style={styles.button6}
        >
          <Text style={styles.inventario}>Inventario</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Untitled")}
          style={styles.button7}
        >
          <Text style={styles.proveedores}>Proveedores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,0.55)"
  },
  image2: {
    top: 44,
    left: 270,
    width: 390,
    height: 1900,
    position: "absolute"
  },
  icon6: {
    color: "rgba(255,254,254,1)",
    fontSize: 54,
    height: 59,
    width: 54,
    marginTop: 1053,
    marginLeft: 554
  },
  button: {
    top: 795,
    left: 260,
    width: 298,
    height: 61,
    position: "absolute",
    backgroundColor: "rgba(105,103,103,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: 23
  },
  loremIpsum: {
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 18,
    marginLeft: 23
  },
  button2: {
    top: 710,
    width: 319,
    height: 54,
    position: "absolute",
    backgroundColor: "rgba(105,103,103,1)",
    borderRadius: 57,
    left: 349,
    flexDirection: "row"
  },
  escanearCodigo: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginTop: 6
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 43,
    marginLeft: 19
  },
  escanearCodigoRow: {
    height: 47,
    flexDirection: "row",
    flex: 1,
    marginRight: 46,
    marginLeft: 46,
    marginTop: 7
  },
  button3: {
    top: 627,
    left: 258,
    width: 296,
    height: 46,
    position: "absolute",
    backgroundColor: "rgba(105,103,103,1)",
    borderRadius: 26
  },
  menu: {
    fontFamily: "roboto-700",
    color: "rgba(253,253,253,1)",
    fontSize: 22,
    marginTop: 9,
    marginLeft: 158
  },
  icon3: {
    left: 283,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 43,
    top: 626
  },
  button4: {
    top: 887,
    width: 319,
    height: 54,
    position: "absolute",
    backgroundColor: "rgba(105,103,103,1)",
    borderRadius: 57,
    left: 349,
    flexDirection: "row"
  },
  comentarios: {
    fontFamily: "roboto-regular",
    color: "rgba(249,249,249,1)",
    fontSize: 22,
    marginTop: 13
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 56,
    marginLeft: 29
  },
  comentariosRow: {
    height: 61,
    flexDirection: "row",
    flex: 1,
    marginRight: 38,
    marginLeft: 70
  },
  button5: {
    top: 963,
    left: 262,
    width: 298,
    height: 61,
    position: "absolute",
    backgroundColor: "rgba(105,103,103,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: 23,
    flexDirection: "row"
  },
  egresosYIngresos: {
    fontFamily: "roboto-regular",
    color: "rgba(251,250,250,1)",
    fontSize: 22,
    marginTop: 17
  },
  icon5: {
    color: "rgba(252,252,252,1)",
    fontSize: 52,
    height: 58,
    width: 52,
    marginLeft: 27
  },
  egresosYIngresosRow: {
    height: 58,
    flexDirection: "row",
    flex: 1,
    marginRight: 6,
    marginLeft: 28
  },
  button6: {
    top: 1053,
    width: 319,
    height: 54,
    position: "absolute",
    backgroundColor: "rgba(105,103,103,1)",
    borderRadius: 57,
    left: 349
  },
  inventario: {
    fontFamily: "roboto-regular",
    color: "rgba(247,242,242,1)",
    fontSize: 22,
    marginTop: 16,
    marginLeft: 67
  },
  button7: {
    top: 1143,
    left: 256,
    width: 194,
    height: 61,
    position: "absolute",
    backgroundColor: "rgba(105,103,103,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: 23
  },
  proveedores: {
    fontFamily: "roboto-regular",
    color: "rgba(245,241,241,1)",
    fontSize: 22,
    marginTop: 17,
    marginLeft: 34
  },
  image2Stack: {
    width: 1056,
    height: 1865,
    marginTop: -571,
    marginLeft: -270
  }
});

export default Untitled;

