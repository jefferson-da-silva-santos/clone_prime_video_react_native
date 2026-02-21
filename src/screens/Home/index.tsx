import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import Header from 'src/components/Header';
import NavMovies from 'src/components/NavMovies';
import { Image, TouchableOpacity, View } from 'react-native';

import Banner from '@assets/image/WheelOfTime.png';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <NavMovies />
      <TouchableOpacity style={styles.bannerButton}>
        <Image source={Banner} style={styles.banner} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}
