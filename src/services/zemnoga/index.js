import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_HOSTNAME}/api`,
});

export const zemnogaApi = createApi({
  reducerPath: "zemnogaApi",
  baseQuery,
  tagTypes: ["ZEMNOGA_API"],
  endpoints: () => ({}),
});
