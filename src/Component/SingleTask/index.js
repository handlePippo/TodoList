import React, { useState, useCallback } from "react";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, restoreTask } from "../../Store/tasklist";
import Input from "../Input";

const SingleTask = ({ task, index, showDel }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = useCallback(() => {
    setEditMode(!editMode);
  }, [editMode]);

  const handleSave = useCallback(() => {
    dispatch(editTask({ editedTask, index }));
    setEditMode(!editMode);
  }, [dispatch, editMode, editedTask, index]);

  const handleDiscard = useCallback(() => {
    setEditMode(!editMode);
    setEditedTask(task);
  }, [editMode, task]);

  const handleDelete = useCallback(() => {
    dispatch(deleteTask(index));
  }, [dispatch, index]);

  const handleRestore = useCallback(() => {
    dispatch(restoreTask(index));
  }, [dispatch, index]);

  return (
    <div>
      {editMode ? (
        <Input
          handleChange={(e) => setEditedTask(e.target.value)}
          text={editedTask}
        />
      ) : (
        task
      )}

      {!showDel && !editMode ? (
        <>
          <Button name='Elimina' handleClick={handleDelete} />
          <Button name='Modifica' handleClick={handleEdit} />
        </>
      ) : showDel ? (
        <Button name='Ripristina' handleClick={handleRestore} />
      ) : (
        <>
          <Button name='Salva' handleClick={handleSave} />
          <Button name='Annulla' handleClick={handleDiscard} />
        </>
      )}
    </div>
  );
};

export default SingleTask;
