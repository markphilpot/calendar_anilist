import { airingScheduleQuery } from './gql/graphql';

export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export type AiringScheduleMedia = NonNullable<
  ArrayElement<NonNullable<NonNullable<airingScheduleQuery['Page']>['media']>>
>;

export type AiringScheduleMediaExternalLink = NonNullable<
  ArrayElement<NonNullable<AiringScheduleMedia['externalLinks']>>
>;
