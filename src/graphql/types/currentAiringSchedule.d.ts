/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediaStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: currentAiringSchedule
// ====================================================

export interface currentAiringSchedule_Page_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean | null;
  total: number | null;
}

export interface currentAiringSchedule_Page_mediaList_media_coverImage {
  __typename: "MediaCoverImage";
  medium: string | null;
}

export interface currentAiringSchedule_Page_mediaList_media_title {
  __typename: "MediaTitle";
  userPreferred: string | null;
}

export interface currentAiringSchedule_Page_mediaList_media_airingSchedule_edges_node {
  __typename: "AiringSchedule";
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
}

export interface currentAiringSchedule_Page_mediaList_media_airingSchedule_edges {
  __typename: "AiringScheduleEdge";
  node: currentAiringSchedule_Page_mediaList_media_airingSchedule_edges_node | null;
}

export interface currentAiringSchedule_Page_mediaList_media_airingSchedule {
  __typename: "AiringScheduleConnection";
  edges: (currentAiringSchedule_Page_mediaList_media_airingSchedule_edges | null)[] | null;
}

export interface currentAiringSchedule_Page_mediaList_media {
  __typename: "Media";
  id: number;
  status: MediaStatus | null;
  siteUrl: string | null;
  coverImage: currentAiringSchedule_Page_mediaList_media_coverImage | null;
  title: currentAiringSchedule_Page_mediaList_media_title | null;
  airingSchedule: currentAiringSchedule_Page_mediaList_media_airingSchedule | null;
}

export interface currentAiringSchedule_Page_mediaList {
  __typename: "MediaList";
  media: currentAiringSchedule_Page_mediaList_media | null;
}

export interface currentAiringSchedule_Page {
  __typename: "Page";
  pageInfo: currentAiringSchedule_Page_pageInfo | null;
  mediaList: (currentAiringSchedule_Page_mediaList | null)[] | null;
}

export interface currentAiringSchedule {
  Page: currentAiringSchedule_Page | null;
}

export interface currentAiringScheduleVariables {
  perPage?: number | null;
  page?: number | null;
  userName?: string | null;
}
