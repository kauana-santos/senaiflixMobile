import { searchMovies } from "@/api/get-filmes";
import {useQuery} from "@tanstack/react-query"
import { useRouter } from "expo-router";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Movies() {
  const router = useRouter()

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: searchMovies,
  });

    if(isLoading){
    return(
      <View>
        <Text>Carregando filmes...</Text>
      </View>
    )
  }

  if(isError){
    return(
      <View>
        <Text>Ops! Erro ao carregar filmes!</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <View>
          <View style={styles.containerHeader}>
            <Text style={styles.title}>SENAIFLIX</Text>
          </View>
            <View>
              <Text style={styles.catalogo}>Catálogo</Text>
            </View>
            <FlatList
              data={data}
              renderItem={({item}) => (
              <TouchableOpacity style={styles.movieContainer} onPress={() =>router.push({ pathname: "/MoviePage/[id]", params: { id: String(item.id) },})
}>
              <View><Image style={styles.image} source={{uri:`${item.poster}`}}/></View>
              <View>
                <Text style={styles.movieTitle}>{item.nome}</Text>
                <Text style={styles.movieInfo}>{item.ano} ° {item.duracao}</Text>
                <Text style={styles.movieType}>{item.genero}</Text>
              </View>
            </TouchableOpacity>
              )}
            />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerHeader:{
    borderBottomWidth: 2,
    borderBottomColor: "#333"
  },
  title:{
    fontSize: 30,
    color:"#EC3012",
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10
  },
  catalogo:{
    fontWeight: "bold",
    fontSize: 20,
    margin: 10
  },
  movieContainer:{
    flexDirection: "row",
    margin: 10
  },
  image:{
    width:140,
    height: 200,
    marginRight: 10
  },
  movieTitle:{
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 9,
    maxWidth: 200,
    color: "#181818"
  },
  movieInfo:{
    color: "#333"
  },
  movieType:{
    marginHorizontal: 10,
    marginVertical: 15

  }

  
})