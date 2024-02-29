import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useFormik } from "formik";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ReplyModel({handleClose, open}) {
  const navigate = useNavigate();
  const [uploadingImage, setUploadImage] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState("");

  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      twitId: 4,
    },

    onSubmit: handleSubmit,
  });

  const handleSelectImage = (event) => {
    setUploadImage(true);
    const imgUrl = event.target.files[0];

    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadImage(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                </div>
              </div>

              <div className="mt-2">
                <div
                  onClick={() => navigate(`/twit/${3}`)}
                  className="cursor-pointer"
                >
                  <p className="mb-2 p-0">
                    twitter clone - Full stack project with spring boot and
                    React
                  </p>
                  <img
                    className="w-[28rem] border border-gray-400 p-5 rounded-md"
                    src="./img/tweet.jpg"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <section className={`py-10 `}>
            <div className="flex space-x-5">
              <Avatar
                alt="username"
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
              ></Avatar>

              <div className="w-full">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="content"
                      placeholder="What is Happening?"
                      className={`border-none outline-none text-xl bg-transparent`}
                      {...formik.getFieldProps("content")}
                    ></input>
                    {formik.errors.content && formik.touched.content && (
                      <span className="text-red-500">
                        {formik.errors.content}
                      </span>
                    )}
                  </div>
                  {/* <div>
                    <img src="" alt=""></img>
                </div> */}
                  <div className="flex justify-between items-center mt-5">
                    <div className="flex space-x-5 items-center">
                      <label className=" flex item-center space-x-2 rounded-md cursor-pointer">
                        <ImageIcon className="text-[#1d9bf0]"></ImageIcon>
                        <input
                          type="file"
                          name="imageFile"
                          className="hidden"
                          onChange={handleSelectImage}
                        ></input>
                      </label>

                      <FmdGoodIcon className="text-[#1d9bf0]"></FmdGoodIcon>
                      <TagFacesIcon className="text-[#1d9bf0]"></TagFacesIcon>
                    </div>

                    <div>
                      <Button
                        sx={{
                          width: "100%",
                          borderRadius: "20px",
                          paddingY: "8px",
                          paddingX: "20px",
                          bgcolor: "#1e88e5",
                        }}
                        variant="contained"
                        type="submit"
                      >
                        Tweet
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
