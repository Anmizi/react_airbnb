import React, { memo } from 'react'
import EntireFilter from "./c-cpns/entire-filter";
import { EntireWrapper } from "./style";

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <EntireFilter />
    </EntireWrapper>
  );
});

export default Entire