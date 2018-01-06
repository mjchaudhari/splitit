import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { ImageModal, ImagePicker, LoadingModal} from "./components"


@NgModule({
	declarations: [
		ImageModal
		, ImagePicker
		, LoadingModal
	],
	entryComponents: [
		ImagePicker
		, ImageModal
		, LoadingModal
	],
	imports: [
		CommonModule,
		IonicModule
	],
	providers: [
		LoadingModal

	],

	exports: [
		ImagePicker
		, ImageModal
		, LoadingModal
	]
})
export class ComponentsModule {}
