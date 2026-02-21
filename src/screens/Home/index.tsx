import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import Header from 'src/components/Header';
import NavMovies from 'src/components/NavMovies';
import BannerPrimary from 'src/components/BannerPrimary';
import { Image, ScrollView, View } from 'react-native';
import { moviesCurrentlyWatching } from 'src/utils/constants';
import PlayIcon from '@assets/image/icon_play.png';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <NavMovies />
      <BannerPrimary />

      <View style={styles.sectionCurrentlyWatching}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {moviesCurrentlyWatching && moviesCurrentlyWatching.map((movie) => (
          <View key={movie.id} style={styles.sectionItem}>
            <Image source={movie.urlImg} style={styles.sectionItemImage} />
            <Image source={PlayIcon} style={styles.playIcon} />
          </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
