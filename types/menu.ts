export interface MenuItem {
  id: string;
  name: string;
  category: "all" | "makanan" | "wings_sate" | "suke" | "teh";
  categoryLabel: string;
  price: number;
  priceDisplay: string;
  tag: string;
  description: string;
  isPopular?: boolean;
}

export interface CartItem {
  menu: MenuItem;
  quantity: number;
  notes?: string;
}

export interface CategoryTab {
  id: "all" | "makanan" | "wings_sate" | "suke" | "teh";
  label: string;
  iconName: string;
}
