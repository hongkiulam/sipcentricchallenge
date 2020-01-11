const balance = (brackets)=>{
  brackets = brackets.split('');
  let result = brackets.map( b => b);

  let bracketsStillOpen = 0;

  brackets.forEach((bracket)=>{
    if(bracket === '('){
        bracketsStillOpen++;
      }
      else{
          if(bracketsStillOpen === 0){
              result.unshift('(');
            }
            else{
              bracketsStillOpen--;
              }
            }
  });
  for(i=0; i< bracketsStillOpen; i++){
    result.push(')');
  }

  console.log('Original: ' + brackets.join(''));
  console.log('Result: ' + result.join(''));
  return result.join('')
}

balance('))))(()(');
