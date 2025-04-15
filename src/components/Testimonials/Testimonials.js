import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Homeowner",
    text: "Exceptional service! The team was professional and completed our renovation project ahead of schedule."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Property Manager",
    text: "A2Z Home Solutions has been our go-to contractor for all our properties. Their work is consistently excellent."
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Homeowner",
    text: "The attention to detail and quality of work exceeded our expectations. Highly recommended!"
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Business Owner",
    text: "Outstanding craftsmanship and customer service. They transformed our commercial space beautifully."
  },
  {
    id: 5,
    name: "Robert Wilson",
    role: "Homeowner",
    text: "Very impressed with their professionalism and attention to detail. The kitchen remodel turned out perfect."
  },
  {
    id: 6,
    name: "Lisa Anderson",
    role: "Real Estate Agent",
    text: "A reliable team that delivers quality work consistently. My clients are always satisfied with their services."
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <FaQuoteLeft className={styles.quoteIcon} />
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.testimonialAuthor}>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;