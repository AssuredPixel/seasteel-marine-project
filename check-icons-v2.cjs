const lucide = require('lucide-react');
const all = Object.keys(lucide);
console.log('Linkedin exists:', all.includes('Linkedin'));
console.log('Twitter exists:', all.includes('Twitter'));
console.log('Mail exists:', all.includes('Mail'));
console.log('Phone exists:', all.includes('Phone'));
console.log('MapPin exists:', all.includes('MapPin'));
console.log('Similar to LinkedIn:', all.filter(k => k.toLowerCase().includes('lin')));
console.log('Similar to Twitter:', all.filter(k => k.toLowerCase().includes('twi')));
