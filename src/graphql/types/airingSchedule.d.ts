/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediaSeason, MediaStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: airingSchedule
// ====================================================

export interface airingSchedule_Page_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean | null;
  total: number | null;
}

export interface airingSchedule_Page_media_coverImage {
  __typename: "MediaCoverImage";
  medium: string | null;
}

export interface airingSchedule_Page_media_title {
  __typename: "MediaTitle";
  userPreferred: string | null;
}

export interface airingSchedule_Page_media_airingSchedule_edges_node {
  __typename: "AiringSchedule";
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
}

export interface airingSchedule_Page_media_airingSchedule_edges {
  __typename: "AiringScheduleEdge";
  node: airingSchedule_Page_media_airingSchedule_edges_node | null;
}

export interface airingSchedule_Page_media_airingSchedule {
  __typename: "AiringScheduleConnection";
  edges: (airingSchedule_Page_media_airingSchedule_edges | null)[] | null;
}

export interface airingSchedule_Page_media {
  __typename: "Media";
  id: number;
  status: MediaStatus | null;
  siteUrl: string | null;
  coverImage: airingSchedule_Page_media_coverImage | null;
  title: airingSchedule_Page_media_title | null;
  airingSchedule: airingSchedule_Page_media_airingSchedule | null;
}

export interface airingSchedule_Page {
  __typename: "Page";
  pageInfo: airingSchedule_Page_pageInfo | null;
  media: (airingSchedule_Page_media | null)[] | null;
}

export interface airingSchedule {
  Page: airingSchedule_Page | null;
}

export interface airingScheduleVariables {
  perPage?: number | null;
  page?: number | null;
  year?: number | null;
  season?: MediaSeason | null;
}
