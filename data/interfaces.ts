export interface DailyData {
  userName: string;
  message: string;
  numberOfTheDay: number;
  letterOfTheDay: string;
}
export interface NewsItem {
  headline: string;
  articleText: string;
  thumbnailURL: string;
}

export interface BookmarkItem {
  bookmarkTitle: string;
  bookmarkURL: string;
}

export interface NoteItem {
  title: string;
  text: string;
}

export interface Person {
  name: string;
  age: number;
}

export interface NewsResponse {
  author?: string;
  title: string;
  source: string;
  description: string;
  url: string;
  image?: string;
  published: string;
}

export interface TimeItem {
  hour: string;
  minute: string;
  second: string;
  amPM: string;
}

export interface CollapseSettings {
  news: string;
  bookmarks: string;
}

export interface DateDisplayItem {
  dayName: string;
  dayNumber: number;
  monthName: string;
  year: number;
  timeZoneName?: string;
  offsetUTC: number;
}

export interface SignUpItem {
  email: string;
  password: string;
}

export interface UserProfile {
  id: string;
  moniker: string;
  timezone: number;
  lang: string;
}
