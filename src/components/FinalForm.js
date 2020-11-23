import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameSelectors } from "../redux/game";
import { statsSlice } from "../redux/stats";

const FinalForm = ({ closeModal }) => {
  const score = useSelector(gameSelectors.getPoints);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const record = { name, score };
    dispatch(statsSlice.score.actions.inputName(record));
    closeModal();
  };

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column p-5">
      <div className="mb-5">
        Your score: <span>{score}</span>
      </div>
      <div className="form-group d-flex">
        <label htmlFor="username" className="mr-3 mb-5">
          Name
        </label>
        <input
          id="username"
          name="username"
          value={name}
          onChange={handleChange}
          type="text"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn-bg btn-primary mx-auto">
        SAVE
      </button>
    </form>
  );
};

export default FinalForm;
