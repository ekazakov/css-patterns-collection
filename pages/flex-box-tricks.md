```jsx
import styled from "@emotion/styled";

const breakPoint = "800px";
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > * {
        height: 200px;
        color: #fff;
        background-color: #000;
        flex-grow: 1;
        flex-basis: calc((800px - 100%) * 999);
        margin: 1rem;
    }

    & > :nth-last-child(n + 5),
    & > :nth-last-child(n + 5) ~ * {
        flex-basis: 100%;
    }

    & > * {
        height: 200px;
        background-color: #000;
    }
`;

const Wrapper = styled.div`
    padding: 20px;
    margin: 0 auto;
    max-width: 1000px;
`;

<Wrapper>
        <h1>Flexbox Holy Albatross + Quantity Query</h1>
        <p>In this demo, flex items are displayed horizontally if:</p>
        <ol>
            <li>
                The flex container is more than <code>{breakPoint}</code> wide
            </li>
            <li>There are fewer than 5 flex items in total</li>
        </ol>

        <h2>4 items</h2>
        <Container role='group' aria-label='Four items at either 25% or 100% width'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            {/* add more or remove some */}
        </Container>

        <h2>5 items</h2>
        <Container role='group' aria-label='Four items at either 25% or 100% width'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            {/* add more or remove some */}
        </Container>
    </Wrapper>
```
