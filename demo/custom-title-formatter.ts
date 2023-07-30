import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';

export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
  /**
   * This is an overwrite of the extended class. It builds the event tooltip template.
   */
  public dayTooltip(event: CalendarEvent): string {
    return;
  }

  /**
   * This is an overwrite of the extended class. It builds the event tooltip template.
   */
  public weekTooltip(event: CalendarEvent): string {
    return;
  }

  /**
   * This is an overwrite of the extended class. It builds the event title template for the day view.
   */
  public day(event: CalendarEvent): string {
    return this.getTemplateByType(event.meta);
  }

  /**
   * This is an overwrite of the extended class. It builds the event title template for the week view.
   */
  public week(event: CalendarEvent): string {
    return this.getTemplateByType(event.meta);
  }

  /**
   * Returns an icon template.
   */
  private getTemplateByType(meta: any): string {
    if (!meta.eventType) {
      return '';
    }

    if (meta.eventType === 'internal') {
      return '<div>Internal event</div>';
    }

    if (meta.eventType.includes('external')) {
      return '<div>External event</div>';
    }

    return '';
  }
}
