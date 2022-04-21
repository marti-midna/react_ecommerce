import { useState, useEffect } from "react";

const mock = ["category 1", "category 2", "category 3"];

export const Sidebar = (props) => {
  const [categories, setCategories] = useState(mock);

  const getData = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories/"
    );
    const data = await response.json();
    data.unshift('all');
    setCategories(data);
  };

  /**
   * useEffect(callback, []) === callback da eseguire appena il
   * componente è aggiunto alla pagina (tipo DOMContentLoaded ma
   * solo per il componente)
   *
   * useEffect è molto simile a un addEventListener
   */
  useEffect(() => {
    getData();
  }, []);

  //addEventlistener sulla categoria da cliccare renza fare aprire una finestra come fa di default un link clicckato
  const clicked = (event, category) => {
    event.preventDefault(); //evita il comportamento predef del link cioè aprire una nuova pagina
    console.log('bitch hai cliccato : ', category);
    props.catSelection(category);

  }

  return (
    <aside>
      <h2>Categories</h2>
      <ul>
        {categories.map((item, index) => (
          <li key={index}>
            <a href={item} onClick={(event) => clicked(event, item)}>{item}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};