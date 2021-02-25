import { createContext, useState, ReactNode } from "react";

import challanges from "../challenges.json";

interface Challange {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallangesContextData {
  level: number;
  currentExperience: number;
  challangesCompleted: number;
  levelUp: () => void;
  startNewChallange: () => void;
  activeChallange: Challange;
  resetChallange: () => void;
  experienceToNextLevel: number;
}

interface ChallangesProviderProps {
  children: ReactNode;
}

export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallangesProvider({ children }: ChallangesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challangesCompleted, setChallangesCompleted] = useState(0);
  const [activeChallange, setActiveChallange] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function resetChallange() {
    setActiveChallange(null);
  }

  function startNewChallange() {
    const randomChallangeIndex = Math.floor(Math.random() * challanges.length);
    const challange = challanges[randomChallangeIndex];

    setActiveChallange(challange);
  }

  return (
    <ChallangesContext.Provider
      value={{
        level,
        levelUp,
        challangesCompleted,
        currentExperience,
        startNewChallange,
        activeChallange,
        resetChallange,
        experienceToNextLevel,
      }}
    >
      {children}
    </ChallangesContext.Provider>
  );
}
