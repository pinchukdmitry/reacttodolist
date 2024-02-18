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
  }, [list]);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    list.push({ name });

    setList(list);

    setName("");
    localStorage.setItem("list", JSON.stringify(list));
  }

  function handleDelete(itemName) {
    const indx = list.findIndex((v) => v.name === itemName);
    list.splice(indx, indx >= 0 ? 1 : 0);

    setList(list);
    localStorage.setItem("list", JSON.stringify(list));
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
            <span onClick={() => handleDelete(item.name)}>&#10005;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
