import Image from 'next/image'
import styles from './styles/ServiceCard.module.css'
import common from '@/styles/common.module.css'

const ServiceCard = ({ service }) => {
  return (
    <div className={`${styles.card} ${common.flexCenter}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          loading="lazy"
        />
      </div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
    </div>
  )
}

export default ServiceCard