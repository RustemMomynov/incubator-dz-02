import React from "react";
import Slider, { SliderProps } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <PrettoSlider
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;

const PrettoSlider = styled(Slider)({
  width: 147,
  color: "#00CC22",
  height: 4,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    width: 18,
    height: 18,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover, &.Mui-active": {
      boxShadow: "0 0 0 4px rgba(0, 204, 34, 0.16)",
    },
    "&:focus, &.Mui-focusVisible": {
      boxShadow: "none",
    },
    "&::before": {
      display: "block",
      width: 6,
      height: 6,
      borderRadius: 50,
      backgroundColor: "#01CB22",
      boxShadow: "none",
    },
  },
  "& .MuiSlider-rail": {
    color: "#8B8B8B",
    opacity: 100,
    height: 4,
  },
});
