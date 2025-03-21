"use client";

import { useMemo } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Product from "components/card/Product";

export default function ProductsTable({ products }: any) {

    const data = useMemo(() => products || [], [products])

    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="20px">
            {
                data.map(({id, name, price, image}: any) => (
                    <Product
                        key={id}
                        name={name}
                        price={price}
                        image={image}
                    />
                ))
            }
        </SimpleGrid>
    );
}