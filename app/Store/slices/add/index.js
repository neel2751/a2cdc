import { getNavLink } from "@/actions/contactAction";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNavLink = createAsyncThunk(
  "fetchNavLink",
  async ({ page = 1, pageSize = 5, search = "", isActive = "" }) => {
    const response = await getNavLink(page, pageSize, search, isActive);
    return {
      data: response.result,
      totalItems: response.totalItems,
    };
  }
);

const initialState = {
  data: [],
  status: "idle", // for handling loading states if needed
  error: null,
  currentPage: 1, // Track the current page
  totalPages: 1, // Track the total number of pages
  totalItems: 0, // Track the total number of items
  pageSize: 10,
  currentEditItem: null,
  search: "",
  isActive: "", // Ensure this is initialized correctly
};
const navlinkSlice = createSlice({
  name: "navlink",
  initialState,
  reducers: {
    selectedEditItem: (state, action) => {
      state.currentEditItem = action.payload;
    },
    updateNavLink: (state, action) => {
      state.data = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload; // Set the current page
    },
    pageData: (state, action) => {
      state.pageSize = action.payload; // Set the current page
    },
    setSerach: (state, action) => {
      state.search = action.payload;
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload; // Rename the reducer action
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavLink.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNavLink.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.totalItems = action.payload.totalItems;
        state.totalPages = Math.ceil(
          action.payload.totalItems / state.pageSize
        );
        console.log(state.pageSize);
      })
      .addCase(fetchNavLink.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  selectedEditItem,
  updateNavLink,
  setPage,
  setSerach,
  pageData,
  setIsActive,
} = navlinkSlice.actions;
export default navlinkSlice.reducer;
