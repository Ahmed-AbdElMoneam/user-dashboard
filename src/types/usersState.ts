import type { IUser } from "./user";

export interface IUsersState {
  users: IUser[];
  filteredUsers: IUser[];
  loading: boolean;
  error: string | null;
  search: string;
  page: number;
  pageSize: number;
}
