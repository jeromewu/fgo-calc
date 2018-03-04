const fs = require('fs');

const imageRoot = '../src/assets/images';
const types = ['asc', 'drop', 'ce', 'item', 'servant'];

const toTitleCase = str => (
  str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
);

const list = types.reduce((lst, type) => (
  lst
    .concat(fs.readdirSync(`${imageRoot}/${type}`).map(name => ({ name: name.replace('.png', ''), type })))
), []);


const indexJS = `${list.map(({ name, type }) => `import ${name.replace(/\./g, '')} from './${type}/${name}.png';`).join('\n')}

export default {
${list.map(({ name, type }) => `  '${toTitleCase(type)}.${name}': ${name.replace(/\./g, '')},`).join('\n')}
};
`;

fs.writeFileSync(`${imageRoot}/index.js`, indexJS);
