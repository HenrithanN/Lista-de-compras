import {handleNovoItem} from './components/criaTarefa.js';
import {$} from './components/criaTarefa.js';
import {carregaTarefa} from './components/carregaTarefa.js'

const btnNovaTarefa = $('[data-form-button]');
btnNovaTarefa.addEventListener('click', handleNovoItem);

carregaTarefa();