/**
 * External dependencies
 */
import { translate as __ } from 'i18n-calypso';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import getRedirectUrl from 'lib/jp-redirect';
import { getPlanClass } from 'lib/plans/constants';
import { getVaultPressData, isAkismetKeyValid } from 'state/at-a-glance';
import { getSiteRawUrl } from 'state/initial-state';
import { getRewindStatus } from 'state/rewind';
import { getSetting, updateSettings } from 'state/settings';
import { getSitePlan } from 'state/site';

// TODO: verify that defaults for the sub toggles are okay
const ads = {
	mapStateToProps: state => {
		return {
			title: __( 'Ads' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'wordads' ),
			isPaid: true,
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { wordads: ! currentCheckedValue } ) );
			},
		};
	},
};

const antiSpam = {
	mapStateToProps: state => {
		return {
			title: __( 'Anti-spam' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: true === isAkismetKeyValid( state ),
			isDisabled: true === isAkismetKeyValid( state ),
			isPaid: true,
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: () => {}, //TODO
		};
	},
};

const backups = {
	mapStateToProps: state => {
		const vaultPressData = getVaultPressData( state );
		const isVaultPressEnabled = get( vaultPressData, [ 'data', 'features', 'backups' ], false );

		const rewindStatus = getRewindStatus( state );
		const rewindState = get( rewindStatus, 'state', false );

		const sitePlan = getSitePlan( state );
		const planClass = getPlanClass( sitePlan.product_slug );

		const backupsActive = true === isVaultPressEnabled || 'active' === rewindState;

		let upgradeLink;
		if ( 'is-free-plan' === planClass ) {
			upgradeLink = '#/plans';
		}

		let info;
		if ( 'is-free-plan' !== planClass ) {
			info = __( `Included with ${ sitePlan.product_name }` );
		}

		return {
			title: __( 'Daily or Real-time backups' ),
			details: __(
				'Never worry about experimenting, threats, or mistakes. Jetpack will back everything up and keep it safe in an offsite location, ready for you to restore your site in moments.'
			),
			checked: backupsActive,
			isDisabled: backupsActive,
			upgradeLink,
			info,
			isPaid: true,
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			// TODO: make this navigate appropriately.
			onToggleChange: () => {},
		};
	},
};

const bruteForceProtect = {
	mapStateToProps: state => {
		return {
			title: __( 'Protect' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'protect' ),
			isPaid: true,
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { protect: ! currentCheckedValue } ) );
			},
		};
	},
};

// TODO: link to carousel settings
const carousel = {
	mapStateToProps: state => {
		return {
			title: __( 'Carousel' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'carousel' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { carousel: ! currentCheckedValue } ) );
			},
		};
	},
};

const commentLikes = {
	mapStateToProps: state => {
		return {
			title: __( 'Comment Likes' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'comment-likes' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { 'comment-likes': ! currentCheckedValue } ) );
			},
		};
	},
};

const contactForm = {
	mapStateToProps: state => {
		return {
			title: __( 'Contact Form' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'contact-form' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { 'contact-form': ! currentCheckedValue } ) );
			},
		};
	},
};

const copyPost = {
	mapStateToProps: state => {
		return {
			title: __( 'Copy Post' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'copy-post' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { 'copy-post': ! currentCheckedValue } ) );
			},
		};
	},
};

const enhancedDistribution = {
	mapStateToProps: state => {
		return {
			title: __( 'Enhanced Distribution' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'enhanced-distribution' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { 'enhanced-distribution': ! currentCheckedValue } ) );
			},
		};
	},
};

const extraSidebarWidgets = {
	mapStateToProps: state => {
		return {
			title: __( 'Extra Sibar Widgets' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'widgets' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { widgets: ! currentCheckedValue } ) );
			},
		};
	},
};

const infiniteScroll = {
	mapStateToProps: state => {
		return {
			title: __( 'Infinite Scroll' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: !! getSetting( state, 'infinite-scroll' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				if ( currentCheckedValue ) {
					return dispatch( updateSettings( { 'infinite-scroll': false } ) );
				}
				return dispatch( updateSettings( { 'infinite-scroll': true, infinite_scroll: true } ) );
			},
		};
	},
};

const monitor = {
	mapStateToProps: state => {
		return {
			title: __( 'Monitor' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'monitor' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { monitor: ! currentCheckedValue } ) );
			},
		};
	},
};

const notifications = {
	mapStateToProps: state => {
		return {
			title: __( 'Notifications' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'notes' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { notes: ! currentCheckedValue } ) );
			},
		};
	},
};

const publicize = {
	mapStateToProps: state => {
		const siteRawUrl = getSiteRawUrl( state );

		return {
			title: __( 'Publicize' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'publicize' ),
			configureLink: getRedirectUrl( 'calypso-marketing-connections', { site: siteRawUrl } ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { publicize: ! currentCheckedValue } ) );
			},
		};
	},
};

// TODO: are defaults for the sub toggles on this okay?
const relatedPosts = {
	mapStateToProps: state => {
		return {
			title: __( 'Related posts' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'related-posts' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { 'related-posts': ! currentCheckedValue } ) );
			},
		};
	},
};

const scan = {
	mapStateToProps: state => {
		const vaultPressData = getVaultPressData( state );
		const isScanEnabled = true === get( vaultPressData, [ 'data', 'features', 'security' ], false );

		return {
			title: __( 'Security scanning' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: isScanEnabled,
			isDisabled: isScanEnabled,
			isPaid: true,
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			// TODO: make this navigate appropriately.
			onToggleChange: () => {},
		};
	},
};

// TODO: make sure this is handled better when the plan level is too low.
const search = {
	mapStateToProps: state => {
		return {
			title: __( 'Elasticsearch' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'search' ),
			isDisabled: getSetting( state, 'search' ),
			isPaid: true,
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { search: ! currentCheckedValue } ) );
			},
		};
	},
};

const sharing = {
	mapStateToProps: state => {
		return {
			title: __( 'Sharing' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'sharedaddy' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { sharedaddy: ! currentCheckedValue } ) );
			},
		};
	},
};

// TODO: make an upgrade if it isn't paid for?
const simplePaymentsBlock = {
	mapStateToProps: state => {
		return {
			title: __( 'Simple Payments Block' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: true,
			info: __( 'Always on' ),
			isPaid: true,
			isDisabled: true,
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return () => {};
			},
		};
	},
};

const siteAccelerator = {
	mapStateToProps: state => {
		return {
			title: __( 'Site Accelerator' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'photon-cdn' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { 'photon-cdn': ! currentCheckedValue } ) );
			},
		};
	},
};

const siteStats = {
	mapStateToProps: state => {
		return {
			title: __( 'Site Stats' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'stats' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { stats: ! currentCheckedValue } ) );
			},
		};
	},
};

// TODO: add external link for setting up verification
const siteVerification = {
	mapStateToProps: state => {
		return {
			title: __( 'Site Verification' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'verification-tools' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { 'verification-tools': ! currentCheckedValue } ) );
			},
		};
	},
};

// TODO: verify that defaults for the sub toggles are okay
const subscriptions = {
	mapStateToProps: state => {
		return {
			title: __( 'Subscriptions' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'subscriptions' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { subscriptions: ! currentCheckedValue } ) );
			},
		};
	},
};

const tiledGalleries = {
	mapStateToProps: state => {
		return {
			title: __( 'Tiled Galleries' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'tiled-gallery' ),
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { 'tiled-gallery': ! currentCheckedValue } ) );
			},
		};
	},
};

// TODO: feature gating by plan
const videopress = {
	mapStateToProps: state => {
		return {
			title: __( 'VideoPress' ),
			details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam urna, tempus quis pellentesque et, facilisis vel nibh. Orci varius.',
			checked: getSetting( state, 'videopress' ),
			isPaid: true,
		};
	},
	mapDispatchToProps: dispatch => {
		return {
			onToggleChange: currentCheckedValue => {
				return dispatch( updateSettings( { videopress: ! currentCheckedValue } ) );
			},
		};
	},
};

const features = {
	ads,
	'anti-spam': antiSpam,
	backups,
	'brute-force-protect': bruteForceProtect,
	carousel,
	'comment-likes': commentLikes,
	'contact-form': contactForm,
	'copy-post': copyPost,
	'enhanced-distribution': enhancedDistribution,
	'extra-sidebar-widgets': extraSidebarWidgets,
	'infinite-scroll': infiniteScroll,
	monitor,
	notifications,
	publicize,
	'related-posts': relatedPosts,
	scan,
	search,
	sharing,
	'simple-payments-block': simplePaymentsBlock,
	'site-accelerator': siteAccelerator,
	'site-stats': siteStats,
	'site-verification': siteVerification,
	subscriptions,
	'tiled-galleries': tiledGalleries,
	videopress,
};

export default features;
