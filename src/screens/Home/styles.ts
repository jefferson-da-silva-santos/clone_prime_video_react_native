import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232F3E',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  sectionCurrentlyWatching: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
  },
  sectionItem: {
    marginRight: 16,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionItemImage: {
    borderRadius: 10,
  },
  playIcon: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 40,
    height: 40,
    margin: 10
  },
  sectionLanguage: {
    
  }
});