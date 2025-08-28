'use client';

import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input } from "@heroui/react";
import { logInSchema, LogInSchemaType } from "@/validation/login.schema";

export default function LogInFormComp() {
    const {
        handleSubmit,
        control,
        register,
        reset,
        formState: { isSubmitting }
    } = useForm({
        resolver: zodResolver(logInSchema),
        defaultValues: {
            'password': 'Z~12345678',
            'email': 'abc@abc.com'
        }
    })

    const methods = useForm()

    const zeroState = {
        'password': '',
        'email': ''
    }

    const onSubmit: SubmitHandler<LogInSchemaType> = async (data, event) => {
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
                {/* TODO: refactor duplicate Controller component */}
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
                        radius='full'>
                        Reset
                    </Button>
                </div>
            </Form>
        </FormProvider>
    );
}