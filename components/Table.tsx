import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const imageLoader = ({ src }: any) => {
  return `https://s2.coinmarketcap.com/static/img/coins/32x32/${src}.png`;
};

export default function Table({ data }: any) {
  console.log(data);
  const coins = data.map((coin: any) => ({
    id: coin.id,
    rank: coin["cmc_rank"],
    name: coin.name,
    symbol: coin.symbol,
    price: coin.quote.USD["price"],
    change: coin.quote.USD["percent_change_24h"],
    marketCap: coin.quote.USD["market_cap"],
  }));

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
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
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
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Change (24hr)
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Market Cap
                  </th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin: any, coinIdx: number) => (
                  <tr key={coin.name}>
                    <td
                      className={classNames(
                        coinIdx !== coins.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
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
                      <div className="flex items-center gap-2">
                        <Image
                          loader={imageLoader}
                          width={24}
                          height={24}
                          src={"" + coin.id}
                          alt=""
                        />
                        <div>{coin.name}</div>
                        <div className="text-gray-500">{coin.symbol}</div>
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
                      $ {coin.price.toLocaleString("en-US")}
                    </td>
                    <td
                      className={classNames(
                        coinIdx !== coins.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"
                      )}
                    >
                      {coin.change.toFixed(2)} %
                    </td>
                    <td
                      className={classNames(
                        coinIdx !== coins.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell"
                      )}
                    >
                      {coin.marketCap.toLocaleString("en-US")}
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
