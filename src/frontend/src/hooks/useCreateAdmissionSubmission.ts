import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface AdmissionFormData {
  parentName: string;
  childName: string;
  childClass: string;
  phone: string;
  email?: string;
  address?: string;
  message?: string;
}

export function useCreateAdmissionSubmission() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: AdmissionFormData) => {
      if (!actor) {
        throw new Error('Backend actor not available');
      }

      await actor.createSubmission(
        data.parentName,
        data.childName,
        data.childClass,
        data.phone,
        data.email || null,
        data.address || null,
        data.message || null
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admissionSubmissions'] });
    },
  });
}

