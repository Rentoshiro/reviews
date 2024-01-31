import people from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  function nextUser() {
    setIndex((prevState) => {
      const newIndex = prevState + 1;
      return checkNumber(newIndex);
    });
  }

  function prevUser() {
    setIndex((prevState) => {
      const newIndex = prevState - 1;
      return checkNumber(newIndex);
    });
  }

  function randomPerson() {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) randomNumber = index + 1;
    setIndex(checkNumber(randomNumber));
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <h4 className="author">{name} </h4>
        <p className="job">{job} </p>
        <p className="info">{text} </p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevUser}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextUser}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn -btn-hipster" onClick={randomPerson}>
          Suprise me
        </button>
      </article>
    </main>
  );
};
export default App;
