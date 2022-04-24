import { useState } from 'react';

export const Header = (props) => {

  const [search , setSearch] = useState('');

    const changing = (event) => {
    const value = event.target.value;
    setSearch(value);
    console.log(event);
    props.searching(value);
  }

    return (
      <header>
        <div className="logo">
          <i className="fa-brands fa-amazon fa-4x"></i>
        </div>
        <form>
          <input type="text" placeholder="Search..." value={search} onChange={changing}/>
          <button id="submit"><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
        </form>

        <div className="shop">
          <i className="fa-solid fa-cart-shopping fa-xl"></i>
        </div>

      </header>
    );
  };