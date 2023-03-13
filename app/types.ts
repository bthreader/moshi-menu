export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  CalendarId: any;
  Date: any;
  UserId: any;
};

export type Attendance = {
  __typename?: 'Attendance';
  isAttending: Scalars['Boolean'];
  user: User;
};

export type Calendar = {
  __typename?: 'Calendar';
  displayName: Scalars['String'];
  id: Scalars['CalendarId'];
  owner: User;
};

export enum CalendarPermission {
  Read = 'READ',
  Write = 'WRITE'
}

export type Guest = {
  __typename?: 'Guest';
  calendar: Scalars['CalendarId'];
  permission: CalendarPermission;
  user: Scalars['UserId'];
};

export type MealOption = {
  __typename?: 'MealOption';
  description?: Maybe<Scalars['String']>;
  suggester: User;
  title: Scalars['String'];
  votes?: Maybe<Array<Maybe<Vote>>>;
};

export type Menu = {
  __typename?: 'Menu';
  attendance?: Maybe<Array<Maybe<Attendance>>>;
  calendar: Calendar;
  date: Scalars['Date'];
  options?: Maybe<Array<Maybe<MealOption>>>;
};

export type Query = {
  __typename?: 'Query';
  calendars?: Maybe<Array<Maybe<Calendar>>>;
  guests?: Maybe<Array<Maybe<Guest>>>;
  menus?: Maybe<Array<Maybe<Menu>>>;
};


export type QueryCalendarsArgs = {
  userId: Scalars['UserId'];
};


export type QueryGuestsArgs = {
  userId: Scalars['UserId'];
};


export type QueryMenusArgs = {
  calendarId: Scalars['CalendarId'];
  mondayDate: Scalars['Date'];
};

export type User = {
  __typename?: 'User';
  displayName: Scalars['String'];
  id: Scalars['UserId'];
};

export type Vote = {
  __typename?: 'Vote';
  upvote: Scalars['Boolean'];
  voter: User;
};
