(function () {
	
    'use strict';

    angular.module('integradorApp').config(function($stateProvider) {

        $stateProvider

            .state('login', {
                url: '/',
                templateUrl: "scripts/pages/login/view/login.html",
                controller: 'loginController'
            })
            
            .state('home', {
                url: '/home',
                templateUrl: "scripts/pages/home/view/home.html",
                controller: 'HomeController'
            })

            .state('alunos', {
                url: '/usuarios/aluno',
                templateUrl: "scripts/pages/usuarios/view/listagemAluno.html",
                controller: 'alunoController'
            })

            .state('professores', {
                url: '/usuarios/professor',
                templateUrl: "scripts/pages/usuarios/view/listagemProfessor.html",
                controller: 'professorController'
            })


    });

})();