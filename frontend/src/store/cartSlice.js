import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            // Generate a unique cartId if not provided (fallback for simple additions)
            // Ideally, the component should provide a robust unique ID for customized items.
            // For simple items, id is enough.
            const itemCartId = newItem.cartId || newItem.id;

            const existingItem = state.items.find((item) => (item.cartId || item.id) === itemCartId);

            state.totalQuantity++;
            state.totalAmount += newItem.price;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id, // Keep original Product ID
                    cartId: itemCartId, // Unique ID for this cart entry
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image,
                    selectedVariant: newItem.selectedVariant, // Store customization details
                    selectedAddons: newItem.selectedAddons,
                    specialRequest: newItem.specialRequest
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },
        removeFromCart(state, action) {
            const id = action.payload; // This is now the cartId
            const existingItem = state.items.find(item => (item.cartId || item.id) === id);

            if (existingItem) {
                state.totalQuantity--;
                state.totalAmount -= existingItem.price;

                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => (item.cartId || item.id) !== id);
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice -= existingItem.price;
                }
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
