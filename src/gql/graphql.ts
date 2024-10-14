/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  CountryCode: { input: any; output: any };
  FuzzyDateInt: { input: any; output: any };
  Json: { input: any; output: any };
};

export type ActivityLikeNotification = {
  __typename: 'ActivityLikeNotification';
  activity: Maybe<ActivityUnion>;
  activityId: Scalars['Int']['output'];
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  type: Maybe<NotificationType>;
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type ActivityMentionNotification = {
  __typename: 'ActivityMentionNotification';
  activity: Maybe<ActivityUnion>;
  activityId: Scalars['Int']['output'];
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  type: Maybe<NotificationType>;
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type ActivityMessageNotification = {
  __typename: 'ActivityMessageNotification';
  activityId: Scalars['Int']['output'];
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  message: Maybe<MessageActivity>;
  type: Maybe<NotificationType>;
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type ActivityReply = {
  __typename: 'ActivityReply';
  activityId: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isLiked: Maybe<Scalars['Boolean']['output']>;
  likeCount: Scalars['Int']['output'];
  likes: Maybe<Array<Maybe<User>>>;
  text: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
  userId: Maybe<Scalars['Int']['output']>;
};

export type ActivityReplytextArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ActivityReplyLikeNotification = {
  __typename: 'ActivityReplyLikeNotification';
  activity: Maybe<ActivityUnion>;
  activityId: Scalars['Int']['output'];
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  type: Maybe<NotificationType>;
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type ActivityReplyNotification = {
  __typename: 'ActivityReplyNotification';
  activity: Maybe<ActivityUnion>;
  activityId: Scalars['Int']['output'];
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  type: Maybe<NotificationType>;
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type ActivityReplySubscribedNotification = {
  __typename: 'ActivityReplySubscribedNotification';
  activity: Maybe<ActivityUnion>;
  activityId: Scalars['Int']['output'];
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  type: Maybe<NotificationType>;
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type ActivitySort = 'ID' | 'ID_DESC' | 'PINNED';

export type ActivityType = 'ANIME_LIST' | 'MANGA_LIST' | 'MEDIA_LIST' | 'MESSAGE' | 'TEXT';

export type ActivityUnion = ListActivity | MessageActivity | TextActivity;

export type AiringNotification = {
  __typename: 'AiringNotification';
  animeId: Scalars['Int']['output'];
  contexts: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createdAt: Maybe<Scalars['Int']['output']>;
  episode: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  media: Maybe<Media>;
  type: Maybe<NotificationType>;
};

export type AiringProgression = {
  __typename: 'AiringProgression';
  episode: Maybe<Scalars['Float']['output']>;
  score: Maybe<Scalars['Float']['output']>;
  watching: Maybe<Scalars['Int']['output']>;
};

export type AiringSchedule = {
  __typename: 'AiringSchedule';
  airingAt: Scalars['Int']['output'];
  episode: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  media: Maybe<Media>;
  mediaId: Scalars['Int']['output'];
  timeUntilAiring: Scalars['Int']['output'];
};

export type AiringScheduleConnection = {
  __typename: 'AiringScheduleConnection';
  edges: Maybe<Array<Maybe<AiringScheduleEdge>>>;
  nodes: Maybe<Array<Maybe<AiringSchedule>>>;
  pageInfo: Maybe<PageInfo>;
};

export type AiringScheduleEdge = {
  __typename: 'AiringScheduleEdge';
  id: Maybe<Scalars['Int']['output']>;
  node: Maybe<AiringSchedule>;
};

export type AiringScheduleInput = {
  airingAt?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  timeUntilAiring?: InputMaybe<Scalars['Int']['input']>;
};

export type AiringSort =
  | 'EPISODE'
  | 'EPISODE_DESC'
  | 'ID'
  | 'ID_DESC'
  | 'MEDIA_ID'
  | 'MEDIA_ID_DESC'
  | 'TIME'
  | 'TIME_DESC';

export type AniChartHighlightInput = {
  highlight?: InputMaybe<Scalars['String']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
};

export type AniChartUser = {
  __typename: 'AniChartUser';
  highlights: Maybe<Scalars['Json']['output']>;
  settings: Maybe<Scalars['Json']['output']>;
  user: Maybe<User>;
};

export type Character = {
  __typename: 'Character';
  age: Maybe<Scalars['String']['output']>;
  bloodType: Maybe<Scalars['String']['output']>;
  dateOfBirth: Maybe<FuzzyDate>;
  description: Maybe<Scalars['String']['output']>;
  favourites: Maybe<Scalars['Int']['output']>;
  gender: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image: Maybe<CharacterImage>;
  isFavourite: Scalars['Boolean']['output'];
  isFavouriteBlocked: Scalars['Boolean']['output'];
  media: Maybe<MediaConnection>;
  modNotes: Maybe<Scalars['String']['output']>;
  name: Maybe<CharacterName>;
  siteUrl: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['Int']['output']>;
};

export type CharacterdescriptionArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CharactermediaArgs = {
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  type?: InputMaybe<MediaType>;
};

export type CharacterConnection = {
  __typename: 'CharacterConnection';
  edges: Maybe<Array<Maybe<CharacterEdge>>>;
  nodes: Maybe<Array<Maybe<Character>>>;
  pageInfo: Maybe<PageInfo>;
};

export type CharacterEdge = {
  __typename: 'CharacterEdge';
  favouriteOrder: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  media: Maybe<Array<Maybe<Media>>>;
  name: Maybe<Scalars['String']['output']>;
  node: Maybe<Character>;
  role: Maybe<CharacterRole>;
  voiceActorRoles: Maybe<Array<Maybe<StaffRoleType>>>;
  voiceActors: Maybe<Array<Maybe<Staff>>>;
};

export type CharacterEdgevoiceActorRolesArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

export type CharacterEdgevoiceActorsArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

export type CharacterImage = {
  __typename: 'CharacterImage';
  large: Maybe<Scalars['String']['output']>;
  medium: Maybe<Scalars['String']['output']>;
};

export type CharacterName = {
  __typename: 'CharacterName';
  alternative: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  alternativeSpoiler: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  first: Maybe<Scalars['String']['output']>;
  full: Maybe<Scalars['String']['output']>;
  last: Maybe<Scalars['String']['output']>;
  middle: Maybe<Scalars['String']['output']>;
  native: Maybe<Scalars['String']['output']>;
  userPreferred: Maybe<Scalars['String']['output']>;
};

export type CharacterNameInput = {
  alternative?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alternativeSpoiler?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['String']['input']>;
  middle?: InputMaybe<Scalars['String']['input']>;
  native?: InputMaybe<Scalars['String']['input']>;
};

export type CharacterRole = 'BACKGROUND' | 'MAIN' | 'SUPPORTING';

export type CharacterSort =
  | 'FAVOURITES'
  | 'FAVOURITES_DESC'
  | 'ID'
  | 'ID_DESC'
  | 'RELEVANCE'
  | 'ROLE'
  | 'ROLE_DESC'
  | 'SEARCH_MATCH';

export type CharacterSubmission = {
  __typename: 'CharacterSubmission';
  assignee: Maybe<User>;
  character: Maybe<Character>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  locked: Maybe<Scalars['Boolean']['output']>;
  notes: Maybe<Scalars['String']['output']>;
  source: Maybe<Scalars['String']['output']>;
  status: Maybe<SubmissionStatus>;
  submission: Maybe<Character>;
  submitter: Maybe<User>;
};

export type CharacterSubmissionConnection = {
  __typename: 'CharacterSubmissionConnection';
  edges: Maybe<Array<Maybe<CharacterSubmissionEdge>>>;
  nodes: Maybe<Array<Maybe<CharacterSubmission>>>;
  pageInfo: Maybe<PageInfo>;
};

export type CharacterSubmissionEdge = {
  __typename: 'CharacterSubmissionEdge';
  node: Maybe<CharacterSubmission>;
  role: Maybe<CharacterRole>;
  submittedVoiceActors: Maybe<Array<Maybe<StaffSubmission>>>;
  voiceActors: Maybe<Array<Maybe<Staff>>>;
};

export type Deleted = {
  __typename: 'Deleted';
  deleted: Maybe<Scalars['Boolean']['output']>;
};

export type ExternalLinkMediaType = 'ANIME' | 'MANGA' | 'STAFF';

export type ExternalLinkType = 'INFO' | 'SOCIAL' | 'STREAMING';

export type Favourites = {
  __typename: 'Favourites';
  anime: Maybe<MediaConnection>;
  characters: Maybe<CharacterConnection>;
  manga: Maybe<MediaConnection>;
  staff: Maybe<StaffConnection>;
  studios: Maybe<StudioConnection>;
};

export type FavouritesanimeArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type FavouritescharactersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type FavouritesmangaArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type FavouritesstaffArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type FavouritesstudiosArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type FollowingNotification = {
  __typename: 'FollowingNotification';
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  type: Maybe<NotificationType>;
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type FormatStats = {
  __typename: 'FormatStats';
  amount: Maybe<Scalars['Int']['output']>;
  format: Maybe<MediaFormat>;
};

export type FuzzyDate = {
  __typename: 'FuzzyDate';
  day: Maybe<Scalars['Int']['output']>;
  month: Maybe<Scalars['Int']['output']>;
  year: Maybe<Scalars['Int']['output']>;
};

export type FuzzyDateInput = {
  day?: InputMaybe<Scalars['Int']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type GenreStats = {
  __typename: 'GenreStats';
  amount: Maybe<Scalars['Int']['output']>;
  genre: Maybe<Scalars['String']['output']>;
  meanScore: Maybe<Scalars['Int']['output']>;
  timeWatched: Maybe<Scalars['Int']['output']>;
};

export type InternalPage = {
  __typename: 'InternalPage';
  activities: Maybe<Array<Maybe<ActivityUnion>>>;
  activityReplies: Maybe<Array<Maybe<ActivityReply>>>;
  airingSchedules: Maybe<Array<Maybe<AiringSchedule>>>;
  characterSubmissions: Maybe<Array<Maybe<CharacterSubmission>>>;
  characters: Maybe<Array<Maybe<Character>>>;
  followers: Maybe<Array<Maybe<User>>>;
  following: Maybe<Array<Maybe<User>>>;
  likes: Maybe<Array<Maybe<User>>>;
  media: Maybe<Array<Maybe<Media>>>;
  mediaList: Maybe<Array<Maybe<MediaList>>>;
  mediaSubmissions: Maybe<Array<Maybe<MediaSubmission>>>;
  mediaTrends: Maybe<Array<Maybe<MediaTrend>>>;
  modActions: Maybe<Array<Maybe<ModAction>>>;
  notifications: Maybe<Array<Maybe<NotificationUnion>>>;
  pageInfo: Maybe<PageInfo>;
  recommendations: Maybe<Array<Maybe<Recommendation>>>;
  reports: Maybe<Array<Maybe<Report>>>;
  reviews: Maybe<Array<Maybe<Review>>>;
  revisionHistory: Maybe<Array<Maybe<RevisionHistory>>>;
  staff: Maybe<Array<Maybe<Staff>>>;
  staffSubmissions: Maybe<Array<Maybe<StaffSubmission>>>;
  studios: Maybe<Array<Maybe<Studio>>>;
  threadComments: Maybe<Array<Maybe<ThreadComment>>>;
  threads: Maybe<Array<Maybe<Thread>>>;
  userBlockSearch: Maybe<Array<Maybe<User>>>;
  users: Maybe<Array<Maybe<User>>>;
};

export type InternalPageactivitiesArgs = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_greater?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  hasReplies?: InputMaybe<Scalars['Boolean']['input']>;
  hasRepliesOrTypeText?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId?: InputMaybe<Scalars['Int']['input']>;
  messengerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId_not?: InputMaybe<Scalars['Int']['input']>;
  messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<ActivitySort>>>;
  type?: InputMaybe<ActivityType>;
  type_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  type_not?: InputMaybe<ActivityType>;
  type_not_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userId_not?: InputMaybe<Scalars['Int']['input']>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type InternalPageactivityRepliesArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type InternalPageairingSchedulesArgs = {
  airingAt?: InputMaybe<Scalars['Int']['input']>;
  airingAt_greater?: InputMaybe<Scalars['Int']['input']>;
  airingAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  episode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<AiringSort>>>;
};

export type InternalPagecharacterSubmissionsArgs = {
  assigneeId?: InputMaybe<Scalars['Int']['input']>;
  characterId?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
  status?: InputMaybe<SubmissionStatus>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type InternalPagecharactersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};

export type InternalPagefollowersArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars['Int']['input'];
};

export type InternalPagefollowingArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars['Int']['input'];
};

export type InternalPagelikesArgs = {
  likeableId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<LikeableType>;
};

export type InternalPagemediaArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  chapters?: InputMaybe<Scalars['Int']['input']>;
  chapters_greater?: InputMaybe<Scalars['Int']['input']>;
  chapters_lesser?: InputMaybe<Scalars['Int']['input']>;
  countryOfOrigin?: InputMaybe<Scalars['CountryCode']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  duration_greater?: InputMaybe<Scalars['Int']['input']>;
  duration_lesser?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_like?: InputMaybe<Scalars['String']['input']>;
  episodes?: InputMaybe<Scalars['Int']['input']>;
  episodes_greater?: InputMaybe<Scalars['Int']['input']>;
  episodes_lesser?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<MediaFormat>;
  format_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  format_not?: InputMaybe<MediaFormat>;
  format_not_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  genre?: InputMaybe<Scalars['String']['input']>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  idMal?: InputMaybe<Scalars['Int']['input']>;
  idMal_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  idMal_not?: InputMaybe<Scalars['Int']['input']>;
  idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isAdult?: InputMaybe<Scalars['Boolean']['input']>;
  isLicensed?: InputMaybe<Scalars['Boolean']['input']>;
  licensedBy?: InputMaybe<Scalars['String']['input']>;
  licensedById?: InputMaybe<Scalars['Int']['input']>;
  licensedById_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minimumTagRank?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<MediaSeason>;
  seasonYear?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  source?: InputMaybe<MediaSource>;
  source_in?: InputMaybe<Array<InputMaybe<MediaSource>>>;
  startDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  status_not?: InputMaybe<MediaStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagCategory?: InputMaybe<Scalars['String']['input']>;
  tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagCategory_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<MediaType>;
  volumes?: InputMaybe<Scalars['Int']['input']>;
  volumes_greater?: InputMaybe<Scalars['Int']['input']>;
  volumes_lesser?: InputMaybe<Scalars['Int']['input']>;
};

export type InternalPagemediaListArgs = {
  compareWithAuthList?: InputMaybe<Scalars['Boolean']['input']>;
  completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_like?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  notes_like?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
  startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  status_not?: InputMaybe<MediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type InternalPagemediaSubmissionsArgs = {
  assigneeId?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
  status?: InputMaybe<SubmissionStatus>;
  submissionId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type InternalPagemediaTrendsArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_greater?: InputMaybe<Scalars['Int']['input']>;
  date_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  releasing?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
  trending?: InputMaybe<Scalars['Int']['input']>;
  trending_greater?: InputMaybe<Scalars['Int']['input']>;
  trending_lesser?: InputMaybe<Scalars['Int']['input']>;
  trending_not?: InputMaybe<Scalars['Int']['input']>;
};

export type InternalPagemodActionsArgs = {
  modId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type InternalPagenotificationsArgs = {
  resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<NotificationType>;
  type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
};

export type InternalPagerecommendationsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  rating_greater?: InputMaybe<Scalars['Int']['input']>;
  rating_lesser?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type InternalPagereportsArgs = {
  reportedId?: InputMaybe<Scalars['Int']['input']>;
  reporterId?: InputMaybe<Scalars['Int']['input']>;
};

export type InternalPagereviewsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type InternalPagerevisionHistoryArgs = {
  characterId?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  studioId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type InternalPagestaffArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

export type InternalPagestaffSubmissionsArgs = {
  assigneeId?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<SubmissionStatus>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type InternalPagestudiosArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};

export type InternalPagethreadCommentsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type InternalPagethreadsArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaCategoryId?: InputMaybe<Scalars['Int']['input']>;
  replyUserId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ThreadSort>>>;
  subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type InternalPageuserBlockSearchArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type InternalPageusersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type LikeableType = 'ACTIVITY' | 'ACTIVITY_REPLY' | 'THREAD' | 'THREAD_COMMENT';

export type LikeableUnion = ActivityReply | ListActivity | MessageActivity | TextActivity | Thread | ThreadComment;

export type ListActivity = {
  __typename: 'ListActivity';
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isLiked: Maybe<Scalars['Boolean']['output']>;
  isLocked: Maybe<Scalars['Boolean']['output']>;
  isPinned: Maybe<Scalars['Boolean']['output']>;
  isSubscribed: Maybe<Scalars['Boolean']['output']>;
  likeCount: Scalars['Int']['output'];
  likes: Maybe<Array<Maybe<User>>>;
  media: Maybe<Media>;
  progress: Maybe<Scalars['String']['output']>;
  replies: Maybe<Array<Maybe<ActivityReply>>>;
  replyCount: Scalars['Int']['output'];
  siteUrl: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  type: Maybe<ActivityType>;
  user: Maybe<User>;
  userId: Maybe<Scalars['Int']['output']>;
};

export type ListActivityOption = {
  __typename: 'ListActivityOption';
  disabled: Maybe<Scalars['Boolean']['output']>;
  type: Maybe<MediaListStatus>;
};

export type ListActivityOptionInput = {
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<MediaListStatus>;
};

export type ListScoreStats = {
  __typename: 'ListScoreStats';
  meanScore: Maybe<Scalars['Int']['output']>;
  standardDeviation: Maybe<Scalars['Int']['output']>;
};

export type Media = {
  __typename: 'Media';
  airingSchedule: Maybe<AiringScheduleConnection>;
  autoCreateForumThread: Maybe<Scalars['Boolean']['output']>;
  averageScore: Maybe<Scalars['Int']['output']>;
  bannerImage: Maybe<Scalars['String']['output']>;
  chapters: Maybe<Scalars['Int']['output']>;
  characters: Maybe<CharacterConnection>;
  countryOfOrigin: Maybe<Scalars['CountryCode']['output']>;
  coverImage: Maybe<MediaCoverImage>;
  description: Maybe<Scalars['String']['output']>;
  duration: Maybe<Scalars['Int']['output']>;
  endDate: Maybe<FuzzyDate>;
  episodes: Maybe<Scalars['Int']['output']>;
  externalLinks: Maybe<Array<Maybe<MediaExternalLink>>>;
  favourites: Maybe<Scalars['Int']['output']>;
  format: Maybe<MediaFormat>;
  genres: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hashtag: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  idMal: Maybe<Scalars['Int']['output']>;
  isAdult: Maybe<Scalars['Boolean']['output']>;
  isFavourite: Scalars['Boolean']['output'];
  isFavouriteBlocked: Scalars['Boolean']['output'];
  isLicensed: Maybe<Scalars['Boolean']['output']>;
  isLocked: Maybe<Scalars['Boolean']['output']>;
  isRecommendationBlocked: Maybe<Scalars['Boolean']['output']>;
  isReviewBlocked: Maybe<Scalars['Boolean']['output']>;
  meanScore: Maybe<Scalars['Int']['output']>;
  mediaListEntry: Maybe<MediaList>;
  modNotes: Maybe<Scalars['String']['output']>;
  nextAiringEpisode: Maybe<AiringSchedule>;
  popularity: Maybe<Scalars['Int']['output']>;
  rankings: Maybe<Array<Maybe<MediaRank>>>;
  recommendations: Maybe<RecommendationConnection>;
  relations: Maybe<MediaConnection>;
  reviews: Maybe<ReviewConnection>;
  season: Maybe<MediaSeason>;
  seasonInt: Maybe<Scalars['Int']['output']>;
  seasonYear: Maybe<Scalars['Int']['output']>;
  siteUrl: Maybe<Scalars['String']['output']>;
  source: Maybe<MediaSource>;
  staff: Maybe<StaffConnection>;
  startDate: Maybe<FuzzyDate>;
  stats: Maybe<MediaStats>;
  status: Maybe<MediaStatus>;
  streamingEpisodes: Maybe<Array<Maybe<MediaStreamingEpisode>>>;
  studios: Maybe<StudioConnection>;
  synonyms: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tags: Maybe<Array<Maybe<MediaTag>>>;
  title: Maybe<MediaTitle>;
  trailer: Maybe<MediaTrailer>;
  trending: Maybe<Scalars['Int']['output']>;
  trends: Maybe<MediaTrendConnection>;
  type: Maybe<MediaType>;
  updatedAt: Maybe<Scalars['Int']['output']>;
  volumes: Maybe<Scalars['Int']['output']>;
};

export type MediaairingScheduleArgs = {
  notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type MediacharactersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<CharacterRole>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};

export type MediadescriptionArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MediarecommendationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
};

export type MediareviewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
};

export type MediasourceArgs = {
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type MediastaffArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

export type MediastatusArgs = {
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type MediastudiosArgs = {
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};

export type MediatrendsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  releasing?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
};

export type MediaCharacter = {
  __typename: 'MediaCharacter';
  character: Maybe<Character>;
  characterName: Maybe<Scalars['String']['output']>;
  dubGroup: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  role: Maybe<CharacterRole>;
  roleNotes: Maybe<Scalars['String']['output']>;
  voiceActor: Maybe<Staff>;
};

export type MediaConnection = {
  __typename: 'MediaConnection';
  edges: Maybe<Array<Maybe<MediaEdge>>>;
  nodes: Maybe<Array<Maybe<Media>>>;
  pageInfo: Maybe<PageInfo>;
};

export type MediaCoverImage = {
  __typename: 'MediaCoverImage';
  color: Maybe<Scalars['String']['output']>;
  extraLarge: Maybe<Scalars['String']['output']>;
  large: Maybe<Scalars['String']['output']>;
  medium: Maybe<Scalars['String']['output']>;
};

export type MediaDataChangeNotification = {
  __typename: 'MediaDataChangeNotification';
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  media: Maybe<Media>;
  mediaId: Scalars['Int']['output'];
  reason: Maybe<Scalars['String']['output']>;
  type: Maybe<NotificationType>;
};

export type MediaDeletionNotification = {
  __typename: 'MediaDeletionNotification';
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  deletedMediaTitle: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  reason: Maybe<Scalars['String']['output']>;
  type: Maybe<NotificationType>;
};

export type MediaEdge = {
  __typename: 'MediaEdge';
  characterName: Maybe<Scalars['String']['output']>;
  characterRole: Maybe<CharacterRole>;
  characters: Maybe<Array<Maybe<Character>>>;
  dubGroup: Maybe<Scalars['String']['output']>;
  favouriteOrder: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  isMainStudio: Scalars['Boolean']['output'];
  node: Maybe<Media>;
  relationType: Maybe<MediaRelation>;
  roleNotes: Maybe<Scalars['String']['output']>;
  staffRole: Maybe<Scalars['String']['output']>;
  voiceActorRoles: Maybe<Array<Maybe<StaffRoleType>>>;
  voiceActors: Maybe<Array<Maybe<Staff>>>;
};

export type MediaEdgerelationTypeArgs = {
  version?: InputMaybe<Scalars['Int']['input']>;
};

export type MediaEdgevoiceActorRolesArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

export type MediaEdgevoiceActorsArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

export type MediaExternalLink = {
  __typename: 'MediaExternalLink';
  color: Maybe<Scalars['String']['output']>;
  icon: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isDisabled: Maybe<Scalars['Boolean']['output']>;
  language: Maybe<Scalars['String']['output']>;
  notes: Maybe<Scalars['String']['output']>;
  site: Scalars['String']['output'];
  siteId: Maybe<Scalars['Int']['output']>;
  type: Maybe<ExternalLinkType>;
  url: Maybe<Scalars['String']['output']>;
};

export type MediaExternalLinkInput = {
  id: Scalars['Int']['input'];
  site: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type MediaFormat =
  | 'MANGA'
  | 'MOVIE'
  | 'MUSIC'
  | 'NOVEL'
  | 'ONA'
  | 'ONE_SHOT'
  | 'OVA'
  | 'SPECIAL'
  | 'TV'
  | 'TV_SHORT';

export type MediaList = {
  __typename: 'MediaList';
  advancedScores: Maybe<Scalars['Json']['output']>;
  completedAt: Maybe<FuzzyDate>;
  createdAt: Maybe<Scalars['Int']['output']>;
  customLists: Maybe<Scalars['Json']['output']>;
  hiddenFromStatusLists: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  media: Maybe<Media>;
  mediaId: Scalars['Int']['output'];
  notes: Maybe<Scalars['String']['output']>;
  priority: Maybe<Scalars['Int']['output']>;
  private: Maybe<Scalars['Boolean']['output']>;
  progress: Maybe<Scalars['Int']['output']>;
  progressVolumes: Maybe<Scalars['Int']['output']>;
  repeat: Maybe<Scalars['Int']['output']>;
  score: Maybe<Scalars['Float']['output']>;
  startedAt: Maybe<FuzzyDate>;
  status: Maybe<MediaListStatus>;
  updatedAt: Maybe<Scalars['Int']['output']>;
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type MediaListcustomListsArgs = {
  asArray?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MediaListscoreArgs = {
  format?: InputMaybe<ScoreFormat>;
};

export type MediaListCollection = {
  __typename: 'MediaListCollection';
  customLists: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>;
  hasNextChunk: Maybe<Scalars['Boolean']['output']>;
  lists: Maybe<Array<Maybe<MediaListGroup>>>;
  statusLists: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>;
  user: Maybe<User>;
};

export type MediaListCollectioncustomListsArgs = {
  asArray?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MediaListCollectionstatusListsArgs = {
  asArray?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MediaListGroup = {
  __typename: 'MediaListGroup';
  entries: Maybe<Array<Maybe<MediaList>>>;
  isCustomList: Maybe<Scalars['Boolean']['output']>;
  isSplitCompletedList: Maybe<Scalars['Boolean']['output']>;
  name: Maybe<Scalars['String']['output']>;
  status: Maybe<MediaListStatus>;
};

export type MediaListOptions = {
  __typename: 'MediaListOptions';
  animeList: Maybe<MediaListTypeOptions>;
  mangaList: Maybe<MediaListTypeOptions>;
  rowOrder: Maybe<Scalars['String']['output']>;
  scoreFormat: Maybe<ScoreFormat>;
  sharedTheme: Maybe<Scalars['Json']['output']>;
  sharedThemeEnabled: Maybe<Scalars['Boolean']['output']>;
  useLegacyLists: Maybe<Scalars['Boolean']['output']>;
};

export type MediaListOptionsInput = {
  advancedScoring?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  advancedScoringEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  customLists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionOrder?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  splitCompletedSectionByFormat?: InputMaybe<Scalars['Boolean']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type MediaListSort =
  | 'ADDED_TIME'
  | 'ADDED_TIME_DESC'
  | 'FINISHED_ON'
  | 'FINISHED_ON_DESC'
  | 'MEDIA_ID'
  | 'MEDIA_ID_DESC'
  | 'MEDIA_POPULARITY'
  | 'MEDIA_POPULARITY_DESC'
  | 'MEDIA_TITLE_ENGLISH'
  | 'MEDIA_TITLE_ENGLISH_DESC'
  | 'MEDIA_TITLE_NATIVE'
  | 'MEDIA_TITLE_NATIVE_DESC'
  | 'MEDIA_TITLE_ROMAJI'
  | 'MEDIA_TITLE_ROMAJI_DESC'
  | 'PRIORITY'
  | 'PRIORITY_DESC'
  | 'PROGRESS'
  | 'PROGRESS_DESC'
  | 'PROGRESS_VOLUMES'
  | 'PROGRESS_VOLUMES_DESC'
  | 'REPEAT'
  | 'REPEAT_DESC'
  | 'SCORE'
  | 'SCORE_DESC'
  | 'STARTED_ON'
  | 'STARTED_ON_DESC'
  | 'STATUS'
  | 'STATUS_DESC'
  | 'UPDATED_TIME'
  | 'UPDATED_TIME_DESC';

export type MediaListStatus = 'COMPLETED' | 'CURRENT' | 'DROPPED' | 'PAUSED' | 'PLANNING' | 'REPEATING';

export type MediaListTypeOptions = {
  __typename: 'MediaListTypeOptions';
  advancedScoring: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  advancedScoringEnabled: Maybe<Scalars['Boolean']['output']>;
  customLists: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sectionOrder: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  splitCompletedSectionByFormat: Maybe<Scalars['Boolean']['output']>;
  theme: Maybe<Scalars['Json']['output']>;
};

export type MediaMergeNotification = {
  __typename: 'MediaMergeNotification';
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  deletedMediaTitles: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['Int']['output'];
  media: Maybe<Media>;
  mediaId: Scalars['Int']['output'];
  reason: Maybe<Scalars['String']['output']>;
  type: Maybe<NotificationType>;
};

export type MediaRank = {
  __typename: 'MediaRank';
  allTime: Maybe<Scalars['Boolean']['output']>;
  context: Scalars['String']['output'];
  format: MediaFormat;
  id: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  season: Maybe<MediaSeason>;
  type: MediaRankType;
  year: Maybe<Scalars['Int']['output']>;
};

export type MediaRankType = 'POPULAR' | 'RATED';

export type MediaRelation =
  | 'ADAPTATION'
  | 'ALTERNATIVE'
  | 'CHARACTER'
  | 'COMPILATION'
  | 'CONTAINS'
  | 'OTHER'
  | 'PARENT'
  | 'PREQUEL'
  | 'SEQUEL'
  | 'SIDE_STORY'
  | 'SOURCE'
  | 'SPIN_OFF'
  | 'SUMMARY';

export type MediaSeason = 'FALL' | 'SPRING' | 'SUMMER' | 'WINTER';

export type MediaSort =
  | 'CHAPTERS'
  | 'CHAPTERS_DESC'
  | 'DURATION'
  | 'DURATION_DESC'
  | 'END_DATE'
  | 'END_DATE_DESC'
  | 'EPISODES'
  | 'EPISODES_DESC'
  | 'FAVOURITES'
  | 'FAVOURITES_DESC'
  | 'FORMAT'
  | 'FORMAT_DESC'
  | 'ID'
  | 'ID_DESC'
  | 'POPULARITY'
  | 'POPULARITY_DESC'
  | 'SCORE'
  | 'SCORE_DESC'
  | 'SEARCH_MATCH'
  | 'START_DATE'
  | 'START_DATE_DESC'
  | 'STATUS'
  | 'STATUS_DESC'
  | 'TITLE_ENGLISH'
  | 'TITLE_ENGLISH_DESC'
  | 'TITLE_NATIVE'
  | 'TITLE_NATIVE_DESC'
  | 'TITLE_ROMAJI'
  | 'TITLE_ROMAJI_DESC'
  | 'TRENDING'
  | 'TRENDING_DESC'
  | 'TYPE'
  | 'TYPE_DESC'
  | 'UPDATED_AT'
  | 'UPDATED_AT_DESC'
  | 'VOLUMES'
  | 'VOLUMES_DESC';

export type MediaSource =
  | 'ANIME'
  | 'COMIC'
  | 'DOUJINSHI'
  | 'GAME'
  | 'LIGHT_NOVEL'
  | 'LIVE_ACTION'
  | 'MANGA'
  | 'MULTIMEDIA_PROJECT'
  | 'NOVEL'
  | 'ORIGINAL'
  | 'OTHER'
  | 'PICTURE_BOOK'
  | 'VIDEO_GAME'
  | 'VISUAL_NOVEL'
  | 'WEB_NOVEL';

export type MediaStats = {
  __typename: 'MediaStats';
  airingProgression: Maybe<Array<Maybe<AiringProgression>>>;
  scoreDistribution: Maybe<Array<Maybe<ScoreDistribution>>>;
  statusDistribution: Maybe<Array<Maybe<StatusDistribution>>>;
};

export type MediaStatus = 'CANCELLED' | 'FINISHED' | 'HIATUS' | 'NOT_YET_RELEASED' | 'RELEASING';

export type MediaStreamingEpisode = {
  __typename: 'MediaStreamingEpisode';
  site: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type MediaSubmission = {
  __typename: 'MediaSubmission';
  assignee: Maybe<User>;
  changes: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  characters: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  createdAt: Maybe<Scalars['Int']['output']>;
  externalLinks: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  id: Scalars['Int']['output'];
  locked: Maybe<Scalars['Boolean']['output']>;
  media: Maybe<Media>;
  notes: Maybe<Scalars['String']['output']>;
  relations: Maybe<Array<Maybe<MediaEdge>>>;
  source: Maybe<Scalars['String']['output']>;
  staff: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  status: Maybe<SubmissionStatus>;
  studios: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  submission: Maybe<Media>;
  submitter: Maybe<User>;
  submitterStats: Maybe<Scalars['Json']['output']>;
};

export type MediaSubmissionComparison = {
  __typename: 'MediaSubmissionComparison';
  character: Maybe<MediaCharacter>;
  externalLink: Maybe<MediaExternalLink>;
  staff: Maybe<StaffEdge>;
  studio: Maybe<StudioEdge>;
  submission: Maybe<MediaSubmissionEdge>;
};

export type MediaSubmissionEdge = {
  __typename: 'MediaSubmissionEdge';
  character: Maybe<Character>;
  characterName: Maybe<Scalars['String']['output']>;
  characterRole: Maybe<CharacterRole>;
  characterSubmission: Maybe<Character>;
  dubGroup: Maybe<Scalars['String']['output']>;
  externalLink: Maybe<MediaExternalLink>;
  id: Maybe<Scalars['Int']['output']>;
  isMain: Maybe<Scalars['Boolean']['output']>;
  media: Maybe<Media>;
  roleNotes: Maybe<Scalars['String']['output']>;
  staff: Maybe<Staff>;
  staffRole: Maybe<Scalars['String']['output']>;
  staffSubmission: Maybe<Staff>;
  studio: Maybe<Studio>;
  voiceActor: Maybe<Staff>;
  voiceActorSubmission: Maybe<Staff>;
};

export type MediaTag = {
  __typename: 'MediaTag';
  category: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isAdult: Maybe<Scalars['Boolean']['output']>;
  isGeneralSpoiler: Maybe<Scalars['Boolean']['output']>;
  isMediaSpoiler: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  rank: Maybe<Scalars['Int']['output']>;
  userId: Maybe<Scalars['Int']['output']>;
};

export type MediaTitle = {
  __typename: 'MediaTitle';
  english: Maybe<Scalars['String']['output']>;
  native: Maybe<Scalars['String']['output']>;
  romaji: Maybe<Scalars['String']['output']>;
  userPreferred: Maybe<Scalars['String']['output']>;
};

export type MediaTitleenglishArgs = {
  stylised?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MediaTitlenativeArgs = {
  stylised?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MediaTitleromajiArgs = {
  stylised?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MediaTitleInput = {
  english?: InputMaybe<Scalars['String']['input']>;
  native?: InputMaybe<Scalars['String']['input']>;
  romaji?: InputMaybe<Scalars['String']['input']>;
};

export type MediaTrailer = {
  __typename: 'MediaTrailer';
  id: Maybe<Scalars['String']['output']>;
  site: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
};

export type MediaTrend = {
  __typename: 'MediaTrend';
  averageScore: Maybe<Scalars['Int']['output']>;
  date: Scalars['Int']['output'];
  episode: Maybe<Scalars['Int']['output']>;
  inProgress: Maybe<Scalars['Int']['output']>;
  media: Maybe<Media>;
  mediaId: Scalars['Int']['output'];
  popularity: Maybe<Scalars['Int']['output']>;
  releasing: Scalars['Boolean']['output'];
  trending: Scalars['Int']['output'];
};

export type MediaTrendConnection = {
  __typename: 'MediaTrendConnection';
  edges: Maybe<Array<Maybe<MediaTrendEdge>>>;
  nodes: Maybe<Array<Maybe<MediaTrend>>>;
  pageInfo: Maybe<PageInfo>;
};

export type MediaTrendEdge = {
  __typename: 'MediaTrendEdge';
  node: Maybe<MediaTrend>;
};

export type MediaTrendSort =
  | 'DATE'
  | 'DATE_DESC'
  | 'EPISODE'
  | 'EPISODE_DESC'
  | 'ID'
  | 'ID_DESC'
  | 'MEDIA_ID'
  | 'MEDIA_ID_DESC'
  | 'POPULARITY'
  | 'POPULARITY_DESC'
  | 'SCORE'
  | 'SCORE_DESC'
  | 'TRENDING'
  | 'TRENDING_DESC';

export type MediaType = 'ANIME' | 'MANGA';

export type MessageActivity = {
  __typename: 'MessageActivity';
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isLiked: Maybe<Scalars['Boolean']['output']>;
  isLocked: Maybe<Scalars['Boolean']['output']>;
  isPrivate: Maybe<Scalars['Boolean']['output']>;
  isSubscribed: Maybe<Scalars['Boolean']['output']>;
  likeCount: Scalars['Int']['output'];
  likes: Maybe<Array<Maybe<User>>>;
  message: Maybe<Scalars['String']['output']>;
  messenger: Maybe<User>;
  messengerId: Maybe<Scalars['Int']['output']>;
  recipient: Maybe<User>;
  recipientId: Maybe<Scalars['Int']['output']>;
  replies: Maybe<Array<Maybe<ActivityReply>>>;
  replyCount: Scalars['Int']['output'];
  siteUrl: Maybe<Scalars['String']['output']>;
  type: Maybe<ActivityType>;
};

export type MessageActivitymessageArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModAction = {
  __typename: 'ModAction';
  createdAt: Scalars['Int']['output'];
  data: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  mod: Maybe<User>;
  objectId: Maybe<Scalars['Int']['output']>;
  objectType: Maybe<Scalars['String']['output']>;
  type: Maybe<ModActionType>;
  user: Maybe<User>;
};

export type ModActionType = 'ANON' | 'BAN' | 'DELETE' | 'EDIT' | 'EXPIRE' | 'NOTE' | 'REPORT' | 'RESET';

export type ModRole =
  | 'ADMIN'
  | 'ANIME_DATA'
  | 'CHARACTER_DATA'
  | 'COMMUNITY'
  | 'DEVELOPER'
  | 'DISCORD_COMMUNITY'
  | 'LEAD_ANIME_DATA'
  | 'LEAD_COMMUNITY'
  | 'LEAD_DEVELOPER'
  | 'LEAD_MANGA_DATA'
  | 'LEAD_SOCIAL_MEDIA'
  | 'MANGA_DATA'
  | 'RETIRED'
  | 'SOCIAL_MEDIA'
  | 'STAFF_DATA';

export type Mutation = {
  __typename: 'Mutation';
  DeleteActivity: Maybe<Deleted>;
  DeleteActivityReply: Maybe<Deleted>;
  DeleteCustomList: Maybe<Deleted>;
  DeleteMediaListEntry: Maybe<Deleted>;
  DeleteReview: Maybe<Deleted>;
  DeleteThread: Maybe<Deleted>;
  DeleteThreadComment: Maybe<Deleted>;
  RateReview: Maybe<Review>;
  SaveActivityReply: Maybe<ActivityReply>;
  SaveListActivity: Maybe<ListActivity>;
  SaveMediaListEntry: Maybe<MediaList>;
  SaveMessageActivity: Maybe<MessageActivity>;
  SaveRecommendation: Maybe<Recommendation>;
  SaveReview: Maybe<Review>;
  SaveTextActivity: Maybe<TextActivity>;
  SaveThread: Maybe<Thread>;
  SaveThreadComment: Maybe<ThreadComment>;
  ToggleActivityPin: Maybe<ActivityUnion>;
  ToggleActivitySubscription: Maybe<ActivityUnion>;
  ToggleFavourite: Maybe<Favourites>;
  ToggleFollow: Maybe<User>;
  ToggleLike: Maybe<Array<Maybe<User>>>;
  ToggleLikeV2: Maybe<LikeableUnion>;
  ToggleThreadSubscription: Maybe<Thread>;
  UpdateAniChartHighlights: Maybe<Scalars['Json']['output']>;
  UpdateAniChartSettings: Maybe<Scalars['Json']['output']>;
  UpdateFavouriteOrder: Maybe<Favourites>;
  UpdateMediaListEntries: Maybe<Array<Maybe<MediaList>>>;
  UpdateUser: Maybe<User>;
};

export type MutationDeleteActivityArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationDeleteActivityReplyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationDeleteCustomListArgs = {
  customList?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<MediaType>;
};

export type MutationDeleteMediaListEntryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationDeleteReviewArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationDeleteThreadArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationDeleteThreadCommentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationRateReviewArgs = {
  rating?: InputMaybe<ReviewRating>;
  reviewId?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationSaveActivityReplyArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  asMod?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSaveListActivityArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationSaveMediaListEntryArgs = {
  advancedScores?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  completedAt?: InputMaybe<FuzzyDateInput>;
  customLists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hiddenFromStatusLists?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  progress?: InputMaybe<Scalars['Int']['input']>;
  progressVolumes?: InputMaybe<Scalars['Int']['input']>;
  repeat?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  scoreRaw?: InputMaybe<Scalars['Int']['input']>;
  startedAt?: InputMaybe<FuzzyDateInput>;
  status?: InputMaybe<MediaListStatus>;
};

export type MutationSaveMessageActivityArgs = {
  asMod?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  recipientId?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationSaveRecommendationArgs = {
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<RecommendationRating>;
};

export type MutationSaveReviewArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSaveTextActivityArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSaveThreadArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  mediaCategories?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sticky?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSaveThreadCommentArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  parentCommentId?: InputMaybe<Scalars['Int']['input']>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationToggleActivityPinArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  pinned?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationToggleActivitySubscriptionArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  subscribe?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationToggleFavouriteArgs = {
  animeId?: InputMaybe<Scalars['Int']['input']>;
  characterId?: InputMaybe<Scalars['Int']['input']>;
  mangaId?: InputMaybe<Scalars['Int']['input']>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  studioId?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationToggleFollowArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationToggleLikeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<LikeableType>;
};

export type MutationToggleLikeV2Args = {
  id?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<LikeableType>;
};

export type MutationToggleThreadSubscriptionArgs = {
  subscribe?: InputMaybe<Scalars['Boolean']['input']>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationUpdateAniChartHighlightsArgs = {
  highlights?: InputMaybe<Array<InputMaybe<AniChartHighlightInput>>>;
};

export type MutationUpdateAniChartSettingsArgs = {
  outgoingLinkProvider?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  titleLanguage?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateFavouriteOrderArgs = {
  animeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  animeOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  characterIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  characterOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mangaIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mangaOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  staffIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  staffOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  studioIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  studioOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MutationUpdateMediaListEntriesArgs = {
  advancedScores?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  completedAt?: InputMaybe<FuzzyDateInput>;
  hiddenFromStatusLists?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  progress?: InputMaybe<Scalars['Int']['input']>;
  progressVolumes?: InputMaybe<Scalars['Int']['input']>;
  repeat?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  scoreRaw?: InputMaybe<Scalars['Int']['input']>;
  startedAt?: InputMaybe<FuzzyDateInput>;
  status?: InputMaybe<MediaListStatus>;
};

export type MutationUpdateUserArgs = {
  about?: InputMaybe<Scalars['String']['input']>;
  activityMergeTime?: InputMaybe<Scalars['Int']['input']>;
  airingNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  animeListOptions?: InputMaybe<MediaListOptionsInput>;
  disabledListActivity?: InputMaybe<Array<InputMaybe<ListActivityOptionInput>>>;
  displayAdultContent?: InputMaybe<Scalars['Boolean']['input']>;
  donatorBadge?: InputMaybe<Scalars['String']['input']>;
  mangaListOptions?: InputMaybe<MediaListOptionsInput>;
  notificationOptions?: InputMaybe<Array<InputMaybe<NotificationOptionInput>>>;
  profileColor?: InputMaybe<Scalars['String']['input']>;
  restrictMessagesToFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  rowOrder?: InputMaybe<Scalars['String']['input']>;
  scoreFormat?: InputMaybe<ScoreFormat>;
  staffNameLanguage?: InputMaybe<UserStaffNameLanguage>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  titleLanguage?: InputMaybe<UserTitleLanguage>;
};

export type NotificationOption = {
  __typename: 'NotificationOption';
  enabled: Maybe<Scalars['Boolean']['output']>;
  type: Maybe<NotificationType>;
};

export type NotificationOptionInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<NotificationType>;
};

export type NotificationType =
  | 'ACTIVITY_LIKE'
  | 'ACTIVITY_MENTION'
  | 'ACTIVITY_MESSAGE'
  | 'ACTIVITY_REPLY'
  | 'ACTIVITY_REPLY_LIKE'
  | 'ACTIVITY_REPLY_SUBSCRIBED'
  | 'AIRING'
  | 'FOLLOWING'
  | 'MEDIA_DATA_CHANGE'
  | 'MEDIA_DELETION'
  | 'MEDIA_MERGE'
  | 'RELATED_MEDIA_ADDITION'
  | 'THREAD_COMMENT_LIKE'
  | 'THREAD_COMMENT_MENTION'
  | 'THREAD_COMMENT_REPLY'
  | 'THREAD_LIKE'
  | 'THREAD_SUBSCRIBED';

export type NotificationUnion =
  | ActivityLikeNotification
  | ActivityMentionNotification
  | ActivityMessageNotification
  | ActivityReplyLikeNotification
  | ActivityReplyNotification
  | ActivityReplySubscribedNotification
  | AiringNotification
  | FollowingNotification
  | MediaDataChangeNotification
  | MediaDeletionNotification
  | MediaMergeNotification
  | RelatedMediaAdditionNotification
  | ThreadCommentLikeNotification
  | ThreadCommentMentionNotification
  | ThreadCommentReplyNotification
  | ThreadCommentSubscribedNotification
  | ThreadLikeNotification;

export type Page = {
  __typename: 'Page';
  activities: Maybe<Array<Maybe<ActivityUnion>>>;
  activityReplies: Maybe<Array<Maybe<ActivityReply>>>;
  airingSchedules: Maybe<Array<Maybe<AiringSchedule>>>;
  characters: Maybe<Array<Maybe<Character>>>;
  followers: Maybe<Array<Maybe<User>>>;
  following: Maybe<Array<Maybe<User>>>;
  likes: Maybe<Array<Maybe<User>>>;
  media: Maybe<Array<Maybe<Media>>>;
  mediaList: Maybe<Array<Maybe<MediaList>>>;
  mediaTrends: Maybe<Array<Maybe<MediaTrend>>>;
  notifications: Maybe<Array<Maybe<NotificationUnion>>>;
  pageInfo: Maybe<PageInfo>;
  recommendations: Maybe<Array<Maybe<Recommendation>>>;
  reviews: Maybe<Array<Maybe<Review>>>;
  staff: Maybe<Array<Maybe<Staff>>>;
  studios: Maybe<Array<Maybe<Studio>>>;
  threadComments: Maybe<Array<Maybe<ThreadComment>>>;
  threads: Maybe<Array<Maybe<Thread>>>;
  users: Maybe<Array<Maybe<User>>>;
};

export type PageactivitiesArgs = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_greater?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  hasReplies?: InputMaybe<Scalars['Boolean']['input']>;
  hasRepliesOrTypeText?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId?: InputMaybe<Scalars['Int']['input']>;
  messengerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId_not?: InputMaybe<Scalars['Int']['input']>;
  messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<ActivitySort>>>;
  type?: InputMaybe<ActivityType>;
  type_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  type_not?: InputMaybe<ActivityType>;
  type_not_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userId_not?: InputMaybe<Scalars['Int']['input']>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type PageactivityRepliesArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type PageairingSchedulesArgs = {
  airingAt?: InputMaybe<Scalars['Int']['input']>;
  airingAt_greater?: InputMaybe<Scalars['Int']['input']>;
  airingAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  episode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<AiringSort>>>;
};

export type PagecharactersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};

export type PagefollowersArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars['Int']['input'];
};

export type PagefollowingArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars['Int']['input'];
};

export type PagelikesArgs = {
  likeableId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<LikeableType>;
};

export type PagemediaArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  chapters?: InputMaybe<Scalars['Int']['input']>;
  chapters_greater?: InputMaybe<Scalars['Int']['input']>;
  chapters_lesser?: InputMaybe<Scalars['Int']['input']>;
  countryOfOrigin?: InputMaybe<Scalars['CountryCode']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  duration_greater?: InputMaybe<Scalars['Int']['input']>;
  duration_lesser?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_like?: InputMaybe<Scalars['String']['input']>;
  episodes?: InputMaybe<Scalars['Int']['input']>;
  episodes_greater?: InputMaybe<Scalars['Int']['input']>;
  episodes_lesser?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<MediaFormat>;
  format_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  format_not?: InputMaybe<MediaFormat>;
  format_not_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  genre?: InputMaybe<Scalars['String']['input']>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  idMal?: InputMaybe<Scalars['Int']['input']>;
  idMal_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  idMal_not?: InputMaybe<Scalars['Int']['input']>;
  idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isAdult?: InputMaybe<Scalars['Boolean']['input']>;
  isLicensed?: InputMaybe<Scalars['Boolean']['input']>;
  licensedBy?: InputMaybe<Scalars['String']['input']>;
  licensedById?: InputMaybe<Scalars['Int']['input']>;
  licensedById_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minimumTagRank?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<MediaSeason>;
  seasonYear?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  source?: InputMaybe<MediaSource>;
  source_in?: InputMaybe<Array<InputMaybe<MediaSource>>>;
  startDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  status_not?: InputMaybe<MediaStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagCategory?: InputMaybe<Scalars['String']['input']>;
  tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagCategory_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<MediaType>;
  volumes?: InputMaybe<Scalars['Int']['input']>;
  volumes_greater?: InputMaybe<Scalars['Int']['input']>;
  volumes_lesser?: InputMaybe<Scalars['Int']['input']>;
};

export type PagemediaListArgs = {
  compareWithAuthList?: InputMaybe<Scalars['Boolean']['input']>;
  completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_like?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  notes_like?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
  startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  status_not?: InputMaybe<MediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type PagemediaTrendsArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_greater?: InputMaybe<Scalars['Int']['input']>;
  date_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  releasing?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
  trending?: InputMaybe<Scalars['Int']['input']>;
  trending_greater?: InputMaybe<Scalars['Int']['input']>;
  trending_lesser?: InputMaybe<Scalars['Int']['input']>;
  trending_not?: InputMaybe<Scalars['Int']['input']>;
};

export type PagenotificationsArgs = {
  resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<NotificationType>;
  type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
};

export type PagerecommendationsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  rating_greater?: InputMaybe<Scalars['Int']['input']>;
  rating_lesser?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type PagereviewsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type PagestaffArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

export type PagestudiosArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};

export type PagethreadCommentsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type PagethreadsArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaCategoryId?: InputMaybe<Scalars['Int']['input']>;
  replyUserId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ThreadSort>>>;
  subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type PageusersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type PageInfo = {
  __typename: 'PageInfo';
  currentPage: Maybe<Scalars['Int']['output']>;
  hasNextPage: Maybe<Scalars['Boolean']['output']>;
  lastPage: Maybe<Scalars['Int']['output']>;
  perPage: Maybe<Scalars['Int']['output']>;
  total: Maybe<Scalars['Int']['output']>;
};

export type ParsedMarkdown = {
  __typename: 'ParsedMarkdown';
  html: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename: 'Query';
  Activity: Maybe<ActivityUnion>;
  ActivityReply: Maybe<ActivityReply>;
  AiringSchedule: Maybe<AiringSchedule>;
  AniChartUser: Maybe<AniChartUser>;
  Character: Maybe<Character>;
  ExternalLinkSourceCollection: Maybe<Array<Maybe<MediaExternalLink>>>;
  Follower: Maybe<User>;
  Following: Maybe<User>;
  GenreCollection: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Like: Maybe<User>;
  Markdown: Maybe<ParsedMarkdown>;
  Media: Maybe<Media>;
  MediaList: Maybe<MediaList>;
  MediaListCollection: Maybe<MediaListCollection>;
  MediaTagCollection: Maybe<Array<Maybe<MediaTag>>>;
  MediaTrend: Maybe<MediaTrend>;
  Notification: Maybe<NotificationUnion>;
  Page: Maybe<Page>;
  Recommendation: Maybe<Recommendation>;
  Review: Maybe<Review>;
  SiteStatistics: Maybe<SiteStatistics>;
  Staff: Maybe<Staff>;
  Studio: Maybe<Studio>;
  Thread: Maybe<Thread>;
  ThreadComment: Maybe<Array<Maybe<ThreadComment>>>;
  User: Maybe<User>;
  Viewer: Maybe<User>;
};

export type QueryActivityArgs = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_greater?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  hasReplies?: InputMaybe<Scalars['Boolean']['input']>;
  hasRepliesOrTypeText?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId?: InputMaybe<Scalars['Int']['input']>;
  messengerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId_not?: InputMaybe<Scalars['Int']['input']>;
  messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<ActivitySort>>>;
  type?: InputMaybe<ActivityType>;
  type_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  type_not?: InputMaybe<ActivityType>;
  type_not_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userId_not?: InputMaybe<Scalars['Int']['input']>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type QueryActivityReplyArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryAiringScheduleArgs = {
  airingAt?: InputMaybe<Scalars['Int']['input']>;
  airingAt_greater?: InputMaybe<Scalars['Int']['input']>;
  airingAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  episode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<AiringSort>>>;
};

export type QueryCharacterArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};

export type QueryExternalLinkSourceCollectionArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<ExternalLinkMediaType>;
  type?: InputMaybe<ExternalLinkType>;
};

export type QueryFollowerArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars['Int']['input'];
};

export type QueryFollowingArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars['Int']['input'];
};

export type QueryLikeArgs = {
  likeableId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<LikeableType>;
};

export type QueryMarkdownArgs = {
  markdown: Scalars['String']['input'];
};

export type QueryMediaArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  chapters?: InputMaybe<Scalars['Int']['input']>;
  chapters_greater?: InputMaybe<Scalars['Int']['input']>;
  chapters_lesser?: InputMaybe<Scalars['Int']['input']>;
  countryOfOrigin?: InputMaybe<Scalars['CountryCode']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  duration_greater?: InputMaybe<Scalars['Int']['input']>;
  duration_lesser?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_like?: InputMaybe<Scalars['String']['input']>;
  episodes?: InputMaybe<Scalars['Int']['input']>;
  episodes_greater?: InputMaybe<Scalars['Int']['input']>;
  episodes_lesser?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<MediaFormat>;
  format_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  format_not?: InputMaybe<MediaFormat>;
  format_not_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  genre?: InputMaybe<Scalars['String']['input']>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  idMal?: InputMaybe<Scalars['Int']['input']>;
  idMal_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  idMal_not?: InputMaybe<Scalars['Int']['input']>;
  idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isAdult?: InputMaybe<Scalars['Boolean']['input']>;
  isLicensed?: InputMaybe<Scalars['Boolean']['input']>;
  licensedBy?: InputMaybe<Scalars['String']['input']>;
  licensedById?: InputMaybe<Scalars['Int']['input']>;
  licensedById_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minimumTagRank?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<MediaSeason>;
  seasonYear?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  source?: InputMaybe<MediaSource>;
  source_in?: InputMaybe<Array<InputMaybe<MediaSource>>>;
  startDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  status_not?: InputMaybe<MediaStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagCategory?: InputMaybe<Scalars['String']['input']>;
  tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagCategory_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<MediaType>;
  volumes?: InputMaybe<Scalars['Int']['input']>;
  volumes_greater?: InputMaybe<Scalars['Int']['input']>;
  volumes_lesser?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryMediaListArgs = {
  compareWithAuthList?: InputMaybe<Scalars['Boolean']['input']>;
  completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_like?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  notes_like?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
  startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  status_not?: InputMaybe<MediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type QueryMediaListCollectionArgs = {
  chunk?: InputMaybe<Scalars['Int']['input']>;
  completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_like?: InputMaybe<Scalars['String']['input']>;
  forceSingleCompletedList?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  notes_like?: InputMaybe<Scalars['String']['input']>;
  perChunk?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
  startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  status_not?: InputMaybe<MediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type QueryMediaTagCollectionArgs = {
  status?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryMediaTrendArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_greater?: InputMaybe<Scalars['Int']['input']>;
  date_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  releasing?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
  trending?: InputMaybe<Scalars['Int']['input']>;
  trending_greater?: InputMaybe<Scalars['Int']['input']>;
  trending_lesser?: InputMaybe<Scalars['Int']['input']>;
  trending_not?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryNotificationArgs = {
  resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<NotificationType>;
  type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
};

export type QueryPageArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryRecommendationArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  rating_greater?: InputMaybe<Scalars['Int']['input']>;
  rating_lesser?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryReviewArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<MediaType>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryStaffArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

export type QueryStudioArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};

export type QueryThreadArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaCategoryId?: InputMaybe<Scalars['Int']['input']>;
  replyUserId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ThreadSort>>>;
  subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryThreadCommentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryUserArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type Recommendation = {
  __typename: 'Recommendation';
  id: Scalars['Int']['output'];
  media: Maybe<Media>;
  mediaRecommendation: Maybe<Media>;
  rating: Maybe<Scalars['Int']['output']>;
  user: Maybe<User>;
  userRating: Maybe<RecommendationRating>;
};

export type RecommendationConnection = {
  __typename: 'RecommendationConnection';
  edges: Maybe<Array<Maybe<RecommendationEdge>>>;
  nodes: Maybe<Array<Maybe<Recommendation>>>;
  pageInfo: Maybe<PageInfo>;
};

export type RecommendationEdge = {
  __typename: 'RecommendationEdge';
  node: Maybe<Recommendation>;
};

export type RecommendationRating = 'NO_RATING' | 'RATE_DOWN' | 'RATE_UP';

export type RecommendationSort = 'ID' | 'ID_DESC' | 'RATING' | 'RATING_DESC';

export type RelatedMediaAdditionNotification = {
  __typename: 'RelatedMediaAdditionNotification';
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  media: Maybe<Media>;
  mediaId: Scalars['Int']['output'];
  type: Maybe<NotificationType>;
};

export type Report = {
  __typename: 'Report';
  cleared: Maybe<Scalars['Boolean']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  reason: Maybe<Scalars['String']['output']>;
  reported: Maybe<User>;
  reporter: Maybe<User>;
};

export type Review = {
  __typename: 'Review';
  body: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  media: Maybe<Media>;
  mediaId: Scalars['Int']['output'];
  mediaType: Maybe<MediaType>;
  private: Maybe<Scalars['Boolean']['output']>;
  rating: Maybe<Scalars['Int']['output']>;
  ratingAmount: Maybe<Scalars['Int']['output']>;
  score: Maybe<Scalars['Int']['output']>;
  siteUrl: Maybe<Scalars['String']['output']>;
  summary: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Int']['output'];
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
  userRating: Maybe<ReviewRating>;
};

export type ReviewbodyArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewConnection = {
  __typename: 'ReviewConnection';
  edges: Maybe<Array<Maybe<ReviewEdge>>>;
  nodes: Maybe<Array<Maybe<Review>>>;
  pageInfo: Maybe<PageInfo>;
};

export type ReviewEdge = {
  __typename: 'ReviewEdge';
  node: Maybe<Review>;
};

export type ReviewRating = 'DOWN_VOTE' | 'NO_VOTE' | 'UP_VOTE';

export type ReviewSort =
  | 'CREATED_AT'
  | 'CREATED_AT_DESC'
  | 'ID'
  | 'ID_DESC'
  | 'RATING'
  | 'RATING_DESC'
  | 'SCORE'
  | 'SCORE_DESC'
  | 'UPDATED_AT'
  | 'UPDATED_AT_DESC';

export type RevisionHistory = {
  __typename: 'RevisionHistory';
  action: Maybe<RevisionHistoryAction>;
  changes: Maybe<Scalars['Json']['output']>;
  character: Maybe<Character>;
  createdAt: Maybe<Scalars['Int']['output']>;
  externalLink: Maybe<MediaExternalLink>;
  id: Scalars['Int']['output'];
  media: Maybe<Media>;
  staff: Maybe<Staff>;
  studio: Maybe<Studio>;
  user: Maybe<User>;
};

export type RevisionHistoryAction = 'CREATE' | 'EDIT';

export type ScoreDistribution = {
  __typename: 'ScoreDistribution';
  amount: Maybe<Scalars['Int']['output']>;
  score: Maybe<Scalars['Int']['output']>;
};

export type ScoreFormat = 'POINT_3' | 'POINT_5' | 'POINT_10' | 'POINT_10_DECIMAL' | 'POINT_100';

export type SiteStatistics = {
  __typename: 'SiteStatistics';
  anime: Maybe<SiteTrendConnection>;
  characters: Maybe<SiteTrendConnection>;
  manga: Maybe<SiteTrendConnection>;
  reviews: Maybe<SiteTrendConnection>;
  staff: Maybe<SiteTrendConnection>;
  studios: Maybe<SiteTrendConnection>;
  users: Maybe<SiteTrendConnection>;
};

export type SiteStatisticsanimeArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

export type SiteStatisticscharactersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

export type SiteStatisticsmangaArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

export type SiteStatisticsreviewsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

export type SiteStatisticsstaffArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

export type SiteStatisticsstudiosArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

export type SiteStatisticsusersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

export type SiteTrend = {
  __typename: 'SiteTrend';
  change: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
};

export type SiteTrendConnection = {
  __typename: 'SiteTrendConnection';
  edges: Maybe<Array<Maybe<SiteTrendEdge>>>;
  nodes: Maybe<Array<Maybe<SiteTrend>>>;
  pageInfo: Maybe<PageInfo>;
};

export type SiteTrendEdge = {
  __typename: 'SiteTrendEdge';
  node: Maybe<SiteTrend>;
};

export type SiteTrendSort = 'CHANGE' | 'CHANGE_DESC' | 'COUNT' | 'COUNT_DESC' | 'DATE' | 'DATE_DESC';

export type Staff = {
  __typename: 'Staff';
  age: Maybe<Scalars['Int']['output']>;
  bloodType: Maybe<Scalars['String']['output']>;
  characterMedia: Maybe<MediaConnection>;
  characters: Maybe<CharacterConnection>;
  dateOfBirth: Maybe<FuzzyDate>;
  dateOfDeath: Maybe<FuzzyDate>;
  description: Maybe<Scalars['String']['output']>;
  favourites: Maybe<Scalars['Int']['output']>;
  gender: Maybe<Scalars['String']['output']>;
  homeTown: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image: Maybe<StaffImage>;
  isFavourite: Scalars['Boolean']['output'];
  isFavouriteBlocked: Scalars['Boolean']['output'];
  language: Maybe<StaffLanguage>;
  languageV2: Maybe<Scalars['String']['output']>;
  modNotes: Maybe<Scalars['String']['output']>;
  name: Maybe<StaffName>;
  primaryOccupations: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  siteUrl: Maybe<Scalars['String']['output']>;
  staff: Maybe<Staff>;
  staffMedia: Maybe<MediaConnection>;
  submissionNotes: Maybe<Scalars['String']['output']>;
  submissionStatus: Maybe<Scalars['Int']['output']>;
  submitter: Maybe<User>;
  updatedAt: Maybe<Scalars['Int']['output']>;
  yearsActive: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type StaffcharacterMediaArgs = {
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
};

export type StaffcharactersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};

export type StaffdescriptionArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StaffstaffMediaArgs = {
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  type?: InputMaybe<MediaType>;
};

export type StaffConnection = {
  __typename: 'StaffConnection';
  edges: Maybe<Array<Maybe<StaffEdge>>>;
  nodes: Maybe<Array<Maybe<Staff>>>;
  pageInfo: Maybe<PageInfo>;
};

export type StaffEdge = {
  __typename: 'StaffEdge';
  favouriteOrder: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  node: Maybe<Staff>;
  role: Maybe<Scalars['String']['output']>;
};

export type StaffImage = {
  __typename: 'StaffImage';
  large: Maybe<Scalars['String']['output']>;
  medium: Maybe<Scalars['String']['output']>;
};

export type StaffLanguage =
  | 'ENGLISH'
  | 'FRENCH'
  | 'GERMAN'
  | 'HEBREW'
  | 'HUNGARIAN'
  | 'ITALIAN'
  | 'JAPANESE'
  | 'KOREAN'
  | 'PORTUGUESE'
  | 'SPANISH';

export type StaffName = {
  __typename: 'StaffName';
  alternative: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  first: Maybe<Scalars['String']['output']>;
  full: Maybe<Scalars['String']['output']>;
  last: Maybe<Scalars['String']['output']>;
  middle: Maybe<Scalars['String']['output']>;
  native: Maybe<Scalars['String']['output']>;
  userPreferred: Maybe<Scalars['String']['output']>;
};

export type StaffNameInput = {
  alternative?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['String']['input']>;
  middle?: InputMaybe<Scalars['String']['input']>;
  native?: InputMaybe<Scalars['String']['input']>;
};

export type StaffRoleType = {
  __typename: 'StaffRoleType';
  dubGroup: Maybe<Scalars['String']['output']>;
  roleNotes: Maybe<Scalars['String']['output']>;
  voiceActor: Maybe<Staff>;
};

export type StaffSort =
  | 'FAVOURITES'
  | 'FAVOURITES_DESC'
  | 'ID'
  | 'ID_DESC'
  | 'LANGUAGE'
  | 'LANGUAGE_DESC'
  | 'RELEVANCE'
  | 'ROLE'
  | 'ROLE_DESC'
  | 'SEARCH_MATCH';

export type StaffStats = {
  __typename: 'StaffStats';
  amount: Maybe<Scalars['Int']['output']>;
  meanScore: Maybe<Scalars['Int']['output']>;
  staff: Maybe<Staff>;
  timeWatched: Maybe<Scalars['Int']['output']>;
};

export type StaffSubmission = {
  __typename: 'StaffSubmission';
  assignee: Maybe<User>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  locked: Maybe<Scalars['Boolean']['output']>;
  notes: Maybe<Scalars['String']['output']>;
  source: Maybe<Scalars['String']['output']>;
  staff: Maybe<Staff>;
  status: Maybe<SubmissionStatus>;
  submission: Maybe<Staff>;
  submitter: Maybe<User>;
};

export type StatusDistribution = {
  __typename: 'StatusDistribution';
  amount: Maybe<Scalars['Int']['output']>;
  status: Maybe<MediaListStatus>;
};

export type Studio = {
  __typename: 'Studio';
  favourites: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isAnimationStudio: Scalars['Boolean']['output'];
  isFavourite: Scalars['Boolean']['output'];
  media: Maybe<MediaConnection>;
  name: Scalars['String']['output'];
  siteUrl: Maybe<Scalars['String']['output']>;
};

export type StudiomediaArgs = {
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
};

export type StudioConnection = {
  __typename: 'StudioConnection';
  edges: Maybe<Array<Maybe<StudioEdge>>>;
  nodes: Maybe<Array<Maybe<Studio>>>;
  pageInfo: Maybe<PageInfo>;
};

export type StudioEdge = {
  __typename: 'StudioEdge';
  favouriteOrder: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  isMain: Scalars['Boolean']['output'];
  node: Maybe<Studio>;
};

export type StudioSort = 'FAVOURITES' | 'FAVOURITES_DESC' | 'ID' | 'ID_DESC' | 'NAME' | 'NAME_DESC' | 'SEARCH_MATCH';

export type StudioStats = {
  __typename: 'StudioStats';
  amount: Maybe<Scalars['Int']['output']>;
  meanScore: Maybe<Scalars['Int']['output']>;
  studio: Maybe<Studio>;
  timeWatched: Maybe<Scalars['Int']['output']>;
};

export type SubmissionSort = 'ID' | 'ID_DESC';

export type SubmissionStatus = 'ACCEPTED' | 'PARTIALLY_ACCEPTED' | 'PENDING' | 'REJECTED';

export type TagStats = {
  __typename: 'TagStats';
  amount: Maybe<Scalars['Int']['output']>;
  meanScore: Maybe<Scalars['Int']['output']>;
  tag: Maybe<MediaTag>;
  timeWatched: Maybe<Scalars['Int']['output']>;
};

export type TextActivity = {
  __typename: 'TextActivity';
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isLiked: Maybe<Scalars['Boolean']['output']>;
  isLocked: Maybe<Scalars['Boolean']['output']>;
  isPinned: Maybe<Scalars['Boolean']['output']>;
  isSubscribed: Maybe<Scalars['Boolean']['output']>;
  likeCount: Scalars['Int']['output'];
  likes: Maybe<Array<Maybe<User>>>;
  replies: Maybe<Array<Maybe<ActivityReply>>>;
  replyCount: Scalars['Int']['output'];
  siteUrl: Maybe<Scalars['String']['output']>;
  text: Maybe<Scalars['String']['output']>;
  type: Maybe<ActivityType>;
  user: Maybe<User>;
  userId: Maybe<Scalars['Int']['output']>;
};

export type TextActivitytextArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Thread = {
  __typename: 'Thread';
  body: Maybe<Scalars['String']['output']>;
  categories: Maybe<Array<Maybe<ThreadCategory>>>;
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isLiked: Maybe<Scalars['Boolean']['output']>;
  isLocked: Maybe<Scalars['Boolean']['output']>;
  isSticky: Maybe<Scalars['Boolean']['output']>;
  isSubscribed: Maybe<Scalars['Boolean']['output']>;
  likeCount: Scalars['Int']['output'];
  likes: Maybe<Array<Maybe<User>>>;
  mediaCategories: Maybe<Array<Maybe<Media>>>;
  repliedAt: Maybe<Scalars['Int']['output']>;
  replyCommentId: Maybe<Scalars['Int']['output']>;
  replyCount: Maybe<Scalars['Int']['output']>;
  replyUser: Maybe<User>;
  replyUserId: Maybe<Scalars['Int']['output']>;
  siteUrl: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Int']['output'];
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
  viewCount: Maybe<Scalars['Int']['output']>;
};

export type ThreadbodyArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ThreadCategory = {
  __typename: 'ThreadCategory';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type ThreadComment = {
  __typename: 'ThreadComment';
  childComments: Maybe<Scalars['Json']['output']>;
  comment: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isLiked: Maybe<Scalars['Boolean']['output']>;
  isLocked: Maybe<Scalars['Boolean']['output']>;
  likeCount: Scalars['Int']['output'];
  likes: Maybe<Array<Maybe<User>>>;
  siteUrl: Maybe<Scalars['String']['output']>;
  thread: Maybe<Thread>;
  threadId: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['Int']['output'];
  user: Maybe<User>;
  userId: Maybe<Scalars['Int']['output']>;
};

export type ThreadCommentcommentArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ThreadCommentLikeNotification = {
  __typename: 'ThreadCommentLikeNotification';
  comment: Maybe<ThreadComment>;
  commentId: Scalars['Int']['output'];
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  thread: Maybe<Thread>;
  type: Maybe<NotificationType>;
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type ThreadCommentMentionNotification = {
  __typename: 'ThreadCommentMentionNotification';
  comment: Maybe<ThreadComment>;
  commentId: Scalars['Int']['output'];
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  thread: Maybe<Thread>;
  type: Maybe<NotificationType>;
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type ThreadCommentReplyNotification = {
  __typename: 'ThreadCommentReplyNotification';
  comment: Maybe<ThreadComment>;
  commentId: Scalars['Int']['output'];
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  thread: Maybe<Thread>;
  type: Maybe<NotificationType>;
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type ThreadCommentSort = 'ID' | 'ID_DESC';

export type ThreadCommentSubscribedNotification = {
  __typename: 'ThreadCommentSubscribedNotification';
  comment: Maybe<ThreadComment>;
  commentId: Scalars['Int']['output'];
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  thread: Maybe<Thread>;
  type: Maybe<NotificationType>;
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type ThreadLikeNotification = {
  __typename: 'ThreadLikeNotification';
  comment: Maybe<ThreadComment>;
  context: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  thread: Maybe<Thread>;
  threadId: Scalars['Int']['output'];
  type: Maybe<NotificationType>;
  user: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type ThreadSort =
  | 'CREATED_AT'
  | 'CREATED_AT_DESC'
  | 'ID'
  | 'ID_DESC'
  | 'IS_STICKY'
  | 'REPLIED_AT'
  | 'REPLIED_AT_DESC'
  | 'REPLY_COUNT'
  | 'REPLY_COUNT_DESC'
  | 'SEARCH_MATCH'
  | 'TITLE'
  | 'TITLE_DESC'
  | 'UPDATED_AT'
  | 'UPDATED_AT_DESC'
  | 'VIEW_COUNT'
  | 'VIEW_COUNT_DESC';

export type User = {
  __typename: 'User';
  about: Maybe<Scalars['String']['output']>;
  avatar: Maybe<UserAvatar>;
  bannerImage: Maybe<Scalars['String']['output']>;
  bans: Maybe<Scalars['Json']['output']>;
  createdAt: Maybe<Scalars['Int']['output']>;
  donatorBadge: Maybe<Scalars['String']['output']>;
  donatorTier: Maybe<Scalars['Int']['output']>;
  favourites: Maybe<Favourites>;
  id: Scalars['Int']['output'];
  isBlocked: Maybe<Scalars['Boolean']['output']>;
  isFollower: Maybe<Scalars['Boolean']['output']>;
  isFollowing: Maybe<Scalars['Boolean']['output']>;
  mediaListOptions: Maybe<MediaListOptions>;
  moderatorRoles: Maybe<Array<Maybe<ModRole>>>;
  moderatorStatus: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  options: Maybe<UserOptions>;
  previousNames: Maybe<Array<Maybe<UserPreviousName>>>;
  siteUrl: Maybe<Scalars['String']['output']>;
  statistics: Maybe<UserStatisticTypes>;
  stats: Maybe<UserStats>;
  unreadNotificationCount: Maybe<Scalars['Int']['output']>;
  updatedAt: Maybe<Scalars['Int']['output']>;
};

export type UseraboutArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserfavouritesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type UserActivityHistory = {
  __typename: 'UserActivityHistory';
  amount: Maybe<Scalars['Int']['output']>;
  date: Maybe<Scalars['Int']['output']>;
  level: Maybe<Scalars['Int']['output']>;
};

export type UserAvatar = {
  __typename: 'UserAvatar';
  large: Maybe<Scalars['String']['output']>;
  medium: Maybe<Scalars['String']['output']>;
};

export type UserCountryStatistic = {
  __typename: 'UserCountryStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  country: Maybe<Scalars['CountryCode']['output']>;
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
};

export type UserFormatStatistic = {
  __typename: 'UserFormatStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  format: Maybe<MediaFormat>;
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
};

export type UserGenreStatistic = {
  __typename: 'UserGenreStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  genre: Maybe<Scalars['String']['output']>;
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
};

export type UserLengthStatistic = {
  __typename: 'UserLengthStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  length: Maybe<Scalars['String']['output']>;
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
};

export type UserModData = {
  __typename: 'UserModData';
  alts: Maybe<Array<Maybe<User>>>;
  bans: Maybe<Scalars['Json']['output']>;
  counts: Maybe<Scalars['Json']['output']>;
  email: Maybe<Scalars['String']['output']>;
  ip: Maybe<Scalars['Json']['output']>;
  privacy: Maybe<Scalars['Int']['output']>;
};

export type UserOptions = {
  __typename: 'UserOptions';
  activityMergeTime: Maybe<Scalars['Int']['output']>;
  airingNotifications: Maybe<Scalars['Boolean']['output']>;
  disabledListActivity: Maybe<Array<Maybe<ListActivityOption>>>;
  displayAdultContent: Maybe<Scalars['Boolean']['output']>;
  notificationOptions: Maybe<Array<Maybe<NotificationOption>>>;
  profileColor: Maybe<Scalars['String']['output']>;
  restrictMessagesToFollowing: Maybe<Scalars['Boolean']['output']>;
  staffNameLanguage: Maybe<UserStaffNameLanguage>;
  timezone: Maybe<Scalars['String']['output']>;
  titleLanguage: Maybe<UserTitleLanguage>;
};

export type UserPreviousName = {
  __typename: 'UserPreviousName';
  createdAt: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['Int']['output']>;
};

export type UserReleaseYearStatistic = {
  __typename: 'UserReleaseYearStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  releaseYear: Maybe<Scalars['Int']['output']>;
};

export type UserScoreStatistic = {
  __typename: 'UserScoreStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  score: Maybe<Scalars['Int']['output']>;
};

export type UserSort =
  | 'CHAPTERS_READ'
  | 'CHAPTERS_READ_DESC'
  | 'ID'
  | 'ID_DESC'
  | 'SEARCH_MATCH'
  | 'USERNAME'
  | 'USERNAME_DESC'
  | 'WATCHED_TIME'
  | 'WATCHED_TIME_DESC';

export type UserStaffNameLanguage = 'NATIVE' | 'ROMAJI' | 'ROMAJI_WESTERN';

export type UserStaffStatistic = {
  __typename: 'UserStaffStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  staff: Maybe<Staff>;
};

export type UserStartYearStatistic = {
  __typename: 'UserStartYearStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  startYear: Maybe<Scalars['Int']['output']>;
};

export type UserStatisticTypes = {
  __typename: 'UserStatisticTypes';
  anime: Maybe<UserStatistics>;
  manga: Maybe<UserStatistics>;
};

export type UserStatistics = {
  __typename: 'UserStatistics';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  countries: Maybe<Array<Maybe<UserCountryStatistic>>>;
  episodesWatched: Scalars['Int']['output'];
  formats: Maybe<Array<Maybe<UserFormatStatistic>>>;
  genres: Maybe<Array<Maybe<UserGenreStatistic>>>;
  lengths: Maybe<Array<Maybe<UserLengthStatistic>>>;
  meanScore: Scalars['Float']['output'];
  minutesWatched: Scalars['Int']['output'];
  releaseYears: Maybe<Array<Maybe<UserReleaseYearStatistic>>>;
  scores: Maybe<Array<Maybe<UserScoreStatistic>>>;
  staff: Maybe<Array<Maybe<UserStaffStatistic>>>;
  standardDeviation: Scalars['Float']['output'];
  startYears: Maybe<Array<Maybe<UserStartYearStatistic>>>;
  statuses: Maybe<Array<Maybe<UserStatusStatistic>>>;
  studios: Maybe<Array<Maybe<UserStudioStatistic>>>;
  tags: Maybe<Array<Maybe<UserTagStatistic>>>;
  voiceActors: Maybe<Array<Maybe<UserVoiceActorStatistic>>>;
  volumesRead: Scalars['Int']['output'];
};

export type UserStatisticscountriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsformatsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsgenresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticslengthsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsreleaseYearsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsscoresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsstaffArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsstartYearsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsstatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsstudiosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticstagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsvoiceActorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsSort =
  | 'COUNT'
  | 'COUNT_DESC'
  | 'ID'
  | 'ID_DESC'
  | 'MEAN_SCORE'
  | 'MEAN_SCORE_DESC'
  | 'PROGRESS'
  | 'PROGRESS_DESC';

export type UserStats = {
  __typename: 'UserStats';
  activityHistory: Maybe<Array<Maybe<UserActivityHistory>>>;
  animeListScores: Maybe<ListScoreStats>;
  animeScoreDistribution: Maybe<Array<Maybe<ScoreDistribution>>>;
  animeStatusDistribution: Maybe<Array<Maybe<StatusDistribution>>>;
  chaptersRead: Maybe<Scalars['Int']['output']>;
  favouredActors: Maybe<Array<Maybe<StaffStats>>>;
  favouredFormats: Maybe<Array<Maybe<FormatStats>>>;
  favouredGenres: Maybe<Array<Maybe<GenreStats>>>;
  favouredGenresOverview: Maybe<Array<Maybe<GenreStats>>>;
  favouredStaff: Maybe<Array<Maybe<StaffStats>>>;
  favouredStudios: Maybe<Array<Maybe<StudioStats>>>;
  favouredTags: Maybe<Array<Maybe<TagStats>>>;
  favouredYears: Maybe<Array<Maybe<YearStats>>>;
  mangaListScores: Maybe<ListScoreStats>;
  mangaScoreDistribution: Maybe<Array<Maybe<ScoreDistribution>>>;
  mangaStatusDistribution: Maybe<Array<Maybe<StatusDistribution>>>;
  watchedTime: Maybe<Scalars['Int']['output']>;
};

export type UserStatusStatistic = {
  __typename: 'UserStatusStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  status: Maybe<MediaListStatus>;
};

export type UserStudioStatistic = {
  __typename: 'UserStudioStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  studio: Maybe<Studio>;
};

export type UserTagStatistic = {
  __typename: 'UserTagStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  tag: Maybe<MediaTag>;
};

export type UserTitleLanguage =
  | 'ENGLISH'
  | 'ENGLISH_STYLISED'
  | 'NATIVE'
  | 'NATIVE_STYLISED'
  | 'ROMAJI'
  | 'ROMAJI_STYLISED';

export type UserVoiceActorStatistic = {
  __typename: 'UserVoiceActorStatistic';
  chaptersRead: Scalars['Int']['output'];
  characterIds: Array<Maybe<Scalars['Int']['output']>>;
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  voiceActor: Maybe<Staff>;
};

export type YearStats = {
  __typename: 'YearStats';
  amount: Maybe<Scalars['Int']['output']>;
  meanScore: Maybe<Scalars['Int']['output']>;
  year: Maybe<Scalars['Int']['output']>;
};

export type usersAiringScheduleQueryVariables = Exact<{
  perPage?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
}>;

export type usersAiringScheduleQuery = {
  __typename: 'Query';
  Page: {
    __typename: 'Page';
    pageInfo: { __typename: 'PageInfo'; hasNextPage: boolean | null; total: number | null } | null;
    mediaList: Array<{
      __typename: 'MediaList';
      progress: number | null;
      media: {
        __typename: 'Media';
        id: number;
        status: MediaStatus | null;
        siteUrl: string | null;
        episodes: number | null;
        coverImage: { __typename: 'MediaCoverImage'; medium: string | null; large: string | null } | null;
        title: { __typename: 'MediaTitle'; romaji: string | null; english: string | null } | null;
        externalLinks: Array<{
          __typename: 'MediaExternalLink';
          url: string | null;
          site: string;
          type: ExternalLinkType | null;
          icon: string | null;
          color: string | null;
        } | null> | null;
        airingSchedule: {
          __typename: 'AiringScheduleConnection';
          edges: Array<{
            __typename: 'AiringScheduleEdge';
            node: { __typename: 'AiringSchedule'; airingAt: number; timeUntilAiring: number; episode: number } | null;
          } | null> | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
};

export type airingScheduleQueryVariables = Exact<{
  perPage?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
  season?: InputMaybe<MediaSeason>;
}>;

export type airingScheduleQuery = {
  __typename: 'Query';
  Page: {
    __typename: 'Page';
    pageInfo: { __typename: 'PageInfo'; hasNextPage: boolean | null; total: number | null } | null;
    media: Array<{
      __typename: 'Media';
      id: number;
      status: MediaStatus | null;
      siteUrl: string | null;
      episodes: number | null;
      coverImage: { __typename: 'MediaCoverImage'; medium: string | null; large: string | null } | null;
      title: { __typename: 'MediaTitle'; romaji: string | null; english: string | null } | null;
      externalLinks: Array<{
        __typename: 'MediaExternalLink';
        url: string | null;
        site: string;
        type: ExternalLinkType | null;
        icon: string | null;
        color: string | null;
      } | null> | null;
      airingSchedule: {
        __typename: 'AiringScheduleConnection';
        edges: Array<{
          __typename: 'AiringScheduleEdge';
          node: { __typename: 'AiringSchedule'; airingAt: number; timeUntilAiring: number; episode: number } | null;
        } | null> | null;
      } | null;
    } | null> | null;
  } | null;
};

export const usersAiringScheduleDocument = {
  'kind': 'Document',
  'definitions': [
    {
      'kind': 'OperationDefinition',
      'operation': 'query',
      'name': { 'kind': 'Name', 'value': 'usersAiringSchedule' },
      'variableDefinitions': [
        {
          'kind': 'VariableDefinition',
          'variable': { 'kind': 'Variable', 'name': { 'kind': 'Name', 'value': 'perPage' } },
          'type': { 'kind': 'NamedType', 'name': { 'kind': 'Name', 'value': 'Int' } },
          'defaultValue': { 'kind': 'IntValue', 'value': '50' },
        },
        {
          'kind': 'VariableDefinition',
          'variable': { 'kind': 'Variable', 'name': { 'kind': 'Name', 'value': 'page' } },
          'type': { 'kind': 'NamedType', 'name': { 'kind': 'Name', 'value': 'Int' } },
          'defaultValue': { 'kind': 'IntValue', 'value': '1' },
        },
        {
          'kind': 'VariableDefinition',
          'variable': { 'kind': 'Variable', 'name': { 'kind': 'Name', 'value': 'userName' } },
          'type': { 'kind': 'NamedType', 'name': { 'kind': 'Name', 'value': 'String' } },
        },
      ],
      'selectionSet': {
        'kind': 'SelectionSet',
        'selections': [
          {
            'kind': 'Field',
            'name': { 'kind': 'Name', 'value': 'Page' },
            'arguments': [
              {
                'kind': 'Argument',
                'name': { 'kind': 'Name', 'value': 'perPage' },
                'value': { 'kind': 'Variable', 'name': { 'kind': 'Name', 'value': 'perPage' } },
              },
              {
                'kind': 'Argument',
                'name': { 'kind': 'Name', 'value': 'page' },
                'value': { 'kind': 'Variable', 'name': { 'kind': 'Name', 'value': 'page' } },
              },
            ],
            'selectionSet': {
              'kind': 'SelectionSet',
              'selections': [
                {
                  'kind': 'Field',
                  'name': { 'kind': 'Name', 'value': 'pageInfo' },
                  'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [
                      { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'hasNextPage' } },
                      { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'total' } },
                    ],
                  },
                },
                {
                  'kind': 'Field',
                  'name': { 'kind': 'Name', 'value': 'mediaList' },
                  'arguments': [
                    {
                      'kind': 'Argument',
                      'name': { 'kind': 'Name', 'value': 'userName' },
                      'value': { 'kind': 'Variable', 'name': { 'kind': 'Name', 'value': 'userName' } },
                    },
                    {
                      'kind': 'Argument',
                      'name': { 'kind': 'Name', 'value': 'type' },
                      'value': { 'kind': 'EnumValue', 'value': 'ANIME' },
                    },
                    {
                      'kind': 'Argument',
                      'name': { 'kind': 'Name', 'value': 'status' },
                      'value': { 'kind': 'EnumValue', 'value': 'CURRENT' },
                    },
                  ],
                  'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [
                      { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'progress' } },
                      {
                        'kind': 'Field',
                        'name': { 'kind': 'Name', 'value': 'media' },
                        'selectionSet': {
                          'kind': 'SelectionSet',
                          'selections': [
                            { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'id' } },
                            { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'status' } },
                            { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'siteUrl' } },
                            { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'episodes' } },
                            {
                              'kind': 'Field',
                              'name': { 'kind': 'Name', 'value': 'coverImage' },
                              'selectionSet': {
                                'kind': 'SelectionSet',
                                'selections': [
                                  { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'medium' } },
                                  { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'large' } },
                                ],
                              },
                            },
                            {
                              'kind': 'Field',
                              'name': { 'kind': 'Name', 'value': 'title' },
                              'selectionSet': {
                                'kind': 'SelectionSet',
                                'selections': [
                                  { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'romaji' } },
                                  { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'english' } },
                                ],
                              },
                            },
                            {
                              'kind': 'Field',
                              'name': { 'kind': 'Name', 'value': 'externalLinks' },
                              'selectionSet': {
                                'kind': 'SelectionSet',
                                'selections': [
                                  { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'url' } },
                                  { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'site' } },
                                  { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'type' } },
                                  { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'icon' } },
                                  { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'color' } },
                                ],
                              },
                            },
                            {
                              'kind': 'Field',
                              'name': { 'kind': 'Name', 'value': 'airingSchedule' },
                              'selectionSet': {
                                'kind': 'SelectionSet',
                                'selections': [
                                  {
                                    'kind': 'Field',
                                    'name': { 'kind': 'Name', 'value': 'edges' },
                                    'selectionSet': {
                                      'kind': 'SelectionSet',
                                      'selections': [
                                        {
                                          'kind': 'Field',
                                          'name': { 'kind': 'Name', 'value': 'node' },
                                          'selectionSet': {
                                            'kind': 'SelectionSet',
                                            'selections': [
                                              { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'airingAt' } },
                                              {
                                                'kind': 'Field',
                                                'name': { 'kind': 'Name', 'value': 'timeUntilAiring' },
                                              },
                                              { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'episode' } },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<usersAiringScheduleQuery, usersAiringScheduleQueryVariables>;
export const airingScheduleDocument = {
  'kind': 'Document',
  'definitions': [
    {
      'kind': 'OperationDefinition',
      'operation': 'query',
      'name': { 'kind': 'Name', 'value': 'airingSchedule' },
      'variableDefinitions': [
        {
          'kind': 'VariableDefinition',
          'variable': { 'kind': 'Variable', 'name': { 'kind': 'Name', 'value': 'perPage' } },
          'type': { 'kind': 'NamedType', 'name': { 'kind': 'Name', 'value': 'Int' } },
          'defaultValue': { 'kind': 'IntValue', 'value': '50' },
        },
        {
          'kind': 'VariableDefinition',
          'variable': { 'kind': 'Variable', 'name': { 'kind': 'Name', 'value': 'page' } },
          'type': { 'kind': 'NamedType', 'name': { 'kind': 'Name', 'value': 'Int' } },
          'defaultValue': { 'kind': 'IntValue', 'value': '1' },
        },
        {
          'kind': 'VariableDefinition',
          'variable': { 'kind': 'Variable', 'name': { 'kind': 'Name', 'value': 'year' } },
          'type': { 'kind': 'NamedType', 'name': { 'kind': 'Name', 'value': 'Int' } },
          'defaultValue': { 'kind': 'IntValue', 'value': '2022' },
        },
        {
          'kind': 'VariableDefinition',
          'variable': { 'kind': 'Variable', 'name': { 'kind': 'Name', 'value': 'season' } },
          'type': { 'kind': 'NamedType', 'name': { 'kind': 'Name', 'value': 'MediaSeason' } },
          'defaultValue': { 'kind': 'EnumValue', 'value': 'SPRING' },
        },
      ],
      'selectionSet': {
        'kind': 'SelectionSet',
        'selections': [
          {
            'kind': 'Field',
            'name': { 'kind': 'Name', 'value': 'Page' },
            'arguments': [
              {
                'kind': 'Argument',
                'name': { 'kind': 'Name', 'value': 'perPage' },
                'value': { 'kind': 'Variable', 'name': { 'kind': 'Name', 'value': 'perPage' } },
              },
              {
                'kind': 'Argument',
                'name': { 'kind': 'Name', 'value': 'page' },
                'value': { 'kind': 'Variable', 'name': { 'kind': 'Name', 'value': 'page' } },
              },
            ],
            'selectionSet': {
              'kind': 'SelectionSet',
              'selections': [
                {
                  'kind': 'Field',
                  'name': { 'kind': 'Name', 'value': 'pageInfo' },
                  'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [
                      { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'hasNextPage' } },
                      { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'total' } },
                    ],
                  },
                },
                {
                  'kind': 'Field',
                  'name': { 'kind': 'Name', 'value': 'media' },
                  'arguments': [
                    {
                      'kind': 'Argument',
                      'name': { 'kind': 'Name', 'value': 'type' },
                      'value': { 'kind': 'EnumValue', 'value': 'ANIME' },
                    },
                    {
                      'kind': 'Argument',
                      'name': { 'kind': 'Name', 'value': 'status' },
                      'value': { 'kind': 'EnumValue', 'value': 'RELEASING' },
                    },
                    {
                      'kind': 'Argument',
                      'name': { 'kind': 'Name', 'value': 'seasonYear' },
                      'value': { 'kind': 'Variable', 'name': { 'kind': 'Name', 'value': 'year' } },
                    },
                    {
                      'kind': 'Argument',
                      'name': { 'kind': 'Name', 'value': 'season' },
                      'value': { 'kind': 'Variable', 'name': { 'kind': 'Name', 'value': 'season' } },
                    },
                    {
                      'kind': 'Argument',
                      'name': { 'kind': 'Name', 'value': 'sort' },
                      'value': { 'kind': 'ListValue', 'values': [{ 'kind': 'EnumValue', 'value': 'POPULARITY_DESC' }] },
                    },
                  ],
                  'selectionSet': {
                    'kind': 'SelectionSet',
                    'selections': [
                      { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'id' } },
                      { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'status' } },
                      { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'siteUrl' } },
                      { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'episodes' } },
                      {
                        'kind': 'Field',
                        'name': { 'kind': 'Name', 'value': 'coverImage' },
                        'selectionSet': {
                          'kind': 'SelectionSet',
                          'selections': [
                            { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'medium' } },
                            { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'large' } },
                          ],
                        },
                      },
                      {
                        'kind': 'Field',
                        'name': { 'kind': 'Name', 'value': 'title' },
                        'selectionSet': {
                          'kind': 'SelectionSet',
                          'selections': [
                            { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'romaji' } },
                            { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'english' } },
                          ],
                        },
                      },
                      {
                        'kind': 'Field',
                        'name': { 'kind': 'Name', 'value': 'externalLinks' },
                        'selectionSet': {
                          'kind': 'SelectionSet',
                          'selections': [
                            { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'url' } },
                            { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'site' } },
                            { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'type' } },
                            { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'icon' } },
                            { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'color' } },
                          ],
                        },
                      },
                      {
                        'kind': 'Field',
                        'name': { 'kind': 'Name', 'value': 'airingSchedule' },
                        'selectionSet': {
                          'kind': 'SelectionSet',
                          'selections': [
                            {
                              'kind': 'Field',
                              'name': { 'kind': 'Name', 'value': 'edges' },
                              'selectionSet': {
                                'kind': 'SelectionSet',
                                'selections': [
                                  {
                                    'kind': 'Field',
                                    'name': { 'kind': 'Name', 'value': 'node' },
                                    'selectionSet': {
                                      'kind': 'SelectionSet',
                                      'selections': [
                                        { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'airingAt' } },
                                        { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'timeUntilAiring' } },
                                        { 'kind': 'Field', 'name': { 'kind': 'Name', 'value': 'episode' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<airingScheduleQuery, airingScheduleQueryVariables>;
