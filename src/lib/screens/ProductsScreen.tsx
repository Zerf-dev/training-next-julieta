'use client';
import { useState } from "react";
import { Product } from "@/lib/types/product";
import { useFavoriteProducts } from "@/lib/hooks/useFavoriteProducts";
import ViewTypeButton from "@/components/Common/ViewTypeButton";
import { GridViewScreen } from "./GridViewScreen";
import { ListViewScreen } from "./ListViewScreen";
import { ViewType } from "@/lib/types/viewType";
import FilterButton from "@/components/Common/FilterButton/index";

const DEFAULT_VIEW: ViewType = "grid";

type Props = {
  products: Product[];
  viewType?: ViewType; 
};

export function ProductsScreen({ products, viewType = DEFAULT_VIEW }: Props) {
  const [currentView, setCurrentView] = useState<ViewType>(viewType);
  const { favorites, toggleFavorite, favoriteProducts } = useFavoriteProducts(products);

  const productsToShow =
    currentView === "favorites" ? favoriteProducts : products;

  return (
    <div>
      <div className="flex items-center justify-end pr-6 mb-6 mt-4 gap-x-4">
       <ViewTypeButton view={currentView} onChange={setCurrentView} />
       <FilterButton />
      </div>
      {currentView === "grid" && (
        <GridViewScreen
          products={productsToShow}
          columns={3}
        />
      )}
      {currentView === "list" && (
        <ListViewScreen
          products={productsToShow}
        />
      )}
      {currentView === "fullgrid" && (
        <GridViewScreen
          products={productsToShow}
          columns={1}
        />
      )}
      {currentView === "favorites" && (
        <GridViewScreen
          products={productsToShow}
          columns={3}
        />
      )}
    </div>
  );
}