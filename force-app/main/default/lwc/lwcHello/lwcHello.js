import { LightningElement, track } from 'lwc';

export default class LwcHello extends LightningElement {
	@track greeting = "world";
	/*
	({
		count: function (component, event, helper) {
			var greeting = component.get("v.greeting");
			alert(greeting.length + " letters");
		}
	});
	*/
}