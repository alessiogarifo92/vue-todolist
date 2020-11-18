// DESCRIZIONE:
// Creiamo una mini app di todolist con html+css+js in Vue
// Features principali:
// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.

// creo array vuoto dove inserire elementi che aggiungero via via come stringhe di addElement
var app = new Vue ({
  el : '#app',
  data : {
    lista : [],
    addElement : ''
  },
// creo funzione per pushare in lista elemento scritto in addElement
  methods:{
    addItem(){
      this.lista.push(this.addElement);
      // aggingo funz che quando si pusha poi addElement torna vuoto e ricompilabile
      this.addElement = '';
    }
  }
})
