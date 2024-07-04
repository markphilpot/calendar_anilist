/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query usersAiringSchedule($perPage: Int = 50, $page: Int = 1, $userName: String) {\n    Page(perPage: $perPage, page: $page) {\n      pageInfo {\n        hasNextPage\n        total\n      }\n      mediaList(userName: $userName, type: ANIME, status_in: [CURRENT, PLANNING]) {\n        media {\n          id\n          status\n          siteUrl\n          coverImage {\n            medium\n            large\n          }\n          title {\n            romaji\n            english\n          }\n          externalLinks {\n            url\n            site\n            type\n            icon\n            color\n          }\n          airingSchedule {\n            edges {\n              node {\n                airingAt\n                timeUntilAiring\n                episode\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.usersAiringScheduleDocument,
  '\n  query airingSchedule($perPage: Int = 50, $page: Int = 1, $year: Int = 2022, $season: MediaSeason = SPRING) {\n    Page(perPage: $perPage, page: $page) {\n      pageInfo {\n        hasNextPage\n        total\n      }\n      media(type: ANIME, status: RELEASING, seasonYear: $year, season: $season, sort: [POPULARITY_DESC]) {\n        id\n        status\n        siteUrl\n        coverImage {\n          medium\n          large\n        }\n        title {\n          romaji\n          english\n        }\n        externalLinks {\n          url\n          site\n          type\n          icon\n          color\n        }\n        airingSchedule {\n          edges {\n            node {\n              airingAt\n              timeUntilAiring\n              episode\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.airingScheduleDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query usersAiringSchedule($perPage: Int = 50, $page: Int = 1, $userName: String) {\n    Page(perPage: $perPage, page: $page) {\n      pageInfo {\n        hasNextPage\n        total\n      }\n      mediaList(userName: $userName, type: ANIME, status_in: [CURRENT, PLANNING]) {\n        media {\n          id\n          status\n          siteUrl\n          coverImage {\n            medium\n            large\n          }\n          title {\n            romaji\n            english\n          }\n          externalLinks {\n            url\n            site\n            type\n            icon\n            color\n          }\n          airingSchedule {\n            edges {\n              node {\n                airingAt\n                timeUntilAiring\n                episode\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  query usersAiringSchedule($perPage: Int = 50, $page: Int = 1, $userName: String) {\n    Page(perPage: $perPage, page: $page) {\n      pageInfo {\n        hasNextPage\n        total\n      }\n      mediaList(userName: $userName, type: ANIME, status_in: [CURRENT, PLANNING]) {\n        media {\n          id\n          status\n          siteUrl\n          coverImage {\n            medium\n            large\n          }\n          title {\n            romaji\n            english\n          }\n          externalLinks {\n            url\n            site\n            type\n            icon\n            color\n          }\n          airingSchedule {\n            edges {\n              node {\n                airingAt\n                timeUntilAiring\n                episode\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query airingSchedule($perPage: Int = 50, $page: Int = 1, $year: Int = 2022, $season: MediaSeason = SPRING) {\n    Page(perPage: $perPage, page: $page) {\n      pageInfo {\n        hasNextPage\n        total\n      }\n      media(type: ANIME, status: RELEASING, seasonYear: $year, season: $season, sort: [POPULARITY_DESC]) {\n        id\n        status\n        siteUrl\n        coverImage {\n          medium\n          large\n        }\n        title {\n          romaji\n          english\n        }\n        externalLinks {\n          url\n          site\n          type\n          icon\n          color\n        }\n        airingSchedule {\n          edges {\n            node {\n              airingAt\n              timeUntilAiring\n              episode\n            }\n          }\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  query airingSchedule($perPage: Int = 50, $page: Int = 1, $year: Int = 2022, $season: MediaSeason = SPRING) {\n    Page(perPage: $perPage, page: $page) {\n      pageInfo {\n        hasNextPage\n        total\n      }\n      media(type: ANIME, status: RELEASING, seasonYear: $year, season: $season, sort: [POPULARITY_DESC]) {\n        id\n        status\n        siteUrl\n        coverImage {\n          medium\n          large\n        }\n        title {\n          romaji\n          english\n        }\n        externalLinks {\n          url\n          site\n          type\n          icon\n          color\n        }\n        airingSchedule {\n          edges {\n            node {\n              airingAt\n              timeUntilAiring\n              episode\n            }\n          }\n        }\n      }\n    }\n  }\n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never;
