import { useQuery } from '@tanstack/react-query';
import { graphqlClient } from '../lib/graphql-client';
import { usersAiringSchedule, airingSchedule } from '../graphql/airingSchedule';
import type {
  usersAiringScheduleQuery,
  usersAiringScheduleQueryVariables,
  airingScheduleQuery,
  airingScheduleQueryVariables,
  MediaSeason,
} from '../gql/graphql';

export function useUsersAiringSchedule(
  variables: usersAiringScheduleQueryVariables,
  options?: { enabled?: boolean }
) {
  return useQuery({
    queryKey: ['usersAiringSchedule', variables],
    queryFn: async () => {
      const data = await graphqlClient.request<usersAiringScheduleQuery, usersAiringScheduleQueryVariables>(
        usersAiringSchedule,
        variables
      );
      return data;
    },
    enabled: options?.enabled ?? true,
  });
}

export function useAiringSchedule(
  variables: { year: number; season: MediaSeason },
  options?: { enabled?: boolean }
) {
  return useQuery({
    queryKey: ['airingSchedule', variables],
    queryFn: async () => {
      const data = await graphqlClient.request<airingScheduleQuery, airingScheduleQueryVariables>(
        airingSchedule,
        variables as airingScheduleQueryVariables
      );
      return data;
    },
    enabled: options?.enabled ?? true,
  });
}
