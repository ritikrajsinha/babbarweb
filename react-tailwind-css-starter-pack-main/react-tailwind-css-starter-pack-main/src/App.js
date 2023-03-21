import "./App.css";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <h2 className="text-[#0398d4] font-medium text-2xl">INcrement and Decrement</h2>
      <div >
        <button>-</button>
      </div>
      <div>
      </div>
      <div>
      <button>
      +
      </button>
      </div>
      <div>
      <button className="text-white">
      reset
      </button>
      </div>
    </div>
  );
}

export default App;
