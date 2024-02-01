import React from 'react'
import styles from './styles.module.scss'
import { products } from '@/mock/animal'
import CardAnimal from '../CardAnimal'

export default function ListCardAnimal() {
  return (
    <div>
        {products.map(animal => (
          <CardAnimal key={animal.id} animal={animal} />
        ))}
      </div>
  )
}
