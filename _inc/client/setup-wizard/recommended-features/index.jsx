/**
 * External dependencies
 */
import React from 'react';
import { translate as __ } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import { imagePath } from 'constants/urls';
import { FeatureToggleGroup } from './feature-toggle-group';

import { recommendedFeatureGroups, featureContent } from './features';

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
			{ recommendedFeatureGroups.map( featureGroup => {
				return (
					<FeatureToggleGroup
						title={ featureGroup.title }
						details={ featureGroup.details }
						features={ featureGroup.features.map( key => featureContent[ key ] ) }
					/>
				);
			} ) }
		</div>
	);
};

export { RecommendedFeatures };
