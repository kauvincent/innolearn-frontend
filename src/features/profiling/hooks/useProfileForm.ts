import { useState } from "react";
import { useProfilingContext } from "@/contexts/ProfilingContext";
import { agentApi } from "@/services/agentApi";

export const useProfileForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { profileData, updateProfile, setComplete } = useProfilingContext();

  const submitProfile = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Convert profile data to API format
      const profile = {
        id: 'user-1', // In real app, this would come from auth
        learningStyle: profileData.learningStyle,
        strengths: profileData.strengths,
        weaknesses: profileData.weaknesses,
        preferences: profileData.preferences,
      };

      await agentApi.saveProfile(profile);
      setComplete(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    profileData,
    updateProfile,
    submitProfile,
    isSubmitting,
    error,
  };
};