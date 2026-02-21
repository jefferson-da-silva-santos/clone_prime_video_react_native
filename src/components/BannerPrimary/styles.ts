import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bannerButton: {
    position: 'relative',
    marginTop: 20,
    width: '100%'
  },
  banner: {
    width: '100%',
    height: 185,
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    bottom: 50,
    right: 65,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  playIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  playText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
  }
});