/**
 * External dependencies
 */
import { translate as __ } from 'i18n-calypso';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { FeatureToggle } from '../feature-toggle';
import { updateSettings } from 'state/settings';

import './style.scss';

let FeatureToggleGroup = props => {
	const { title, details, features } = props;

	return (
		<div>
			<h2>{ title }</h2>
			<p>{ details }</p>
			<div className="jp-setup-wizard-feature-toggle-group-toggles-area-container">
				{ features.map( feature => {
					return (
						<div className="jp-setup-wizard-feature-toggle-group-toggle-container">
							<FeatureToggle
								title={ feature.title }
								details={ feature.details }
								checked={ feature.checked }
							/>
						</div>
					);
				} ) }
			</div>
		</div>
	);
};

FeatureToggleGroup.propTypes = {
	title: PropTypes.string.isRequired,
	details: PropTypes.string.isRequired,
	features: PropTypes.array.isRequired,
};

FeatureToggleGroup = connect(
	state => ( {} ),
	dispatch => ( {
		updateOptions: ( newOptions, messages = {} ) => {
			return dispatch( updateSettings( newOptions, messages ) );
		},
	} )
)( FeatureToggleGroup );

export { FeatureToggleGroup };
