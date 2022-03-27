import "./blueStyle.css";

const FormBlue = () => {
  return (
    <form className="arz-container">
      <div className="inputF">
        <label htmlFor="fullName">Your Full Name:</label>
        <input type="text" id="fullName" />
      </div>

      <div>
        <div className="inputF">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" />
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
        <textarea name="" id="description" cols="30" rows="8"></textarea>
      </div>
    </form>
  );
};

export default FormBlue;
