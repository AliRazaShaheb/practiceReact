import { Box, styled, TextField } from "@mui/material";
import { useState } from "react";

const container = {
  display: "flex",
  alignContent: "center",
  width: "15rem",
  height: "20rem",
  backgroundColor: "gray",
  flexDirection: "column",
  padding: "1rem"
};

const UserFormValidation = () => {
  const [{ username, password }, setFormInput] = useState({
    username: "",
    password: ""
  });
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [formErr, setFormErr] = useState(false);

  const handleChangeUserName = (e) => {
    setFormInput((prev) => {
      return {
        ...prev,
        username: e.target.value
      };
    });
  };
  const handleChangePassword = (e) => {
    setFormInput((prev) => {
      return {
        ...prev,
        password: e.target.value
      };
    });
  };
  const handleBlurUser = () => {
    username === "" ? setUserErr(true) : setUserErr(false);
  };
  const handleBlurPass = () => {
    username === "" ? setPassErr(true) : setPassErr(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 3 || password.length < 3) {
      return setFormErr(true);
    }
    console.log({ username, password });
    setFormErr(false);
    setFormInput((prev) => ({ ...prev, username: "", password: "" }));
  };

  return (
    <div style={container}>
      <h1
        style={{
          margin: "0 auto",
          marginBottom: "1rem"
        }}
      >
        Form
      </h1>

      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div>
          <label htmlFor="">Username:</label>

          <input
            type="text"
            value={username}
            onChange={handleChangeUserName}
            onBlur={handleBlurUser}
          />

          <p
            style={{
              fontSize: "0.7rem",
              color: "orange"
            }}
          >
            {userErr && "please fill this input"}
          </p>
        </div>

        <div>
          <label htmlFor="">password:</label>
          <input
            value={password}
            type="password"
            onChange={handleChangePassword}
            onBlur={handleBlurPass}
          />

          <p
            style={{
              fontSize: "0.7rem",
              color: "orange"
            }}
          >
            {passErr && "please fill this input"}
          </p>
        </div>

        <input
          type="button"
          value="Submit"
          onClick={handleSubmit}
          style={{
            margin: "0 auto"
          }}
        />
      </form>
      <br />
      <br />
      <p> {formErr && "minimum 3 data required"}</p>
    </div>
  );
};

export default UserFormValidation;
