import { searchMovie } from "@/api/get-filme";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function moviePage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["Filme", id],
    queryFn: () => searchMovie(id),
  });

  if (isLoading) {
    return (
      <View style={styles.messageContainer}>
        <Text>Carregando filmes...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.messageContainer}>
        <Text>Ops! Erro ao carregar filme!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.movieBanner}
        source={{ uri: data.capa }}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{data.nome}</Text>

        <View style={styles.movieMeta}>
          <Text style={styles.metaText}>{data.ano}</Text>
          <Text>°</Text>
          <Text style={styles.metaText}>{data.duracao}</Text>
          
          <View style={styles.ageRating}>
            <Text style={styles.ageRatingText}>{data.classificacao}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.btnWatch}>
          <Text style={styles.watchText}> Assistir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnList}>
          <Text style={styles.listText}> Minha lista</Text>
        </TouchableOpacity>

        <View style={styles.sinopseContainer}>
          <Text style={styles.sectionTitle}>SINOPSE</Text>
          <Text style={styles.sinopseText}>{data.sinopse}</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Gênero</Text>
            <Text style={styles.infoValue}>{data.genero}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  messageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  movieBanner: {
    width: "100%",
    minHeight: 210,
    
    
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 35,
    gap: 10,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 4,
  },

  movieMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },

  metaText: {
    fontSize: 16,
    color: "#555",
  },

  ageRating: {
    borderWidth: 1,
    borderColor: "#FF2414",
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginLeft: 2,
  },

  ageRatingText: {
    color: "#FF2414",
    fontSize: 14,
  },

  btnWatch: {
    height: 61,
    backgroundColor: "#FF2817",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  watchText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  btnList: {
    height: 61,
    borderWidth: 1,
    borderColor: "#999",
    justifyContent: "center",
    paddingHorizontal: 24,
    marginBottom: 6,
  },

  listText: {
    color: "#111",
    fontSize: 19,
    fontWeight: "bold",
  },

  sinopseContainer: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#AAA",
    paddingVertical: 14,
    gap: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
    textTransform: "uppercase",
  },

  sinopseText: {
    fontSize: 17,
    lineHeight: 27,
    color: "#111",
  },

  infoContainer: {
    paddingTop: 5,
    gap: 16,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  infoLabel: {
    width: 130,
    fontSize: 16,
    color: "#555",
  },

  infoValue: {
    flex: 1,
    fontSize: 16,
    color: "#111",
  },
});
