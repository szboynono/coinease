import Image from "next/image";
import { useMemo } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const imageLoader = ({ src }: any) => {
  return `https://s2.coinmarketcap.com/static/img/coins/32x32/${src}.png`;
};

export default function Table({ data }: any) {
  const coins = data.map((coin: any) => ({
    id: coin.id,
    rank: coin["cmc_rank"],
    name: coin.name,
    symbol: coin.symbol,
    price: coin.quote.USD["price"],
    change: coin.quote.USD["percent_change_24h"],
    marketCap: coin.quote.USD["market_cap"],
  }));

  const rating = useMemo(() => {
    const currentNum = 0;
    if (currentNum === 0) {
      return <span className="text-green-500">Buy</span>;
    } else if (currentNum === 1) {
      return <span className="text-yellow-500">Hold</span>;
    } else {
      return <span className="text-red-500">Sell</span>;
    }
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="hidden sm:table-cell sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Price
                  </th>

                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter hidden sm:table-cell"
                  >
                    24hr
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Market Cap
                  </th>
                  <th
                    scope="col"
                    className="text-center sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin: any, coinIdx: number) => (
                  <tr key={coin.name} className="hover:bg-slate-50">
                    <td
                      className={classNames(
                        coinIdx !== coins.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "hidden sm:table-cell whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                      )}
                    >
                      {coin.rank}
                    </td>
                    <td
                      className={classNames(
                        coinIdx !== coins.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                      )}
                    >
                      <div className="flex flex-row items-center gap-2 hover:cursor-pointer ">
                        <div className="flex items-center gap-2">
                          <Image
                            loader={imageLoader}
                            width={24}
                            height={24}
                            src={"" + coin.id}
                            alt=""
                          />
                          <div className="flex flex-col">
                            <div>{coin.name}</div>
                            <div className="text-gray-500 sm:hidden">
                              {coin.symbol}
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-500 hidden md:block">
                          {coin.symbol}
                        </div>
                      </div>
                    </td>
                    <td
                      className={classNames(
                        coinIdx !== coins.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell"
                      )}
                    >
                      <div>
                        ${" "}
                        {coin.price < 0.001
                          ? coin.price.toFixed(8)
                          : coin.price.toLocaleString("en-US")}
                      </div>
                      <span
                        className={classNames(
                          `text-${coin.change < 0 ? "red" : "green"}-500`,
                          "sm:hidden"
                        )}
                      >
                        {coin.change.toFixed(2)} %
                      </span>
                    </td>
                    <td
                      className={classNames(
                        coinIdx !== coins.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"
                      )}
                    >
                      <span
                        className={`text-${
                          coin.change < 0 ? "red" : "green"
                        }-500`}
                      >
                        {coin.change.toFixed(2)} %
                      </span>
                    </td>
                    <td
                      className={classNames(
                        coinIdx !== coins.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell"
                      )}
                    >
                      $ {coin.marketCap.toLocaleString("en-US")}
                    </td>
                    <td
                      className={classNames(
                        coinIdx !== coins.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm lg:table-cell text-center "
                      )}
                    >
                      {coin.change < 0 && (
                        <span className="text-green-500">Buy</span>
                      )}
                      {coin.change > 1 && (
                        <span className="text-red-500">Sell</span>
                      )}
                      {coin.change <= 1 && coin.change > 0 && (
                        <span className="text-yellow-500">Hold</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
