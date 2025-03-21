import ProductsTable from "views/admin/dataTables/components/ProductsTable";

export default async function Products() {
    const res = await fetch('https://fakestoreapi.com/products', {
        cache: 'no-store',
    });
    const products = await res.json();

    return (
        <div style={{paddingTop: '130px'}}>
            <ProductsTable products={products} />
        </div>
    );
}