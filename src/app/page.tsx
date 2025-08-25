'use client';
import RegistrationFormComp from "@/components/forms/RegistrationForm";
import Button from "@/components/UI/Button";
import InputComp from "@/components/UI/Input";
import LinkComp from "@/components/UI/Link";


export default function Home() {
  return (
    <>Home page 
    <Button onPress={() => console.log('Btn clicked')}>click 
    </Button>
    <InputComp name='try' type='password'/>  
    <LinkComp onPress={() => console.log('Link pressed')}>link</LinkComp>
    <RegistrationFormComp/>
    </>
  );
}
 








