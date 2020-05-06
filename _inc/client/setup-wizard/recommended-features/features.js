/**
 * External dependencies
 */
import { translate as __ } from 'i18n-calypso';

const features = {
	backups: {
		title: __( 'Daily or Real-time backups' ),
		details: __(
			'Never worry about experimenting, threats, or mistakes. Jetpack will back everything up and keep it safe in an offsite location, ready for you to restore your site in moments.'
		),
		upgradeLink: '',
		settingsLink: '',
	},
	scan: {
		title: __( 'Security scanning' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		upgradeLink: '',
	},
	'brute-force-protect': {
		title: __( 'Protect' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'protect',
	},
	'anti-spam': {
		title: __( 'Anti-spam' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	monitor: {
		title: __( 'Monitor' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'monitor',
	},
	'site-accelerator': {
		title: __( 'Site Accelerator' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'photon-cdn',
	},
	search: {
		title: __( 'Elasticsearch' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'search',
	},
	// TODO: infinite-scroll needs a way to toggle between its 3 options, maybe just set it to a default
	'infinite-scroll': {
		title: __( 'Infinite Scroll' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'infinite-scroll',
	},
	// TODO: turn this into something that toggles an appropriate set of defaults.
	'site-stats': {
		title: __( 'Site Stats' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	videopress: {
		title: __( 'VideoPress' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'videopress',
	},
	// TODO: what should this one be? No settings to toggle.
	'contact-form': {
		title: __( 'Contact Form' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	// TODO: what should this one be? No settings to toggle.
	notifications: {
		title: __( 'Notifications' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	publicize: {
		title: __( 'Publicize' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'publicize',
	},
	// TODO: how to handle the other two sub toggles?
	'related-posts': {
		title: __( 'Related posts' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'related-posts',
	},
	sharing: {
		title: __( 'Sharing' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'sharedaddy',
	},
	'site-verification': {
		title: __( 'Site Verification' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'verification-tools',
	},
	// TODO: how to handle the other two sub toggles?
	subscriptions: {
		title: __( 'Subscriptions' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'subscriptions',
	},
	// TODO: how to handle the many sub toggles?
	ads: {
		title: __( 'Ads' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'wordads',
	},
	// TODO: this one is always on, no option to toggle
	'simple-payments-block': {
		title: __( 'Simple Payments Block' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	'beautiful-math': {
		title: __( 'Beautiful Math' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'latex',
	},
	// TODO: how to handle sub toggle
	carousel: {
		title: __( 'Carousel' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'carousel',
	},
	'comment-likes': {
		title: __( 'Comment Likes' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'comment-likes',
	},
	'copy-post': {
		title: __( 'Copy Post' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'copy-post',
	},
	// TODO: this is on by default and cannot be easily turned off
	'enhanced-distribution': {
		title: __( 'Enhanced Distribution' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	'extra-sidebar-widgets': {
		title: __( 'Extra Sibar Widgets' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
		moduleSlug: 'widgets',
	},
	// TODO: could not find an example for this
	'tiled-galleries': {
		title: __( 'Tiled Galleries' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
};

const featureGroups = {
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

const recommendedFeatureGroups = [ featureGroups.security, featureGroups.performance ];

export { features, recommendedFeatureGroups };
