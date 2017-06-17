'use strict';

angular.module('app.loans', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/loans', {
    templateUrl: 'loans/loans.html',
    controller: 'LoansCtrl'
  });
}])

.controller('LoansCtrl', function($scope, LoansFactory, BooksFactory) {

  $scope.loan = {};
  $scope.books = [];
    
    BooksFactory.getAll().then(function(books){
      $scope.books = books;
    });

  var refresh = function(){
    LoansFactory.getAll().then(function(loans){
      $scope.loans = loans;
    });
  }
  refresh();
  
  var editIndex = null;

  $scope.submitForm = function(isValid,error){
    if (isValid){
      LoansFactory.save($scope.loan).then(function(){
        refresh();
        $scope.reset();
      }); 
    }
  }

  $scope.reset = function(){
    $scope.loan = {};
    editIndex = null;
  }

  $scope.edit = function(loan){
    $scope.loan = loan;
  }

  $scope.delete = function(id){
    LoansFactory.delete(id).then(function(){
        refresh();
    });
  }

  $scope.toggleReturned = function(loan){
      loan.returned = !loan.returned;
      LoansFactory.save(loan).then(function(nowLoan){ 
        loan.returned_date = nowLoan.returned_date;
      },function(){
        loan.returned = !loan.returned;
      }); 
  }

  $scope.getDate = function(date){
    return new Date(date);
  }
  
});