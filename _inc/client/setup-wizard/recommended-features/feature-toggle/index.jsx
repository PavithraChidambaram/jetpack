/**
 * External dependencies
 */
import { FormToggle } from '@wordpress/components';
import { translate as __ } from 'i18n-calypso';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Internal dependencies
 */
import Button from 'components/button';

import './style.scss';

const FeatureToggle = props => {
	const { title, details, checked, onChange } = props;

	return (
		<div className="jp-setup-wizard-feature-toggle">
			<div className="jp-setup-wizard-form-toggle-container">
				<FormToggle checked={ checked } onChange={ onChange } />
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
};

FeatureToggle.propTypes = {
	title: PropTypes.string.isRequired,
	details: PropTypes.string.isRequired,
	checked: PropTypes.boolean.isRequired,
	onChange: PropTypes.func.isRequired,
};

export { FeatureToggle };
