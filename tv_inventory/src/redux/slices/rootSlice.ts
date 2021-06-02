import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        episode: 'tv episode',
        rating: 1,
        season: 1,
        show:'tv show'
    },
    reducers: {
        chooseEpisode: (state, action) => { state.episode = action.payload},
        chooseShow: (state, action) => { state.show = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseEpisode, chooseShow, } = rootSlice.actions;