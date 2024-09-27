
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
    }
    
}


export default SummaryApi;
