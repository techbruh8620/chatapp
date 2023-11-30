import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductLists = (props) => {
  const Products = [
    {
      id: "jsoiwssgj;w",
      title: "Diamond Necklace",
      price: "$500",
      description: "50 karats of diamond",
      URL: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/75/7929241/1.jpg?3207",
    },
    {
      id: "jsoiwssgj;w",
      title: "Gucci Bag",
      price: "$300",
      description: "Quality Gucci Bag",
      URL: "https://cartnear.s3.us-east-2.amazonaws.com/ng/462418f842aef383532b5a87fd63d2b3.jpg",
    },
    {
      id: "jsoiwssgj;w",
      title: "Rolex Wrist Watch",
      price: "$400",
      description: "Original wrist watch and Bracelete",
      URL: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/5063532/1.jpg?4350",
    },

    {
      id: "MBUuuuu",
      title: "Long Gowns",
      price: "$700",
      description: "Quality Long Gowns",
      URL: "https://cdna.lystit.com/520/650/n/photos/mytheresa/a8f19d0b/costarellos-multicoloured-Lissie-Lace-Silk-And-Velvet-Gown.jpeg",
    },

    {
      id: "MBUuu",
      title: "Blue Heel",
      price: "$500",
      description: "None-Ground piercing heel",
      URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1bgAv8MCJ6n2Gyz99U05F1-QbWKyEt82LcQ&usqp=CAU",
    },

    {
      id: "MBUuuuukknhjh,jgbjm",
      title: "Cuban Necklace",
      price: "$900",
      description: "70 karats of Gold Cuban Necklace",
      URL: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/0765811/1.jpg?4264",
    },

    {
      id: "MBUuuuueryfuth",
      title: "Diamond Necklace",
      price: "$800",
      description: "90 karats of diamond",
      URL: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "MBUuuuuuoiuoiuioujm",
      title: "Gold Necklace",
      price: "$650",
      description: "60 karats of Gold",
      URL: "https://images.unsplash.com/photo-1583484370773-c1af4e528d5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG5lY2tsYWNlfGVufDB8fDB8fHww",
    },
  ];

  return (
    <Container>
      <Row>
        {Products.map((Product) => {
          return (
            <ProductCard
              title={Product.title}
              price={Product.price}
              description={Product.description}
              key={Product.id}
              imagePath={Product.URL}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductLists;
