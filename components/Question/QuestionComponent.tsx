import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Question } from '@/types/type';

interface QuestionProps {
  question: Question;
  onAnswerSelect: (answerId: number, correctAnswer: number) => void;
}

const QuestionComponent: React.FC<QuestionProps> = ({ question, onAnswerSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question.text}</Text>
      {question.answers.map(answer => (
        <TouchableOpacity
          key={answer.id}
          style={styles.button}
          onPress={() => onAnswerSelect(answer.id, question.correctAnswer)}
        >
          <Text style={styles.buttonText}>{answer.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default QuestionComponent;
