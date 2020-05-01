/**
 * External dependencies
 */
import React from 'react';
import { translate as __ } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import { imagePath } from 'constants/urls';

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
		</div>
	);
};

export { RecommendedFeatures };
