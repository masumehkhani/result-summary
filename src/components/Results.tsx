import Container from "./Container";

const Results = () => {
  return (
    <Container className="flex flex-col bg-hsl-cobalt-bluea  justify-evenly items-center py-4 rounded-2xl  w-[365px] h-[500px]">
      <h1 className="text-hsl-light-lavender text-2xl">Your Result</h1>
      <div className="flex flex-col w-[200px] h-[200px]  bg-gradient-to-b from-hsl-cobalt-blue via-hsl-pale-blue to-transparent rounded-full justify-center items-center ">
        <span className=" mb-6 text-white text-7xl font-bold">
          76
        </span>
        <span className="text-hsl-light-lavender">of 100</span>
      </div>
      <h2 className="text-white text-4xl font-semibold">Great</h2>
      <p className="text-center text-hsl-light-lavender mx-6 px-12">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </Container>
  );
};

export default Results;




