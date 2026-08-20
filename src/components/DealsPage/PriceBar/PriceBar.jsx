import { deals } from "../../../../public/db/data.js";
import "./PriceBar.css";

export default function PriceBar() {
  return (
    <section className="PriceBar">
      <span className="PriceBarPriceMax">{MaxPrice(deals)} €</span>
      <span className="PriceBarTextMax">max</span>
      <span className="PriceBarPriceMin">{MinPrice(deals)} €</span>
      <span className="PriceBarTextMin">min</span>
      <span className="PriceBarCrossLine"></span>
      <span className="PriceBarPriceAverage">{AveragePrice(deals)} €</span>
      <span className="PriceBarTextAverage">average</span>
    </section>
  );
}

function MaxPrice(deals) {
  return deals.data.statistics.price_summary.max_price;
}

function MinPrice(deals) {
  return deals.data.statistics.price_summary.min_price;
}

export function AveragePrice(deals) {
  return deals.data.statistics.price_summary.average_price;
}
