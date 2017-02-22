function addPromise(a, b){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      if (typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      }
      else{
        reject('Either a or b is not a number');
      }
    }, 1000);
  });
}


addPromise(2, 3).then(function(temp){
  console.log('success', temp);
}, function (err){
  console.log('error', err);
});
