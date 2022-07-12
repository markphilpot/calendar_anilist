/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediaSeason, MediaStatus, ExternalLinkType } from "./globalTypes";

// ====================================================
// GraphQL query operation: airingSchedule
// ====================================================

export interface airingSchedule_Page_pageInfo {
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

export interface airingSchedule_Page_media_coverImage {
  __typename: "MediaCoverImage";
  /**
   * The cover image url of the media at medium size
   */
  medium: string | null;
}

export interface airingSchedule_Page_media_title {
  __typename: "MediaTitle";
  /**
   * The currently authenticated users preferred title language. Default romaji for non-authenticated
   */
  userPreferred: string | null;
}

export interface airingSchedule_Page_media_externalLinks {
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

export interface airingSchedule_Page_media_airingSchedule_edges_node {
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
  coverImage: airingSchedule_Page_media_coverImage | null;
  /**
   * The official titles of the media in various languages
   */
  title: airingSchedule_Page_media_title | null;
  /**
   * External links to another site related to the media
   */
  externalLinks: (airingSchedule_Page_media_externalLinks | null)[] | null;
  /**
   * The media's entire airing schedule
   */
  airingSchedule: airingSchedule_Page_media_airingSchedule | null;
}

export interface airingSchedule_Page {
  __typename: "Page";
  /**
   * The pagination information
   */
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
