import "./StatisticsBar.css";
import { deals } from "../../../../public/db/data.js";
import React from "react";

function formatRange(key) {
  const str = String(key);
  const [minStr, maxStr] = str.split("_");
  const min = parseInt(minStr, 10) / 1000;
  const max = parseInt(maxStr, 10) / 1000;
  return `от ${min}к€ до ${max}к€`;
}

function getHeightPercentage(value, maxValue) {
  if (value === 0 || maxValue === 0) return "0%";
  return `${(value / maxValue) * 85}%`;
}

export default function StatisticsBar() {
  const values = Object.values(RangeCount(deals));
  const maxValue = Math.max(...values.filter((v) => v > 0)) || 0;

  return (
    <section className="StatisticsBar">
      <article className="StatisticsBarText">
        <span className="vertical">кол-во</span>
        <span className="vertical">сделок</span>
      </article>

      {Array.from({ length: 4 }, (_, i) => (
        <span
          key={i}
          className="StatisticsBarLine"
          style={{ gridRow: i + 1 }}
        ></span>
      ))}
      {Object.entries(RangeCount(deals)).map(([key, value], index) => {
        const height = getHeightPercentage(value, maxValue);
        const isVisible = value > 0;

        return (
          <div
            key={key}
            className="StatisticsBarColumn"
            style={{ gridColumn: index + 2 }}
          >
            <span
              className="HistogramCount"
              style={{
                height: height,
                opacity: isVisible ? 1 : 0,
                display: isVisible ? "flex" : "none",
              }}
            >
              {value}
            </span>
            <span className="HistogramRange">{formatRange(key)}</span>
          </div>
        );
      })}
    </section>
  );
}

function RangeCount(deals) {
  return deals.data.statistics.histogram;
}
