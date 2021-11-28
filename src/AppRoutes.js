
import React from "react";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailsContainer/ItemDetailContainer";
import { Route , Routes} from "react-router";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
       <Route path="category/:categoryId" element={<ItemListContainer/>} />
      </Routes>
    </div>
  );
}
