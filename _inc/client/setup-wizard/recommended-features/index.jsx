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
import { FeatureToggleGroup } from './feature-toggle-group';

import './style.scss';

const recommendedFeatures = {
	backups: {
		title: __( 'Daily or Real-time backups' ),
		details: __(
			'Never worry about experimenting, threats, or mistakes. Jetpack will back everything up and keep it safe in an offsite location, ready for you to restore your site in moments.'
		),
		upgradeLink: '',
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
	},
	'site-accelerator': {
		title: __( 'Site Accelerator' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	search: {
		title: __( 'Elasticsearch' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	'infinite-scroll': {
		title: __( 'Infinite Scroll' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	'site-stats': {
		title: __( 'Site Stats' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	videopress: {
		title: __( 'VideoPress' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	'contact-form': {
		title: __( 'Contact Form' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	notifications: {
		title: __( 'Notifications' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	publicize: {
		title: __( 'Publicize' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	'related-posts': {
		title: __( 'Related posts' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	sharing: {
		title: __( 'Sharing' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	'site-verification': {
		title: __( 'Site Verification' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	subscriptions: {
		title: __( 'Subscriptions' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	ads: {
		title: __( 'Ads' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	'simple-payments-block': {
		title: __( 'Simple Payments Block' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	'beautiful-math': {
		title: __( 'Beautiful Math' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	carousel: {
		title: __( 'Carousel' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	'comment-likes': {
		title: __( 'Comment Likes' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	'copy-post': {
		title: __( 'Copy Post' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	'enhanced-distribution': {
		title: __( 'Enhanced Distribution' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	'extra-sidebar-widgets': {
		title: __( 'Extra Sibar Widgets' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
	'tiled-galleries': {
		title: __( 'Tiled Galleries' ),
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
	},
};

const RecommendedFeatures = () => {
	const securityFeatures = [ 'backups', 'scan', 'brute-force-protect', 'anti-spam' ].map(
		key => recommendedFeatures[ key ]
	);

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
			<div></div>
			<FeatureToggleGroup
				title={ __( 'Security' ) }
				details={ __( 'Protect your site against data loss, malware, and malicious attacks.' ) }
				features={ securityFeatures }
			></FeatureToggleGroup>
		</div>
	);
};

export { RecommendedFeatures };
