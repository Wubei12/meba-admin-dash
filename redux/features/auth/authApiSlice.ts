import { apiSlice } from "../../services/apiSlice";

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
        url: "/account/auth/login/",
        method: "POST",
        body: { username, email, password },
      }),
    }),
    register: builder.mutation({
      query: ({ full_name, email, phone_number, password1, password2 }) => ({
        url: "/account/auth/registration/",
        method: "POST",
        body: { full_name, email, phone_number, password1, password2 },
      }),
    }),
    verify: builder.mutation({
      query: () => ({
        url: "/account/auth/token/verify/",
        method: "POST",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/account/auth/logout/",
        method: "POST",
      }),
    }),
    activation: builder.mutation({
      query: ({ uid, token }) => ({
        url: "/account/auth/users/activation/",
        method: "POST",
        body: { uid, token },
      }),
    }),
    resetPassword: builder.mutation({
      query: (email) => ({
        url: "/account/auth/password/reset/",
        method: "POST",
        body: { email },
      }),
    }),
    resetPasswordConfirm: builder.mutation({
      query: ({ new_password1, new_password2, uid, token }) => ({
        url: "/account/auth/password/reset/confirm/",
        method: "POST",
        body: { new_password1, new_password2, uid, token },
      }),
    }),
    changePassword: builder.mutation({
      query: ({ old_password, new_password1, new_password2 }) => ({
        url: "/account/auth/password/change/",
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
  useActivationMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useChangePasswordMutation,
} = authApiSlice;
