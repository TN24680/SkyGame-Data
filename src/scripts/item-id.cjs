const fs = require('fs');
const path = require('path');
const { parse } = require('jsonc-parser');

// Read the JSON file
const filePath = path.resolve(__dirname, '../../assets/items.json');
const data = fs.readFileSync(filePath, 'utf8');
const itemConfig = JSON.parse(data);

if (!Array.isArray(itemConfig?.items)) {
  console.error('The file does not contain a JSON array.');
  return;
}

// Find the max id value
const maxId = itemConfig.items.reduce((max, item) => {
  return item.id > max ? item.id : max;
}, 0);

console.log('Next item id:', maxId + 1);

const itemsDir = path.resolve(__dirname, '../assets/items');
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  files.forEach((file) => {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      getAllFiles(fullPath, fileList);
    } else if (file.name.endsWith('.jsonc')) {
      fileList.push(fullPath);
    }
  });
  return fileList;
}

const allFiles = getAllFiles(itemsDir);

let nextId = maxId + 1;

allFiles.forEach((filePath) => {
  const fileData = fs.readFileSync(filePath, 'utf8');
  try {
    const jsonData = parse(fileData);

    if (!Array.isArray(jsonData)) { return; }
    let dirty = false;
    jsonData.forEach((item) => {
      if (typeof item.id !== 'number' || (item.id === 0 && item.guid !== 'iqCCaRTjDu')) {
        dirty = true;
        item.id = nextId++;
      }
    });

    if (dirty) {
      fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
      console.log(`Updated file: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
});