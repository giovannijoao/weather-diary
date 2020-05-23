import React from 'react';
import eachDay from 'date-fns/eachDayOfInterval';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import { CalendarContainer, Calendar, MonthName, WeekDay, MonthDay } from './styles';
import { startOfMonth, endOfMonth, subDays } from 'date-fns';
import { addDays } from 'date-fns';

const date = new Date();
const weekDays = eachDay({ start: startOfWeek(date), end: endOfWeek(date) })
    .map(day => ({
        key: format(day, 'c'),
        display: format(day, 'eeeeee')
    }))
    .map((weekDay) => <WeekDay key={weekDay.key} >{weekDay.display}</WeekDay>);

export const CalendarComponent = () => {
    const today = format(new Date(), 'd');
    const firstDay = startOfMonth(date);
    const lastDayOfMonth = endOfMonth(date);
    const currentMonthName = format(firstDay, 'MMMM');
    const currentMonth = format(firstDay, 'L');
    const monthBeginsAt = format(firstDay, 'c');
    const monthEndsAt = format(lastDayOfMonth, 'c');
    const monthDays = eachDay({
        start: subDays(firstDay, 6 - (7 % monthBeginsAt)),
        end: addDays(lastDayOfMonth, 7 - (monthEndsAt % 7))
    })
        .map(day => ({
            display: format(day, 'd'),
            weekDay: format(day, 'c'),
            month: format(day, 'L'),
            dayOfYear: format(day, 'd')
        }))
    return <CalendarContainer>
        <MonthName>{currentMonthName}</MonthName>
        <Calendar>
            {weekDays}
            {monthDays.map(day =>
                <MonthDay
                    isToday={today === day.dayOfYear}
                    sameMonth={currentMonth === day.month}
                    key={`${day.month}_${day.display}`}>
                {day.display}
                </MonthDay>
            )}
        </Calendar>
    </CalendarContainer>
}