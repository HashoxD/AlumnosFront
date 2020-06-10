'use strict';

/**
 * @ngdoc service
 * @name myappApp.alumnoService
 * @description
 * # alumnoService
 * Service in the myappApp.
 */
angular.module('myappApp')
  .service('alumnoService', function ($http) {
    var path = "http://localhost:8080";

    this.obtenerAlumnos = function () {
      return $http({
        method: 'GET',
        url: path + "/obtenerAlumnos",
        crossDomain: true,
      }).then(function (response) {
          return response;
      });
    }

    this.agregarAlumno = function (json) {
      return $http({
        method: 'POST',
        data: json,
        url: path + "/agregarAlumno",
        crossDomain: true,
      }).then(function (response) {
          return response;
      });
    }

    this.modificarAlumno = function (json) {
      return $http({
        method: 'POST',
        data: json,
        url: path + "/modificarAlumno",
        crossDomain: true,
      }).then(function (response) {
          return response;
      });
    }

    this.eliminarAlumno = function (id) {
      return $http({
        method: 'GET',
        params: {id: id},
        url: path + "/eliminarAlumno",
        crossDomain: true,
      }).then(function (response) {
          return response;
      });
    }
  });
