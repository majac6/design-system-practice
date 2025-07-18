import React from 'react';

export default {
  title: 'Foundation/Typography',
};

export const Typography = () => (
  <div style={{ display: 'grid', gap: '12px' }}>
    
    <div style={{ font: 'var(--regular-headline1)' }}>
      --regular-headline1 - var(--regular-headline1)
    </div>

    <div style={{ font: 'var(--regular-headline2)' }}>
      --regular-headline2 - var(--regular-headline2)
    </div>

    <div style={{ font: 'var(--regular-large)' }}>
      --regular-large - var(--regular-large)
    </div>

    <div style={{ font: 'var(--regular-medium)' }}>
      --regular-medium - var(--regular-medium)
    </div>

    <div style={{ font: 'var(--regular-small)' }}>
      --regular-small - var(--regular-small)
    </div>

    <div style={{ font: 'var(--medium-headline1)' }}>
      --medium-headline1 - var(--medium-headline1)
    </div>

    <div style={{ font: 'var(--medium-headline2)' }}>
      --medium-headline2 - var(--medium-headline2)
    </div>

    <div style={{ font: 'var(--medium-large)' }}>
      --medium-large - var(--medium-large)
    </div>

    <div style={{ font: 'var(--medium-medium)' }}>
      --medium-medium - var(--medium-medium)
    </div>

    <div style={{ font: 'var(--medium-small)' }}>
      --medium-small - var(--medium-small)
    </div>
  </div>
);
