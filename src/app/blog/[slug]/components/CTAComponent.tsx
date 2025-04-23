'use client';
import React from 'react';
import styles from '../CTAComponent.module.css'; // Importing as a CSS module
import Link from 'next/link';

interface CTAProps {
  heading: string;
  buttonName: string;
  buttonLink: string;
}
const CTAComponent: React.FC<CTAProps> = ({ heading, buttonName, buttonLink }) => {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaContent}>
        {/* <h2>Customized SaaS <br /> Management at your ease</h2> */}
        <h2>{heading}</h2>
        <div className={styles.ctaButtonWrapper}>
          <Link href={buttonLink}>
            <button className={styles.ctaButton}>{buttonName}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTAComponent;

