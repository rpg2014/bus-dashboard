export interface QOTDResponse {
  success: Success;
  contents: Contents;
  baseurl: string;
  copyright: Copyright;
}
export interface Success {
  total: number;
}
export interface Contents {
  quotes?: (QuotesEntity)[] | null;
}
export interface QuotesEntity {
  quote: string;
  length: string;
  author: string;
  tags?: (string)[] | null;
  category: string;
  language: string;
  date: string;
  permalink: string;
  id: string;
  background: string;
  title: string;
}
export interface Copyright {
  year: number;
  url: string;
}
