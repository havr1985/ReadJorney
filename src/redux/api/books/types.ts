interface Book {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend: boolean;
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

export interface IGetUsersBooks {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  status: string;
  owner: string;
  progress: [];
}
export interface IAddBookRequest {
  title: string;
  author: string;
  totalPages: number | undefined;
}
export interface IProgess {
  startPage: number;
  startReading: string;
  finishPage: number;
  finishReading: string;
  speed: number;
  status: string;

}
export interface IStartReadingResponse {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  status: string;
  owner: string;
  progress: IProgess[];
}
export interface IReadingRequest{
  id: string;
  page: number;
}
export interface ITimeLeftToRead {
  hours: number;
  minutes: number;
  seconds: number;
}
export interface IGetFinishBook {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  status: string;
  owner: string;
  progress: IProgess[];
  timeLeftToRead?: ITimeLeftToRead;
}
