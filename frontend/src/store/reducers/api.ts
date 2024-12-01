import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = `https://${'backendUrl'}/`;

export const api = createApi({
    reducerPath: 'signature',
    // baseQuery: fetchBaseQuery({baseUrl, credentials: 'include'}),
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['Signature'],
    endpoints: (builder) => ({
        getPaperFilters: builder.query<any[], any>({
            query: (params) => ({
                url: 'LibrariesEndpoints.BOOKS_PAPER_FILTER',
                method: 'GET',
                params,
            }),
            transformResponse: (response: { data: any [] }) => response.data,
            providesTags: ['Signature'],
        }),
        startRental: builder.mutation<any, any>({
            query: ({bookId}) => ({
                url: `/rental/start`,
                method: 'POST',
            }),
            transformResponse: (response: { data: any }) => response.data,
            invalidatesTags: ['Signature'],
        }),
    }),
});

export const {
    useGetPaperFiltersQuery,
    useStartRentalMutation,
} = api;
