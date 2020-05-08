/**
 * External dependencies
 */
import { translate as __ } from 'i18n-calypso';
import getRedirectUrl from 'lib/jp-redirect';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import { getVaultPressData, isAkismetKeyValid } from 'state/at-a-glance';
import { getSiteRawUrl } from 'state/initial-state';
import { getRewindStatus } from 'state/rewind';
import { getSetting, updateSettings } from 'state/settings';

const featureToggleData = {
	backups: {
		title: __( 'Daily or Real-time backups' ),
		details: __(
			'Never worry about experimenting, threats, or mistakes. Jetpack will back everything up and keep it safe in an offsite location, ready for you to restore your site in moments.'
		),
		getChecked: state => {
			const vaultPressData = getVaultPressData( state );
			const isVaultPressEnabled = get( vaultPressData, [ 'data', 'features', 'backups' ], false );

			const rewindStatus = getRewindStatus( state );
			const rewindState = get( rewindStatus, 'state', false );

			return true === isVaultPressEnabled || 'active' === rewindState;
		},
		getOnToggleChange: dispatch => {
			// TODO: make this navigate appropriately.
			return currentCheckedValue => {
				return dispatch();
			};
		},
		getIsDisabled: state => {
			const vaultPressData = getVaultPressData( state );
			const isVaultPressEnabled = get( vaultPressData, [ 'data', 'features', 'backups' ], false );

			const rewindStatus = getRewindStatus( state );
			const rewindState = get( rewindStatus, 'state', false );

			return true === isVaultPressEnabled || 'active' === rewindState;
		},
		getUpgradeLink: state => {
			return '#/plans';
		},
		isPaid: true,
		upgradeLink: '',
		settingsLink: '',
	},
	scan: {
		title: __( 'Security scanning' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			const vaultPressData = getVaultPressData( state );
			const isScanEnabled = get( vaultPressData, [ 'data', 'features', 'security' ], false );

			return true === isScanEnabled;
		},
		getOnToggleChange: dispatch => {
			// TODO: make this navigate appropriately.
			return currentCheckedValue => {
				return dispatch();
			};
		},
		getIsDisabled: state => {
			const vaultPressData = getVaultPressData( state );
			const isScanEnabled = get( vaultPressData, [ 'data', 'features', 'security' ], false );

			return true === isScanEnabled;
		},
		isPaid: true,
		upgradeLink: '',
	},
	'brute-force-protect': {
		title: __( 'Protect' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'protect' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { protect: ! currentCheckedValue } ) );
			};
		},
		isPaid: true,
		moduleSlug: 'protect',
	},
	'anti-spam': {
		title: __( 'Anti-spam' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return true === isAkismetKeyValid( state );
		},
		getOnToggleChange: dispatch => {
			// TODO
			return () => {};
		},
		getIsDisabled: state => {
			return true === isAkismetKeyValid( state );
		},
		isPaid: true,
	},
	monitor: {
		title: __( 'Monitor' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'monitor' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { monitor: ! currentCheckedValue } ) );
			};
		},
		moduleSlug: 'monitor',
	},
	// TODO: site-accelerator might also need to activate photon
	'site-accelerator': {
		title: __( 'Site Accelerator' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'photon-cdn' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { 'photon-cdn': ! currentCheckedValue } ) );
			};
		},
		moduleSlug: 'photon-cdn',
	},
	search: {
		title: __( 'Elasticsearch' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'search' );
		},
		// TODO: make sure this is handled better when the plan level is too low.
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { search: ! currentCheckedValue } ) );
			};
		},
		getIsDisabled: state => {
			return getSetting( state, 'search' );
		},
		isPaid: true,
		moduleSlug: 'search',
	},
	// TODO: infinite-scroll needs a way to toggle between its 3 options, maybe just set it to a default
	'infinite-scroll': {
		title: __( 'Infinite Scroll' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return !! getSetting( state, 'infinite-scroll' );
		},
		// TODO: add deep link configuration
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				if ( currentCheckedValue ) {
					return dispatch( updateSettings( { 'infinite-scroll': false } ) );
				}
				return dispatch( updateSettings( { 'infinite-scroll': true, infinite_scroll: true } ) );
			};
		},
		moduleSlug: 'infinite-scroll',
	},
	// TODO: turn this into something that toggles an appropriate set of defaults.
	'site-stats': {
		title: __( 'Site Stats' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'stats' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { stats: ! currentCheckedValue } ) );
			};
		},
	},
	// TODO: feature gating by plan
	videopress: {
		title: __( 'VideoPress' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'videopress' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { videopress: ! currentCheckedValue } ) );
			};
		},
		isPaid: true,
		moduleSlug: 'videopress',
	},
	// TODO: what should this one be? No settings to toggle.
	'contact-form': {
		title: __( 'Contact Form' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'contact-form' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { 'contact-form': ! currentCheckedValue } ) );
			};
		},
	},
	// TODO: what should this one be? No settings to toggle.
	notifications: {
		title: __( 'Notifications' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'notes' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { notes: ! currentCheckedValue } ) );
			};
		},
	},
	// TODO: does this need to have an external link to connect accounts?
	publicize: {
		title: __( 'Publicize' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'publicize' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { publicize: ! currentCheckedValue } ) );
			};
		},
		getConfigureLink: state => {
			const siteRawUrl = getSiteRawUrl( state );
			return getRedirectUrl( 'calypso-marketing-connections', { site: siteRawUrl } );
		},
		moduleSlug: 'publicize',
	},
	// TODO: are defaults for the sub toggles on this okay?
	'related-posts': {
		title: __( 'Related posts' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'related-posts' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { 'related-posts': ! currentCheckedValue } ) );
			};
		},
		moduleSlug: 'related-posts',
	},
	sharing: {
		title: __( 'Sharing' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'sharedaddy' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { sharedaddy: ! currentCheckedValue } ) );
			};
		},
		moduleSlug: 'sharedaddy',
	},
	// TODO: add external link for setting up verification
	'site-verification': {
		title: __( 'Site Verification' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'verification-tools' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { 'verification-tools': ! currentCheckedValue } ) );
			};
		},
		moduleSlug: 'verification-tools',
	},
	// TODO: verify that defaults for the sub toggles are okay
	subscriptions: {
		title: __( 'Subscriptions' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'subscriptions' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { subscriptions: ! currentCheckedValue } ) );
			};
		},
		moduleSlug: 'subscriptions',
	},
	// TODO: verify that defaults for the sub toggles are okay
	ads: {
		title: __( 'Ads' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'wordads' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { wordads: ! currentCheckedValue } ) );
			};
		},
		isPaid: true,
		moduleSlug: 'wordads',
	},
	// TODO: make an upgrade if it isn't paid for?
	'simple-payments-block': {
		title: __( 'Simple Payments Block' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return true;
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return () => {};
			};
		},
		getInfo: state => {
			return __( 'Always on' );
		},
		isPaid: true,
		getIsDisabled: state => {
			return true;
		},
	},
	// TODO: link to carousel settings
	carousel: {
		title: __( 'Carousel' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'carousel' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { carousel: ! currentCheckedValue } ) );
			};
		},
		moduleSlug: 'carousel',
	},
	'comment-likes': {
		title: __( 'Comment Likes' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'comment-likes' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { 'comment-likes': ! currentCheckedValue } ) );
			};
		},
		moduleSlug: 'comment-likes',
	},
	'copy-post': {
		title: __( 'Copy Post' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'copy-post' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { 'copy-post': ! currentCheckedValue } ) );
			};
		},
	},
	'enhanced-distribution': {
		title: __( 'Enhanced Distribution' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'enhanced-distribution' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { 'enhanced-distribution': ! currentCheckedValue } ) );
			};
		},
	},
	'extra-sidebar-widgets': {
		title: __( 'Extra Sibar Widgets' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'widgets' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { widgets: ! currentCheckedValue } ) );
			};
		},
		moduleSlug: 'widgets',
	},
	'tiled-galleries': {
		title: __( 'Tiled Galleries' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'tiled-gallery' );
		},
		getOnToggleChange: dispatch => {
			return currentCheckedValue => {
				return dispatch( updateSettings( { 'tiled-gallery': ! currentCheckedValue } ) );
			};
		},
	},
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
