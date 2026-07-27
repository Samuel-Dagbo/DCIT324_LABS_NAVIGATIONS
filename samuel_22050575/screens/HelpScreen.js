import { View, Text, FlatList, StyleSheet } from 'react-native';

const faqs = [
  { id: '1', question: 'How do I reset my password?', answer: 'Go to Settings > Account > Reset Password.' },
  { id: '2', question: 'How do I register for courses?', answer: 'Navigate to Courses tab and tap Register.' },
  { id: '3', question: 'How do I view my timetable?', answer: 'Tap the Timetable tab to view your schedule.' },
  { id: '4', question: 'Who do I contact for support?', answer: 'Email support@campusconnect.edu.gh' },
];

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Help and Support</Text>
      <FlatList
        data={faqs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.question}>Q: {item.question}</Text>
            <Text>A: {item.answer}</Text>
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
  question: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
