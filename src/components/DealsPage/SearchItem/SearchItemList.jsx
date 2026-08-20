import SearchItem from "./SearchItem";
import { deals } from "../../../../public/db/data.js";
import "./SearchItemList.css";
import Deal from "../Deal/Deal.jsx";
import { useState } from "react";

export default function SearchItemList() {
  const [expandedDeal, setExpandedDeal] = useState(null);
  const dealData = expandedDeal
    ? deals.data.transactions.find((d) => d.id === expandedDeal)
    : null;

  return (
    <section className="SearchItemList">
      <div className="blurMask blurMaskTop"></div>
      <div className="blurMask blurMaskBottom"></div>
      <ul className="SearchItemListList">
        {deals.data.transactions.map((deal) => (
          <li key={deal.id}>
            <SearchItem
              {...deal}
              onClick={() => setExpandedDeal(deal.id)}
            />
          </li>
        ))}
      </ul>
      {dealData && <Deal {...dealData} onClose={() => setExpandedDeal(null)} />}
    </section>
  );
}
