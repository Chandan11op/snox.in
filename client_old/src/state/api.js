import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_DEV_URL
    }),
    reducerPath: "productApi",
    tagTypes: [
        "Product",
    ],
    endpoints: (build) => ({

        // apis for bdm works
        
        getProduct: build.query({
            query: (id) => `product/${id}`,
            providesTags: ["Product"],
        }),
        getAllProducts: build.query({
            query: () => 'product/',
            providesTags: ["Products"],
        }),

    }),
});

export const {
    useGetProductQuery,
    useGetAllProductsQuery,
} = api;