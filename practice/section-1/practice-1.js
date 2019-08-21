'use strict';

function collectSameElements(collectionA, collectionB) {
  let temp = [];
  for(let i=0;i<collectionA.length;i++){
    for(let j=0;j<collectionB.length;j++){
      if(collectionA[i] === collectionB[j]){
        temp.push(collectionA[i]);
      }
    }
  }
  return temp;
}
