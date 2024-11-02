"use client";
import React from "react";
import Select from "react-select"; 
import makeAnimated from "react-select/animated";
import { Label } from "@/components/ui/label";

export interface Option {
  id: string | number;  // Ahora aceptamos tanto string como number
  value: string;
}

interface MultipleSelectProps {
  title: string;
  options: Option[];
  isMulti?: boolean;
  onChange?: (selectedOptions: Option[] | Option) => void;  // Modificamos el tipo
  placeholder?: string;  // Hacemos el placeholder opcional
}

const animatedComponents = makeAnimated();

const MultipleSelectSync: React.FC<MultipleSelectProps> = ({
  title,
  options,
  isMulti = false,
  onChange,
  placeholder,
}) => {
  const selectOptions = options.map((option) => ({
    label: option.value,
    value: option.id,
  }));

  const handleChange = (selected: any) => {
    if (isMulti) {
      // Para selección múltiple, convertimos la selección a array de Option
      const selectedValues = selected ? selected.map((item: any) => ({
        id: item.value,
        value: item.label
      })) : [];
      onChange?.(selectedValues);
    } else {
      // Para selección única
      if (!selected) {
        // Si no hay selección, enviamos un array vacío o la primera opción según tu necesidad
        onChange?.([]); // o podrías usar: onChange?.(options[0]);
        return;
      }
      
      const selectedValue = {
        id: selected.value,
        value: selected.label
      };
      onChange?.(selectedValue);
    }
  };

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="select">{title}</Label>
      <Select
        closeMenuOnSelect={!isMulti}
        components={animatedComponents}
        isMulti={isMulti}
        options={selectOptions}
        placeholder={placeholder || `Selecciona ${title}`}
        onChange={handleChange}
      />
    </div>
  );
};

export default MultipleSelectSync;
