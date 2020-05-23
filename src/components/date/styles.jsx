import styled from "styled-components";

export const DateGrid = styled.div`
    grid-area: date-header;
    display: grid;
    grid-template:
        "day month" min-content
        "day year" min-content
        / min-content auto;
    column-gap: 10px;
`

export const Day = styled.h1`
    grid-area: day;
    font-size: 48px;
    font-weight: bold;
`

export const Month = styled.p`
    grid-area: month;
    font-size: 16px;
    font-weight: bold;
    align-self: flex-end;
`

export const Year = styled(Month)`
    grid-area: year;
    align-self: flex-start;
`