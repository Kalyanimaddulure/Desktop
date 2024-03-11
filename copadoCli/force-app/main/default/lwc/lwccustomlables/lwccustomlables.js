import { LightningElement } from 'lwc';
import myCustomLabel from '@salesforce/label/c.My_Custom_Label';

export default class Lwccustomlables extends LightningElement {
    customLabelValue;

    connectedCallback() {
        this.customLabelValue = myCustomLabel;
    }
}

MyComponent