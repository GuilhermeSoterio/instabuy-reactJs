export interface CollectionItem {
    id: string;
    title: string;
    slug: string;
    items: Item[];
}
  
export interface Item {
    id: string;
    name: string;
    slug: string;
    title: string;
    prices: Price[];
    images: string[];
}

export interface promo {
    id: string;
    name: string;
    slug: string;
    title: string;
    prices: Price[];
    images: string[];
}
  
export interface Price {
    id: string;
    price: number;
    promo_price: number;
}

export interface Banner {
  id: string;
  title: string;
  image: string;
}