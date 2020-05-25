import styled, { css } from "styled-components";

export const CalendarsGrid = styled.div`
    grid-area: calendar;
    display: grid;
    align-items: baseline;
    grid-template-columns: min-content auto;
    row-gap: 40px;
`

export const MonthName = styled.h1`
    font-weight: bold;
    font-size: 16px;
`

export const Calendar = styled.div`
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
    align-items: baseline;
`

export const MonthDay = styled(Day)`
    ${props => !props.sameMonth && css`
        opacity: 0.3;
    `};
    ${props => props.isToday && css`
        border-radius: 24px;
        border: 1px solid ${props => props.theme.bgColors.first};
        font-weight: bold;
    `}
`
