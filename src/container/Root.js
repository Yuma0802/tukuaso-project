import { Component } from "react";
import { withRouter } from "react-router-dom";

import styled from 'styled-components';

const P = styled.p`
    color: blue;
`;

class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <P>hoge</P>
            </>
        )
    }
}
export default withRouter(Root)