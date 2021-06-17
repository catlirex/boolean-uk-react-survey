import { useState } from "react";

import AnswersList from "./AnswersList";
import ReviewForm from "./ReviewForm";

export default function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [resultList, setResultList] = useState([])
  
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {resultList.length >0
        ? <AnswersList
        answersList={resultList}/>
        : null}
        
      </section>
      <section className="main__form">
        <ReviewForm
        setResultList={setResultList}
        resultList={resultList}/>
      </section>
    </main>
  );
}
