// import React, { useState } from "react";
// import RadioButton from "../Radio";
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

//         <RadioButton />
//         <button type="submit">Sign Up</button>
//       </div>
//     </div>
//   );
// };
// export default Age;

import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

// export const Age = ({ submit }: any) => (
//   //  const [selectedDate, setSelectedDate]= useState(null);
//   return(

// );

export const Age = ({ submit }: any) => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <Formik
        initialValues={{
          picked: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          Swal.fire("Sign up Successful", "You can login now", "success");
          submit(0);
        }}
      >
        <Form>
          <span>Date of birth </span>
          <DatePicker
            placeholderText="MM-DD-YYYY"
            selected={selectedDate}
            onChange={(date: any) => setSelectedDate(date)}
          />
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
      </Formik>
    </div>
  );
};
