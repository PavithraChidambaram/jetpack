/**
 * External dependencies
 */
import { Disabled, FormToggle } from '@wordpress/components';
import classnames from 'classnames';
import { translate as __ } from 'i18n-calypso';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Internal dependencies
 */
import Button from 'components/button';
import Gridicon from 'components/gridicon';

import './style.scss';

const FeatureToggle = props => {
	const { title, details, checked, upgradeLink, isPaid = false, isDisabled = false } = props;

	function onToggleChange() {
		props.onToggleChange( checked );
	}

	const formToggle = <FormToggle checked={ checked } onChange={ onToggleChange } />;

	return (
		<div className="jp-setup-wizard-feature-toggle">
			<div
				className={ classnames( 'jp-setup-wizard-form-toggle-container', {
					'is-paid-feature': isPaid,
				} ) }
			>
				<Gridicon icon="star" />
				{ isDisabled ? <Disabled>{ formToggle }</Disabled> : formToggle }
			</div>
			<div className="jp-setup-wizard-feature-toggle-content-container">
				<p className="jp-setup-wizard-feature-toggle-content">
					<span>{ title }</span>
					{ details }
				</p>
			</div>
			<div className="jp-setup-wizard-feature-toggle-button-container">
				{ upgradeLink && (
					<Button href={ upgradeLink } primary>
						{ __( 'Upgrade now' ) }
					</Button>
				) }
			</div>
		</div>
	);
};

FeatureToggle.propTypes = {
	title: PropTypes.string.isRequired,
	details: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	upgradeLink: PropTypes.string,
};

export { FeatureToggle };
