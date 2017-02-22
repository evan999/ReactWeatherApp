//Asynchronus callback
function getTempCallback(location, callback){
  callback(undefined, 78); //Best case
  callback('City not found'); //Worst case
}
//Note: With callbacks, two callbacks are required- one for successful callback,
// one for failure callback.

getTempCallback('Philadelphia', function (err, temp){
  if (err) {
    console.log('error', err); //Error
  }
  else {
    console.log('success', temp); //Successful callback
  }
});

//Problem: Two results were generated, both success and error cases!
// It's easy to make a mistake here and initiate two callbacks

//Promise
function getTempPromise(location){
  return new Promise(function(resolve, reject){ //initialize new promise
    setTimeout(function(){
      resolve(79); //Successful promise
      reject('City not found'); //Promise error
    }, 1000); //function runs for 1000 milliseconds
  });
}

getTempPromise('Philadelphia').then(function(temp){
  console.log('promise success', temp); //Promise success
}, function (err){
  console.log('promise error', err); //Promise error
});

//Note: Promises can only be called once.
// Promises only get called after resolve or reject gets called.
