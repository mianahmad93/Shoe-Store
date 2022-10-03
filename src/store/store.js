import { createStore, combineReducers } from 'redux';

const cardInfo = [
    { id: 1, gender: "Male", image: "https://shoes-react.surge.sh/Pics/Casual%20Shoes%202%20after.png", title: "New shoes is here", Text: "Pic1", price: 999 },
    { id: 2, gender: "Male", image: "https://shoes-react.surge.sh/Pics/Casual%20Shoes%201%20after.png", title: "New shoes is here", Text: "Pic2", price: 650 },
    { id: 3, gender: "female", image: "https://shoes-react.surge.sh/Pics/formal%20ladis%201%20after.png", title: "New shoes is here", Text: "Pic2", price: 699 },
    { id: 4, gender: "Male", image: "https://shoes-react.surge.sh/Pics/Casual%20Shoes%204%20after.png", title: "New shoes is here", Text: "Pic3", price: 799 },
    { id: 5, gender: "Male", image: "https://shoes-react.surge.sh/Pics/Casual%20Shoes%203%20after.png", title: "New shoes is here", Text: "Pic4", price: 859 },
    { id: 6, gender: "Male", image: "https://shoes-react.surge.sh/Pics/child3%20after.png", title: "New shoes is here", Text: "Pic5", price: 990 },
    { id: 7, gender: "Male", image: "https://shoes-react.surge.sh/Pics/mensclassic6%20after.png", title: "New shoes is here", Text: "Pic6", price: 700 },
    { id: 8, gender: "female", image: "https://shoes-react.surge.sh/Pics/female1%20after.png", title: "New shoes is here", Text: "Pic6", price: 1000 },
    { id: 9, gender: "Male", image: "https://shoes-react.surge.sh/Pics/mensclassic1%20after.png", title: "New shoes is here", Text: "Pic7", price: 1099 },
    { id: 10, gender: "female", image: "https://shoes-react.surge.sh/Pics/female8%20after.png", title: "New shoes is here", Text: "Pic7", price: 950 },
    { id: 11, gender: "Male", image: "https://shoes-react.surge.sh/Pics/mensclassic7%20after.png", title: "New shoes is here", Text: "Pic7", price: 699 },
    { id: 12, gender: "Male", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAzbT-92ncymnAxVhwSfshFyjuL7swEA2iA&usqp=CAU", title: "New shoes is here", Text: "Pic7", price: 999 },
    { id: 13, gender: "Male", image: "https://shoes-react.surge.sh/Pics/mens%20sendle%201%20after.png", title: "New shoes is here", Text: "Pic8", price: 1250 },
    { id: 14, gender: "female", image: "https://shoes-react.surge.sh/Pics/female2%20after.png", title: "New shoes is here", Text: "Pic8", price: 1050 },
    { id: 15, gender: "Male", image: "https://shoes-react.surge.sh/Pics/mensclassic6%20after.png", title: "New shoes is here", Text: "Pic9", price: 1099 },
    { id: 16, gender: "female", image: "https://shoes-react.surge.sh/Pics/female6%20after.png", title: "New shoes is here", Text: "Pic10", price: 1199 },
    { id: 17, gender: "female", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbocbr8HwDIqbTjf5xUBhdtQZpOBLgJzE0eg&usqp=CAU", title: "New shoes is here", Text: "Pic10", price: 1299 },
    { id: 18, gender: "female", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSDCT09501a7QLeIzS8D5oMBq_uRhKY_E7Q&usqp=CAU", title: "New shoes is here", Text: "Pic10", price: 1199 },
    { id: 19, gender: "female", image: "https://shoes-react.surge.sh/Pics/female12%20after.png", title: "New shoes is here", Text: "Pic11", price: 999 },
    { id: 20, gender: "Male", image: "https://shoes-react.surge.sh/Pics/mensclassic8%20after.png", title: "New shoes is here", Text: "Pic11", price: 1090 },
    { id: 21, gender: "Male", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbGRyZW4lMjBzaG9lc3xlbnwwfHwwfHw%3D&w=1000&q=80", title: "New shoes is here", Text: "Pic11", price: 1350 },
    { id: 22, gender: "female", image: "https://shoes-react.surge.sh/Pics/female10%20after.png", title: "New shoes is here", Text: "Pic11", price: 1250 },
    { id: 23, gender: "kids", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Aqh8mtncQVYD6GZhFs-L-CO0dHKRrEqOxg&usqp=CAU", title: "New shoes is here", Text: "Pic11", price: 950 },
    { id: 24, gender: "female", image: "https://shoes-react.surge.sh/Pics/female11%20after.png", title: "New shoes is here", Text: "Pic11", price: 599 },
    { id: 25, gender: "kids", image: "https://shoes-react.surge.sh/Pics/child2%20after.png", title: "New shoes is here", Text: "Pic11", price: 799 },
    { id: 26, gender: "kids", image: "https://shoes-react.surge.sh/Pics/child1%20after.png", title: "New shoes is here", Text: "Pic11", price: 850 },
    { id: 27, gender: "kids", image: "https://shoes-react.surge.sh/Pics/child4%20after.png", title: "New shoes is here", Text: "Pic11", price: 1099 },
    { id: 28, gender: "kids", image: "https://shoes-react.surge.sh/Pics/child7%20after.png", title: "New shoes is here", Text: "Pic11", price: 1250 },
    { id: 29, gender: "kids", image: "https://shoes-react.surge.sh/Pics/child7%20after.png", title: "New shoes is here", Text: "Pic11", price: 1199 },
    { id: 30, gender: "kids", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49xkB1IvlpVttiuW9lu84VhuvFl-ui9iQBA&usqp=CAU", title: "New shoes is here", Text: "Pic11", price: 1299 },
    { id: 31, gender: "kids", image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", title: "New shoes is here", Text: "Pic11", price: 1399 },
    { id: 32, gender: "kids", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfiMu9C_Wy44-d3SOEmPNzahM2bkj9GowSg&usqp=CAU", title: "New shoes is here", Text: "Pic11", price: 1099 },
]



let cartsItems = [];

function Carts(oldData = cartsItems, newData) {
    if (newData.type == "ADD_CART") {
        oldData.push(newData.payload);
        
    }
    else if (newData.type == "DELETE_CART") {
        // console.log(newData.payload);
        console.log(oldData);
        let cIndex = oldData.findIndex((element, index) => {
            return element.id == newData.payload
        })
        
            oldData.splice(cIndex,1);
    }

    return [...oldData]
}


function ShoeDetails(oldData = cardInfo, newData) {
    return [...oldData]
}

let root = combineReducers({ ShoeDetails, Carts });

let Store = createStore(root);

export default Store;