//在定义模块的时候，通过return可以对外暴漏内容

//[]设置模块的依赖
define([], function(){

  //希望对外暴漏一个方法
  function getSearch() {
    console.log("getSearch......");
  }

  function sayHi() {
    console.log("sayHi.....");
  }
  //可以通过return来对外暴漏内容
  return {
    getSearch:getSearch,
    sayHi: sayHi
  };

});