import React from 'react';
import './Sports.css'; // Crear este archivo para los estilos adicionales

const sports = [
  { name: "Athletics", image: "https://hips.hearstapps.com/hmg-prod/images/minimas-atletismo-juegos-olimpicos-paris-2024-1671533472.jpeg", videoUrl: "https://youtu.be/lfptAsBLKrk?si=5JE1k17_Lyhb1jhH"  },
  { name: "Natacion", image: "https://mis-juegos-olimpicos.com/wp-content/uploads/2016/03/natacion-1.jpg", videoUrl: "https://youtu.be/WE45wyHD8Nc?si=Q4IG7w_WOwuK2EIy" },
  { name: "Gymnastics", image: "https://www.futbolred.com/files/image_800_600/uploads/2021/07/26/60ff63c80628d.jpeg", videoUrl: "https://youtu.be/rKw64eVNtDA?si=YK1-AHb86lqGqmWd" },
  { name: "Basketball", image: "https://img.olympics.com/images/image/private/t_16-9_640/f_auto/primary/vd7cbl7hlygow7biekmn", videoUrl: "https://youtu.be/4FP6aOzihiI?si=OYQtGaXWTy2pzahD" },
  { name: "Futbol", image: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/RRTGBYYQPJLMVM5SYYKKKHFXBM.jpg", videoUrl: "https://youtu.be/9K5k2TwgL3A?si=PoN6pa1lXDnFz_TG" },
  { name: "Tennis", image: "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/elw02ipxl3aqm1urulre", videoUrl: "https://youtu.be/Gw11GMDNU1E?si=K3Q_9eewLQJQ9eiv" },
  { name: "Cycling", image: "https://img.asmedia.epimg.net/resizer/v2/MBNPMCSK7OAXM3SYZ5DEC6UPRA.jpg?auth=836d0fbd838bd2a781abf7d70928b6d11733e15e024bde82b07fc1d0834277d2", videoUrl: "https://youtu.be/wSLOIaY-ias?si=1ApvD2nCD2Un_8uz" },
  { name: "Boxing", image: "https://olimpicocol.co/web/wp-content/uploads/2024/07/Angie-Valdes-Primer-Combate-en-Paris-2024-1200x675.jpg", videoUrl: "https://youtu.be/hb9Yu9V-tGQ?si=IlG9TiwMNfRkdKB6" },
  { name: "Judo", image: "https://phantom-marca.unidadeditorial.es/824705218f5f55d2d644b974e4a48136/crop/0x85/2048x1447/resize/828/f/jpg/assets/multimedia/imagenes/2024/07/24/17218197213383.jpg", videoUrl: "https://youtu.be/4uqTOkoIMoY?si=lsNg4qlq-IbHOdaI" },
  { name: "Fencing", image: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/v1668617476/primary/igr2r1cl1shgna5itint", videoUrl: "https://youtu.be/c3Ene-pqJGc?si=La2YHGaCxLuy69oQ" }
  
];


const Sports = () => {
    return (
      <div className="sports">
        <h1>Olympic Sports</h1>
        <div className="sports-grid">
          {sports.map((sport, index) => (
            <a href={sport.videoUrl} key={index} className="sport-item" target="_blank" rel="noopener noreferrer">
              <img src={sport.image} alt={sport.name} className="sport-image" />
              <div className="sport-info">
                <h2>{sport.name}</h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sports;
