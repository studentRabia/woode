import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import { categorySchema } from './categories'
import order from './order'
import user from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,categorySchema,order,user],
}



// schemas/index.ts (or schema.ts depending on your project structure)
// import userSchema from './user';
// import orderSchema from './order';
// import { productSchema } from './products';
// import { categorySchema } from './categories';

// export const schemaTypes = [productSchema, categorySchema, userSchema, orderSchema];
