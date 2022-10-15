export interface FlutterwaveRequest {
  public_key: string;
  tx_ref: string;
  amount: number;
  payment_options: string;
  currency: string;
  redirect_url: string;
  meta: {
    consumer_id: number;
    consumer_mac: string;
  };
  customer: {
    email: string;
    phonenumber: string;
    name: string;
  };
  customizations: {
    title: string;
    description: string;
    logo: string;
  };
}
