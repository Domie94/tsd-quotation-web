import React from 'react';
import withRouter from '../../components/withRouter';
import PropTypes from "prop-types"; 

const Layout = (props) => {

    return (
        <React.Fragment>
            <div className="main-content">{props.children}</div>
        </React.Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.any
};

export default withRouter(Layout);