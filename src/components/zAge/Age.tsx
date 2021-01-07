// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import RadioButton from "../Radio";
// import "react-datepicker/dist/react-datepicker.css";
// import "./age.css";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const Age = ({ submit }: any) => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   return (
//     <div className="age">
//       <div className="ageCont">
//         <Formik
//           initialValues={{ date: "", gender: "" }}
//           validationSchema={Yup.object({
//             date: Yup.string().required("Required"),
//             gender: Yup.string().required("Required"),
//           })}
//           onSubmit={() => {
//             submit(3);
//           }}
//         >
//         </Formik>

//         <span>Date of birth </span>

//         <DatePicker
//           placeholderText="MM-DD-YYYY"
//           selected={selectedDate}
//           onChange={(date: any) => setSelectedDate(date)}
//           />
//         <RadioButton />
//         <button type="submit">Sign Up</button>
//       </div>
//     </div>
//   );
// };
// export default Age;

import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

export const Age=({submit}:any)=> (
  <div>
    <Formik
      initialValues={{
        picked: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        submit(0);
      }}
    >
      {({ values }) => (
        <Form>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="Male" />
              Male
            </label>
            <label>
              <Field type="radio" name="picked" value="Female" />
              Female
            </label>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

