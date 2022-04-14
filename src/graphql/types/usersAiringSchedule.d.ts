/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediaStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: usersAiringSchedule
// ====================================================

export interface usersAiringSchedule_Page_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean | null;
  total: number | null;
}

export interface usersAiringSchedule_Page_mediaList_media_coverImage {
  __typename: "MediaCoverImage";
  medium: string | null;
}

export interface usersAiringSchedule_Page_mediaList_media_title {
  __typename: "MediaTitle";
  userPreferred: string | null;
}

export interface usersAiringSchedule_Page_mediaList_media_airingSchedule_edges_node {
  __typename: "AiringSchedule";
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
}

export interface usersAiringSchedule_Page_mediaList_media_airingSchedule_edges {
  __typename: "AiringScheduleEdge";
  node: usersAiringSchedule_Page_mediaList_media_airingSchedule_edges_node | null;
}

export interface usersAiringSchedule_Page_mediaList_media_airingSchedule {
  __typename: "AiringScheduleConnection";
  edges: (usersAiringSchedule_Page_mediaList_media_airingSchedule_edges | null)[] | null;
}

export interface usersAiringSchedule_Page_mediaList_media {
  __typename: "Media";
  id: number;
  status: MediaStatus | null;
  siteUrl: string | null;
  coverImage: usersAiringSchedule_Page_mediaList_media_coverImage | null;
  title: usersAiringSchedule_Page_mediaList_media_title | null;
  airingSchedule: usersAiringSchedule_Page_mediaList_media_airingSchedule | null;
}

export interface usersAiringSchedule_Page_mediaList {
  __typename: "MediaList";
  media: usersAiringSchedule_Page_mediaList_media | null;
}

export interface usersAiringSchedule_Page {
  __typename: "Page";
  pageInfo: usersAiringSchedule_Page_pageInfo | null;
  mediaList: (usersAiringSchedule_Page_mediaList | null)[] | null;
}

export interface usersAiringSchedule {
  Page: usersAiringSchedule_Page | null;
}

export interface usersAiringScheduleVariables {
  perPage?: number | null;
  page?: number | null;
  userName?: string | null;
}
