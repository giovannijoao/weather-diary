import React from 'react';
import eachDay from 'date-fns/eachDayOfInterval';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import { Calendar, MonthName, WeekDay, MonthDay, CalendarsGrid } from './styles';
import { startOfMonth, endOfMonth, subDays, eachMonthOfInterval, startOfYear, endOfYear, isWithinInterval } from 'date-fns';
import { addDays } from 'date-fns';

const defaultDate = new Date();
const weekDays = eachDay({ start: startOfWeek(defaultDate), end: endOfWeek(defaultDate) })
    .map(day => ({
        key: format(day, 'c'),
        display: format(day, 'eeeeee')
    }))
    .map((weekDay) => <WeekDay key={weekDay.key} >{weekDay.display}</WeekDay>);

const getDayOfYear = (date) => format(date, 'D', { useAdditionalDayOfYearTokens: true })
export const CalendarComponent = ({ year = false, start = new Date(), end = new Date() }) => {
    if (year === true) {
        start = startOfYear(new Date());
        end = endOfYear(new Date());
    }
    const todayDayOfYear = getDayOfYear(new Date());
    const calendars = eachMonthOfInterval({
        start,
        end
    }).map(currentMonth => {
        const currentMonthName = format(currentMonth, 'MMMM');
        const firstDayOfMonth = startOfMonth(currentMonth);
        const lastDayOfMonth = endOfMonth(currentMonth);
        const monthBeginsAtWeekDay = parseInt(format(firstDayOfMonth, 'c'));
        const monthEndsAtWeekDay = parseInt(format(lastDayOfMonth, 'c'));

        const diffStart = (monthBeginsAtWeekDay - 1) % 7;
        const diffEnd = 7 - monthEndsAtWeekDay;
        const monthDays = eachDay({
            start: subDays(firstDayOfMonth, diffStart),
            end: addDays(lastDayOfMonth, diffEnd)
        })
            .map(dayDate => ({
                display: format(dayDate, 'd'),
                weekDay: format(dayDate, 'c'),
                month: format(dayDate, 'L'),
                dayOfYear: getDayOfYear(dayDate),
                date: dayDate,
            }))
        return <React.Fragment key={currentMonthName}>
            <MonthName>{currentMonthName}</MonthName>
            <Calendar>
                {weekDays}
                {monthDays.map(day =>
                    <MonthDay
                        isToday={todayDayOfYear === day.dayOfYear}
                        sameMonth={isWithinInterval(day.date, { start: firstDayOfMonth, end: lastDayOfMonth })}
                        key={`${day.month}_${day.display}`}>
                    {day.display}
                    </MonthDay>
                )}
            </Calendar>
        </React.Fragment>
    })
    return <CalendarsGrid>
        {calendars}
    </CalendarsGrid>;
}