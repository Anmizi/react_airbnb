import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data";
import classNames from "classnames";
const EntireFilter = memo(() => {
  const [filterItems, setFilterItems] = useState([]);

  const handleItemClick = (item) => {
    if (filterItems.includes(item)) {
      const idx = filterItems.indexOf(item);
      const newItems = [...filterItems];
      newItems.splice(idx, 1);
      setFilterItems(newItems);
    } else {
      setFilterItems([...filterItems, item]);
    }
  };
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, idx) => {
          return (
            <div
              className={classNames("item", {
                active: filterItems.includes(item),
              })}
              onClick={() => handleItemClick(item)}
              key={idx}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
