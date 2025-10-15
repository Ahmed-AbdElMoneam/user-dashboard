export interface IUser {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  picture: {
    large: string;
  };
  phone: string;
}
