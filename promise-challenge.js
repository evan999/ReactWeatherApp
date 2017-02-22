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

//Test cases

//Success case

addPromise(2, 3).then(function(sum){
  console.log('success', sum);
}, function (err){
  console.log('error', err);
});

//Error case

addPromise(3, 's').then(function(sum){
  console.log('success', sum);
}, function (err){
  console.log('error', err);
});
