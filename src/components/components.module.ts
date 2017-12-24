import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { ImageModal } from './imagePicker/imageModal.component';
import { ImagePicker } from './imagePicker/imagePicker.component';
import { LoadingModal } from './loading-modal/loading-modal';
@NgModule({
	declarations: [
		ImageModal
		, ImagePicker
		,LoadingModal
	],
	entryComponents: [
		ImagePicker
		, ImageModal
		,LoadingModal
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
