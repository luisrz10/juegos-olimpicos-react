import React, { useState } from 'react';
import './Countries.css'; // Crear este archivo para los estilos adicionales

const initialCountries = [
  { name: "USA", medals: 2793, flag: "https://img.freepik.com/vector-premium/ilustracion-bandera-estados-unidos_768467-331.jpg" },
  { name: "Reino Unido", medals: 1003, flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1280px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" },
  { name: "Union sovietica", medals: 1009, flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/2560px-Flag_of_the_Soviet_Union.svg.png" },
  { name: "China", medals: 728, flag: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_China.png" },
  { name: "Alemania", medals: 830, flag: "https://img.freepik.com/vector-gratis/ilustracion-bandera-alemana_53876-27101.jpg" },
  { name: "Francia ", medals: 837, flag: "https://img.freepik.com/vector-gratis/ilustracion-bandera-francia_53876-27099.jpg" },
  { name: " Italia", medals: 672, flag: "https://w7.pngwing.com/pngs/449/486/png-transparent-flag-of-italy-italian-banner-s-angle-flag-text-thumbnail.png" },
  { name: "Japón", medals: 544, flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQST7v5YYTqJjb39lEtehuqnBptACctFtQerA&s" },
  { name: "Hungría", medals: 534, flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/2560px-Flag_of_Hungary.svg.png" },
  { name: "Australia ", medals: 594, flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/2560px-Flag_of_Australia.svg.png" },
  { name: "Suecia ", medals: 518, flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/2560px-Flag_of_Sweden.svg.png" },
  { name: "Alemania Oriental ", medals: 409, flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_East_Germany.svg/1280px-Flag_of_East_Germany.svg.png" },
  { name: "Rusia ", medals: 431, flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/2560px-Flag_of_Russia.svg.png" },
  { name: " Países Bajos ", medals:363, flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png" },
  { name: "Corea del Sur", medals: 319, flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png" },
  { name: "Finlandia", medals: 310, flag: "https://img.freepik.com/vector-gratis/ilustracion-bandera-finlandia_53876-27108.jpg" },
  { name: " Rumanía", medals: 317, flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg" },
  { name: " Cuba ", medals: 244, flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/2560px-Flag_of_Cuba.svg.png" },
  { name: "Canadá ", medals: 353, flag: "https://img.freepik.com/vector-gratis/ilustracion-bandera-canada_53876-27114.jpg" },
  { name: "Polonia", medals: 316, flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Q3VjF1GdA_eJlXAC3kOv_MRWmBd3JQK_Mw&s" },
  { name: " Noruega", medals:170, flag: "https://img.freepik.com/vector-gratis/ilustracion-bandera-noruega_53876-27115.jpg" }
];


const Countries = () => {
  const [sortOrder, setSortOrder] = useState('desc'); // Orden por defecto
  const [filterQuery, setFilterQuery] = useState('');

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterQuery(e.target.value);
  };

  const filteredCountries = initialCountries
    .filter(country => country.name.toLowerCase().includes(filterQuery.toLowerCase()))
    .sort((a, b) => sortOrder === 'desc' ? b.medals - a.medals : a.medals - b.medals);

  return (
    <div className="countries">
      <h1>Países con más medallas olímpicas</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Filtrar por nombre de pais"
          value={filterQuery}
          onChange={handleFilterChange}
        />
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="desc">Ordenar por Medallas (Descendente)</option>
          <option value="asc">Ordenar por Medallas (Ascendente)</option>
        </select>
      </div>

      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index} className="country-item">
            <img src={country.flag} alt={country.name} className="country-flag" />
            <div className="country-info">
              <h2>{country.name}</h2>
              <p>Medallas: {country.medals}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
