import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    if (count >= 20) {
      return;
    }
    const updatedCount = count + 1;
    setCount(updatedCount);
  };
  const reset = () => {
    const updatedCount = 0;
    setCount(updatedCount);
  };
  const decrease = () => {
    if (count === 0) {
      return;
    }
    const updatedCount = count - 1;
    setCount(updatedCount);
  };
  return (
    <main className="flex flex-col items-center justify-center gap-8 h-screen">
      <div>
        <h1 className="text-xl text-medium">
          COUNTER: <span className="font-black"> {count} </span>
        </h1>
      </div>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-red-600 text-white text-xl text-medium rounds"
          onClick={increase}
        >
          INCREASE
        </button>
        <button
          className="px-4 py-2 bg-blue-800 text-white text-xl text-medium rounds"
          onClick={reset}
        >
          RESET
        </button>
        <button
          className="px-4 py-2 bg-green-900 text-white text-xl text-medium rounds"
          onClick={decrease}
        >
          DECREASE
        </button>
      </div>
    </main>
  );
};

export default App;
