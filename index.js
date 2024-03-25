// Code your solution in this file!
  function receivesAFunction(callback) {
    console.log('Peter');
    callback()
  }

  function returnsANamedFunction() {
    return function say(){};
  }

  function returnsAnAnonymousFunction() {
    return function() {
        return 'Hello';
    }
  }