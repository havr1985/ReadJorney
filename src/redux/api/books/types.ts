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
