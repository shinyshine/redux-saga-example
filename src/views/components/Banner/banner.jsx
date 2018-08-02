import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from 'Components/common/Loading';

const Banner = ({ photo: { list, loading } }) => (
	<div>
		{list.map(item => (
			<div key={item.id}>
				<h2>{item.id}</h2>
				<p>{item.img}</p>
			</div>
		))}
		<Loading loading={loading} />
	</div>
);

Banner.propTypes = {
	photo: Proptypes.object.isRequired
};

const mapStateToProps = ({ photo }) => ({ photo });

export default connect(
	mapStateToProps,
	null
)(Banner);
