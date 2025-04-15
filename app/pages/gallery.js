import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/pages/Gallery.module.css';
import common from '@/styles/common.module.css';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    // Add your gallery images here
    { id: 1, src: '/images/gallery/image1.jpg', alt: 'Gallery Image 1' },
    { id: 2, src: '/images/gallery/image2.jpg', alt: 'Gallery Image 2' },
    // ... more images
  ];

  return (
    <main className={common.container}>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryGrid}>
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={styles.imageWrapper}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className={styles.modal}
          onClick={() => setSelectedImage(null)}
        >
          <div className={styles.modalContent}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}

// Add static generation for better performance
export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600 // Revalidate every hour
  };
}