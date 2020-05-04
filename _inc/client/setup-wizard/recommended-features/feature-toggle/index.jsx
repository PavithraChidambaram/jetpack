/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormToggle } from '@wordpress/components';

import './style.scss';

export class FeatureToggle extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		details: PropTypes.string.isRequired,
	};

	constructor( props ) {
		super( props );
		this.state = { toggled: true };
	}

	render() {
		const { title, details } = this.props;

		return (
			<div className="jp-setup-wizard-feature-toggle">
				<FormToggle />
				<p>{ title }</p>
				<p>{ details }</p>
			</div>
		);
	}
}
