import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()
    ngOnChanges(): void {
        //this will call any time container changes the [rating]
        // onChanges only watches  for changes to input properties  
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        //console.log(`This raiting ${this.rating} was clicked`);
        this.ratingClicked.emit(`This raiting ${this.rating} was clicked`);
    }
}
