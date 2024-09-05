import React from 'react';
import { useParams } from 'react-router-dom';
import './AthleteDetail.css'; // Crear este archivo para los estilos adicionales

const AthleteDetail = () => {
  const { athleteId } = useParams();

  // Aquí puedes usar el ID para obtener más detalles del atleta desde una API o datos estáticos
  const athlete = {
    id: athleteId,
    name: "Usain Bolt",
    description: "El velocista jamaicano es considerado ampliamente como el ser humano más rápido de todos los tiempos.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg/1200px-Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg",
    stats: {
      goldMedals: 8,
      worldRecords: 3,
      olympicAppearances: 4
    },
    gallery: [
      "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/lmusmqtktq8slg9yl1xj",
      "https://images.ecestaticos.com/DaXn8SlvX5B5DLLMyXYlALrH9PU=/35x8:2256x1559/992x700/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F734%2F75f%2F88f%2F73475f88f9cac9e05babb2f434e5dffa.jpg",
      "https://www.mundodeportivo.com/us/files/og_thumbnail/uploads/2022/10/19/6350a7e2b3075.jpeg"
    ],
    video: "https://www.youtube.com/embed/vRD4sRMN3m0?si=k96FF5J3dQ7aAxBs"
  };

  return (
    <div className="athlete-detail">
      <img src={athlete.image} alt={athlete.name} className="athlete-image" />
      <h2>{athlete.name}</h2>
      <p>{athlete.description}</p>

      <section className="athlete-stats">
        <h3>Statistics</h3>
        <ul>
          <li>Gold Medals: {athlete.stats.goldMedals}</li>
          <li>World Records: {athlete.stats.worldRecords}</li>
          <li>Olympic Appearances: {athlete.stats.olympicAppearances}</li>
        </ul>
      </section>

      <section className="athlete-gallery">
        <h3>Gallery</h3>
        <div className="gallery">
          {athlete.gallery.map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="athlete-video">
        <h3>Video</h3>
        <iframe
          width="560"
          height="315"
          src={athlete.video}
          title="Athlete Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default AthleteDetail;
