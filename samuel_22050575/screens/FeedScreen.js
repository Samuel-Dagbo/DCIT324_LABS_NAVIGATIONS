import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const events = [
  { id: '1', title: 'Welcome Week', date: '2026-08-15', description: 'Orientation and welcome activities for all students.' },
  { id: '2', title: 'Career Fair', date: '2026-08-20', description: 'Meet top employers and explore internship opportunities.' },
  { id: '3', title: 'Hackathon', date: '2026-08-25', description: '48-hour coding competition with great prizes.' },
  { id: '4', title: 'Research Symposium', date: '2026-09-01', description: 'Showcase your research projects to faculty and peers.' },
  { id: '5', title: 'Networking Night', date: '2026-09-10', description: 'Connect with alumni and industry professionals.' },
];

export default function FeedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus Feed</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('EventDetails', { event: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
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
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: '#888',
    marginTop: 5,
  },
});
