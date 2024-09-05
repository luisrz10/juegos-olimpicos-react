import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetail.css'; // Crear este archivo para los estilos adicionales

const EventDetail = () => {
  const { eventId } = useParams();

  // Aquí puedes usar el ID para obtener más detalles del evento desde una API o datos estáticos
  const event = {
    id: eventId,
    name: "100 m sprint - Final masculina",
    description: "La carrera final de los 100 metros lisos masculinos.",
    image: "https://estaticos-cdn.prensaiberica.es/clip/59bcee10-35f9-49d2-b3d5-bcdbe77198f8_alta-libre-aspect-ratio_default_0.jpg",
    gallery: [
      "https://tvazteca.brightspotcdn.com/dims4/default/bfcb6a1/2147483647/strip/true/crop/1200x740+0+0/resize/928x572!/format/jpg/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F51%2F76%2F62bb27f542d4a0f67dae25f9671c%2Fnoah-lyles.jpg",
      "https://olimpicocol.co/web/wp-content/uploads/2024/08/Ronal-Longa-en-Paris-2024-1200x675.jpg",
      "https://www.semana.com/resizer/v2/CV6IPBFD7FEEVHDHALX4EXZZPI.jpg?auth=954d4cf57dba49733137f84c28ede6ff1430f345157df9119ead4aeee10308d3&smart=true&quality=75&width=1280&fitfill=false"
    ],
    video: "https://www.youtube.com/embed/nBIAxWw5jos?si=Xqk7Y-dDiXpRYur8"
  };

  return (
    <div className="event-detail">
      <img src={event.image} alt={event.name} className="event-image" />
      <h2>{event.name}</h2>
      <p>{event.description}</p>

      <section className="event-gallery">
        <h3>Gallery</h3>
        <div className="gallery">
          {event.gallery.map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="event-video">
        <h3>Video</h3>
        <iframe
          width="560"
          height="315"
          src={event.video}
          title="Event Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default EventDetail;
