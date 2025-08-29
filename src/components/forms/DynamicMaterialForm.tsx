'use client';

import { Controller, FormProvider, SubmitHandler, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Form, Input, Select, SelectItem } from "@heroui/react";
import { dynamicMaterialSchema, DynamicMaterialSchemaType } from "@/validation/dynamicMaterial.schema";
import { CurrencyUnits } from "@/config/units.config";

export default function DynamicMaterialFormComp() {
    const {
        handleSubmit,
        control,
        register,
        reset,
        formState: { isSubmitting }
    } = useForm({
        resolver: zodResolver(dynamicMaterialSchema),
        defaultValues: {
            'materialName': 'Лента репсовая'
        }
    })

    const methods = useForm()

    const zeroState = {
        'materialName': ''
    }

    const amountChecked = useWatch({ control, name: 'amountCheckedSchema.amountChecked' })


    const onSubmit: SubmitHandler<DynamicMaterialSchemaType> = async (data, event) => {
        event?.preventDefault();

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            const newData = JSON.stringify(data)
            console.log(newData);
            // TODO: server action to /api/materials/add
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FormProvider {...methods}>
            <Form method='post'
                className="w-full min-w-[350px] flex flex-col gap-4 border-1 border-success/50 rounded-2xl p-3"
                onSubmit={handleSubmit(onSubmit)}
                onReset={() => reset(zeroState)}
            >
                {/* TODO: refactor duplicate Controller and Inputs components */}
                <Controller
                    {...register('materialName')}
                    control={control}
                    render={({ field, fieldState }) => (
                        <Input
                            {...field}
                            isRequired
                            id='materialName'
                            label="Material"
                            labelPlacement="outside"
                            placeholder="Enter material"
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

                <Checkbox
                    id='amountChecked'
                    {...register('amountCheckedSchema.amountChecked')}
                    color='secondary'
                    size='md'
                    radius='full'>
                    Add amout
                </Checkbox>
                {amountChecked && <div className="flex gap-2">
                    <Controller
                        {...register('amountCheckedSchema.amount')}
                        control={control}
                        render={({ field, fieldState }) => (
                            <Input
                                {...field}
                                id='amountCheckedSchema.amount'
                                label="Amount"
                                labelPlacement="outside"
                                placeholder="Enter your amount"
                                type="text"
                                errorMessage={fieldState.error?.message}
                                isInvalid={fieldState.invalid}
                                validationBehavior="aria"
                                color='secondary'
                                size='md'
                                radius='full'
                                variant='flat'
                                className='min-w-[170px]'
                            />
                        )}
                    />
                    <Controller
                        {...register('amountCheckedSchema.unit')}
                        control={control}
                        render={({ field, fieldState }) => (
                            <Select
                                {...field}
                                id='amountCheckedSchema.unit'
                                label="Unit"
                                labelPlacement="outside"
                                placeholder="Choose unit"
                                errorMessage={fieldState.error?.message}
                                isInvalid={fieldState.invalid}
                                validationBehavior="aria"
                                color='secondary'
                                size='md'
                                radius='full'
                                variant='flat'
                                className='min-w-[120px]'
                            >
                                {CurrencyUnits.map(((item) => <SelectItem key={item.key} id={item.key}>{item.label}</SelectItem>))}
                            </Select>
                        )}
                    />
                </div>
                }


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