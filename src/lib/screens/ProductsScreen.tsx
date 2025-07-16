'use client';
import { useState } from "react";
import { Product } from "@/lib/types/product";
import { useFavoriteProducts } from "@/lib/hooks/useFavoriteProducts";
import ViewTypeButton from "@/components/Common/ViewTypeButton";
import { GridViewScreen } from "./GridViewScreen";
import { ListViewScreen } from "./ListViewScreen";
import { ViewType } from "@/lib/types/viewType";

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
      <ViewTypeButton view={currentView} onChange={setCurrentView} />
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