import { apiSlice } from "@/redux/services/apiSlice";

export interface DonationProps {
  amount: number;
  tip: number;
  campaign: string;
  donor: string;
  currency: string;
  note: string;
  transactionNumber: string;
  anonymous: boolean;
  paymentStatus: string;
  paymentMethod: string;
}

export interface DonationPropsResponse {
  results: DonationProps[];
  next: string;
  count: number | null;
}

const donationSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveDonations: builder.query<DonationPropsResponse, void>({
      query: () => "/donation/donations",
    }),
  }),
});

export const { useRetrieveDonationsQuery } = donationSlice;
