
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

function Untitled1(props) {
  const [searchText, setSearchText ] = useState("");
  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/FB.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <TouchableOpacity style={styles.button}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.barraDeBusquedaRow}>
              <Text style={styles.barraDeBusqueda}>Barra de Búsqueda</Text>
              <Icon name="search" style={styles.icon}></Icon>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 0.91
  },
  image: {
    width: 390,
    height: 778,
    marginTop: 34,
    marginLeft: 0
  },
  image_imageStyle: {},
  button: {
    width: 375,
    height: 51,
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    alignSelf: "center"
  },
  barraDeBusquedaContainer: {
    width: '90%',
    height: 50,
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 25,
    marginTop: 50, // Ajusta el margen superior según tu diseño
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textInput: {
    flex: 1,
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    height: '100%',
  },
  barraDeBusqueda: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 10
  },
  icon: {
    color: "rgba(5,5,5,1)",
    fontSize: 41,
    height: 45,
    width: 41,
    marginLeft: 130
  },
  barraDeBusquedaRow: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 16,
    marginLeft: 20,
    marginTop: 3
  }
});

export default Untitled1;
