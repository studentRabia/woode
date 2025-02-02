import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import { categorySchema } from './categories'
import order from './order'
import user from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,categorySchema,order,user],
}
