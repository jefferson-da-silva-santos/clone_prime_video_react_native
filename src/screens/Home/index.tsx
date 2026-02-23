import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import Header from "src/components/Header";
import NavMovies from "src/components/NavMovies";
import BannerPrimary from "src/components/BannerPrimary";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { crimeMovies, moviesCurrentlyWatching, moviesWatchInYourLanguage } from "src/utils/constants";
import PlayIcon from "@assets/image/icon_play.png";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="light" />
        <Header />
        <NavMovies />
        <BannerPrimary />
        <Text style={styles.sectionTitle}>Continue Watching</Text>
        <View style={styles.sectionCurrentlyWatching}>
          <FlatList
            data={moviesCurrentlyWatching}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.sectionItem}>
                <Image source={item.urlImg} style={styles.sectionItemImage} />
                <Image source={PlayIcon} style={styles.playIcon} />
              </View>
            )}
          />
        </View>
        <Text style={styles.sectionTitle}>Crime Movies</Text>
        <View style={styles.sectionCurrentlyWatching}>
           <FlatList
            data={crimeMovies}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.sectionItem}>
                <Image source={item.urlImg} style={styles.sectionItemImage} />
                <Image source={PlayIcon} style={styles.playIcon} />
              </View>
            )}
          />
        </View>
        <Text style={styles.sectionTitle}>Watch in your language</Text>
        <View style={styles.sectionLanguage}>
          <FlatList
          data={moviesWatchInYourLanguage}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.sectionItem}>
              <Image source={item.urlImg} style={styles.sectionItemImage} />
              <Image source={PlayIcon} style={styles.playIcon} />
            </View>
          )}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
