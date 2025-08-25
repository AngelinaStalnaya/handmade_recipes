'use client';

import { Form } from "@heroui/react";
import { FormEvent } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

export default function RegistrationFormComp() {

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4"
      onReset={() => console.log("reset")}
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        console.log(`submit ${JSON.stringify(data)}`);
      }}
    >
      <Input
        required
        errorMessage="Please enter a valid username"
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username"
        type="text"
      />

      <Input
        required
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      <div className="flex gap-2">
        <Button variant="solid" type="submit">
          Submit
        </Button>
        <Button type="reset" variant="bordered">
          Reset
        </Button>
      </div>
    </Form>
  );
}