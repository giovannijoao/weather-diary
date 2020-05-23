import styled, { css } from "styled-components";

export const CalendarContainer = styled.div`
    grid-area: calendar;
    display: grid;
    grid-template:
        ". month-name calendar-view" min-content
        / 8px min-content auto;
    column-gap: 8px;
`

export const MonthName = styled.h1`
    grid-area: month-name;
    font-weight: bold;
    font-size: 16px;
`

export const Calendar = styled.div`
    grid-area: calendar-view;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px 8px;
`

const Day = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
`
export const WeekDay = styled(Day)`
    font-size: 14px;
    font-weight: bold;
    width: initial;
    height: initial;
`

export const MonthDay = styled(Day)`
    grid-area: ${props => props.day};
    ${props => !props.sameMonth && css`
        opacity: 0.3;
    `};
    ${props => props.isToday && css`
        border-radius: 24px;
        border: 1px solid ${props => props.theme.bgColors.first};
        font-weight: bold;
    `}
`
