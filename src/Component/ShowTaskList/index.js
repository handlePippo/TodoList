import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleTask from "../SingleTask";
import ShowDeletedTasks from "../ShowDeletedTasks";
import { finalizeDeleted } from "../../Store/tasklist";

const ShowTaskList = () => {
  const { tasklist } = useSelector((state) => state.tasklist);
  const [showDel, setShowDel] = useState(false);
  const dispatch = useDispatch();

  const handleFinalize = () => {
    dispatch(finalizeDeleted());
  };

  const isDisabled = useMemo(
    () => !tasklist.some((el) => el.deleted),
    [tasklist]
  );

  useEffect(() => {
    if (isDisabled) {
      setShowDel(false);
    }
  }, [isDisabled]);

  return (
    <div>
      <ul>
        {!showDel
          ? tasklist.map((el, index) => {
              if (!el.deleted) {
                return (
                  <li key={index}>
                    <SingleTask task={el.task} index={index} />
                  </li>
                );
              }
              return null;
            })
          : tasklist.map((el, index) => {
              if (el.deleted) {
                return (
                  <li key={index}>
                    <SingleTask
                      task={el.task}
                      index={index}
                      showDel={showDel}
                    />
                  </li>
                );
              }
              return null;
            })}
      </ul>
      <ShowDeletedTasks
        showDel={showDel}
        isDisabled={isDisabled}
        handleClick={() => setShowDel(!showDel)}
        handleFinalize={handleFinalize}
      />
    </div>
  );
};

export default ShowTaskList;
