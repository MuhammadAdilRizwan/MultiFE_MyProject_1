export type ProductStatus = "Active" | "Draft";

export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  fabricType: string;
  price: number;
  colors: string[];
  sizes: string[];
  status: ProductStatus;
  image: string;
  images: string[];
};

export const productCategories = [
  "Kurti",
  "Long Dress",
  "Shirt",
  "Suit",
  "Maxi",
  "Shalwar Kameez",
];

export const fabricTypes = ["Cotton", "Lawn", "Silk", "Linen", "Khaddar"];

export const productColors = ["White", "Black", "Navy", "Pink", "Gold", "Mint", "Beige", "Purple"];

export const productSizes = ["XS", "S", "M", "L", "XL", "XXL"];

export const products: Product[] = [
  {
    id: "prod-001",
    name: "Premium Lawn Kurti",
    description: "Breathable printed lawn kurti with a soft everyday fall.",
    category: "Kurti",
    fabricType: "Lawn",
    price: 1850,
    colors: ["White", "Pink", "Mint"],
    sizes: ["S", "M", "L", "XL"],
    status: "Active",
    image: "/assets/fabric-lawn.png",
    images: ["/assets/fabric-lawn.png"],
  },
  {
    id: "prod-002",
    name: "Silk Long Dress",
    description: "Premium silk long dress designed for formal and festive occasions.",
    category: "Long Dress",
    fabricType: "Silk",
    price: 5400,
    colors: ["Gold", "Beige", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    status: "Active",
    image: "/assets/fabric-silk.png",
    images: ["/assets/fabric-silk.png"],
  },
  {
    id: "prod-003",
    name: "Cotton Shalwar Kameez",
    description: "Comfortable cotton suit for polished daily and office wear.",
    category: "Shalwar Kameez",
    fabricType: "Cotton",
    price: 3200,
    colors: ["White", "Beige", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    status: "Active",
    image: "/assets/fabric-cotton.png",
    images: ["/assets/fabric-cotton.png"],
  },
  {
    id: "prod-004",
    name: "Embroidered Festive Suit",
    description: "Detailed embroidered fabric for a premium festive custom outfit.",
    category: "Suit",
    fabricType: "Khaddar",
    price: 6800,
    colors: ["Navy", "Gold"],
    sizes: ["S", "M", "L", "XL"],
    status: "Draft",
    image: "/assets/fabric-embroidered.png",
    images: ["/assets/fabric-embroidered.png"],
  },
];

