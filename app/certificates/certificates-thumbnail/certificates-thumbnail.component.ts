import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'certificates-thumbnail',
    templateUrl: 'certificates-thumbnail.component.html',
    styleUrls: [ 'certificates-thumbnail.component.css' ] 
})

export class CertificatesThumbnailComponent { 
    @Input() certificates: any;
}