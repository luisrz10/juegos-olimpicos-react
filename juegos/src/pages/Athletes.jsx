import React from 'react';
import './Athletes.css'; // Crear este archivo para los estilos adicionales

const athletes = [
  { name: "Usain Bolt", description: "Jamaican sprinter widely considered the fastest human ever.", image: "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/lmusmqtktq8slg9yl1xj" },
  { name: "Michael Phelps", description: "American swimmer with the most Olympic gold medals.", image: "https://acordcolombia.com.co/wp-content/uploads/2020/07/las-35-de-Phelps.jpg" },
  { name: "Simone Biles", description: "American gymnast with a record number of gold medals in gymnastics.", image: "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/v1627219484/primary/cts0yqdhtfm9yowtrv1j" },
  { name: "Cristiano Ronaldo", description: "Portuguese footballer considered one of the greatest footballers of all time.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NGEQDekk2BwsllLjk4tcIM_BPIzXECdsg&s" },
  { name: "Lionel Messi", description: "Argentine footballer known for his incredible skill and multiple awards.", image: "https://assets.goal.com/images/v3/bltd58c4d60ecd9275e/GOAL_-_Blank_WEB_-_Facebook_-_2023-06-13T135350.847.png?auto=webp&format=pjpg&width=3840&quality=60" },
  { name: "LeBron James", description: "American basketball player known for his versatility and multiple NBA championships.", image: "https://deadline.com/wp-content/uploads/2022/08/Lebron-James.jpg?w=1000" },
  { name: "Serena Williams", description: "American tennis player with numerous Grand Slam titles and Olympic gold medals.", image: "https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/field/image/leyendas-deportes-serena-williams.jpg" },
  { name: "Nadia Comaneci", description: "Romanian gymnast who scored the first perfect 10 in Olympic gymnastics.", image: "https://media.meer.com/attachments/3746c5f60c58ddd340b19dff0ad3102be61bc88b/store/fill/860/645/c3bce51a20ff8ea2439485bef01c212f3504a23bffe80ec105152bacb017/Nadia-Comaneci.jpg" },
  { name: "Stephen Curry", description: "Wardell Stephen Curry II (Akron, Ohio, 14 de marzo de 1988) es un jugador de baloncesto estadounidense que pertenece a la plantilla de los Golden State .", image: "https://media.gq.com.mx/photos/661ed6c5ae32a7a6794cd190/4:3/w_1996,h_1497,c_limit/mejores-tenis-de-stephen-curry.jpg" },
  { name: "michael jordan", description: "Michael Jeffrey Jordan es un exjugador de baloncesto estadounidense. Con 1,98 metros de altura, jugaba en la posición de escolta. Es considerado por la mayoría de aficionados y especialistas como el mejor jugador de baloncesto de todos los tiempos.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Jordan_by_Lipofsky_16577.jpg/220px-Jordan_by_Lipofsky_16577.jpg" }
];

const Athletes = () => {
  return (
    <div className="athletes">
      <h1>Featured Athletes</h1>
      <div className="athlete-grid">
        {athletes.map((athlete, index) => (
          <div key={index} className="athlete-item">
            <img src={athlete.image} alt={athlete.name} className="athlete-image" />
            <div className="athlete-info">
              <h2>{athlete.name}</h2>
              <p>{athlete.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Athletes;
