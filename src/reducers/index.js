import {ADD, SEARCH, RATING, EDIT, REMOVE} from "../const/actionType"

const initState = {
 cards : [
    {Image:"http://fr.web.img3.acsta.net/pictures/19/04/19/09/29/4029006.jpg",
    Title:"Aladin",
    Released:"Octobre 2019",
    Runtime:"129 min",
    Rating:4,
    id:1
  },
    {Image:" https://e.snmc.io/i/300/w/cca26841985a30f02142aaee0db10d76/6772748",
    Title:"Bad Ginus",
    Released:"Mai 2017",
    Runtime:"139 min",
    Rating:3,
    id:2
},
{Image:" https://specials-images.forbesimg.com/imageserve/5d6a0922fead28000892b2b7/960x0.jpg?fit=scale",
    Title:"Joker",
    Released:"Novembre 2019",
    Runtime:"125 min",
    Rating:5,
    id:3
}
  ],
  rating : 0,
  search : ""
}

  const reducer=(state=initState, action)=> {
       switch (action.type){
           case ADD:
               return {...state, cards: state.cards.concat(action.payload)}
           case SEARCH:
             return {...state, search: action.payload}
           case RATING:  
           return {...state, rating: action.payload}
           case EDIT:
              return {...state,cards: state.cards.map(e=> e.id === action.id ? action.payload :e) }
              case  REMOVE:
              return {...state,cards: state.cards.filter(e=> e.id !== action.payload) }
        default:         
          return state 
       }
      
  }
  export default reducer