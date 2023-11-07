import { apiSlice } from "@/redux/services/apiSlice";

export interface Campaign {
  //   organizer: {
  //     name: string;
  //     email: string;
  //     phone_number: number;
  //     location: string;
  //   };
  title: string;
  description: string;
  goalAmount: number;
  currentAmount: number;
  status: string;
  category: string;
  startDate: string;
  endDate: string;

  //   beneficiary: {
  //     name: string;
  //     description: string;
  //     contactEmail: string;
  //     contactPhone: string;
  //     location: string;
  //     type: string;
  //   };
}

const campaignSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveCampaigns: builder.query<Campaign[], void>({
      query: () => "/donation/campaigns",
    }),
  }),
});

export const { useRetrieveCampaignsQuery } = campaignSlice;
