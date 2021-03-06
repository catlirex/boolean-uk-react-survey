import CheckBoxGp_Features from "../components/CheckBoxGp_Features";
import RadioGp_OneToFour from "./RadioGp_OneToFour";
import CheckBoxGp_SpendTime from "../components/CheckBoxGp_SpendTime";
import { useEffect, useState } from "react";

export default function ReviewForm({
  setResultList,
  resultList,
  editingFormIndex,
  setEditingFormIndex,
}) {
  const initialForm = {
    bestFeatures: [],
    worstFeatures: [],
    consistency: null,
    colour: null,
    logo: null,
    timeSpent: [],
    review: "",
    username: "",
    email: "",
  };
  const [reviewForm, setReviewFrom] = useState(initialForm);

  useEffect(() => {
    if (editingFormIndex !== null) setReviewFrom(resultList[editingFormIndex]);
  }, [editingFormIndex]);

  function handleChange(e) {
    setReviewFrom({
      ...reviewForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editingFormIndex === null) {
      fetch(`http://localhost:4000/answers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewForm),
      })
        .then((response) => response.json())
        .then((data) => {
          setResultList([...resultList, data]);
        });
    } else {
      fetch(`http://localhost:4000/answers/${reviewForm.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewForm),
      })
        .then((response) => response.json())
        .then((data) => {
          setResultList(
            resultList.map((review, index) => {
              if (index === editingFormIndex) return data;
              else return review;
            })
          );
          setEditingFormIndex(null);
        });
    }
    setReviewFrom(initialForm);
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group">
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
        <CheckBoxGp_Features
          formValue={reviewForm.bestFeatures}
          reviewForm={reviewForm}
          setReviewFrom={setReviewFrom}
          inputName="bestFeatures"
        />
      </div>
      <div className="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        <CheckBoxGp_Features
          formValue={reviewForm.worstFeatures}
          reviewForm={reviewForm}
          setReviewFrom={setReviewFrom}
          inputName="worstFeatures"
        />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        <RadioGp_OneToFour
          formValue={reviewForm.consistency}
          reviewForm={reviewForm}
          setReviewFrom={setReviewFrom}
          inputName="consistency"
        />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioGp_OneToFour
          formValue={reviewForm.colour}
          reviewForm={reviewForm}
          setReviewFrom={setReviewFrom}
          inputName="colour"
        />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        <RadioGp_OneToFour
          formValue={reviewForm.logo}
          reviewForm={reviewForm}
          setReviewFrom={setReviewFrom}
          inputName="logo"
        />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <CheckBoxGp_SpendTime
          formValue={reviewForm.timeSpent}
          reviewForm={reviewForm}
          setReviewFrom={setReviewFrom}
          inputName="timeSpent"
        />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={reviewForm.review}
          onChange={(e) => {
            handleChange(e);
          }}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={reviewForm.username}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={reviewForm.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
