export interface IPaystackResponse {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

export interface IFlutterwaveResponse {
  status: string;
  message: string;
  data: {
    link: string;
  };
}
