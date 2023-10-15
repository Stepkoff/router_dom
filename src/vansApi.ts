import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface Van {
  description: string,
  id: string,
  imageUrl: string,
  name: string,
  price: number,
  type: string
}

type Response = {
  vans: Van[]
}

export type ResponseSingle = {
  vans: Van
}

export const vansApi = createApi({
  reducerPath: 'vansApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/'
  }),
  endpoints: (builder) => ({
    fetchAllVans: builder.query<Response, void>({
      query: () => ({
        url: 'vans'
      })
    }),
    fetchVan: builder.query<ResponseSingle, string>({
      query: (arg) => ({
        url: `vans/${arg}`
      })
    }),
    fetchHostVans: builder.query<Response, void>({
      query: () => ({
        url: `host/vans`
      })
    }),
    fetchHostVanById: builder.query<ResponseSingle, string>({
      query: (arg) => ({
        url: `host/vans/${arg}`
      })
    }),
  })
})