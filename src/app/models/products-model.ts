
export interface Products {
  quantity: number;
  unitValue: number;
  type:string;
  description: string;
  totalValue: number;
  nameProduct: string;
  image: string;
  vote: number;
}

export interface ProductsResponse {
  data:{
    success: boolean,
    message: string,
    products: Products[],
  }
}

export interface ProductsItens{
    name: string;
    field: string
}

export interface queryParam{
  type: string | null;
  value: number | null;
  vote: number | null;
  name: string | null;
}

export const mockParams: queryParam = {
  type: null,
  value: null,
  vote: null,
  name: null,
}

export const nameItens = [
  { name: 'Orgânico', field: 'Organico' },
  { name: 'Convencional', field: 'Convencional' },
  { name: 'Descontos', field: 'Descontos' },
  { name: 'Promoções', field: 'Promocoes' },
];
export const mockProducts: Products[] = [
    {
      quantity: 10,
      vote: 1.4,
      unitValue: 15.50,
      type: "Electronics",
      description: "High-quality wireless mouse Noise-cancelling",
      totalValue: 155.00,
      nameProduct: "Wireless Mouse ",
      image: "../../assets/images/best-product-2.jpg"
    },

    {
      quantity: 5,
      vote: 2.5,
      unitValue: 20.10,
      type: "Electronics",
      description: "Noise-cancelling Noise-cancelling",
      totalValue: 1000.00,
      nameProduct: "Headphones",
      image: "../../assets/images/best-product-4.jpg"
    },
    {
      quantity: 3,
      vote: 5,
      unitValue: 45.00,
      type: "Appliances",
      description: "High-efficiency Noise-cancelling",
      totalValue: 1350.00,
      nameProduct: "Washing Machine",
      image: "../../assets/images/best-product-6.jpg"
    },
    {
      quantity: 20,
      vote: 4,
      unitValue: 8.00,
      type: "Books",
      description: "Bestselling mystery novel Noise-cancelling",
      totalValue: 160.00,
      nameProduct: "Mystery Novel",
      image: "../../assets/images/best-product-3.jpg"
    },
    {
      quantity: 7,
      unitValue: 30.00,
      vote: 4,
      type: "Kitchenware",
      description: "Stainless steel cooking pot Noise-cancelling",
      totalValue: 210.00,
      nameProduct: "Cooking Pot",
      image: "../../assets/images/best-product-2.jpg"
    },
    {
      quantity: 5,
      unitValue: 20.00,
      vote: 4,
      type: "Electronics",
      description: "Noise-cancelling Noise-cancelling",
      totalValue: 1000.00,
      nameProduct: "Headphones",
      image: "../../assets/images/best-product-4.jpg"
    },
    {
      quantity: 3,
      unitValue: 45.00,
      vote: 4,
      type: "Appliances",
      description: "High-efficiency Noise-cancelling",
      totalValue: 1350.00,
      nameProduct: "Washing Machine",
      image: "../../assets/images/best-product-6.jpg"
    },
    {
      quantity: 20,
      vote: 4,
      unitValue: 8.00,
      type: "Books",
      description: "Bestselling mystery novel Noise-cancelling",
      totalValue: 160.00,
      nameProduct: "Mystery Novel",
      image: "../../assets/images/best-product-3.jpg"
    },
];
