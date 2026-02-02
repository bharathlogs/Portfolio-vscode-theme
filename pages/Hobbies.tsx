import { NextPage } from "next";
import Link from "next/link";
import { Scrollbars } from "react-custom-scrollbars";
import { useIsMobile } from "../Components/Helper/useIsMobile";
import Head from "next/head";

const Hobbies: NextPage = () => {
  const isTabletOrMobile = useIsMobile();
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Hobbies</title>
        <meta
          name="description"
          content="What I like to do in my spare time."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Hobbies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bharath Loganathan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {!isTabletOrMobile ? (
        <div className=" ">
          <main className=" backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
            <div className="p-12">
              <div className="">
                <h1 className="lg:text-5xl pb-2 text-indigo-500 font-bold leading-tight text-3xl">
                  Hobbies
                </h1>
                <div className=" text-gray-400 dark:text-gray-400">
                  What I like to do in my spare time.
                </div>
                <div className="grid grid-cols-3 pt-5 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  <div className="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                    <Link href="/Anime">
                      <div>
                        <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                          <img
                            className="h-20 rounded-md p-2"
                            src="https://img.icons8.com/ios/50/000000/naruto.png"
                            alt="naruto icon"
                          />
                        </div>
                        <h2 className="text-white text-center font-semibold">
                          Animes
                        </h2>
                      </div>
                    </Link>
                  </div>
                  <div className="block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                    <div>
                      <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                        <img
                          className="h-20 rounded-md p-2"
                          src="https://img.icons8.com/ios/50/000000/learning.png"
                          alt="continuous learning icon"
                        />
                      </div>
                      <h2 className="text-white text-center font-semibold">
                        Continuous Learning
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div className=" p-3 ">
          <main className=" backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full shadow-lg ">
            <div className="p-1">
              <div className="">
                <h1 className="lg:text-5xl pb-2 text-indigo-500 font-bold leading-tight text-3xl">
                  Hobbies
                </h1>
                <div className=" text-gray-400 dark:text-gray-400">
                  What I like to do in my spare time.
                </div>
                <div className="grid grid-cols-3 pt-5 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  <div className="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                    <Link href="/Anime">
                      <div>
                        <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                          <img
                            className="rounded-md p-2"
                            src="https://img.icons8.com/ios/50/000000/naruto.png"
                            alt="naruto icon"
                            width="80"
                            height="auto"
                          />
                        </div>
                        <h2 className="text-white text-center font-semibold">
                          Animes
                        </h2>
                      </div>
                    </Link>
                  </div>
                  <div className="block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                    <div>
                      <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                        <img
                          className="rounded-md p-2"
                          src="https://img.icons8.com/ios/50/000000/learning.png"
                          alt="continuous learning icon"
                          width="80"
                          height="auto"
                        />
                      </div>
                      <h2 className="text-white text-center font-semibold">
                        Continuous Learning
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </Scrollbars>
  );
};

export default Hobbies;
