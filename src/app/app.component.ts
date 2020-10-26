import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    loaded = true;
    validUrl:boolean;
    start=true;
    
    constructor(private httpClient: HttpClient) {
    }
    
    onClick(val: string) {
        this.start=false;
        this.loaded=false;
        this.httpClient.post('http://localhost:3000', {url: val})
            .subscribe((data: any) => {
                this.validUrl=data.data[0]=="1";
                console.log(data);
                console.log(this.validUrl);
                this.loaded=true;
            })
    }
}
