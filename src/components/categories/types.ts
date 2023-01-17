interface Category {
  title: string;
  img_url: string;
  id: string;
  createdDate: string;
  updatedDate: string;
}
export interface CategoriesProps {
  categories: Category[];
}
