import { CheckBox } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import AuthModal from "./AuthModel";

const Authentication = () => {
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const handleOpenAuthModel=()=>setOpenAuthModel(true);
  const handleCloseAuthModel=()=>setOpenAuthModel(false);

  return (
    <div>
      <Grid className="overflow-y-hidden" container>
        <Grid className="hidden lg:block" item lg={7}>
          <img
            src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
            alt=""
          />
          <div className="absolute top-[26%] left-[19%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="300"
              fill="currentColor"
              class="bi bi-twitter-x"
              viewBox="0 0 24 24"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </div>
        </Grid>

        <Grid className="px-10" lg={5} xs={12}>
          <h1 className="mt-10 font-bold text-5xl">Happening Now</h1>
          <h1 className="font-bold text-3xl py-16">Join Twitter Today</h1>

          <div className="w-[60%]">
            <div className="w-full">
              <GoogleLogin width={330}></GoogleLogin>
              <p className="py-5 text-center">OR</p>
              <Button onClick={handleOpenAuthModel}
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  borderRadius: "29px",
                  py: "7px",
                }}
              >
                CREATE ACCOUNT
              </Button>

              <p className="text-sm mt-2"><CheckBox/> By signing up, you agree to the terms of Service and Privacy Policy, including Cookie Use.</p>
            </div>

            <div className="mt-10">
            <h1 className="font-bold text-xl mb-5">Already Have Account ?</h1>
            <Button onClick={handleOpenAuthModel}
                fullWidth
                variant="outlined" 
                size="large"
                sx={{
                  borderRadius: "29px",
                  py: "7px",
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <AuthModal open={openAuthModel} handleClose={handleCloseAuthModel}></AuthModal>
    </div>
  );
};

export default Authentication;
