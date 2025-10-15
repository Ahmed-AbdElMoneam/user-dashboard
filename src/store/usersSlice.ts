import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import type { IUser } from "../types/user";
import type { IUsersState } from "../types/usersState";

const initialState: IUsersState = {
  users: [],
  filteredUsers: [],
  loading: false,
  error: null,
  search: "",
  page: 1,
  pageSize: 10,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://randomuser.me/api/", {
    params: { results: 50 },
  });
  return response.data.results as IUser[];
});

export const filterUsers = createAsyncThunk(
  "users/filterUsers",
  async (search: string, { getState }) => {
    const state = getState() as { users: IUsersState };
    await new Promise((resolve) => setTimeout(resolve, 500)); // To simulate server side filtration
    if (!search.trim()) {
      return { filtered: state.users.users, search: "" };
    }
    const filtered = state.users.users.filter((user) => {
      const userName =
        `${user.name.title} ${user.name.first} ${user.name.last}`.toLowerCase();
      return userName.includes(search.toLowerCase());
    });
    return { filtered, search };
  }
);

export const clearUsersFilter = createAsyncThunk(
  "users/clearUsersFilter",
  async (_, { getState }) => {
    const state = getState() as { users: IUsersState };
    return state.users.users;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(filterUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(filterUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredUsers = action.payload.filtered;
        state.search = action.payload.search;
        state.page = 1;
      })
      .addCase(clearUsersFilter.pending, (state) => {
        state.loading = true;
      })
      .addCase(clearUsersFilter.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredUsers = action.payload;
        state.search = "";
        state.page = 1;
      });
  },
});

export const { setPage, setPageSize } = usersSlice.actions;
export default usersSlice.reducer;
