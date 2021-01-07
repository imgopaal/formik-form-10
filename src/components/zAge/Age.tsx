import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import * as Yup from "yup";
import Button from '@material-ui/core/Button';


export const Age = ({ submit }: any) => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <Formik
        initialValues={{
          picked: "",
        }}
        validationSchema={Yup.object({
          picked: Yup.string().required("Gender Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          Swal.fire("Sign up Successful", "You can login now", "success");
          submit(0);
        }}
      >
        <Form>
          <span>Date of birth </span>
          <DatePicker
            required
            placeholderText="MM-DD-YYYY"
            selected={selectedDate}
            onChange={(date: any) => setSelectedDate(date)}
          />
          <div role="group" aria-labelledby="my-radio-group">
            <ErrorMessage name="picked" >
            { msg => <div style={{ color: 'red' }}>{msg}</div> }
            </ErrorMessage>
            <label>
              <Field type="radio" name="picked" value="Male" />
              Male
            </label>
            <label>
              <Field type="radio" name="picked" value="Female" />
              Female
            </label>
            <br />
          </div>

          <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
        </Form>
      </Formik>
    </div>
  );
};
