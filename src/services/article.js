import { createApi } from '@reduxjs/toolkit/query/react'


export const articleApi = createApi({
    reducerPath: 'articleApi',

    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `test`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi