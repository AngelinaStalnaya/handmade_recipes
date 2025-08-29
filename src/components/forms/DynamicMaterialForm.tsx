'use client';

import { Controller, FormProvider, SubmitHandler, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, CheckboxGroup, Form, Input, Select, SelectItem, Textarea, cn } from "@heroui/react";
import { dynamicMaterialSchema, DynamicMaterialSchemaType } from "@/validation/dynamicMaterial.schema";
import { CategoryUnits, CurrencyUnits, MeasurementUnits } from "@/config/units.config";

export default function DynamicMaterialFormComp() {
    const {
        handleSubmit,
        control,
        register,
        reset,
        formState: { isSubmitting, errors }
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

    const amountChecked = useWatch({ control, name: 'amountCheckedSchema.amountChecked' });
    const priceChecked = useWatch({ control, name: 'priceCheckedSchema.priceChecked' });

    const onSubmit: SubmitHandler<DynamicMaterialSchemaType> = async (data, event) => {
        event?.preventDefault();
        console.log(errors)

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
                {/* TODO: refactor duplicate Controllers / Inputs / Checkboxes etc. components */}
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
                <Controller
                    {...register('description')}
                    control={control}
                    render={({ field, fieldState }) => (
                        <Textarea
                            {...field}
                            id='description'
                            label="Description"
                            maxRows={3}
                            labelPlacement="outside"
                            placeholder="Enter description"
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
                    {...register('categories')}
                    control={control}
                    render={({ field, fieldState }) => (
                        <CheckboxGroup
                            {...field}
                            id='categories'
                            label="Tag/category"
                            errorMessage={fieldState.error?.message}
                            isInvalid={fieldState.invalid}
                            validationBehavior="aria"
                            color='secondary'
                            size='sm'
                            radius='full'
                            className='min-w-[120px] flex flex-wrap text-sm font-success'
                            orientation='horizontal'
                        >
                            {CategoryUnits.map(((item) =>
                                <Checkbox
                                    key={item.key}
                                    id={item.key}
                                    value={item.key}
                                    aria-label={item.label}
                                    classNames={{
                                        base: cn(
                                            "inline-flex bg-success/15 m-0",
                                            "hover:bg-content2 items-center justify-start",
                                            "cursor-pointer rounded-full gap-1 p-1 border-2 border-transparent",
                                            "data-[selected=true]:border-success",
                                        ),
                                    }}
                                >
                                    {item.label}
                                </Checkbox>))}
                        </CheckboxGroup>
                    )}
                />

                 <Controller
                    {...register('additionallnfo')}
                    control={control}
                    render={({ field, fieldState }) => (
                        <Textarea
                            {...field}
                            id='additionalInfo'
                            label="Additional info"
                            maxRows={3}
                            labelPlacement="outside"
                            placeholder="Enter additional info"
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
                    size='sm'
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
                                {MeasurementUnits.map(((item) => <SelectItem key={item.key} id={item.key}>{item.label}</SelectItem>))}
                            </Select>
                        )}
                    />
                </div>
                }

                <Checkbox
                    id='priceChecked'
                    {...register('priceCheckedSchema.priceChecked')}
                    color='secondary'
                    size='sm'
                    radius='full'>
                    Add price
                </Checkbox>
                {priceChecked && <div className="flex gap-2">
                    <Controller
                        {...register('priceCheckedSchema.price')}
                        control={control}
                        render={({ field, fieldState }) => (
                            <Input
                                {...field}
                                id='priceCheckedSchema.price'
                                label="Price"
                                labelPlacement="outside"
                                placeholder="Enter your price"
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
                        {...register('priceCheckedSchema.unit')}
                        control={control}
                        render={({ field, fieldState }) => (
                            <Select
                                {...field}
                                id='priceCheckedSchema.unit'
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