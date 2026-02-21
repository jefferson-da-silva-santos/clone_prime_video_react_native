import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function NavMovies() {
  return (
    <View style={styles.groupButtons}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>TV Shows</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Kids</Text>
      </TouchableOpacity>
    </View>
  )
}