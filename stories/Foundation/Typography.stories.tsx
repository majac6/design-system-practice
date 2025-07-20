import React from 'react';

export default {
  title: 'Foundation/Typography',
};

export const Typography = () => (
  <div style={{ display: 'grid', gap: '12px' }}>
    
    <div style={{ font: 'var(--typo-regular-headline1)' }}>
      --typo-regular-headline1 - var(--typo-regular-headline1)
    </div>

    <div style={{ font: 'var(--typo-regular-headline2)' }}>
      --typo-regular-headline2 - var(--typo-regular-headline2)
    </div>

    <div style={{ font: 'var(--typo-regular-large)' }}>
      --typo-regular-large - var(--typo-regular-large)
    </div>

    <div style={{ font: 'var(--typo-regular-medium)' }}>
      --typo-regular-medium - var(--typo-regular-medium)
    </div>

    <div style={{ font: 'var(--typo-regular-small)' }}>
      --typo-regular-small - var(--typo-regular-small)
    </div>

    <div style={{ font: 'var(--typo-bold-headline1)' }}>
      --typo-bold-headline1 - var(--typo-bold-headline1)
    </div>

    <div style={{ font: 'var(--typo-bold-headline2)' }}>
      --typo-bold-headline2 - var(--typo-bold-headline2)
    </div>

    <div style={{ font: 'var(--typo-bold-large)' }}>
      --typo-bold-large - var(--typo-bold-large)
    </div>

    <div style={{ font: 'var(--typo-bold-medium)' }}>
      --typo-bold-medium - var(--typo-bold-medium)
    </div>

    <div style={{ font: 'var(--typo-bold-small)' }}>
      --typo-bold-small - var(--typo-bold-small)
    </div>
  </div>
);
