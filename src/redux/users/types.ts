export interface IResponseRegisterApi {
    email: string,
    name: string,
    token: string,
    refreshToken: string,
}

export interface IRequestRegisterApi {
    name: string,
    email: string,
    password: string,
}

export interface ILoginRequestApi extends Omit<IRequestRegisterApi, 'name'>{
    
}
export interface IResponseRefreshApi {
  token: string;
  refreshToken: string;
}
export interface ICurrentResponseApi extends IResponseRegisterApi {
    _id: string;
}