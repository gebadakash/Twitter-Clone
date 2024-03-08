import { Button, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registerUser } from "../../State/Auth/Action";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  
const currentYear = new Date().getFullYear()
const years = Array.from({length:100}, (_,i)=> currentYear-i);
const days = Array.from({length:31}, (_,i)=> i+1);
const months = [
    {value:1, label:"January"},
    {value:1, label:"January"},
    {value:1, label:"January"},
    {value:1, label:"January"},
    {value:1, label:"January"},
    {value:1, label:"January"},
    {value:1, label:"January"},
    {value:1, label:"January"},
    {value:1, label:"January"},
    {value:1, label:"January"},
    {value:1, label:"January"},
    {value:1, label:"January"},
]

const SignUpform = () => {

  const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
          fullName:"",
          email: "",
          password: "",
          dateOfBirth:{
            day:"",
            month:"",
            year:""
          }
        },
    
        validationSchema,
        onSubmit: (values) => {
            const {day,month,year}= values.dateOfBirth
            const dateOfBirth= `${year}-${month}-${day}`
            values.dateOfBirth=dateOfBirth;

            dispatch(registerUser(values))
          console.log("form value", values);
        },
      });


      const handleDateChange=(name)=>(event)=>{

        formik.setFieldValue("dateOfBirth",{

            ...formik.values.dateOfBirth,
            [name]:event.target.value,

        })
        
      }


  return (
    <form onSubmit={formik.handleSubmit}>
    <Grid container spacing={2}>

    <Grid item xs={12}>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          variant="outlined"
          size="large"
          value={formik.values.fullname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullname && Boolean(formik.errors.fullname)}
          helperText={formik.touched.fullname && formik.errors.fullname}
        />
      </Grid>




      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          variant="outlined"
          size="large"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Password"
          name="password"
          variant="outlined"
          // size="large"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Grid>

        <Grid item xs={4}>
            <InputLabel>Date</InputLabel>

            <Select name="day" value={formik.values.dateOfBirth.day}
            onChange={handleDateChange("day")}
            onBlur={formik.handleBlur}
            fullWidth>
            
            {days.map((day)=> <MenuItem key={day} value={day}>{day}</MenuItem>)}

            </Select>



        </Grid>

        <Grid item xs={4}>
            <InputLabel>Month</InputLabel>

            <Select name="month" value={formik.values.dateOfBirth.month}
            onChange={handleDateChange("month")}
            onBlur={formik.handleBlur}
            fullWidth>
            
            {months.map((month)=> <MenuItem key={month.label} value={month.value}>{month.label}</MenuItem>)}

            </Select>



        </Grid>


        <Grid item xs={4}>
            <InputLabel>Year</InputLabel>

            <Select name="year" value={formik.values.dateOfBirth.year}
            onChange={handleDateChange("year")}
            onBlur={formik.handleBlur}
            fullWidth>
            
            {years.map((year)=> <MenuItem key={year} value={year}>{year}</MenuItem>)}

            </Select>



        </Grid>



      <Grid item xs={12} className="mt-20">
        <Button
          size="large"
          fullWidth
          variant="contained"
          type="submit"
          sx={{ borderRadius: "29px", py: "15px", bgcolor: blue[500] }}
        >
          sign up
        </Button>
      </Grid>
    </Grid>
  </form>
  )
}

export default SignUpform
