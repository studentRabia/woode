import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your_project_id',      // 🔑 Aapka Sanity Project ID
  dataset: 'production',             // 🔑 Dataset ka naam (usually 'production')
  useCdn: false,                     // Real-time updates ke liye false rakhein
  token: 'your_sanity_token'         // 🔐 Sanity API Token (write access required)
});

async function removeInvalidReferences() {
  const orders = await client.fetch(`
    *[_type == "order" && products[].product._ref == "dz1f6LoFiz4haFkvglfp4A"] {
      _id,
      products
    }
  `);

  for (const order of orders) {
    const updatedProducts = order.products.filter(
      (p) => p.product._ref !== 'dz1f6LoFiz4haFkvglfp4A'
    );

    await client
      .patch(order._id)
      .set({ products: updatedProducts })
      .commit();

    console.log(`Fixed order ID: ${order._id}`);
  }

  console.log('✅ Invalid references removed successfully.');
}

removeInvalidReferences();
