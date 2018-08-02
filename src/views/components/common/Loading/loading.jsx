import React from 'react';
import Proptypes from 'prop-types';

const Loading = ({ loading }) => (
	<div>{loading ? <span>loading.............</span> : null}</div>
);
Loading.propTypes = {
	loading: Proptypes.bool.isRequired
};
export default Loading;
