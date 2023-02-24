import { Link } from "react-router-dom";

function HowToPage() {
  return (
    <>
      <Link
        to="/"
        className="absolute right-3 top-3 rounded-full h-14 w-14 border-black border-4"
      >
        <h1 className="font-bold text-[2rem]">X</h1>
      </Link>

      <div className="mt-20">
        <h1 className="font-bold text-5xl tracking-widest">how to</h1>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-xl w-3/4">
          each screen will present three cue words that are linked by a fourth
          word, which is the correct answer
          <br />
          <br />
          see how many you can get before the tie runs out
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div>
          <div className="bg-gray-300 rounded-full h-20 w-20 inline-block relative top-[1.6rem] right-[30%]"></div>
          <div className="bg-gray-300 rounded-full h-20 w-20 inline-block relative top-[1.6rem] left-[30%]"></div>
        </div>
        <p className="bg-gray-300 font-medium py-2 w-1/2 my-[0.1rem] text-xl">
          cream
        </p>
        <p className="bg-gray-300 font-medium py-2 w-1/2 my-[0.1rem] text-xl">
          skate
        </p>
        <p className="bg-gray-300 font-medium py-2 w-1/2 my-[0.1rem] text-xl">
          water
        </p>

        <p className="bg-gray-300 text-green-600 font-medium py-2 w-1/2 my-5 text-xl border-green-600 border-2">
          ice
        </p>
      </div>
    </>
  );
}

export default HowToPage;
