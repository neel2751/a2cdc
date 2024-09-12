import { getTeamData, getAdminTeamData } from "@/actions/teamAction";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTeamData = createAsyncThunk("fetchTeamData", async () => {
  const response = await getTeamData();
  return {
    data: response,
    //   totalItems: response.totalItems,
  };
});

export const fetchAdminTeamData = createAsyncThunk(
  "fetchAdminTeamData",
  async () => {
    const response = await getAdminTeamData();
    return {
      data: response,
      //   totalItems: response.totalItems,
    };
  }
);

const initialState = {
  data: [],
  status: "idle", // for handling loading states if needed
  error: null,
  currentEditItem: null,
  search: "",
  reset: true,
  teamStatus: "",
};
const getTeamSlice = createSlice({
  name: "getTeam",
  initialState,
  reducers: {
    setEditItem(state, action) {
      state.currentEditItem = action.payload;
    },
    setReset(state, action) {
      state.reset = action.payload;
    },
    setSerach: (state, action) => {
      state.search = action.payload;
    },
    setTeamStatus: (state, action) => {
      state.teamStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTeamData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(fetchTeamData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(fetchAdminTeamData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAdminTeamData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(fetchAdminTeamData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setEditItem, setReset, setSerach, setTeamStatus } =
  getTeamSlice.actions;
export default getTeamSlice.reducer;
