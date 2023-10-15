import { apiSlice } from "../services/apiSlice";

interface User {
  username: string;
  full_name: string;
  email: string;
}

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveUser: builder.query<User, void>({
      query: () => "/user/",
    }),
    login: builder.mutation({
      query: ({ username, email, password }) => ({
        url: "/login/",
        method: "POST",
        body: { username, email, password },
      }),
    }),
    register: builder.mutation({
      query: ({ full_name, email, phone_number, password1, password2 }) => ({
        url: "/registration/",
        method: "POST",
        body: { full_name, email, phone_number, password1, password2 },
      }),
    }),
    verify: builder.mutation({
      query: () => ({
        url: "/registration/verify-email/",
        method: "POST",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout/",
        method: "POST",
      }),
    }),
    resetPassword: builder.mutation({
      query: (email) => ({
        url: "/password/reset/",
        method: "POST",
        body: { email },
      }),
    }),
    resetPasswordConfirm: builder.mutation({
      query: ({ new_password1, new_password2, uid, token }) => ({
        url: "/password/reset/confirm/",
        method: "POST",
        body: { new_password1, new_password2, uid, token },
      }),
    }),
    changePassword: builder.mutation({
      query: ({ old_password, new_password1, new_password2 }) => ({
        url: "/password/reset/confirm/",
        method: "POST",
        body: { old_password, new_password1, new_password2 },
      }),
    }),
  }),
});

export const {
  useRetrieveUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useVerifyMutation,
  useLogoutMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useChangePasswordMutation,
} = authApiSlice;
