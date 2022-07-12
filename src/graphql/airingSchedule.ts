import { gql } from '@apollo/client';

export const usersAiringSchedule = gql`
  query usersAiringSchedule($perPage: Int = 50, $page: Int = 1, $userName: String) {
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
          externalLinks {
            url
            site
            type
            icon
            color
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

export const airingSchedule = gql`
  query airingSchedule($perPage: Int = 50, $page: Int = 1, $year: Int = 2022, $season: MediaSeason = SPRING) {
    Page(perPage: $perPage, page: $page) {
      pageInfo {
        hasNextPage
        total
      }
      media(type: ANIME, status: RELEASING, seasonYear: $year, season: $season, sort: [POPULARITY_DESC]) {
        id
        status
        siteUrl
        coverImage {
          medium
        }
        title {
          userPreferred
        }
        externalLinks {
          url
          site
          type
          icon
          color
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
`;
