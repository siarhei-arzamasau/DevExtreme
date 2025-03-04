import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import Scheduler from 'devextreme-testcafe-models/scheduler';
import { createWidget } from '../../../helpers/createWidget';
import url from '../../../helpers/getPageUrl';

const SCHEDULER_SELECTOR = '#container';
const INITIAL_APPOINTMENT_TITLE = 'appointment';

fixture.disablePageReloads`Recurrence dialog`
  .page(url(__dirname, '../../container.html'));

test('Recurrence edit dialog screenshot', async (t) => {
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const scheduler = new Scheduler(SCHEDULER_SELECTOR);
  const appointment = scheduler.getAppointment(INITIAL_APPOINTMENT_TITLE);

  await t
    .doubleClick(appointment.element)
    // act
    .expect(await takeScreenshot('recurrence-edit-dialog-screenshot.png', scheduler.element))
    .ok()
    // assert
    .expect(Scheduler.getEditRecurrenceDialog().element.exists)
    .ok()
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
}).before(async () => createWidget('dxScheduler', {
  dataSource: [{
    id: 1,
    text: INITIAL_APPOINTMENT_TITLE,
    startDate: new Date(2021, 2, 29, 9, 30),
    endDate: new Date(2021, 2, 29, 11, 30),
    recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10',
  }],
  views: ['day'],
  currentView: 'day',
  currentDate: new Date(2021, 2, 29),
  startDayHour: 9,
  endDayHour: 14,
  height: 600,
}));

test('Recurrence delete dialog screenshot', async (t) => {
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);
  const scheduler = new Scheduler(SCHEDULER_SELECTOR);
  const appointment = scheduler.getAppointment(INITIAL_APPOINTMENT_TITLE);

  await t
    // act
    .click(appointment.element)
    // assert
    .expect(scheduler.appointmentTooltip.element.exists)
    .ok()
    // act
    .click(scheduler.appointmentTooltip.deleteButton)
    .expect(await takeScreenshot('recurrence-delete-dialog-screenshot.png', scheduler.element))
    .ok()
    // assert
    .expect(Scheduler.getDeleteRecurrenceDialog().element.exists)
    .ok()
    .expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
}).before(async () => createWidget('dxScheduler', {
  dataSource: [{
    id: 1,
    text: INITIAL_APPOINTMENT_TITLE,
    startDate: new Date(2021, 2, 29, 9, 30),
    endDate: new Date(2021, 2, 29, 11, 30),
    recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10',
  }],
  views: ['day'],
  currentView: 'day',
  currentDate: new Date(2021, 2, 29),
  startDayHour: 9,
  endDayHour: 14,
  height: 600,
}));
