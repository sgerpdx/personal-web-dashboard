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
    title: string;
    savedURL: string;
}

export interface NoteItem {
    title: string;
    noteText: string;
}
