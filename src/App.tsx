import Container from "./components/Container";
import Results from "./components/Results";
// import Summary from "./components/Summary"
import reaction from "./assets/images/icon-reaction.svg";
import memory from "./assets/images/icon-memory.svg";
import verbal from "./assets/images/icon-verbal.svg";
import visual from "./assets/images/icon-visual.svg";

function App() {
  return (
    <>
      <Container className="w-full h-screen flex justify-center items-center ">
        <Container className="flex-col h-screen shadow-2xl sm:h-[500px] sm:w-[730px] flex justify-center items-center rounded-2xl ">
          <Results />
          <Container className="flex flex-col justify-between p-8 w-[365px] h-[500px]">
            <h1 className="w-full text-blue-900 text-2xl font-bold">Summary</h1>
            
            <div className="flex w-full justify-between bg-red-50 py-3 rounded-xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-[120px] before:border-x-2 before:border-solid before:border-black">
              <div className="flex">
                <img className="px-3" src={reaction} alt="reaction" />
                <span className="text-red-600">Reaction</span>
              </div>
              <span className="px-4 text-hsl-dark-gray-blue">
                <strong>80</strong>/100
              </span>
            </div>
            <div className="flex w-full justify-between bg-orange-50 py-3 rounded-xl">
              <div className="flex">
                <img className="px-3" src={memory} alt="reaction" />
                <span className="text-orange-500">Memory</span>
              </div>
              <span className="px-4 text-hsl-dark-gray-blue">
                <strong>72</strong>/100
              </span>
            </div>
            <div className="flex w-full justify-between bg-teal-50 py-3 rounded-xl">
              <div className="flex">
                <img className="px-3" src={verbal} alt="reaction" />
                <span className="text-teal-500">Verbal</span>
              </div>
              <span className="px-4 text-hsl-dark-gray-blue">
                <strong>61</strong>/100
              </span>
            </div>
            <div className="flex w-full justify-between bg-blue-50 py-3 rounded-xl">
              <div className="flex">
                <img className="px-3" src={visual} alt="reaction" />
                <span className="text-blue-900">Visual</span>
              </div>
              <span className="px-4 text-hsl-dark-gray-blue">
                <strong>72</strong>/100
              </span>
            </div>

            <button className="bg-hsl-dark-gray-blue py-4 rounded-full text-white text-lg">
              Continue
            </button>
          </Container>
        </Container>

        {/* <Summary/> */}
      </Container>
    </>
  );
}

export default App;
