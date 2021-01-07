import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import "./basicInfo.css";
import Button from '@material-ui/core/Button';

import { TextField } from 'formik-material-ui';


export const BasicInfo = ({submit}:any) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required")
          .min(3, "Must be 3 characters or more"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required")
          .min(3, "Must be 3 characters or more"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={() => {
        submit(1)
      }}
    >
      <Form className="mainCont">
        <div className="cont">
          <Field component={TextField} placeholder="First Name" name="firstName" type="text" />
          {/* <ErrorMessage name="firstName" /> */}
          <Field component={TextField} placeholder="Last Name" name="lastName" type="text" />
          {/* <ErrorMessage name="lastName" /> */}
          <Field component={TextField} placeholder="Email" name="email" type="email" />
          {/* <ErrorMessage name="email" /> */}
          {/* <button type="submit">Next</button> */}
          <Button type="submit" variant="contained" color="primary">
        Primary
      </Button>
        </div>
      </Form>
    </Formik>
  );
};

// export default Address
