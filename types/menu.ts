export interface MenuItem {
  id: string;
  name: string;
  category: "all" | "makanan" | "wings_sate" | "suke" | "teh";
  categoryLabel: string;
  price: number;
  priceDisplay: string;
  image: string;
  rating: number;
  prepTime: string;
  calories: string;
  description: string;
  isPopular?: boolean;
}

export interface CategoryTab {
  id: "all" | "makanan" | "wings_sate" | "suke" | "teh";
  label: string;
}
