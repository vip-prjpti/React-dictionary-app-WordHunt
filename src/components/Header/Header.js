import { MenuItem, TextField } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/system";
import React from "react";
import "./Header.css";
import categories from "../data/category";

const Header = ({ setCategory, category, word, setWord }) => {
  // const darkTheme = createTheme({
  //     palette: {
  //       mode: 'dark',
  //     },
  //   });

  const handleChange = (langauge) => {
    setCategory(langauge);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <TextField
          className="search"
          id="standard-basic"
          label="Search a Word"
          variant="standard"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <TextField
          className="select"
          select
          label="Select a langauge"
          value={category}
          onChange={(e) => handleChange(e.target.value)}
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default Header;
