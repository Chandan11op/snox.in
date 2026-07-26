import React from "react";
import Products from "../../Products/Products";
import { useGetAllProductsQuery } from "../../../state/api";
import SectionHeading from "../../ui/SectionHeading";

const RelatedProducts = ({ productId, categoryId }) => {
  const { data, isLoading } = useGetAllProductsQuery();

  if (isLoading || !data?.length) return null;

  // Filter out the current product and return a subset
  const related = data.filter(p => p.id !== productId).slice(0, 4);


  return (
    <div className="border-t border-industrial-100 bg-industrial-50 py-32 mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          badge="Related"
          title="Compatible Systems."
          subtitle="Explore other components frequently integrated with this product."
        />
        <Products products={related} headingText="" />
      </div>
    </div>
  );
};

export default RelatedProducts;
