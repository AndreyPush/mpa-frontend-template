import 'babel-polyfill';
import $ from 'jquery';
import 'fullpage';

$(() => {
	new fullpage('#fullpage', {
		autoScrolling:true,
		scrollHorizontally: true
	});
	console.log($)
});