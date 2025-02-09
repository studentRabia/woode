


 interface Product {
  id: string;
  _id: string; 
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string |null;
  imageUrl: string; // URL string for the image
  category: {
    _id: string;
    title: string;
  } ;
  description: string;
  inventory: number;
  tags: string[]; // Array of tags (strings)
}

interface Category {
  _id: string;
  title: string;
  products: number;
   imageUrl: string;
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