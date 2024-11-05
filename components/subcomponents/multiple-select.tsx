"use client";
import React from "react";
import Select from "react-select"; 
import makeAnimated from "react-select/animated";
import { Label } from "@/components/ui/label";

interface Option {
  id: string | number;
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
  // Mapea las opciones para que `label` y `value` estén en el formato de `react-select`
  const selectOptions = options.map((option) => ({
    label: option.value,
    value: option.id,
    isDisabled: option.isDisabled,
  }));
  
  // Ajusta `onChange` para que devuelva un array de opciones con `id` y `value`
  const handleChange = (selected: any) => {
    const mappedSelected = Array.isArray(selected)
      ? selected.map((option) => ({
          id: option.value,    // Usamos `value` como `id`
          value: option.label, // Usamos `label` como `value`
        }))
      : selected
      ? [{ id: selected.value, value: selected.label }]
      : [];
    onChange?.(mappedSelected as Option[]);
  };

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="select">{title}</Label>
      <Select
        closeMenuOnSelect={!isMulti}
        components={animatedComponents}
        isMulti={isMulti}
        options={selectOptions}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default MultipleSelect;



