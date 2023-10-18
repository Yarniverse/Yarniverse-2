import Knittingamico from "../images/Knitting-amico.png";
import Knittingpana from "../images/Knitting-pana.png";
import Knittingrafiki from "../images/Knitting-rafiki.png";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="m-auto max-w-6xl p-12" id="home-section-container">
        <div
          className="h-screen flex flex-col md:flex-row"
          id="home-section-content"
        >
          <div
            className="md:w-1/2 max-w-md flex flex-col justify-center"
            id="left-home-section-content"
          >
            <div
              className="md:text-5xl text-2xl uppercase font-black"
              id="left-home-section-title"
            >
              Welcome to Yarniverse
            </div>
            <div className="text-xl mt-4" id="left-home-section-body">
              Your new home for crochet lovers and enthusiasts!
            </div>
          </div>
          <div
            className="flex md:justify-end w-full md:w-1/2 -mt-5"
            id="right-home-section-content"
          >
            <div className="bg-dots">
              <div className="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                <img
                  alt="quote"
                  className="float-left mr-1"
                  src={Knittingamico}
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-screen flex flex-col md:flex-row"
          id="home-section-content"
        >
          <div
            className="flex md:justify-end w-full md:w-1/2 -mt-5"
            id="right-home-section-content"
          >
            <div className="bg-dots">
              <div className="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                <img
                  alt="quote"
                  className="float-left mr-1"
                  src={Knittingpana}
                />{" "}
              </div>
            </div>
          </div>
          <div
            className="md:w-1/2 max-w-md flex flex-col justify-center"
            id="left-home-section-content"
          >
            <div
              className="md:text-5xl text-2xl uppercase font-black"
              id="left-home-section-title"
            >
              At Yarniverse you can...
            </div>
            <div className="text-xl mt-4" id="left-home-section-body">
              Make posts to share with others and track the projects you are
              working on!
            </div>
          </div>
        </div>
        <div
          className="h-screen flex flex-col md:flex-row"
          id="home-section-content"
        >
          <div
            className="md:w-1/2 max-w-md flex flex-col justify-center"
            id="left-home-section-content"
          >
            <div
              className="md:text-5xl text-2xl uppercase font-black"
              id="left-home-section-title"
            >
              Sound intriguing?
            </div>
            <div className="text-xl mt-4" id="left-home-section-body">
              Click the button below and join our little community!
            </div>
            <div className="my-5 h-16" id="left-home-button-section">
              <Link to="/sign-up">
                <div
                  src=""
                  className="shadow-md font-medium py-2 px-4 text-yellow-100
               cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48"
                  id="left-home-button"
                >
                  Join us now
                </div>
              </Link>
            </div>
          </div>
          <div
            className="flex md:justify-end w-full md:w-1/2 -mt-5"
            id="right-home-section-content"
          >
            <div className="bg-dots">
              <div className="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                <img
                  alt="quote"
                  className="float-left mr-1"
                  src={Knittingrafiki}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
