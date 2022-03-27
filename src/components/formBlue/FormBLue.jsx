import "./blueStyle.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const FormBlue = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form className="arz-container">
      <div className="inputF">
        <label htmlFor="fullName">Your Full Name:</label>
        <input type="text" id="fullName" />
      </div>

      <div className="dob_city">
        <div className="inputF">
          <label htmlFor="dob">Date of Birth:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <div className="inputF">
          <label htmlFor="country">Country of Residence or Citizenship:</label>
          <input type="text" id="country" />
        </div>
      </div>

      <div className="inputF">
        <label htmlFor="school">What school do you plan to attend:</label>
        <input type="text" id="school" />
      </div>

      <div className="inputF">
        <label htmlFor="description">
          Please take a moment to describe your intended area of study:
        </label>
        <textarea
          name=""
          id="description"
          cols="30"
          rows="8"
          placeholder="Enter details here"
        ></textarea>
      </div>
    </form>
  );
};

export default FormBlue;
