import React, { useState } from "react";

import Select, { OnChangeValue } from "react-select";
import { IOption } from "../../types/Options";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const options: IOption[] = [
  {
    value: "",
    label: "all",
  },
  {
    value: "art",
    label: "art",
  },
  {
    value: "biography",
    label: "biography",
  },
  {
    value: "computers",
    label: "computers",
  },
  {
    value: "history",
    label: "history",
  },
  {
    value: "medical",
    label: "medical",
  },
  {
    value: "poetry",
    label: "poetry",
  },
];

const options2: IOption[] = [
  {
    value: "relevance",
    label: "relevance",
  },
  {
    value: "newest",
    label: "newest",
  },
];

interface selectProps {
  sort: string;
  currentCategory: string;
  setCurrentCategory: any;
  setSort: any;
}

const Selects: React.FC<selectProps> = ({
  sort,
  setSort,
  currentCategory,
  setCurrentCategory,
}) => {
  const getValue = () => {
    return currentCategory
      ? options.find((c) => c.value === currentCategory)
      : "";
  };

  const onChange = (newValue: OnChangeValue<IOption, false>) => {
    setCurrentCategory(newValue!.value);
  };

  const getValue2 = () => {
    return sort ? options.find((c) => c.value === sort) : "";
  };

  const onChange2 = (newValue: OnChangeValue<IOption, false>) => {
    setSort(newValue!.value);
  };

  return (
    <div>
      <label>Categories</label>
      <Select
        classNamePrefix="custom-select"
        //@ts-ignore
        onChange={onChange}
        value={getValue()}
        options={options}
        placeholder="all"
        components={animatedComponents}
      />
      <label>Sorting by</label>
      <Select
        classNamePrefix="custom-select2"
        //@ts-ignore
        onChange={onChange2}
        value={getValue2()}
        options={options2}
        placeholder="relevance"
        components={animatedComponents}
      />
    </div>
  );
};

export default Selects;
