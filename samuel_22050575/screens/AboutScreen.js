import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About</Text>
      <View style={styles.card}>
        <Text style={styles.appName}>Campus Connect</Text>
        <Text style={styles.desc}>Your one-stop student portal</Text>
        <Text style={styles.info}>Name: Samuel</Text>
        <Text style={styles.info}>Student ID: 22050575</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  desc: {
    marginBottom: 15,
    color: '#666',
  },
  info: {
    marginBottom: 5,
  },
});
