import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="history">
        <h2>Historia de los Juegos Olímpicos</h2>
        <p>
        Esta historia comienza en 776 AC en Olimpia, Grecia, donde se realizan los primeros Juegos Olímpicos. El premio para los atletas consiste en una corona de olivos. Once siglos después, el emperador romano Teodisio I los suspende por considerarlos un espectáculo pagano. Los Juegos Olímpicos de la era moderna son concebidos por el barón Pierre de Coubertin y se gestan en 1894 en 
        la Universidad de la Sorbona en París. Allí el francés llama a universalizar el deporte bajo el lema: “citius, altius, fortius” (“más rápido, más alto, más fuerte”). El 24 de junio de 1894 se crea el Comité Olímpico Internacional (COI) con la asistencia de 15 países. Se designa al griego Demetrios Bikelas como presidente y a Coubertin como secretario y se determina la organización de los Juegos de Atenas para 1896. En esta primera edición participan 14 países y 241 deportistas (exclusivamente hombres) que compiten en 43 pruebas de 10 disciplinas. El estadounidense James Connoly, en salto triple, es el primer campeón olímpico en más de 1.500 años. Las competencias de natación se realizan en mar abierto. Y los premios que se otorgan son una medalla de plata, una corona de laureles y un diploma. La gran figura de los primeros Juegos es el maratonista griego Spiridon Louis. El pastor gana la carrera creada a instancias del historiador Michel Breal y entonces la distancia recorrida (40 kilómetros) es la que había realizado el soldado Filipides en 490 AC desde el monte Maratón hasta Atenas. Esto le devuelve la ilusión a los griegos, quienes no había logrado buenos resultados hasta esa prueba. Finalmente, 
        sólo Louis se transforma en un héroe nacional. La prensa ignora el evento casi por completo.
        </p>
      </section>

      <section className="upcoming-events">
        <h2>eventos</h2>
        <ul>
          <li><Link to="/event/1">100m Sprint - Men's Final</Link></li>
          <li><Link to="/event/2">Swimming - Women's 200m Butterfly</Link></li>
          <li><Link to="/event/3">Gymnastics - Men's All-Around Final</Link></li>
        </ul>
      </section>

      <section className="featured-athletes">
        <h2>Atletas destacados</h2>
        <div className="athlete">
          <Link to="/athlete/1">
          <img src="https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/lmusmqtktq8slg9yl1xj" alt="Athlete" />
          <h3>Usain Bolt</h3>
          </Link>
          <p>El velocista jamaicano es considerado ampliamente como el ser humano más rápido de todos los tiempos</p>
        </div>
        <div className="athlete">
        <Link to="/athlete/2">
          <img src="https://gwuwi.com/wp-content/uploads/2021/09/michael-phelps.jpg?w=1545&h=1200&crop=1" alt="Athlete" />
          <h3>Michael Phelps</h3>
          </Link>
          <p>Nadador estadounidense, el atleta olímpico más condecorado de todos los tiempos con 23 medallas de oro.</p>
        </div>

        <div className="athlete">
        <Link to="/athlete/3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Simone_Biles_Rio_2016e.jpg" alt="Athlete" />
          <h3>Simone Biles</h3>
          </Link>
          <p>American gymnast, considered one of the greatest gymnasts of all time.</p>
        </div>

        <div className="athlete">
        <Link to="/athlete/3">
          <img src="https://swimswam.com/wp-content/uploads/2023/07/Fukuoka23_July25_FinalsLEDECKY-Katie056.jpg" alt="Katie Ledecky" />
          <h3>Katie Ledecky</h3>
          </Link>
          <p>Nadadora estadounidense, una de las nadadoras más exitosas de la historia.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
