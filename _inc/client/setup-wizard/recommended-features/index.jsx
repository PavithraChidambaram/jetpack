/**
 * External dependencies
 */
import React from 'react';
import { translate as __ } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import { imagePath } from 'constants/urls';
import { FeatureToggle } from './feature-toggle';

import './style.scss';

const RecommendedFeatures = () => {
	return (
		<div className="jp-setup-wizard-main">
			<img
				src={ imagePath + 'jetpack-new-heights.svg' }
				alt={ __( 'A rocketship using Jetpack to reach new heights' ) }
			/>
			<h1>{ __( 'Get started with Jetpack’s powerful features' ) }</h1>
			<p>
				{ __(
					"Jetpack has a lot of features so we've made a few recommendations for you below. You can change your feature settings at any time."
				) }
			</p>
			<FeatureToggle
				title={ __( 'Daily or Real-time backups' ) }
				details={ __(
					'Never worry about experimenting, threats, or mistakes. Jetpack will back everything up and keep it safe in an offsite location, ready for you to restore your site in moments.'
				) }
			></FeatureToggle>
		</div>
	);
};

export { RecommendedFeatures };
