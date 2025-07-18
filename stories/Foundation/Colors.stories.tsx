import React from 'react';

export default {
  title: 'Foundation/Colors',
};

export const Colors = () => (
  <div style={{ display: 'grid', gap: '12px' }}>
    
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="bg-primary-soil-50" style={{
        width: 40, height: 40, backgroundColor: 'var(--primary-soil-50)',
        borderRadius: 4, marginRight: 8
      }} />
      <code>--primary-soil-50: #d9d9d9</code>
    </div>

    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{
        width: 40, height: 40, backgroundColor: 'var(--primary-soil-100)',
        borderRadius: 4, marginRight: 8
      }} />
      <code>--primary-soil-100: #a6a6a6</code>
    </div>

    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{
        width: 40, height: 40, backgroundColor: 'var(--primary-soil-200)',
        borderRadius: 4, marginRight: 8
      }} />
      <code>--primary-soil-200: #949494</code>
    </div>

    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{
        width: 40, height: 40, backgroundColor: 'var(--primary-soil-300)',
        borderRadius: 4, marginRight: 8
      }} />
      <code>--primary-soil-300: #868686</code>
    </div>

    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{
        width: 40, height: 40, backgroundColor: 'var(--primary-soil-400)',
        borderRadius: 4, marginRight: 8
      }} />
      <code>--primary-soil-400: #303030</code>
    </div>

    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{
        width: 40, height: 40, backgroundColor: 'var(--primary-soil-500)',
        borderRadius: 4, marginRight: 8
      }} />
      <code>--primary-soil-500: #222222</code>
    </div>

    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{
        width: 40, height: 40, backgroundColor: 'var(--primary-soil-600)',
        borderRadius: 4, marginRight: 8
      }} />
      <code>--primary-soil-600: #0c0c0c</code>
    </div>
  </div>
);
