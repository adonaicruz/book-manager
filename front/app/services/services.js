angular.module('app.services', [])
.factory('BooksFactory', function($http,$rootScope, $httpParamSerializer) {
  var books = [];
  var api_url = 'http://localhost:8080/api/v1';
  return {
    getAll: function() {
        return $http.get(api_url+'/book',{}).then(function(response){
            books = response.data;
            return books;
        },handlerError);
    },
    save(book){
        var me = this;
        if(book.id){
            return $http.put(api_url+'/book/'+book.id,book).then(function(response){
            var book = response.data;
            return book;
           },handlerError);
        }else{
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
           return $http.post(api_url+'/book', $httpParamSerializer(book),config).then(function(response){
            var book = response.data;
            return book;
           },handlerError);
        }
    },
     delete: function(id) {
        return $http.delete(api_url+'/book/'+id,{params:{}}).then(function(response){
            return true;
        },handlerError);
    }
  }
  function handlerError(response){
      console.log(response);
  }
})
.factory('LoansFactory', function($http,$rootScope, $httpParamSerializer) {
  var loans = [];
  var api_url = 'http://localhost:8080/api/v1';
  return {
    getAll: function() {
        return $http.get(api_url+'/loan',{}).then(function(response){
            loans = response.data;
            return loans;
        },handlerError);
    },
    save(loan){
        var me = this;
        if(loan.id){
            return $http.put(api_url+'/loan/'+loan.id,loan).then(function(response){
            var loan = response.data;
            return loan;
           },handlerError);
        }else{
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
           return $http.post(api_url+'/loan', $httpParamSerializer(loan),config).then(function(response){
            var loan = response.data;
            return loan;
           },handlerError);
        }
    },
     delete: function(id) {
        return $http.delete(api_url+'/loan/'+id,{params:{}}).then(function(response){
            return true;
        },handlerError);
    }
  }
  function handlerError(response){
    alert('ocorreu um erro');
  }
});