"use client";
import React from "react";
import Select from "react-select"; 
import makeAnimated from "react-select/animated";
import { Label } from "@/components/ui/label";

interface Option {
  id: string;
  value: string;
  isDisabled?: boolean;
}

interface MultipleSelectProps {
  title: string;
  placeholder: string;
  options: Option[];
  isMulti?: boolean;
  onChange?: (selectedOptions: Option[]) => void;
}

const animatedComponents = makeAnimated();

const MultipleSelect: React.FC<MultipleSelectProps> = ({
  title,
  placeholder,
  options,
  isMulti = false,
  onChange,
}) => {
  const selectOptions = options.map((option) => ({
    label: option.value,
    value: option.id,
    isDisabled: option.isDisabled,
  }));

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="select">{title}</Label>
      <Select
        closeMenuOnSelect={!isMulti}
        components={animatedComponents}
        isMulti={isMulti}
        options={selectOptions}
        placeholder={placeholder}
        onChange={(selected) => onChange?.(selected as Option[])}
      />
    </div>
  );
};

export default MultipleSelect;



