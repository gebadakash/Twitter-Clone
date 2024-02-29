import React, { useState } from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteOutlined } from "@mui/icons-material";
import ReplyModel from "./ReplyModel";

const Tweetcard = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const[openReplyModel, setopenReplyModel] = useState(false);
  const handleOpenReplyModel =() => setopenReplyModel(true);
  const handleCloseReplyModel =() => setopenReplyModel(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    console.log("delete Tweet..");
    handleClose();
  };


  const handleCreateRetweet = () => {
    console.log("handle create retweet");
  };

  const handleLiketweet=()=>{

    console.log("handle like tweet..")

  }

  return (
    <React.Fragment>
      {/* <div className='flex item-center font-semibold text-gray-700 py-2'>
        <RepeatIcon></RepeatIcon>
        <p>You Retweet</p>


        </div> */}

      <div className="flex space-x-5">
        <Avatar
          alt="username"
          onClick={() => navigate(`/profile/${6}`)}
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
          className="cursor-pointer"
        ></Avatar>

        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Code with Akash</span>
              <span className="text-gray-600">@akashgebad. 2m</span>
              <img
                className="ml-2 w-5 h-5"
                src="https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                alt=""
              ></img>
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon></MoreHorizIcon>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">
            <div onClick={()=> navigate(`/twit/${3}`)} className="cursor-pointer">
              <p className="mb-2 p-0">
                twitter clone - Full stack project with spring boot and React
              </p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="./img/tweet.jpg"
              ></img>
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                ></ChatBubbleOutlineIcon>
                <p>43</p>
              </div>

              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex item-center`}
              >
                <RepeatIcon
                  className="cursor-pointer"
                  onClick={handleCreateRetweet}
                ></RepeatIcon>

                <p>54</p>
              </div>

              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex item-center`}
              >
            {true ? <FavoriteIcon
                className="cursor-pointer"
                onClick={handleLiketweet}
            ></FavoriteIcon>:<FavoriteOutlined
                className="cursor-pointer"
                onClick={handleLiketweet}
            ></FavoriteOutlined> }

                <p>54</p>
              </div>


              <div className="space-x-3 flex items-center text-gray-600">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                ></BarChartIcon>
                <p>430</p>
              </div>

              <div className="space-x-3 flex items-center text-gray-600">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                ></FileUploadIcon>
                <p>430</p>
              </div>


            </div>
          </div>
        </div>
      </div>

      <section>
        <ReplyModel open={openReplyModel} handleClose={handleCloseReplyModel}></ReplyModel>
      </section>
    </React.Fragment>
  );
};

export default Tweetcard;
