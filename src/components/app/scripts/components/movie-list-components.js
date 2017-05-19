(function(){
	"use strict";

	var module = angular.module("psMovies");

	function controller(){
		var model = this;
		model.message = "Now this is coming from a separate function in component";

		model.changeMessage = function(){
			model.message = "clicked from button"
		};
	}

	module.component("movieList",{
		templateUrl: "/components/movie-list-components.html",
		controllerAs: "model",
		controller: controller
	});
}())