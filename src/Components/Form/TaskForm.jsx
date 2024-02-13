import { useState, useEffect } from "react";
import Button from "../Button/Button";

export default function TaskForm() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const listData = JSON.parse(localStorage.getItem("list"));
    if (listData) {
      setList(listData);
    }
  }, []);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ name });

    setList(newList);
    setName("");
    localStorage.setItem("list", JSON.stringify(newList));
  }

  function handleDelete(obj, match) {
    const arr = obj.map((object) => object.name);
    const index = arr.indexOf(match);
    arr.splice(index, 1);

    const output = arr.map((name) => ({ name }));

    setList(output);
    localStorage.setItem("list", JSON.stringify(output));
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Add your task here"
        />
        <Button onClick={handleAdd} />
      </div>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name}
            <span onClick={() => handleDelete(list, item.name)}>&#10005;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
