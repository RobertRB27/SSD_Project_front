'use client';

import Select from 'react-select';
import makeAnimated from "react-select/animated";
import { Label } from '@/components/ui/label';

interface Option {
    id: string;
    value: string;
    isDisabled?: boolean;
  }

interface SelectProps {
    options: Option[];
    title: string;
    isMulti: boolean;
}

const animatedComponents = makeAnimated();

export default function MultipleSelect({options, title, isMulti}: SelectProps) {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="select">{title}</Label>
      <Select
        closeMenuOnSelect={!isMulti}
        components={animatedComponents}
        isMulti={isMulti}
        options={options}
        placeholder={`Selecciona ${title}`}
      />
    </div>
           
  );
}



