import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import QuestionComponent from '@/components/Question/QuestionComponent';
import { getRandomQuestions } from '@/utils/shuffle';
import { Question, RootStackParamList } from '@/types/type';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { useScores } from '@/context/scores-context';

type QuizScreenProps = NativeStackScreenProps<RootStackParamList, 'quiz'>;

const QuizScreen: React.FC<QuizScreenProps> = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [examiner, setExaminer] = useState('');
    const [error, setError] = useState<string | null>(null);
    const { addScore } = useScores();

    useEffect(() => {
        setRandomQuestions(getRandomQuestions(20));
    }, []);

    const handleAnswerSelect = (answerId: number, correctAnswer: number) => {
        if (answerId === correctAnswer) {
            setScore(score + 1);
        }
        handleNextQuestion();
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < randomQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleFinishQuiz = () => {
        if (examiner.trim() === '') {
            setError('Name is required');
            return;
        }

        addScore(examiner, score);
        navigation.navigate('leaderboard');
    };

    return (
        <View style={styles.container}>
            {randomQuestions.length > 0 && (
                <QuestionComponent
                    question={randomQuestions[currentQuestionIndex]}
                    onAnswerSelect={handleAnswerSelect}
                />
            )}
            {currentQuestionIndex === randomQuestions.length - 1 && (
                <>
                    <TextInput
                        style={error ? styles.inputError : styles.input}
                        placeholder="Enter your name"
                        value={examiner}
                        onChangeText={setExaminer}
                    />

                    {error ? <Text style={styles.error}>{error}</Text> : null}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleFinishQuiz}
                    >
                        <Text style={styles.buttonText}>Finish Quiz</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '80%',
    },
    inputError: {
        height: 40,
        borderColor: 'red',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '80%',
    },
    error: {
        color: 'red',
        marginTop: 5,
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

export default QuizScreen;