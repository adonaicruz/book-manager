'use strict';

angular.module('app.books', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/books', {
    templateUrl: 'books/books.html',
    controller: 'BooksCtrl'
  });
}])

.controller('BooksCtrl', function($scope, BooksFactory) {

  $scope.book = {};
  var refresh = function(){
    BooksFactory.getAll().then(function(books){
      $scope.books = books;
    });
  }
  refresh();
  
  var editIndex = null;

  $scope.submitForm = function(isValid,error){
    if (isValid){
      BooksFactory.save($scope.book).then(function(){
        refresh();
        $scope.reset();
      }); 
    }
  }

  $scope.reset = function(){
    $scope.book = {};
    editIndex = null;
  }

  $scope.edit = function(book){
    $scope.book = book;
  }
  $scope.delete = function(id){
    BooksFactory.delete(id).then(function(){
        refresh();
    });
  }

  
});