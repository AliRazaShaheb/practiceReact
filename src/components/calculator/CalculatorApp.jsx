import { styled } from "@mui/material/styles";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { useState } from "react";

const CalculatorApp = () => {
  const [val, setVal] = useState();
  const [result, setResult] = useState();
  const handleClick = (value) => {
    const optr = ["AC", "C", "%", "/", "*", "-", "+", "=", "."];
    if (
      (optr.includes(value) && val === "") ||
      (optr.includes(value) && optr.includes(val.slice(-1)))
    ) {
      return;
    }
    setVal((prev) => prev + value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "20rem",
        background: "gray",
        borderRadius: "10px",
        overflow: "hidden"
      }}
    >
      <Stack spacing={1} p={1}>
        <Stack>
          <div
            style={{
              width: "15rem",
              height: "3rem",
              background: "rgba(255,255,255,0.5)",
              color: "black",
              padding: "0.2rem 0.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              textAlign: "right",
              flexDirection: "column",
              fontWeight: "bold",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px"
            }}
          >
            <p
              style={{
                fontSize: "0.6rem"
              }}
            >
              {val}
            </p>

            <p
              style={{
                fontSize: "1.5rem",
                color: "rgba(0,0,0,0.7)"
              }}
            >
              {result}
            </p>
          </div>
        </Stack>
        <Stack spacing={2} alignItems="space-between">
          <Stack direction="row" spacing={1} justifyContent="space-between">
            <CustomButton value="AC" handleClick={handleClick} />
            <CustomButton value="C" handleClick={handleClick} />
            <CustomButton value="%" handleClick={handleClick} />
            <CustomButton value="/" handleClick={handleClick} />
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="space-between">
            <CustomButton value="7" handleClick={handleClick} />
            <CustomButton value="8" handleClick={handleClick} />
            <CustomButton value="9" handleClick={handleClick} />
            <CustomButton value="*" handleClick={handleClick} />
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="space-between">
            <CustomButton value="4" handleClick={handleClick} />
            <CustomButton value="5" handleClick={handleClick} />
            <CustomButton value="6" handleClick={handleClick} />
            <CustomButton value="-" handleClick={handleClick} />
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="space-between">
            <CustomButton value="1" handleClick={handleClick} />
            <CustomButton value="2" handleClick={handleClick} />
            <CustomButton value="3" handleClick={handleClick} />
            <CustomButton value="+" handleClick={handleClick} />
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="space-between">
            <CustomButton value="0" handleClick={handleClick} />
            <CustomButton value="." handleClick={handleClick} />
            <CustomButton value="00" handleClick={handleClick} />
            <CustomButton value="=" handleClick={handleClick} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CalculatorApp;

const CustomButton = ({ value, handleClick }) => {
  const MyBtn = styled(Button)({
    minWidth: "3rem",
    padding: "0.4rem 0",
    background: "rgba(0,0,0,0.5)"
  });
  return (
    <MyBtn variant="contained" onClick={() => handleClick(value)}>
      {value}
    </MyBtn>
  );
};
