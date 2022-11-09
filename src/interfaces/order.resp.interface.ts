
export interface OrderResp {
    results: Order[];
}

export interface Order {
    id: string;
    status: boolean;
    products: Product[];
    length: number;
}

interface Product {
    id: string;
    SKU: string;
    name: string;
    imageURL: string;
    quantity: number;
}
