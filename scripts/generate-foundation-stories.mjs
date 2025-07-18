import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 현재 파일 경로 구하기 (ESM에서 필요)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 파일 경로 정의
const cssPath = path.resolve(__dirname, '../design-token/css/_variable.css');
const colorStoryPath = path.resolve(__dirname, '../stories/Foundation/Colors.stories.tsx');
const typoStoryPath = path.resolve(__dirname, '../stories/Foundation/Typography.stories.tsx');

// CSS 변수 파일이 없으면 종료
if (!fs.existsSync(cssPath)) {
  console.error('❌ CSS 변수 파일이 존재하지 않습니다:', cssPath);
  process.exit(1);
}

// CSS 파일 읽기
const css = fs.readFileSync(cssPath, 'utf-8');
const colorVars = [];
const fontSizeVars = [];
const fontWeightVars = [];

css.split('\n').forEach(line => {
  const match = line.match(/--([a-zA-Z0-9-_]+):\s*(.+);/);
  if (!match) return;

  const [, name, value] = match;

  if (value.startsWith('#')) {
    colorVars.push({ name, value });
  } else if (name.startsWith('font-size-')) {
    fontSizeVars.push({ name, value });
  } else if (name.startsWith('font-weight-')) {
    fontWeightVars.push({ name, value });
  }
});

// Colors 스토리 생성
const colorStory = `import React from 'react';

export default {
  title: 'Foundation/Colors',
};

export const Colors = () => (
  <div style={{ display: 'grid', gap: '12px' }}>
    ${colorVars
      .map(
        ({ name, value }) => `
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{
        width: 40, height: 40, backgroundColor: 'var(--${name})',
        borderRadius: 4, marginRight: 8
      }} />
      <code>--${name}: ${value}</code>
    </div>`
      )
      .join('\n')}
  </div>
);
`;

fs.mkdirSync(path.dirname(colorStoryPath), { recursive: true });
fs.writeFileSync(colorStoryPath, colorStory);

console.log('✅ Foundation stories generated (ESM version)');
