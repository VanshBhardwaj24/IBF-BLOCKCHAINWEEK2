export default function EventTimeline() {
  return (
    <div
      className="pt-14 pb-4 h-full pl-8 p-8
    bg-black"
    >
      <div className="flex-col">
        <h2 className="text-left text-5xl font-semibold w-1/2 ml-10 text-white">
          Timeline
        </h2>

        <div className="mt-5 mb-5 w-32 h-2 bg-gradient-to-r from-orange-400 ml-10 to-orange-500 rounded-md" />

        <div className="pt-8">
          <ol className="relative border-l  border-[#9da5d7] from-[#ff00c6] via-[#ff5478] to-[#ff8a05 text-coral-red">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
              <time className="mb-1 text-sm  leading-none font-bold  text-[#ed56d4] from-[#ff00c6] via-[#ffb300] to-[#ff8a05 ">
                Day 1: 15th April, Monday<br></br>6:30 PM to 8:30 PM
              </time>
              <h3 className="text-lg font-semibold text-white">
                Intro to Dapps using Solidity
              </h3>
              <p className="text-base font-semibold text-[#9da5d7] from-[#ff00c6] via-[#ff5478] to-[#ff8a05 ">
                A complete introduction to Solidity programming and Dapps
                (Decentralized Apps). You will get to know all about History and
                Working of Blockchain, Ethereum, EVM, Transactions, Gas Fees,
                Blockchain Wallets, NFTs and What exactly is a Dapp. We will set
                up our Tools for Development and get hands experience by
                creating Smart Contracts <br />{" "}
                <span className="font-semibold text-gray-300"></span>
                <br />
              </p>
            </li>

            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
              <time className="mb-1 text-sm  leading-none font-bold  text-[#ed56d4] from-[#ff00c6] via-[#ffb300] to-[#ff8a05 ">
                Day 2: 16th April, Tuesday<br></br>6:30 PM to 8:30 PM
              </time>
              <h3 className="text-lg font-semibold text-white">
                Advanced Solidity concepts
              </h3>
              <p className="text-base font-semibold  text-[#9da5d7] from-[#ff00c6] via-[#ff5478] to-[#ff8a05 ">
                Here you will learn about how Scalable Smart Contract
                Development. You will understand how to test and debug your
                Contracts and eventually Deploy them.
              </p>
            </li>

            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
              <time className="mb-1 text-sm  leading-none font-bold  text-[#ed56d4] from-[#ff00c6] via-[#ffb300] to-[#ff8a05 ">
                Day 3: 17th April, Wednesday<br></br>6:30 PM to 8:30 PM
              </time>
              <h3 className="text-lg font-semibold text-white">
                Fullstack Blockchain: Integration of Smart Contracts with
                Frontend{" "}
              </h3>
              <p className="text-base font-semibold text-[#9da5d7] from-[#ff00c6] via-[#ff5478] to-[#ff8a05 ">
                Now that you know how to write smart contracts, learn how to
                deploy them into production. We will understand how to use
                Frontend Frameworks and Wallets to finally launch your Dapp.
              </p>
            </li>

            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
              <time className="mb-1 text-sm  leading-none font-bold  text-[#ed56d4] from-[#ff00c6] via-[#ffb300] to-[#ff8a05 ">
                Day 4: 18th April, Thursday <br></br>6:30 PM to 8:30 PM
              </time>
              <h3 className="text-lg font-semibold text-white">
                Building a Voting Smart Contract
              </h3>
              <p className="text-base font-semibold  text-[#9da5d7] from-[#ff00c6] via-[#ff5478] to-[#ff8a05 ">
                Now that you have learned Solidity programming, What else is out
                there? Why use Chain A over Chain B? What to do next? All these
                questions will be answered with building a Voting Smart Contract
              </p>
            </li>

            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
              <time className="mb-1 text-sm  leading-none font-bold  text-[#ed56d4] from-[#ff00c6] via-[#ffb300] to-[#ff8a05  ">
                Day 5: 19th April, Saturday <br></br>6:30 PM to 8:30 PM
              </time>
              <h3 className="text-lg font-semibold text-white">
                Smart Contract Auction
              </h3>
              <p className="text-base font-semibold  text-[#9da5d7] from-[#ff00c6] via-[#ff5478] to-[#ff8a05  ">
                Time for Battle! In this event, You will be given a problem
                Auction smart contract along with all the details about the
                contract and related concepts.
              </p>
            </li>

            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
              <time className="mb-1 text-sm  leading-none font-bold  text-[#ed56d4] from-[#ff00c6] via-[#ffb300] to-[#ff8a05 ">
                Day 6: 20th April, Saturday <br></br>6:30 PM to 8:30 PM
              </time>
              <h3 className="text-lg font-semibold text-white">
                Offical Blockchain Specialisation Workshop{" "}
                <span
                  className="text-xl mx-1 text-transparent font-bold bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600
          lg:mx-2 sm:mx-3"
                >
                  (Open for all students)
                </span>
              </h3>
              <p className="text-base font-normal  text-[#9da5d7] from-[#ff00c6] via-[#ff5478] to-[#ff8a05  ">
                <span className="font-bold">
                  All about Blockchain Specialisation in BU by Dr. Vimal Baghel:
                  Blockchain Champion{" "}
                </span>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
