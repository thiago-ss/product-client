"use client";

import { useQuery, gql } from "@apollo/client";

const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts {
      id
      imageUrl
      rating
      price
      name
      description
      category
      created_at
      reviews {
        user
        description
        rating
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.getAllProducts.map((product: any) => (
          <li key={product.id}>
            <img alt="image" src={product.imageUrl} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>{product.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
