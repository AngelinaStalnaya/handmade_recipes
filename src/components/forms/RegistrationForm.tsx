'use client';

import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { regSchema, RegSchemaType } from "@/validation/registration.schema";
import { Button, Form, Input } from "@heroui/react";

export default function RegistrationFormComp() {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { isSubmitting }
  } = useForm({
    resolver: zodResolver(regSchema),
    defaultValues: {
      'username': 'uij',
      'password': '12345678A~',
      'confirmPassword': '12345678A~',
      'email': 'abc@abc.com'
    }
  })

  const methods = useForm()

  const zeroState = {
    'username': '',
    'password': '',
    'confirmPassword': '',
    'email': ''
  }

  const onSubmit: SubmitHandler<RegSchemaType> = async (data, event) => {
    event?.preventDefault();

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const newData = JSON.stringify(data)
      console.log(`submit ${newData}, typeof ${typeof data}`);
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <FormProvider {...methods}>
      <Form method='post'
        className="w-full max-w-xs flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        onReset={() => reset(zeroState)}
      >
        {/* TODO: refactor duplication of Controller */}
        <Controller
          {...register('username')}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              isRequired
              id='username'
              label="Username"
              labelPlacement="outside"
              placeholder="Enter your username"
              type="text"
              errorMessage={fieldState.error?.message}
              isInvalid={fieldState.invalid}
              validationBehavior="aria"
              color='secondary'
              size='md'
              radius='full'
              variant='flat'

            />
          )}
        />
        <Controller
          {...register('email')}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              isRequired
              id='email'
              label="Email"
              labelPlacement="outside"
              placeholder="Enter your email"
              type="text"
              errorMessage={fieldState.error?.message}
              isInvalid={fieldState.invalid}
              validationBehavior="aria"
              color='secondary'
              size='md'
              radius='full'
              variant='flat'
            />
          )}
        />

        <Controller
          {...register('password')}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              isRequired
              id='password'
              label="Password"
              labelPlacement="outside"
              placeholder="Enter your password"
              type="password"
              errorMessage={fieldState.error?.message}
              isInvalid={fieldState.invalid}
              validationBehavior="aria"
              color='secondary'
              size='md'
              radius='full'
              variant='flat'
            />
          )}
        />
        <Controller
          {...register('confirmPassword')}
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              isRequired
              id='confirmPassword'
              label="Repeat password"
              labelPlacement="outside"
              placeholder="Enter your password"
              type="password"
              errorMessage={fieldState.error?.message}
              isInvalid={fieldState.invalid}
              validationBehavior="aria"
              color='secondary'
              size='md'
              radius='full'
              variant='flat'
            />
          )}
        />


        <div className="flex gap-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            color='secondary'
            radius='full'
            variant='solid'  >
            {isSubmitting ? "Loading..." : "Submit"}
          </Button>
          <Button
            type="reset"
            variant="bordered"
            color='secondary'
            radius='full'
          >
            Reset
          </Button>
        </div>
      </Form>
    </FormProvider>
  );
}