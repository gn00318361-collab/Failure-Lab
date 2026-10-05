
const DBURL="https://script.google.com/macros/s/AKfycbwzxbilppzAsfQBNHR0H-0WI53Qz4JokxeOSKyXasJ3cXMST3tYbZYn1MxzB3BOrsinyw/exec";
function anonId(){let x=localStorage.getItem('failureLabAnonId');if(!x){x='FL-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7);localStorage.setItem('failureLabAnonId',x)}return x}
async function saveExperiment(lab,payload){try{await fetch(DBURL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({event:'failure-lab-v1',anonId:anonId(),lab,ts:new Date().toISOString(),...payload})});return true}catch(e){return false}}
function dashboard(){window.open(DBURL+'?view=dashboard','_blank')}
