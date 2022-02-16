import axios from "axios";

export const setCampaigns = (campaigns) => {
  return {
    type: "SET_CAMPAIGNS",
    payload: campaigns,
  };
};

export const getCampaigns = () => {
  return (dispatch) => {
    dispatch(setCampaigns([]));
    axios({
      method: "get",
      url: "https://api.allorigins.win/get?url=https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json",
    })
      .then((res) => {
        dispatch(setCampaigns(JSON.parse(res.data.contents).data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
