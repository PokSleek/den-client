import { Moment } from 'moment';

export function getMonthData(date: Moment) {
    const calendar = [];
    const startDay = date.clone().startOf('month').startOf('week');
    const endDay = date.clone().endOf('month').endOf('week');

    const dateIterator = startDay.clone().subtract(1, 'day');

    while (dateIterator.isBefore(endDay, 'day')) {
        calendar.push(
            Array(7)
                .fill(0)
                .map(() => dateIterator.add(1, 'day').clone()),
        );
    }

    return calendar;
}
