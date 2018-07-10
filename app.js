(function() {
'use strict';

angular.module('Task1', [])
.controller('MyFirstController',function($scope){
    
        var date=new Date();
        var day=date.getDay();
        var month=date.getFullYear();
        var year=date.getFullYear();
        var newdate= day +"/"+month+"/"+year;

     $scope.records=
     [
            {'emp_id': '001', 'emp_name': 'Hamza Usman', 'emp_designation': 'AVP' , 'emp_email': 'hamzaghani1995@gmail.com', 'emp_doj': new Date() },
        { 'emp_id': '001', 'emp_name': 'Alpha', 'emp_designation': 'AVP' , 'emp_email': 'hamzaghani1995@gmail.com', 'emp_doj': new Date() },
        { 'emp_id': '001', 'emp_name': 'Alpha', 'emp_designation': 'AVP' , 'emp_email': 'hamzaghani1995@gmail.com', 'emp_doj': new Date() },
        { 'emp_id': '001', 'emp_name': 'Alpha', 'emp_designation': 'AVP' , 'emp_email': 'hamzaghani1995@gmail.com', 'emp_doj': new Date() },
        { 'emp_id': '001', 'emp_name': 'Alpha', 'emp_designation': 'AVP' , 'emp_email': 'hamzaghani1995@gmail.com', 'emp_doj': new Date() },
        { 'emp_id': '001', 'emp_name': 'Alpha', 'emp_designation': 'AVP' , 'emp_email': 'hamzaghani1995@gmail.com', 'emp_doj': new Date() },
        { 'emp_id': '001', 'emp_name': 'Alpha', 'emp_designation': 'AVP' , 'emp_email': 'hamzaghani1995@gmail.com', 'emp_doj': new Date() }
        
        ] 

      
      






    $scope.num1 = 0;
    $scope.num2 = 0;
   
    $scope.result = function() {
        if ($scope.operator == '+') {
            return $scope.num1 + $scope.num2;
        }
        if ($scope.operator == '-') {
            return $scope.num1 - $scope.num2;
        }
        if ($scope.operator == '*') {
            return $scope.num1 * $scope.num2;
        }
        if ($scope.operator == '/') {
            return $scope.num1 / $scope.num2;
        }
    };


});



})();