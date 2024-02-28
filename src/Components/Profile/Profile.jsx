import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Tab} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Tweetcard from "../HomeSection/Tweetcard";

const Profile = () => {

  const [tabValue,setTabvalue] = useState("1");

  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const handleOpenProfileModel = () => {
    console.log("open profile model");
  };

  const handleFollowUser = () => {
    console.log("handle follow model");
  };

  const handleTabChange=(event, newValue)=>{

    setTabvalue(newValue);

    if(newValue===4){

        console.log("likes tweet")
    }else if(newValue ===1){

        console.log("users tweets")
    }
  }

  return (
    <div>
      <section className={`bg-white z-50 flex items-center stick top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        ></KeyboardBackspaceIcon>

        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">akashgebad</h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2023/07/25/19/47/milky-way-8149815_640.jpg"
        ></img>
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="code with akash"
            src="http://res.cloudinary.com/dnbw04gbs/image/upload/v1690639851/instagram%20post/bywtgh9vj4e80aywstss.png"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          ></Avatar>
          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Code with Akash</h1>
            {true && (
              <img
                className="ml-2 w-5 h-5"
                src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                alt=""
              ></img>
            )}
          </div>
          <h1 className="text-gray-500">@akashgebad</h1>
        </div>

        <div className="mt-2 space-y-3">
          <p>
            Hello, i am akash gebad learning now react. you will find full stack
            project on my github.
          </p>

          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon></BusinessCenterIcon>
              <p className="ml-2">Education</p>
            </div>

            <div className="flex items-center text-gray-500">
              <LocationOnIcon></LocationOnIcon>
              <p className="ml-2">India</p>
            </div>

            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon></CalendarMonthIcon>
              <p className="ml-2">Joined June 2024</p>
            </div>
          </div>

          <div className="flex item-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>0</span>
              <span className="text-gray-500">Following</span>
            </div>

            <div className="flex items-center space-x-1 font-semibold">
              <span>1.2K</span>
              <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Tweets" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Medias" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
        {[1,1,1,1].map((item)=> <Tweetcard></Tweetcard>)}
        </TabPanel>
        <TabPanel value="2">users Replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>
      </section>
    </div>
  );
};

export default Profile;
