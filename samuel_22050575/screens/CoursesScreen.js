import { View, Text, FlatList, StyleSheet } from 'react-native';

const courses = [
  { id: '1', code: 'DCIT 301', title: 'Data Structures', credits: 3 },
  { id: '2', code: 'DCIT 303', title: 'Computer Networks', credits: 3 },
  { id: '3', code: 'DCIT 305', title: 'Database Systems', credits: 3 },
  { id: '4', code: 'DCIT 307', title: 'Object-Oriented Programming', credits: 3 },
  { id: '5', code: 'DCIT 309', title: 'Software Engineering', credits: 3 },
  { id: '6', code: 'DCIT 324', title: 'Mobile App Development', credits: 3 },
];

export default function CoursesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.code}>{item.code}</Text>
            <Text>{item.title}</Text>
            <Text style={styles.credits}>{item.credits} Credits</Text>
          </View>
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
  code: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  credits: {
    color: '#888',
    marginTop: 5,
  },
});
