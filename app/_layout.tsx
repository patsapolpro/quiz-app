import React from 'react';
import { Stack } from 'expo-router';
import { ScoresProvider } from '@/context/scores-context';

export default function Layout() {
  return (
    <ScoresProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name="quiz" options={{ title: 'Quiz' }} />
        <Stack.Screen name="leaderboard" options={{ title: 'Leaderboard' }} />
      </Stack>
    </ScoresProvider>
  );
}