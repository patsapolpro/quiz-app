import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LeaderboardProps {
  scores: { name: string; score: number }[];
}

const LeaderboardComponent: React.FC<LeaderboardProps> = ({ scores }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leaderboard</Text>
      {scores.map((score, index) => (
        <Text key={index} style={styles.score}>{`${score.name}: ${score.score}`}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  score: {
    fontSize: 18,
  },
});

export default LeaderboardComponent;