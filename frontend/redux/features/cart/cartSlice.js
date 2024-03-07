import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('cart') ? JSON.parase(localStorage.getItem
    ('cart')) : {cartItems: [], shippingAddress: {}, paymentMethod :"paypal"};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { user, rating, numReviews, reviews, ...item } = action.
            payload;
            const existItem = state.cartItems.find((x)=> x._id === item._id);

            if (existItem){
                state.cartItems = state.cartItems.map((x) =>
                x._id === existItem._id ? item : x 
                );
            } else {
                state.cartItems = [...state.cartItems, item];
            }

        },
    }
})
