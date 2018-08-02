import React, { Component } from 'react';
import { connect } from 'react-redux';
import { photoActions } from 'Redux/photo/actions';

import Banner from 'Components/Banner';

class Main extends Component {
	componentWillMount() {
		this.props.addPhoto({
			id: 12,
			img: 'htp;swd.ejpng'
		});
	}

	render() {
		return (
			<section>
				<Banner />
			</section>
		);
	}
}

const mapDispatchToProps = {
	addPhoto: photoActions.addPhoto
};

export default connect(
	null,
	mapDispatchToProps
)(Main);
