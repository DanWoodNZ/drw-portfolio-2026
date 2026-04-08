const fs = require('fs');

const files = [
  'src/app/projects/current-direct-deposit/page.tsx',
  'src/app/projects/current-ia/page.tsx',
  'src/app/projects/mbw/page.tsx',
  'src/app/projects/wing/page.tsx',
  'src/app/projects/simply-nootropics/page.tsx',
  'src/app/projects/quimbee/page.tsx',
  'src/app/projects/quimbee-app/page.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('ScrollReveal')) return;

  // Add Framer animation imports to the global component tree efficiently!
  content = content.replace(
    'import Image from "next/image";',
    'import Image from "next/image";\nimport { ScrollReveal } from "@/components/ScrollReveal";\nimport { HeroReveal } from "@/components/HeroReveal";'
  );

  // Directly swap the explicit Hero Header to track independent load sequences instantly.
  content = content.replace(
    /\{\/\*\s*Editable Top Hero Layout\s*\*\/\}\n\s*<div className="w-full([^>]*)>/,
    '{/* Editable Top Hero Layout */}\n      <HeroReveal className="w-full$1">'
  );

  const lines = content.split('\n');
  const outLines = [];
  const stack = []; 
  
  for (let line of lines) {
    // Top-Level Framer Wrapper Push
    if (line.match(/^      <HeroReveal/)) {
      stack.push('HeroReveal');
      outLines.push(line);
      continue;
    }
    
    // Explicit 6-space physical boundary intercepts catching every massive DOM node natively!
    if (line.match(/^      <div className="w-full/)) {
      stack.push('ScrollReveal');
      outLines.push(line.replace(/^      <div/, '      <ScrollReveal'));
      continue;
    }

    // Dynamic resolution strictly appending the correctly paired Framer closing tag dynamically!
    if (line.match(/^      <\/div>/)) {
      if (stack.length > 0) {
        const tag = stack.pop();
        outLines.push(line.replace(/^      <\/div>/, `      </${tag}>`));
        continue;
      }
    }
    outLines.push(line);
  }
  
  fs.writeFileSync(file, outLines.join('\n'));
  console.log(`Successfully mapped Scroll arrays into ${file} !`);
});
