import { Image, Text, TouchableOpacity, View } from 'react-native';
import Banner from '@assets/image/WheelOfTime.png';
import PlayIcon from '@assets/image/icon_play.png';

import { styles } from './styles';

export default function BannerPrimary() {
  return (
    <TouchableOpacity style={styles.bannerButton}>
      <Image source={Banner} style={styles.banner} />
      <TouchableOpacity style={styles.playButton}>
        <Image source={PlayIcon} style={styles.playIcon} />
        <Text style={styles.playText}>Watch now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}