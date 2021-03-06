import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";
import { IEvent } from "../models";

@Component({
    selector:'event-thumbnail',
    template:`
        <div class='well hoverwell thumbnail' [routerLink]="['/events', event.id]">
            <h2>{{ event?.name | uppercase }} </h2>
            <div>Date: {{ event?.date | date:'shortDate'}}</div>
            <div [ngSwitch] = 'event?.time'>Time: {{ event?.time }}
                <span *ngSwitchCase = "'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase = "'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: {{ event?.price | currency:'USD' }}</div>
            <div>
                <span>Location: {{ event.location.address }}</span>
                <span class='pad-left'>{{ event?.location.city }}, {{ event?.location.country }}</span>
            </div>
        </div>
    `,
    styles: [`
        .thumbnail { min-height: 250px;}
        .going { background-color: #f4aa42; }
        .pad-left { margin-left: 20px;}
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent  {
    
    @Input() event: IEvent;
    
    constructor(){
    }
    

}