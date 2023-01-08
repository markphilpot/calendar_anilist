/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediaStatus, ExternalLinkType } from "./globalTypes";

// ====================================================
// GraphQL query operation: usersAiringSchedule
// ====================================================

export interface usersAiringSchedule_Page_pageInfo {
  __typename: "PageInfo";
  /**
   * If there is another page
   */
  hasNextPage: boolean | null;
  /**
   * The total number of items. Note: This value is not guaranteed to be accurate, do not rely on this for logic
   */
  total: number | null;
}

export interface usersAiringSchedule_Page_mediaList_media_coverImage {
  __typename: "MediaCoverImage";
  /**
   * The cover image url of the media at medium size
   */
  medium: string | null;
  /**
   * The cover image url of the media at a large size
   */
  large: string | null;
}

export interface usersAiringSchedule_Page_mediaList_media_title {
  __typename: "MediaTitle";
  /**
   * The currently authenticated users preferred title language. Default romaji for non-authenticated
   */
  userPreferred: string | null;
}

export interface usersAiringSchedule_Page_mediaList_media_externalLinks {
  __typename: "MediaExternalLink";
  /**
   * The url of the external link or base url of link source
   */
  url: string | null;
  /**
   * The links website site name
   */
  site: string;
  type: ExternalLinkType | null;
  /**
   * The icon image url of the site. Not available for all links. Transparent PNG 64x64
   */
  icon: string | null;
  color: string | null;
}

export interface usersAiringSchedule_Page_mediaList_media_airingSchedule_edges_node {
  __typename: "AiringSchedule";
  /**
   * The time the episode airs at
   */
  airingAt: number;
  /**
   * Seconds until episode starts airing
   */
  timeUntilAiring: number;
  /**
   * The airing episode number
   */
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
  /**
   * The id of the media
   */
  id: number;
  /**
   * The current releasing status of the media
   */
  status: MediaStatus | null;
  /**
   * The url for the media page on the AniList website
   */
  siteUrl: string | null;
  /**
   * The cover images of the media
   */
  coverImage: usersAiringSchedule_Page_mediaList_media_coverImage | null;
  /**
   * The official titles of the media in various languages
   */
  title: usersAiringSchedule_Page_mediaList_media_title | null;
  /**
   * External links to another site related to the media
   */
  externalLinks: (usersAiringSchedule_Page_mediaList_media_externalLinks | null)[] | null;
  /**
   * The media's entire airing schedule
   */
  airingSchedule: usersAiringSchedule_Page_mediaList_media_airingSchedule | null;
}

export interface usersAiringSchedule_Page_mediaList {
  __typename: "MediaList";
  media: usersAiringSchedule_Page_mediaList_media | null;
}

export interface usersAiringSchedule_Page {
  __typename: "Page";
  /**
   * The pagination information
   */
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
