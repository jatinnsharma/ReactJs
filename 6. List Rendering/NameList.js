import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Jatin",
      age: "30",
      skill: "React",
    },
    {
      id: 2,
      name: "Nurender",
      age: "40",
      skill: "ReactJS",
    },
    {
      id: 3,
      name: "Mohit",
      age: "20",
      skill: "Nothing",
    },
    {
      id: 1,
      name: "Aman",
      age: "33",
      skill: "Vue",
    },
  ];
  const personList = persons.map((person) => <Person person={person} />);
  return <div>{personList}</div>;
}

export default NameList;
