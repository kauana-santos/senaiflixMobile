

import { Link } from "expo-router";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: "https://i.redd.it/2hnvjw4gl2nf1.jpeg"}}></Image>
      <Text style={styles.title}>SENAIFLIX</Text>
      <Text style={styles.description}>Filmes e séries limitados. Assista onde quiser.</Text>
      <Link href={"/Movies"}>
        <TouchableOpacity style={styles.button}><Text style={styles.btnText}>Entrar</Text></TouchableOpacity>
      </Link>
    
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    width:"100%",
    height: 510
  },
  container: {
    padding: 10,
  },
  title:{
    fontSize: 40,
    color:"#EC3012",
    fontWeight: "bold",
    marginVertical: 10
  },
  description: {
    fontSize: 16,
    width: 230,
    marginBottom: 10
  },
  button:{
    backgroundColor: "#EC3012",
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: "100%"
  },
  btnText:{
    fontWeight: "bold",
    color: "#fff",
    fontSize: 15
  }


});
