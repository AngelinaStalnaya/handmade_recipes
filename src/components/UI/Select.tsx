'use client';

import {Select, SelectItem} from "@heroui/react";


type SelectCompProps = {
    items: Array<{key: string, label: string}>
    label?: string, 
    placeholder?: string, 
    isRequired?: boolean, 
}

export default function SelectComp({items, label, placeholder, isRequired} : SelectCompProps) {
  return (
    <Select
      className="max-w-md"
      items={items}
      label={label}
      placeholder={placeholder}
      isRequired={isRequired}
      size='md'
      color='secondary'
      radius='full'
      labelPlacement='outside'
    >
      {(items) => <SelectItem>{items.label}</SelectItem>}
    </Select>
  );
}
