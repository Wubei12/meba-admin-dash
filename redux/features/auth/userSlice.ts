// // userSlice.ts

// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";

// // Replace 'your-api-endpoint-here' with your actual API endpoint
// const baseUrl =
//   "https://935f-197-156-107-26.ngrok-free.app/api/v1/account/auth";

// interface UserState {
//   userId: string | null;
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// const initialState: UserState = {
//   userId: null,
//   status: "idle",
//   error: null,
// };

// interface ApiResponse {
//   userId: string;
// }

// const fetchUserId = createAsyncThunk<ApiResponse, void>(
//   "user/fetchUserId",
//   async () => {
//     const response = await fetch(baseUrl);
//     const data: ApiResponse = await response.json();
//     console.log(data);
//     return data;
//   }
// );

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserId.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(
//         fetchUserId.fulfilled,
//         (state, action: PayloadAction<ApiResponse>) => {
//           state.status = "succeeded";
//           state.userId = action.payload.userId;
//         }
//       )
//       .addCase(fetchUserId.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message ?? "An error occurred.";
//       });
//   },
// });

// export default userSlice.reducer;

// export const selectUserId = (state: RootState) => state.user.userId;

// // Export the async thunk for use in your components
// export { fetchUserId };
