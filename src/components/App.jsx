import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [allArray, setallArray] = useState([]);

  //put new elements in the array and calls the ones enter befor
  //then use map to loop on all of them
  function Input(allContent) {
    setallArray(prevValue => {
      return [...prevValue, allContent];
    });

    console.log(allContent);
  }

  //find the element with index and return all the ids except that index by filter
  function Delete(id) {
    setallArray(prevValue => {
      return prevValue.filter((element, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      {/* here i receive the title and content */}
      <CreateArea input={Input} />
      {//we must use the map to be able to access any of the objects in my array
      allArray.map((element, index) => {
        return (
          <Note
            title={element.title}
            content={element.content}
            id={index}
            remove={Delete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
