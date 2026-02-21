import { Image, View } from "react-native";
import { styles } from "./styles";
import Logo from '@assets/image/logo.png';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={Logo} />
    </View>
  )
}