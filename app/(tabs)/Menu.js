 import { useNavigation } from "@react-navigation/native"; // Asegúrate de que esta importación sea la correcta según tu configuración.
 import React from "react";
 import {
   StyleSheet,
   View,
   Image,
   ImageBackground,
   Text,
   TouchableOpacity
 } from "react-native";
 
 function Untitled3(props) {
   const navigation = useNavigation(); // Obtén el objeto de navegación.
 
   const handlePressToPruebapantalla = () => {
     navigation.navigate("Pruebapantalla"); // Navega a la pantalla 'Pruebapantalla'.
   };
 
   const handlePressToMenu = () => {
     navigation.navigate("Home"); // Navega a la pantalla 'Pruebapantalla'.
   };

   return (
     <View style={styles.container}>
       <View style={styles.imageStack}>
         <ImageBackground
           source={require("../../assets/images/azul.jpg")}
           resizeMode="cover"
           style={styles.image}
           imageStyle={styles.image_imageStyle}
         >
           <Text style={styles.hola}>Hola!</Text>
           <Text style={styles.queQuieresHacer}>¿Que quieres hacer?</Text>
           <Text style={styles.loMasVendido1}>Lo más vendido</Text>
           
           <TouchableOpacity
             onPress={handlePressToPruebapantalla} // Usa el handler para el evento onPress.
             style={styles.button2}
           >
             <Text style={styles.otrasOpciones}>Otras opciones</Text>
           </TouchableOpacity>
         </ImageBackground>
         <TouchableOpacity 
                  onPress={handlePressToMenu}
                  style={styles.button}
                  >
           <Text style={styles.facturaRapida}>Factura Rápida</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button1}>
           <Text style={styles.escanearCodigo}>Escanear Código</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button3}>
           <Text style={styles.loMasVendido2}>Lo más vendido!</Text>
         </TouchableOpacity>
       </View>
     </View>
   );
 }
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 0,
    width: 410,
    height: 778,
    position: "absolute",
    left: 7
  },
  image_imageStyle: {},
  hola: {
    fontFamily: "roboto-700",
    color: "rgba(243,239,239,1)",
    fontSize: 28,
    marginTop: 66,
    marginLeft: 178
  },
  queQuieresHacer: {
    fontFamily: "roboto-regular",
    color: "rgba(247,243,243,1)",
    fontSize: 26,
    marginTop: 29,
    marginLeft: 82
  },
  loMasVendido1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 22,
    marginTop: 284,
    marginLeft: 2
  },
  button2: {
    width: 199,
    height: 53,
    backgroundColor: "rgba(105,103,103,1)",
    borderRadius: 25,
    marginTop: 98,
    marginLeft: 92
  },
  otrasOpciones: {
    fontFamily: "roboto-regular",
    color: "rgba(249,246,246,1)",
    fontSize: 22,
    marginTop: 13,
    marginLeft: 26
  },
  button: {
    top: 229,
    left: 10,
    width: 199,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(105,103,103,1)",
    borderRadius: 14
  },
  facturaRapida: {
    fontFamily: "roboto-regular",
    color: "rgba(243,239,239,1)",
    fontSize: 22,
    marginTop: 14,
    marginLeft: 19
  },
  button1: {
    top: 317,
    left: 218,
    width: 199,
    height: 53,
    position: "absolute",
    backgroundColor: "rgba(105,103,103,1)",
    borderRadius: 14
  },
  escanearCodigo: {
    fontFamily: "roboto-regular",
    color: "rgba(245,235,235,1)",
    fontSize: 22,
    marginTop: 12,
    marginLeft: 18
  },
  button3: {
    top: 426,
    left: 8,
    width: 201,
    height: 66,
    position: "absolute",
    backgroundColor: "rgba(105,103,103,1)",
    borderRadius: 23
  },
  loMasVendido2: {
    fontFamily: "roboto-regular",
    color: "rgba(237,237,237,1)",
    fontSize: 22,
    marginTop: 19,
    marginLeft: 23
  },
  imageStack: {
    width: 396,
    height: 778,
    marginLeft: -19
  }
});

export default Untitled3;