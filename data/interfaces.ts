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
