import React from 'react';
import styles from './styles.module.scss';
import { IAnimal } from "@/@types/animal";

interface ICardAnimalProps {
  animal: IAnimal;
}

export default function CardAnimal({ animal }: ICardAnimalProps) {
  return (
    <div className={styles.card}>
     <div className={styles.image_container}>
     <img src={animal.img} alt={animal.name} className={styles.image} />
     </div>
      <div className={styles.details}>
        <h2>{animal.name}</h2>
        <p>{animal.breed}</p>
        <span>
        <i className="fa-solid fa-venus-mars"></i>
        <p>{animal.gender}</p>
        </span>
        {/* <p>{animal.type}</p> */}
        <span>
        <i className="fa-solid fa-location-dot"></i>
        <p>{animal.city}, {animal.state}</p>
        </span>
        <button><span>{animal.adopted ? 'Adotado' : 'Adotar'}</span> <i className="fa-solid fa-paw"></i></button>
      </div>
    </div>
  );
}
