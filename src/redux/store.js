import { createStore } from 'redux';
import myApp from './reducers';


const store = createStore(myApp);

///////////////////    TEST  STORE    ///////////////////
import { moveToPage, saveData} from "./actions";

const testData = [
    {
        "id": 1,
        "first_name": "Hakim",
        "last_name": "Gillice",
        "email": "hgillice0@meetup.com",
        "avatar": "https://robohash.org/dolorumfugitoptio.jpg?size=150x150&set=set1",
        "company": "Aimbo",
        "adress": "953 Heffernan Circle",
        "phone": "842-376-3072"
    },
    {
        "id": 2,
        "first_name": "Lisha",
        "last_name": "Mashal",
        "email": "lmashal1@geocities.jp",
        "avatar": "https://robohash.org/estetlaborum.jpg?size=150x150&set=set1",
        "company": "Brainlounge",
        "adress": "86 Grasskamp Terrace",
        "phone": "690-289-5789"
    }
    ];

console.log(store.getState());

const unsubsribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(moveToPage(1));
store.dispatch(moveToPage(0));

store.dispatch(saveData(testData));

unsubsribe();