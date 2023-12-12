import { useEffect } from "react";
import { useGetTasksQuery } from "../../../api/api";
import { useSelector } from "react-redux";
import { selectTaskIdsByDate } from "../tasksSlice";
import { useCheckAuth } from "../../../context/AuthenticationContext";
import moment from "moment";

export function useGetTaskIds(date, type) {
  date =
    type === "year"
      ? moment(date).format("YYYY")
      : moment(date).format("YYYY-MM-DD");

  const { isDemo } = useCheckAuth();
  const { isLoading } = useGetTasksQuery({
    start: date,
    end: date,
    view: type,
    skip: isDemo,
  });
  const tasks = useSelector((state) => selectTaskIdsByDate(state, date, type));

  return { tasks, isLoading };
}
