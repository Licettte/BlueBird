import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const backendUrl = `localhost:8080/api/v1/`;
export const baseUrl = `http://localhost:8080/api/v1/`;

interface SignRequest{
    documentId: number
}
interface PredictRequest{
    clientId: number
}

export const signatureApi = createApi({
    reducerPath: 'signature',
    // baseQuery: fetchBaseQuery({baseUrl, credentials: 'include'}),
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['Signature'],
    endpoints: (builder) => ({
        getPredict: builder.query<any[], PredictRequest>({
            query: (clientId) => ({
                url: `client?clientId=${clientId}'`,
                method: 'GET',
            }),
            transformResponse: (response: { data: any [] }) => response.data,
            providesTags: ['Signature'],
        }),
        getClient: builder.query<any[], PredictRequest>({
            query: (clientId) => ({
                url: `predict?clientId=${clientId}'`,
                method: 'GET',
            }),
            transformResponse: (response: { data: any [] }) => response.data,
            providesTags: ['Signature'],
        }),
        getAllowSignatures: builder.query<any[], PredictRequest>({
            query: (clientId) => ({
                url: `allowed-signatures?clientId=${clientId}'`,
                method: 'GET',
            }),
            transformResponse: (response: { data: any [] }) => response.data,
            providesTags: ['Signature'],
        }),
        signDocument: builder.mutation<any, number>({
            query: (documentId) => ({
                url: `sign-document?documentId=${documentId}`,
                method: 'PATCH',
            }),
            transformResponse: (response: { data: any }) => response.data,
            invalidatesTags: ['Signature'],
        }),


    }),
});

export const {
    useGetPredictQuery,
    useGetClientQuery,
  useSignDocumentMutation,

} = signatureApi;
