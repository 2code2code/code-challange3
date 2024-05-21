import React from "react";
import Marquee from "react-fast-marquee";

const ProfitCard: React.FC<{
  profit: number;
  previousProfit: number;
  isIncrease: boolean;
}> = ({ profit, previousProfit, isIncrease }) => {
  const percentageChange = ((profit - previousProfit) / previousProfit) * 100;
  const formattedPercentage = percentageChange.toFixed(2);

  return (
    <Marquee autoFill={true}>
      <section className="flex flex-col gap-4 rounded-lg border border-none bg-black p-6">
        <div
          className={`inline-flex  gap-2 self-start rounded p-1 ${
            isIncrease ? " text-green-600" : "bg-red-100 text-red-600"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isIncrease
                  ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              }
            />
          </svg>

          <span className="text-xs font-medium"> {formattedPercentage}% </span>
        </div>

        <div>
          <div className="block text-sm font-medium text-white">
            {" "}
            <b className="text-yellow-400">ZTK</b> Price{" "}
          </div>

          <p>
            <span className="text-2xl font-medium text-green-600">
              {" "}
              ${profit.toFixed(2)}{" "}
            </span>

            <span className="text-xs text-white">
              {" "}
              from ${previousProfit.toFixed(2)}{" "}
            </span>
          </p>
        </div>
      </section>
    </Marquee>
  );
};

const PriceStat: React.FC = () => {
  return (
    <div>
      <ProfitCard profit={4} previousProfit={2.01} isIncrease={true} />
    </div>
  );
};

export default PriceStat;
