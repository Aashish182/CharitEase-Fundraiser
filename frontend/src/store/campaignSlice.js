import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  campaign : null
}

export const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {
    setCampaignDetails : (state,action) => {
      state.campaign = action.payload
      console.log("campaignDetails:",action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCampaignDetails } = campaignSlice.actions

export default campaignSlice.reducer