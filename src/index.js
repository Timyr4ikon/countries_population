import './styles.css';
import './gg.js'
import fetchCountries from './fetchCountries'
const debounce = require('lodash.debounce');
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css'
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyButtons from '../node_modules/pnotify/dist/es/PNotifyButtons.js';
PNotify.defaults.width = '100%';
PNotify.defaults.delay = 1500;


const currentCountry = document.querySelector('input[data-action="search"]');
const root = document.querySelector('.root');
currentCountry.addEventListener('input',debounce(sendResult,500));

function sendResult(){
    if(currentCountry.value.trim().length !== 0){
        fetchCountries(currentCountry.value.trim())
        .then(data =>{
            console.log(data);
            if(data.status === 404){
                PNotify.error({
                    text: `Make sure to write the name of the country properly`,
                  });
                  return;
            }
            if(data.length > 10){
                alertError();
                return
            }
            if(data.length >1 && data.length < 11){
              root.innerHTML =  createGalleryList(data);
              return;
            }
            if(data.length ===1){
                const country = data[0];
                console.log(country.languages)
                root.innerHTML = `     <h2>${country.name}</h2>
                <div class="flex">
                    <div class="content">
                      <p>Capital: <span>${country.capital}</span></p>
                      <p>Population: <span>${country.population}</span></p>
                      <div>
                        <p>Languages:</p>
                        <ul>
                            ${lol(country.languages)}
                        </ul>
                      </div>
                   </div>
          
                   <img src=${country.flag} alt="">
              </div>`;
                              
            }
            
        })
    }
   

}
function alertError(){
    PNotify.error({
        text: `Too many matches found.
         Please enter a more specific query!`,
      });
}
function createGalleryItem(el){
    return  `
    <li >
        ${el.name}
    </li>
    `
}
function createGalleryList(data){
    return `<ul>${data.reduce((markup, el) => markup += createGalleryItem(el), "")}</ul>`;
  }
function lol(langs){
    return langs.reduce((acc,el) => acc+=`<li>${el.nativeName}</li>`,'');
}


