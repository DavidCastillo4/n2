export default async function ProductDetails({ params }) {
 const {productId} = await params;
 return <div>product {productId}</div>;
}

