import { LightningElement, track } from 'lwc';

export default class LwcHello extends LightningElement {
	@track greeting = "world";

	count() {
		// eslint-disable-next-line no-alert
		alert(this.greeting.length + " letters");
	}
}