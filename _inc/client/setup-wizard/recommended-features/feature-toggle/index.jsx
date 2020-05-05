/**
 * External dependencies
 */
import { FormToggle } from '@wordpress/components';
import { translate as __ } from 'i18n-calypso';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import Button from 'components/button';

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
				<div className="jp-setup-wizard-form-toggle-container">
					<FormToggle />
				</div>
				<div className="jp-setup-wizard-feature-toggle-content-container">
					<p className="jp-setup-wizard-feature-toggle-content">
						<span>{ title }</span>
						{ details }
					</p>
				</div>
				<div className="jp-setup-wizard-feature-toggle-button-container">
					<Button href="" primary>
						{ __( 'Upgrade now' ) }
					</Button>
				</div>
			</div>
		);
	}
}
