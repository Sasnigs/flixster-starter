import { useState } from 'react';
import './Dropdown.css'

export default function Dropdown({SortMovies}) {
  const [showOptions, setShowOptions] = useState(false);

  const options = [
    { value: 'option1', label: 'Title' },
    { value: 'option2', label: 'Most recent' },
    { value: 'option3', label: 'Rating' },
  ];

  const handleSelect = () => {
    setShowOptions(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setShowOptions(!showOptions)}>
        Sort by <i className="fa fa-angle-down"></i>
      </button>
      {showOptions && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li key={option.value} onClick={() => {SortMovies(option.label); handleSelect()}}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

