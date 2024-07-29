import React, { createContext, useState, ReactNode, useContext } from 'react';

interface Score {
  id: number;
  examiner: string;
  value: number;
}

interface ScoresContextProps {
  scores: Score[];
  addScore: (examiner: string, score: number) => void;
}

const ScoresContext = createContext<ScoresContextProps | undefined>(undefined);

export const ScoresProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [scores, setScores] = useState<Score[]>([]);

  const addScore = (examiner: string, score: number) => {
    setScores((prevScores) => [...prevScores, { id: prevScores.length + 1, examiner, value: score }]);
  };

  return (
    <ScoresContext.Provider value={{ scores, addScore }}>
      {children}
    </ScoresContext.Provider>
  );
};

export const useScores = (): ScoresContextProps => {
  const context = useContext(ScoresContext);
  if (!context) {
    throw new Error('useScores must be used within a ScoresProvider');
  }
  return context;
};