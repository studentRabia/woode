// interface Product {
//     title: string;
//     id: string;
//     price: number;
//     imageUrl: string;
//     category: {
//       title: string;
//     };
//     description: string;
//     inventory: number;
//     tags: string[];
//   }
  


 interface Product {
  id: string; // _id mapped to id
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  imageUrl: string; // URL string for the image
  category: {
    _id: string;
    title: string;
  };
  description: string;
  inventory: number;
  tags: string[]; // Array of tags (strings)
}

interface Category {
  _id: string;
  title: string;
}

interface SearchAndFilterProps {
  categories: Category[];
  onSearch: (term: string) => void;
  onFilter: (category: string) => void;
}


interface CartItem extends Product {
  _key: string;
  quantity: number;
}