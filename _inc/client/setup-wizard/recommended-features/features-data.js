/**
 * External dependencies
 */
import { translate as __ } from 'i18n-calypso';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import { getVaultPressData, isAkismetKeyValid } from 'state/at-a-glance';
import { getRewindStatus } from 'state/rewind';
import { getSetting } from 'state/settings';

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
		upgradeLink: '',
	},
	'brute-force-protect': {
		title: __( 'Protect' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'protect' );
		},
		moduleSlug: 'protect',
	},
	'anti-spam': {
		title: __( 'Anti-spam' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return true === isAkismetKeyValid( state );
		},
	},
	monitor: {
		title: __( 'Monitor' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return getSetting( state, 'monitor' );
		},
		moduleSlug: 'monitor',
	},
	'site-accelerator': {
		title: __( 'Site Accelerator' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'photon-cdn',
	},
	search: {
		title: __( 'Elasticsearch' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'search',
	},
	// TODO: infinite-scroll needs a way to toggle between its 3 options, maybe just set it to a default
	'infinite-scroll': {
		title: __( 'Infinite Scroll' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'infinite-scroll',
	},
	// TODO: turn this into something that toggles an appropriate set of defaults.
	'site-stats': {
		title: __( 'Site Stats' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
	},
	videopress: {
		title: __( 'VideoPress' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'videopress',
	},
	// TODO: what should this one be? No settings to toggle.
	'contact-form': {
		title: __( 'Contact Form' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
	},
	// TODO: what should this one be? No settings to toggle.
	notifications: {
		title: __( 'Notifications' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
	},
	publicize: {
		title: __( 'Publicize' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'publicize',
	},
	// TODO: how to handle the other two sub toggles?
	'related-posts': {
		title: __( 'Related posts' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'related-posts',
	},
	sharing: {
		title: __( 'Sharing' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'sharedaddy',
	},
	'site-verification': {
		title: __( 'Site Verification' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'verification-tools',
	},
	// TODO: how to handle the other two sub toggles?
	subscriptions: {
		title: __( 'Subscriptions' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'subscriptions',
	},
	// TODO: how to handle the many sub toggles?
	ads: {
		title: __( 'Ads' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'wordads',
	},
	// TODO: this one is always on, no option to toggle
	'simple-payments-block': {
		title: __( 'Simple Payments Block' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
	},
	'beautiful-math': {
		title: __( 'Beautiful Math' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'latex',
	},
	// TODO: how to handle sub toggle
	carousel: {
		title: __( 'Carousel' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'carousel',
	},
	'comment-likes': {
		title: __( 'Comment Likes' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'comment-likes',
	},
	'copy-post': {
		title: __( 'Copy Post' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'copy-post',
	},
	// TODO: this is on by default and cannot be easily turned off
	'enhanced-distribution': {
		title: __( 'Enhanced Distribution' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
	},
	'extra-sidebar-widgets': {
		title: __( 'Extra Sibar Widgets' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
		moduleSlug: 'widgets',
	},
	// TODO: could not find an example for this
	'tiled-galleries': {
		title: __( 'Tiled Galleries' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		getChecked: state => {
			return false;
		},
	},
};

const getFeatureToggleProps = state => {
	const featuresData = {};
	for ( const key in featureToggleData ) {
		const featureToggle = featureToggleData[ key ];
		featuresData[ key ] = {
			title: featureToggle.title,
			details: featureToggle.details,
			checked: featureToggle.getChecked( state ),
		};
	}
	return featuresData;
};

const featureGroups = {
	testing: {
		title: __( 'Testing' ),
		details: __( 'Use this section for testing toggles' ),
		features: [ 'monitor' ],
	},
	security: {
		title: __( 'Security' ),
		details: __( 'Protect your site against data loss, malware, and malicious attacks.' ),
		features: [ 'backups', 'scan', 'brute-force-protect', 'anti-spam' ],
	},
	performance: {
		title: __( 'Performance' ),
		details: __( 'Load pages faster, optimize images, and speed up your visitors’ experience.' ),
		features: [ 'site-accelerator', 'search' ],
	},
};

const recommendedFeatureGroups = [
	featureGroups.testing,
	featureGroups.security,
	featureGroups.performance,
];

export { getFeatureToggleProps, recommendedFeatureGroups };
