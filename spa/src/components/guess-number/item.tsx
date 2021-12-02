import { Box, SxProps, Theme } from "@mui/system";
import React from "react";

import { Range } from "./type";

type Styles = {
  root?: SxProps<Theme>;
  indicator?: SxProps<Theme>;
};
export type ItemProperty = Range & {
  sx?: Styles;
};
//https://mui.com/system/the-sx-prop/
export const Item = (props: ItemProperty) => {
  const { sx, min, max, displayNumber } = props;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", ...sx?.root }}>
      <Box sx={{ height: 40, bgcolor: "lightgreen", ...sx?.indicator }} />
      {displayNumber && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>{min}</span>
          <span>{max}</span>
        </Box>
      )}
    </Box>
  );
};
