import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import Tweetcard from "../HomeSection/Tweetcard";
import { Divider } from "@mui/material";

const TwitDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);
  return (
    <div>
      <React.Fragment>
        <section className={`bg-white z-50 flex items-center stick top-0 bg-opacity-95`}>
          <KeyboardBackspaceIcon
            className="cursor-pointer"
            onClick={handleBack}
          ></KeyboardBackspaceIcon>

          <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Tweet</h1>
        </section>

        <section>
            <Tweetcard></Tweetcard>
            <Divider sx={{margin:"2rem 0rem"}}></Divider>
        </section>

        <section>
            {[1,1,1].map((item)=> <Tweetcard></Tweetcard>)}
        </section>
      </React.Fragment>
    </div>
  );
};

export default TwitDetails;
