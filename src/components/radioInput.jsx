
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioInput({ label }) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
      >
        <FormControlLabel value={true} control={<Radio />} label="Yes" />
        <FormControlLabel value={false} control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
}
