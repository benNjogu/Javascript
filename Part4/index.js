
let i = 0;

while(i <= 10){
    if(i % 2 === 0){
        i++;
        continue;
    } 
    console.log(i);
    i++;
}
  //prints odd numbers between 0 and 10
  
  /*
  with break statement we jump out of the loop
  with continue we jump to the next iteration
  */