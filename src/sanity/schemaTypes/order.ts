import { defineType, defineField } from "sanity";

export default defineType({
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "lastName", // ✅ Space remove kar diya
      title: "Last Name",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
    }),
    defineField({
      name: "zipCode",
      title: "Zip Code",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
        name: "discount",
        title: "Discount",
        type: "number",
      }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    // defineField({
    //   name: "cartItems",
    //   title: "Cart Items", // ✅ "Cat Items" ki spelling bhi galat thi
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "products" } }],
    // }),
    defineField({
      name: "total",
      title: "Total",
      type: "number",
    }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Success", value: "success" },
          { title: "Dispatch", value: "dispatch" }, // ✅ Spelling Fix
        ],
        layout: "radio",
      },
      initialValue: "pending",
    }),
    defineField({
      name: "subTotal",
      title: "Sub Total",
      type: "number",
    }),
    defineField({
  name: "cartItems",
  title: "Cart Items",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        { name: "key", type: "string", hidden: true }, // hidden field
        { name: "product", type: "reference", to: { type: "products" } },
        { name: "quantity", type: "number" }, // Quantity bhi add kar sakte hain
      ],
    },
  ],
}),
  ],
});
