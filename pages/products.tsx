import { NextPage } from "next";
import useSWR from 'swr';

const fetcher = (...args:any) => fetch(...args).then(res => res.json());

type Product = {
    id : number,
    title : string,
    description : string,
    image : string,
    rating : {
        rate : number,
        count : number,
    }
}

const ProductsPage: NextPage = () => {

    const { data, error } = useSWR('https://fakestoreapi.com/products?limit=5',fetcher);

    return (
        <div> { data?.map((product:Product) => (
            <div key={product.id}>
                {product.id}
            </div>
        ))} </div>
    );

};

export default ProductsPage;