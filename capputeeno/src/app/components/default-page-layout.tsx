"use client"

import styled from "styled-components"

const DefaultPageLayout = styled.div`
    padding: 34px 160px;
    min-height: 100vh;
    background-color: var(--bg-primary);
    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
      padding: 34px 160px;
    }
    @media (max-width: ${props => props.theme.tableBreakpoint}) {
      padding: 34px 20px;
    }
`



export default DefaultPageLayout;