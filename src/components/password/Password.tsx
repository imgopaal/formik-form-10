import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import './address.css'

export const Password = ({ submit }: any,{ values, errors, handleSubmit, handleChange, handleBlur }:any) => {
  const Schema = Yup.object().shape({
    password: Yup.string().required("This field is required").min(6,"Too Short"),
    repeatPassword: Yup.string().when("password", {
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
          <Field placeholder="Password" name="password" type="password" />
          <ErrorMessage name="password" />
          <Field
            placeholder="Repeat Password"
            name="repeatPassword"
            type="password"
            // onBlur={handleBlur}
            //   onChange={handleChange}
              // value={values.repeatPassword}
          />
          <ErrorMessage  name="repeatPassword" />
          <button type="submit">Next</button>
        </div>
      </Form>
    </Formik>
  );
};

// export default Address
