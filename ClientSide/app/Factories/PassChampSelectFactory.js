"use strict";

Countered.factory('PassChamp', [

function () {

	let champString = null;

	return {
		getChampString () {
			console.log("get champ");
			return champString;
		},
		setChampString (string) {
			champString = string;
			console.log(champString);
		}
	}
}


]);