import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
  set,
  get,
  onValue,
  remove,
  update
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHReHiPaXKRSJJ7W_-oGOnA-bpvNJu3a0",
  authDomain: "guptacosmeticshopandmesshosllr.firebaseapp.com",
  databaseURL: "https://guptacosmeticshopandmesshosllr-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "guptacosmeticshopandmesshosllr",
  storageBucket: "guptacosmeticshopandmesshosllr.firebasestorage.app",
  messagingSenderId: "298835041733",
  appId: "1:298835041733:web:5815c002ff79111c6e3fac"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
window.saveProduct = async function(product){

  const productRef = push(ref(db,"products"));

  await set(productRef,{
    ...product,
    createdAt: Date.now()
  });

  return true;

};

window.saveOrder = async function(order){

  const orderRef = push(ref(db,"orders"));

  await set(orderRef,{
    ...order,
    status:"Pending",
    createdAt: Date.now()
  });

  return true;

};
window.loadProducts = function(callback){

  onValue(ref(db,"products"),(snapshot)=>{

    const products=[];

    snapshot.forEach((item)=>{

      products.push({
        id:item.key,
        ...item.val()
      });

    });

    callback(products);

  });

};

window.loadOrders = function(callback){

  onValue(ref(db,"orders"),(snapshot)=>{

    const orders=[];

    snapshot.forEach((item)=>{

      orders.push({
        id:item.key,
        ...item.val()
      });

    });

    callback(orders);

  });

};

window.deleteProduct = async function(id){

  await remove(ref(db,"products/"+id));

};

window.updateOrderStatus = async function(id,status){

  await update(ref(db,"orders/"+id),{
    status:status
  });

};
window.saveSeller = async function(seller){

  const sellerRef = push(ref(db,"sellers"));

  await set(sellerRef,{
    ...seller,
    status:"Pending",
    createdAt: Date.now()
  });

  return true;

};
window.loadSellers = function(callback){

  onValue(ref(db,"sellers"), (snapshot)=>{

    const sellers = [];

    snapshot.forEach((item)=>{
      sellers.push({
        id: item.key,
        ...item.val()
      });
    });

    callback(sellers);

  });

};
