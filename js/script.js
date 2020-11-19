// DESCRIZIONE:
// Creiamo una mini app di todolist con html+css+js in Vue
// Features principali:
// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.
/////////////////////////////////////////////// BONUS////////////////////////////////////////////////
// dò la possibilità anche di inserire la nuova “cosa da fare”, scritta nell’input anche con la pressione del tasto ‘enter’ da tastiera;
// l’utente non può inserire più volte la stessa “cosa da fare”;

// creo array vuoto dove inserire elementi che aggiungero via via come stringhe di addElement
var app = new Vue ({
  el : '#app',
  data : {
    lista : [],
    addElement : ''
  },

  methods:{
    // creo funzione per pushare in lista elemento scritto in addElement
    addItem(){
      if(this.lista.includes(this.addElement)){
       alert('Già presente nella lista');
     } else if (this.addElement === '') {
       alert('Inserire qualcosa da aggiungere alla lista');
     }else{
       this.lista.push(this.addElement);
      }
     // aggingo funz che quando si pusha poi addElement torna vuoto e ricompilabile
     this.addElement = ''
    },
    // aggiungo funzione per rimuovere elemento se clicco su X
    removeElement: function (index) {
      this.lista.splice(index, 1);
    }
  }
})
