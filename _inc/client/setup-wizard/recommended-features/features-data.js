/**
 * External dependencies
 */
import { translate as __ } from 'i18n-calypso';
import getRedirectUrl from 'lib/jp-redirect';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import { getPlanClass } from 'lib/plans/constants';
import { getVaultPressData, isAkismetKeyValid } from 'state/at-a-glance';
import { getSiteRawUrl } from 'state/initial-state';
import { getRewindStatus } from 'state/rewind';
import { getSetting, updateSettings } from 'state/settings';
import { getSitePlan } from 'state/site';

import Features from './features';

const featureToggleData = {};

export const mapStateToFeatureToggleProps = ( state, feature ) => {
	if ( ! Object.keys( Features ).includes( feature ) ) {
		throw `Feature not found: ${ feature }`;
	}

	return Features[ feature ].mapStateToProps( state );
};

export const mapDispatchToFeatureToggleProps = ( state, feature ) => {
	if ( ! Object.keys( Features ).includes( feature ) ) {
		throw `Feature not found: ${ feature }`;
	}

	return Features[ feature ].mapDispatchToProps( state );
};

// TODO: Rewrite this with a map call.
const getFeatureToggleState = state => {
	const featuresData = {};
	for ( const key in featureToggleData ) {
		const featureToggle = featureToggleData[ key ];
		featuresData[ key ] = {
			title: featureToggle.title,
			details: featureToggle.details,
			info: 'function' === typeof featureToggle.getInfo ? featureToggle.getInfo( state ) : null,
			checked: featureToggle.getChecked( state ),
			isPaid: featureToggle.isPaid,
			isDisabled:
				'function' === typeof featureToggle.getIsDisabled
					? featureToggle.getIsDisabled( state )
					: null,
			upgradeLink:
				'function' === typeof featureToggle.getUpgradeLink
					? featureToggle.getUpgradeLink( state )
					: null,
			configureLink:
				'function' === typeof featureToggle.getConfigureLink
					? featureToggle.getConfigureLink( state )
					: null,
		};
	}
	return featuresData;
};

// TODO: Rewrite this with a map call.
const getFeatureToggleDispatch = dispatch => {
	const featureToggleDispatch = {};
	for ( const key in featureToggleData ) {
		const featureToggle = featureToggleData[ key ];
		featureToggleDispatch[ key ] = {
			onToggleChange: featureToggle.getOnToggleChange( dispatch ),
		};
	}
	return featureToggleDispatch;
};

const featureGroups = {
	security: {
		title: __( 'Security' ),
		details: __( 'Protect your site against data loss, malware, and malicious attacks.' ),
		features: [ 'backups', 'scan', 'anti-spam', 'brute-force-protect', 'monitor' ],
	},
	performance: {
		title: __( 'Performance' ),
		details: __( 'Load pages faster, optimize images, and speed up your visitors’ experience.' ),
		features: [ 'site-accelerator', 'search', 'infinite-scroll', 'site-stats', 'videopress' ],
	},
	marketing: {
		title: __( 'Marketing' ),
		details: __(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.'
		),
		features: [
			'contact-form',
			'comment-likes',
			'notifications',
			'publicize',
			'related-posts',
			'sharing',
			'site-verification',
			'subscriptions',
			'ads',
			'simple-payments-block',
		],
	},
	publishing: {
		title: __( 'Design & Publishing' ),
		details: __(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.'
		),
		features: [
			'carousel',
			'copy-post',
			'enhanced-distribution',
			'extra-sidebar-widgets',
			'tiled-galleries',
		],
	},
};

const recommendedFeatureGroups = [
	featureGroups.security,
	featureGroups.performance,
	featureGroups.marketing,
	featureGroups.publishing,
];

export { getFeatureToggleState, getFeatureToggleDispatch, recommendedFeatureGroups };
