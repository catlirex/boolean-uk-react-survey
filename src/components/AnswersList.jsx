import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList, setEditingFormIndex}) {
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem 
        answerItem={answerItem} key={i} 
        index={i}
        setEditingFormIndex={setEditingFormIndex}/>
      ))}
    </ul>
  );
}
