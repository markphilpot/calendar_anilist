import { gql } from '@apollo/client';

export const currentAringSchedule = gql`
  query currentAiringSchedule($perPage: Int = 50, $page: Int = 1, $userName: String) {
    Page(perPage: $perPage, page: $page) {
      pageInfo {
        hasNextPage
        total
      }
      mediaList(userName: $userName, type: ANIME, status: CURRENT) {
        media {
          id
          status
          siteUrl
          coverImage {
            medium
          }
          title {
            userPreferred
          }
          airingSchedule {
            edges {
              node {
                airingAt
                timeUntilAiring
                episode
              }
            }
          }
        }
      }
    }
  }
`;
