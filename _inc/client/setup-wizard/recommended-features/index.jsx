/**
 * External dependencies
 */
import { translate as __ } from 'i18n-calypso';
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { FeatureToggleGroup } from './feature-toggle-group';
import { imagePath } from 'constants/urls';
import { fetchSettings, isFetchingSettingsList } from 'state/settings';

import { recommendedFeatureGroups, features } from './features';

import './style.scss';

class RecommendedFeatures extends Component {
	// TODO: redo this as a data component
	componentDidMount() {
		if ( ! this.props.isFetchingSettingsList ) {
			this.props.fetchSettings();
		}
	}

	render() {
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
							features={ featureGroup.features.map( key => features[ key ] ) }
						/>
					);
				} ) }
			</div>
		);
	}
}

RecommendedFeatures = connect(
	state => ( {
		isFetchingSettingsList: isFetchingSettingsList( state ),
	} ),
	dispatch => ( {
		fetchSettings: () => dispatch( fetchSettings() ),
	} )
)( RecommendedFeatures );

export { RecommendedFeatures };
