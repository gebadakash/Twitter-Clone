import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SubscriptionModal from "../SubscriptionModal/SubscriptionModal";

const RightPart = () => {
  const [openSubscriptionModal, setOpenSubscriptionModal] = React.useState(false);
  const handleOpenSubscriptionModal = () => setOpenSubscriptionModal(true);
  const handleCloseSubscriptionModal = () => setOpenSubscriptionModal(false);
  const handleChangeTheme = () => {
    console.log("handle change theme..");
  };
  return (
    <div className="py-5 stick top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        ></input>

        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500"></SearchIcon>
        </div>

        <Brightness4Icon
          className="ml-3 cursor-pointer"
          onClick={handleChangeTheme}
        ></Brightness4Icon>
      </div>

      <section className="my-5">
        <h1 className="text-xl font-bold">Get Verfied</h1>
        <h1 className="my-2 font-bold">Subscibe to unlock new features</h1>
        <Button
          variant="contained"
          onClick={handleOpenSubscriptionModal}
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
        >
          Get verified
        </Button>
      </section>

      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-xl py-1">What's Happeneing ?</h1>

        <div>
          <p className="text-sm">Fifa Women"s World cup. Live</p>
          <p className="font-bold">India vs Argentina</p>
        </div>

        {[1, 1, 1].map((item) => (
          <div className="flex justify-between w-full">
            <div>
              <p className="text-sm">Entairtenment</p>
              <p className="font-bold">#The marvels</p>
              <p>34.5k Tweets</p>
            </div>
            <MoreHorizIcon></MoreHorizIcon>
          </div>
        ))}
      </section>
      <section>
        <SubscriptionModal open={openSubscriptionModal} handleClose={handleCloseSubscriptionModal}></SubscriptionModal>
      </section>
    </div>
  );
};

export default RightPart;
