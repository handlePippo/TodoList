import React from "react";
import Button from "../Button";

const ShowDeletedTasks = ({
  handleClick,
  showDel,
  handleFinalize,
  isDisabled,
}) => {
  return (
    <div>
      <Button
        name={!showDel ? "Mostra eliminati" : "Nascondi eliminati"}
        handleClick={handleClick}
        isDisabled={isDisabled}
      />
      {showDel && (
        <Button name='Elimina definitivamente' handleClick={handleFinalize} />
      )}
    </div>
  );
};

export default ShowDeletedTasks;
