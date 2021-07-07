import { Component, OnInit } from '@angular/core';
import { FileTransferService } from '../HttpServices/fileTransferService';
import { FileUploadService } from './file-upload.service';

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

	// Variable to store shortLink from api response
	shortLink: string = "";
	loading: boolean = false; // Flag variable
	file: File = null; // Variable to store file
	image;

	// Inject service
	constructor(private readonly fileUploadService: FileUploadService,
							private readonly fileTransferService: FileTransferService) { }

	async ngOnInit() {
		this.image = await this.fileTransferService.getImage();
	}

	// On file Select
	onChange(event) {
		this.file = event.target.files[0];
	}

	// OnClick of button Upload
	onUpload() {
		this.loading = !this.loading;
		console.log(this.file);
		this.fileUploadService.upload(this.file).subscribe(
			(event: any) => {
				if (typeof (event) === 'object') {

					// Short link via api response
					this.shortLink = event.link;

					this.loading = false; // Flag variable
				}
			}
		);
	}
}
