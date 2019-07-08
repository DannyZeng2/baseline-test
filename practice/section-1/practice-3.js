'use strict';

function collectSameElements(collectionA, objectB) {
  const collectionC = [];
  const collectionD = objectB.value;
  for(var i= 0;i<collectionA.length;i++){
    for(var j= 0;j<collectionD.length;j++){
      if(collectionA[i] == collectionD[j]) {
        collectionC.push(collectionA[i]);
      }
    }
  }
  return collectionC;
}
