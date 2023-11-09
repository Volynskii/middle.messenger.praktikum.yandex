import './style.scss'
import Handlebars from 'handlebars';

const source = '<div><p>Name: {{name}}</p><p>Age: {{age}}</p></div>';
const template = Handlebars.compile(source);
const context = { name: "rocks!", age:30 }

document.querySelector('#app').innerHTML = template(context)