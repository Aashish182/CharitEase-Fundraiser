
const backendDomain = "http://localhost:8080";

const SummaryApi = {
    register :{
        url: `${backendDomain}/api/Register`,
        method : "post"
    },
    login :{
        url: `${backendDomain}/api/Login`,
        method : "post"
    },
    current_user :{
        url: `${backendDomain}/api/user-details`,
        method : "get"
    },
    logout_user :{
        url: `${backendDomain}/api/userLogout`,
        method : "get"
    },
    createCampaign :{
        url: `${backendDomain}/api/createCampaign`,
        method : "post"
    },
    campaigndetail :{
        url: `${backendDomain}/api/campaignDetails`,
        method : "get"
    },
    categoryCampaign :{
        url: `${backendDomain}/api/get-categoryCampaign`,
        method: "get"
    },
    campaignDetails :{
        url: `${backendDomain}/api/campaign-details`,
        method: "post"
    },
    campaignDetailsUser :{
        url: `${backendDomain}/api/campaign-details-user`,
        method: "post"
    },
    DeleteCampaign :{
        url : `${backendDomain}/api/delete-campaign`,
        method : "post"
    },
    updateCampaign :{
        url : `${backendDomain}/api/update-campaign`,
        method : "post"
    },
    updateStory :{
        url : `${backendDomain}/api/story-update`,
        method : "post"
    },
    getUpdateStory :{
        url : `${backendDomain}/api/get-storyUpdate`,
        method : "post"
    },
    deletestory: {
        url : `${backendDomain}/api/delete-story`,
        method : 'post'
    },
    categoryWiseCampaign: {
        url : `${backendDomain}/api/category-campaign`,
        method : 'post'
    },
    allUser: {
        url: `${backendDomain}/api/all-users`,
        method: 'get'
    },
    updateUser: {
        url: `${backendDomain}/api/update-user`,
        method: 'post'
    },
    contactDetail: {
        url: `${backendDomain}/api/contact-detail`,
        method: "post"
    },
    allContact: {
        url: `${backendDomain}/api/all-contacts`,
        method: 'get'
    },
}


export default SummaryApi;
