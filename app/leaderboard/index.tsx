import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useScores } from '@/context/scores-context';
import { Link } from 'expo-router';

const Leaderboard: React.FC = () => {
  const { scores } = useScores();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={scores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>ID: {item.id}</Text>
            <Text style={styles.cell}>Examiner: {item.examiner}</Text>
            <Text style={styles.cell}>Score: {item.value}</Text>
          </View>
        )}
      />
      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cell: {
    marginRight: 20,
  },
  link: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default Leaderboard;
