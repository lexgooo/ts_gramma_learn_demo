import {sayHello} from './greet'

function showHello(divId:string, name:string):void {
    const elt = document.getElementById(divId)
    elt.innerText = sayHello(name)
}

showHello('greeting', 'TypeScript')