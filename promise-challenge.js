function addPromise(a, b){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(6);
      reject('One or both of the inputs is not a number');

    }, 1000);
  });
}

addPromise(3, 's').then(function(temp){
  console.log('success', temp);
}, function (err){
  console.log('error', err);
});
