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
  title: string;
  text: string;
}

export interface NoteItem {
  title: string;
  text: string;
}

export interface Person {
  name: string;
  age: number;
}
