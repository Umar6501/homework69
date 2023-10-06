import { React, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3000/news/${params.userId}`)
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }, []);
  const params = useParams();
  console.log(params);
  return (
    <>
      <div className="todos">
        <div className="container">
          <div className="todos__wrapper">
            <h2>Todos</h2>
            <div className="todos__cards">
              {todos.map((news, index) => (
                <div className="todos__item" key={index}>
                  <h1>{news.autor}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
