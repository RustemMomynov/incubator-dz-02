import React, { useState } from "react";
import Affairs from "./affairs/Affairs";
import s2 from "../../s1-main/App.module.css";

/*
 * 11 - в файле Affair.tsx отобразить приходящие данные
 * */

// types
export type AffairPriorityType = "low" | "high" | "middle"; // need to fix any
export type AffairType = {
  _id: number; // need to fix any
  name: string; // need to fix any
  priority: AffairPriorityType;
};
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: AffairType[] = [
  { _id: 1, name: "React", priority: "high" },
  { _id: 2, name: "anime", priority: "low" },
  { _id: 3, name: "games", priority: "low" },
  { _id: 4, name: "work", priority: "high" },
  { _id: 5, name: "html & css", priority: "middle" },
];

// pure helper functions
export const filterAffairs = (
  affairs: AffairType[],
  filter: FilterType
): AffairType[] => {
  if (filter !== "all") {
    return affairs.filter((a) => a.priority === filter);
  } else return affairs;
};
export const deleteAffair = (
  affairs: AffairType[],
  _id: number
): AffairType[] => {
  return affairs.filter((a) => a._id !== _id);
};

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) => {
    setAffairs(deleteAffair(affairs, _id));
  };

  return (
    <div id={"hw2"}>
      <div className={s2.hwTitle}>Homework #2</div>
      <div className={s2.hw}>
        <Affairs
          data={filteredAffairs}
          setFilter={setFilter}
          deleteAffairCallback={deleteAffairCallback}
          filter={filter}
        />
        <hr style={{ margin: "50px 0" }} />
      </div>
    </div>
  );
}

export default HW2;
