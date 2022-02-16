import { useEffect, useState } from "react";
import Items from "./components/item";
import { useSelector, useDispatch } from "react-redux";
import { getCampaigns, setCampaigns } from "../store/actions";

export default function Home() {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state.campaigns);
  const [sortingBy, setSortingBy] = useState("");
  const brand = {
    fontSize: "25px",
    fontWeight: "600",
  };

  useEffect(() => {
    dispatch(getCampaigns());
  }, []);

  const sorting = (campaignKey) => {
    var key = "";
    if (campaignKey === "donationGoal") {
      key = "donation_percentage";
      setSortingBy("days left");
    } else if (campaignKey === "daysLeft") {
      key = "days_remaining";
      setSortingBy("donation goal");
    }

    dispatch(setCampaigns(campaigns.sort((a, b) => b[key] - a[key])));
  };

  return (
    <>
      <div className="navbar justify-content-between" role="navigation">
        <div className="d-flex align-middle">
          <img
            src="https://assets.kitabisa.cc/images/icons/meta/icons-512.png"
            alt="logo-kitabisa"
            className="rounded-pill img-thumbnail cover me-3"
            width={50}
            height={50}
          />
          <a style={brand} href="#" className="my-auto">
            Kitabisa
          </a>
        </div>

        <div className="ml-0">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() =>
              sorting(
                sortingBy === "donation goal" ? "donationGoal" : "daysLeft"
              )
            }
          >
            {sortingBy === "donation goal"
              ? "Sorting By Donation Goal"
              : "Sorting By Days Left"}
          </button>
        </div>
      </div>
      <div className="row py-5">
        {campaigns.map((campaign, id) => {
          return (
            <div className="col-md-4 my-3" key={id}>
              <Items
                onClick={campaign}
                name={campaign.title}
                dayLeft={campaign.days_remaining}
                get={campaign.donation_received}
                imgs={campaign.image}
                total={campaign.donation_percentage}
                data-toggle="modal"
                data-target="#detail_campaign"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
