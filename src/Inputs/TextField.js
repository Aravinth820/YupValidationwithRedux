import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  textfield: {
    width: "250px"
  }
}));

export default function App(props) {
  const classes = useStyles();
  const {
    error,
    mandatory,
    handleChange,
    placeholder,
    name,
    child,
    value
  } = props;

  return (
    <TextField
      id="input-with-icon-textfield"
      autoComplete="off"
      className={classes.textfield}
      placeholder={placeholder}
      name={name}
      child={child}
      value={value}
      onChange={handleChange}
      error={Boolean(error)}
      helperText={error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {mandatory ? (
              <ArrowRightIcon
                style={{
                  color: "brown",
                  transform: "rotate(45deg)",
                  fontSize: "30px",
                  position: "relative",
                  bottom: "-12px",
                  left: "12px"
                }}
              />
            ) : null}
          </InputAdornment>
        )
      }}
      variant="standard"
    />
  );
}
