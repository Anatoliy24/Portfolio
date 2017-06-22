import 'normalize.css';
import './index/index.scss';

import createMenu from './menu/menu';
var menu = createMenu(['НЕГлавная','Обо мне','Портфолио'], 'menu');
document.body.appendChild(menu);
console.log(jQuery);
