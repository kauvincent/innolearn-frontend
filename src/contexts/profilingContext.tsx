import { createContext, useContext, useState, ReactNode } from "react";

export interface ProfileData {
  learningStyle: string;
  strengths: string[];
  weaknesses: string[];
  preferences: {
    pace: string;
    timeOfDay: string;
    duration: string;
  };
}

interface ProfilingContextType {
  profileData: ProfileData;
  updateProfile: (data: Partial<ProfileData>) => void;
  isComplete: boolean;
  setComplete: (complete: boolean) => void;
}

const ProfilingContext = createContext<ProfilingContextType | undefined>(undefined);

export const ProfilingProvider = ({ children }: { children: ReactNode }) => {
  const [profileData, setProfileData] = useState<ProfileData>({
    learningStyle: "",
    strengths: [],
    weaknesses: [],
    preferences: {
      pace: "",
      timeOfDay: "",
      duration: "",
    },
  });
  
  const [isComplete, setComplete] = useState(false);

  const updateProfile = (data: Partial<ProfileData>) => {
    setProfileData(prev => ({ ...prev, ...data }));
  };

  return (
    <ProfilingContext.Provider value={{
      profileData,
      updateProfile,
      isComplete,
      setComplete,
    }}>
      {children}
    </ProfilingContext.Provider>
  );
};

export const useProfilingContext = () => {
  const context = useContext(ProfilingContext);
  if (!context) {
    throw new Error("useProfilingContext must be used within a ProfilingProvider");
  }
  return context;
};