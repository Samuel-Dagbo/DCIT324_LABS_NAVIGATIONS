import { View, Text, Button, StyleSheet } from 'react-native';

export default function EventDetailsScreen({ route, navigation }) {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.date}>Date: {event.date}</Text>
        <Text style={styles.desc}>{event.description}</Text>
      </View>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    color: '#888',
    marginBottom: 10,
  },
  desc: {
    fontSize: 16,
    lineHeight: 24,
  },
});
