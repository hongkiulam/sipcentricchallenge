
const colours = ['R', 'G', 'B'];

const triangle = (string)=>{
  let arr = string.split("");

  while(arr.length > 1){
    arr = compare(arr);
  }
  console.log(arr);
}

const compare = (arr)=>{
  let array = arr.map((a,i)=>{
    if(arr[i+1] != null){
      return output(a, arr[i+1]);
    }
  })
  array = array.filter((a)=> a!=null);
  return array
}

const output = (a,b)=>{
  if(a === b){
    return a
  }else{
    let colourFound = '';
    colours.forEach((colour)=>{
      if(colour === a){}
      else if(colour === b){}
      else{
        colourFound = colour;
      }
    });
    return colourFound
  }
}

triangle('RBRGBRBGGRRRBGBBBGG');
