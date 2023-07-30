import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarEventTitleFormatter
} from 'angular-calendar';
import { colors } from '../demo-utils/colors';
import { addHours, startOfDay } from 'date-fns';

// --> Include the CustomEventTitleFormatter <---
import { CustomEventTitleFormatter } from './custom-title-formatter';

const users = [
  {
    id: 0,
    name: 'John smith',
    color: colors.yellow
  },
  {
    id: 1,
    name: 'Jane Doe',
    color: colors.blue
  }
];

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'template.html',
  // --> Include the CustomEventTitleFormatter <---
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter
    }
  ]
})
export class DemoComponent {
  viewDate = new Date();

  events: CalendarEvent[] = [
    {
      title: 'An event',
      color: users[0].color,
      start: addHours(startOfDay(new Date()), 5),
      meta: {
        user: users[0],
        eventType: 'external' // <--- Added a type 
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      title: 'Another event',
      color: users[1].color,
      start: addHours(startOfDay(new Date()), 2),
      meta: {
        user: users[1],
        eventType: 'internal' // <--- Added a type 
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      title: 'An 3rd event',
      color: users[0].color,
      start: addHours(startOfDay(new Date()), 7),
      meta: {
        user: users[0]
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.events = [...this.events];
  }

  userChanged({ event, newUser }) {
    event.color = newUser.color;
    event.meta.user = newUser;
    this.events = [...this.events];
  }
}
