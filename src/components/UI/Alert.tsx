import {Alert} from "@heroui/react";

type AlertCompProps = {
    title : string,
    description: string,
    variant?: 'solid' | 'bordered' | 'flat' | 'faded',
    color?: 'secondary' | 'success' | 'danger' | 'warning',
}

export default function AlertComp({title, description, variant, color} : AlertCompProps) {


  return (
    <div className="flex items-center justify-center w-full">
      <Alert 
      description={description} 
      title={title} 
      variant={variant ? variant : 'faded'} 
      color={color ? color : 'secondary'}
      radius='full'
      isClosable
      />
    </div>
  );
}
