export interface NewsItem {
  title: string;
  link: string;
  category: string;
  published_date: string;
  image: string;
  description: string;
  source: string;
  source_logo: string;
}

export interface NewsResponse {
  page: number;
  total: number;       // <--- Add this
  source: string[];    // <--- Add this (it's an array of strings)
  data: NewsItem[];    // This is your array of news
}