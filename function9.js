//function returning function
  function func1 (){
      function fun3(){
        console.log("I am a function")
      }
      return fun3;
  }

  const var1 = func1();
  var1();