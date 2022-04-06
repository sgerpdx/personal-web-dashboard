export interface DailyData {
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
  noteTitle: string;
  noteText: string;
}

export interface Person {
  name: string;
  age: number;
}
