'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AlumnoCtrl
 * @description
 * # AlumnoCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('AlumnoCtrl', function ($scope, alumnoService) {

    //Un array que contiene JSON's de los alumnos
    $scope.listaAlumnos = [];

    //Un JSON que se utiliza como modelo para agregar/modificar alumno
    $scope.alumnoAuxiliar = {};

    //Una bandera que se utiliza para mostrar/ocultar el contenedor para modificar el alumno
    //false = no se muestra contenedor
    //true = se muestra el contenedor
    $scope.mostrarModificar = false;

    //Método que llama al back para obtener la lista de alumnos registrados
    $scope.obtenerAlumnos = function () {
      alumnoService.obtenerAlumnos().then(function (res) {
        $scope.listaAlumnos = JSON.parse(res.data.data);
      }).catch(function(err){
        alert("Error: "+error);
      });
    };

    //Método que llama al servicio para agregar el alumno
    $scope.agregarAlumno = function () {
      alumnoService.agregarAlumno($scope.alumnoAuxiliar).then(function (res) {
        $scope.obtenerAlumnos();
        $scope.alumnoAuxiliar = {};
      }).catch(function(err){
        alert("Error: "+error);
      });
    }

    //Método que llama al back para eliminar el alumno (recibe un ID desde el front)
    $scope.eliminar = function (id) {
    alumnoService.eliminarAlumno(id).then(function (res) {
        $scope.obtenerAlumnos();
      }).catch(function(err){
        alert("Error: "+error);
      });
    }

      //Método que setea la bandera para mostrar contenedor de modificar alumno
    //También setea el modelo para que los inputs del contenedor de modificar alumno apunten a dicho modelo
    $scope.mostrarSeccionModificar = function (id, nombre, edad) {
      $scope.mostrarModificar = true;
      $scope.alumnoAuxiliar.id = id;
      $scope.alumnoAuxiliar.nombre = nombre;
      $scope.alumnoAuxiliar.edad = edad;
    }
    
    //Método que llama al back para modificar al alumno
    $scope.modificarAlumno = function () {
      alumnoService.modificarAlumno($scope.alumnoAuxiliar).then(function (res) {
        $scope.obtenerAlumnos();
        $scope.alumnoAuxiliar = {};
        $scope.mostrarModificar = false;
      }).catch(function(err){
        alert("Error: "+error);
      }); 
    }

    //Método que setea en false la bandera para ocultar el contenedor de modificar alumno
    $scope.cancelarModificarAlumno = function () {
      $scope.alumnoAuxiliar = {};
      $scope.mostrarModificar = false;
    }
  });
