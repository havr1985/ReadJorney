interface Book {
    _id: string,
    title: string,
    author: string,
    imageUrl: string,
    totalPages: number,
    recommend: boolean,
}

export interface IRecommendBookResponse {
  results: Book[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface IAddBookByIdResponse {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  status: string;
  owner: string;
  progress: [];
}