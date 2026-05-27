import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalStorageService } from './storage/local-storage.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private _formBuilder: FormBuilder, private _localStorage: LocalStorageService) {}

	formGroup = this._formBuilder.nonNullable.group({
		names: [''],
		claim: ['']
	});

	formDataInStorage?: IForm;

	clickSend(): void {
		this._localStorage.setItem('form', JSON.stringify(this.formGroup.value));

		const formStorage = JSON.parse(localStorage.getItem('form')!) as IForm;
		this.formDataInStorage = formStorage!;
	}
}
interface IForm {
	names: '';
	claim: '';
}
