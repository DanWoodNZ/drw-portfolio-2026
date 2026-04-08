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

function replaceBalanced(str, openStr, newOpen, newClose) {
  let idx = str.indexOf(openStr);
  while(idx !== -1) {
    let searchStart = idx + openStr.indexOf('<div');
    
    let openCount = 0;
    let p = searchStart;
    let foundStart = false;
    let startReplace = -1;
    let endReplace = -1;
    
    while(p < str.length) {
      if (str.substring(p, p + 4) === '<div') {
        if (!foundStart) {
          foundStart = true;
          startReplace = p;
        }
        openCount++;
        p += 4;
      } else if (str.substring(p, p + 6) === '</div>') {
        openCount--;
        if (openCount === 0) {
          endReplace = p;
          break;
        }
        p += 6;
      } else {
        p++;
      }
    }
    
    if (endReplace !== -1) {
      let before = str.substring(0, startReplace);
      let inside = str.substring(startReplace + 4, endReplace);
      let after = str.substring(endReplace + 6);
      
      str = before + newOpen + inside + newClose + after;
    } else {
      break; 
    }
    
    idx = str.indexOf(openStr, searchStart + newOpen.length);
  }
  return str;
}


files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Skip if already applied
  if (content.includes('ScrollReveal')) return;

  // 1. Add imports
  content = content.replace(
    'import Image from "next/image";',
    'import Image from "next/image";\nimport { ScrollReveal } from "@/components/ScrollReveal";\nimport { HeroReveal } from "@/components/HeroReveal";'
  );

  // Hard match the Masonry blocks 
  content = content.replace(
    /      <div className="w-full px-\[20px\] md:px-\[40px\] lg:px-\[100px\] mb-16 md:mb-24">\n        <MasonryGrid images=\{masonryPlaceholderImages\} \/>\n      <\/div>/g,
    '      <ScrollReveal className="w-full px-[20px] md:px-[40px] lg:px-[100px] mb-16 md:mb-24">\n        <MasonryGrid images={masonryPlaceholderImages} />\n      </ScrollReveal>'
  );

  content = content.replace(
    /      <div className="w-full px-\[20px\] md:px-\[40px\] lg:px-\[100px\]">\n        <MasonryGrid images=\{masonryPlaceholderImages\} \/>\n      <\/div>/g,
    '      <ScrollReveal className="w-full px-[20px] md:px-[40px] lg:px-[100px]">\n        <MasonryGrid images={masonryPlaceholderImages} />\n      </ScrollReveal>'
  );


  // Balanced Match the physical HTML string layout bounds uniquely catching exact DOM logic maps:
  content = replaceBalanced(content, '{/* Editable Top Hero Layout */}\n      <div', '<HeroReveal', '</HeroReveal>');
  content = replaceBalanced(content, '{/* Editable Primary Hero Image */}\n      <div', '<ScrollReveal', '</ScrollReveal>');
  content = replaceBalanced(content, '{/* Case Study Block */}\n      <div', '<ScrollReveal', '</ScrollReveal>');
  content = replaceBalanced(content, '{/* Editable Title & Description side by side */}\n      <div', '<ScrollReveal', '</ScrollReveal>');
  content = replaceBalanced(content, '{/* Editable Project Credits */}\n      <div', '<ScrollReveal', '</ScrollReveal>');

  // Write file
  fs.writeFileSync(file, content);
  console.log(`Successfully mapped explicit DOM boundaries on ${file}`);
});
