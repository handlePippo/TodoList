import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../Store/tasklist";
import { setError } from "../../Store/error";
import Input from "../Input";
import Button from "../Button";
import ShowTaskList from "../ShowTaskList";
import "./index.scss";

const TasklistHome = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.error);

  const handleClick = () => {
    const trimmedTask = task.trim();
    if (trimmedTask !== "") {
      dispatch(addTask(trimmedTask));
      dispatch(setError(""));
    } else {
      dispatch(setError("Impossibile inserire un task vuoto!"));
      setTimeout(() => {
        dispatch(setError(""));
      }, 1000);
    }
    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
    if (e.target.value.length < 3) {
      dispatch(setError("Troppo corto!"));
    } else {
      dispatch(setError(""));
    }
  };

  return (
    <div className='tasklist'>
      <h1>TASKLIST</h1>
      <Input handleChange={handleChange} text={task} />
      <Button
        name='Aggiungi task'
        handleClick={handleClick}
        isDisabled={error}
      />
      {error && <p className='error'>{error}</p>}
      <ShowTaskList />
    </div>
  );
};

export default TasklistHome;
