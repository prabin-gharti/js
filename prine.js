let j = 51;
p=0;
for (let i = 0;i<=100;i++){
    if (j%i===0){
       p=1;
       break;
    }
    else{p=0}
    
}
if (p==1){
    console.log("Prime no.")
}
else{
    console.log("Not a prime no.")
}