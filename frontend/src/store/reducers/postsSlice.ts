import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialPostsState = {
    posts: {}
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        ...initialPostsState,
    },
    reducers: {
        setNecessaryComments(state, action: PayloadAction<boolean>) {
            state.posts = action.payload;
        },

    },
});

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
