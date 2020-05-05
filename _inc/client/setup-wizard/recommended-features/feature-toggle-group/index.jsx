/**
 * External dependencies
 */
import { translate as __ } from 'i18n-calypso';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Internal dependencies
 */

import { FeatureToggle } from '../feature-toggle';

import './style.scss';

const FeatureToggleGroup = props => {
	return (
		<div>
			<h2>{ props.title }</h2>
			<p>{ props.details }</p>
			{ props.features.map( feature => {
				return <FeatureToggle title={ feature.title } details={ feature.details } />;
			} ) }
		</div>
	);
};

FeatureToggleGroup.propTypes = {
	title: PropTypes.string.isRequired,
	details: PropTypes.string.isRequired,
	features: PropTypes.array.isRequired,
};

export { FeatureToggleGroup };
