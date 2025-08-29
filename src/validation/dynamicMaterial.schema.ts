import * as z from "zod";

const amountCheckedSchema = z.discriminatedUnion('amountChecked', [
  z.object({
    amountChecked: z.literal(true),
    amount: z.string('Enter amount').regex(/^\d+(\.\d+)?$/, 'Amount must be a number'),
    unit: z.string('Unit is required')
  }),
  z.object({
    amountChecked: z.literal(false)
  })
]);

const priceCheckedSchema = z.discriminatedUnion('priceChecked', [
  z.object({
    priceChecked: z.literal(true),
    price: z.string('Enter price').regex(/^\d+(\.\d+)?$/, 'Amount must be a number'),
    unit: z.string('Unit is required')
  }),
  z.object({
    priceChecked: z.literal(false)
  })
]);


const dynamicMaterialSchema = z.object({
  materialName: z.string().min(3, 'Material name must be at least 3 characters'),
  createdAt: z.iso.date().optional(),
  description: z.string().optional(),
  categories: z.array(z.string()).max(5).optional(),
  additionallnfo: z.string().optional(),
  updatedAt: z.date().optional(),
  photos: z.array(z.file().max(5_000_000).mime(['image/png', 'image/jpeg'])).max(3).optional(),
})
.extend({amountCheckedSchema, priceCheckedSchema});

type DynamicMaterialSchemaType = z.infer<typeof dynamicMaterialSchema>;

export { dynamicMaterialSchema, type DynamicMaterialSchemaType };
