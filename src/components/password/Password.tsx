import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Button from '@material-ui/core/Button';

import { TextField } from 'formik-material-ui';

export const Password = ({ submit }: any,{ values, errors, handleSubmit, handleChange, handleBlur }:any) => {
  const Schema = Yup.object().shape({
    password: Yup.string().required("This field is required").min(6,"Too Short"),
    repeatPassword: Yup.string().required("This field is required").when("password", {
      is: (submit: any) => (submit && submit.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });
  return (
    <Formik
      initialValues={{ password: "", repeatPassword: "" }}
      validationSchema={Schema}
      onSubmit={(values, { setSubmitting }) => {
        submit(2);
      }}
    >
      <Form className="mainCont">
        <div className="cont">
          <Field placeholder="Password" component={TextField} name="password" type="password" />

          {/* <ErrorMessage name="password" /> */}
          <Field
            placeholder="Repeat Password"
            name="repeatPassword"
            type="password"
            component={TextField}
            
          />
          {/* <button type="submit">Next</button> */}
          <Button variant="contained" type="submit" color="primary">
  Next
</Button>
        </div>
      </Form>
    </Formik>
  );
};

// export default Address
