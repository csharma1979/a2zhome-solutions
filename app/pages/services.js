import styles from '@/styles/pages/Services.module.css'
import common from '@/styles/common.module.css'
import ServiceCard from '@/components/ServiceCard'

export default function Services() {
  return (
    <main className={common.container}>
      <div className={styles.header}>
        <h1>Our Services</h1>
      </div>
      <div className={`${common.grid} ${styles.servicesGrid}`}>
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </main>
  )
}