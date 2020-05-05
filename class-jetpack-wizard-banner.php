<?php
/**
 * Displays the first page of the Wizard in a banner form
 *
 * @package none
 */

use Automattic\Jetpack\Assets;
use Automattic\Jetpack\Assets\Logo as Jetpack_Logo;

/**
 * Jetpack_Wizard_Banner
 **/
class Jetpack_Wizard_Banner {
	/**
	 * Jetpack_Wizard_Banner
	 *
	 * @var Jetpack_Wizard_Banner
	 **/
	private static $instance = null;

	/**
	 * Factory method
	 */
	public static function init() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new Jetpack_Wizard_Banner();
		}

		return self::$instance;
	}

	/**
	 * Jetpack_Wizard_Banner constructor.
	 */
	private function __construct() {
		add_action( 'current_screen', array( $this, 'maybe_initialize_hooks' ) );
	}

	/**
	 * Initialize hooks to display the banner
	 */
	public function maybe_initialize_hooks() {
		// Kill if banner has been dismissed.
		if ( Jetpack_Options::get_option( 'dismissed_wizard_banner' ) ) {
			return;
		}

		add_action( 'admin_print_styles', array( $this, 'admin_banner_styles' ) );
		add_action( 'admin_notices', array( $this, 'render_banner' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_banner_scripts' ) );
	}

	/**
	 * Enqueue JavaScript files.
	 */
	public static function enqueue_banner_scripts() {
		wp_enqueue_script(
			'jetpack-wizard-banner-js',
			Assets::get_file_url_for_environment(
				'_inc/build/jetpack-wizard-banner.min.js',
				'_inc/jetpack-wizard-banner.js'
			),
			array( 'jquery' ),
			JETPACK__VERSION,
			true
		);

		wp_localize_script(
			'jetpack-wizard-banner-js',
			'jp_banner',
			array(
				'ajax_url'          => admin_url( 'admin-ajax.php' ),
				'wizardBannerNonce' => wp_create_nonce( 'jp-wizard-banner-nonce' ),
			)
		);
	}

	/**
	 * Include the needed styles
	 */
	public function admin_banner_styles() {
		$min = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

		wp_enqueue_style(
			'jetpack',
			plugins_url( "css/jetpack-wizard-banner{$min}.css", JETPACK__PLUGIN_FILE ),
			array(),
			JETPACK__VERSION
		);
	}

	/**
	 * AJAX callback
	 */
	public static function ajax_callback() {
		check_ajax_referer( 'jp-wizard-banner-nonce', 'nonce' );

		if ( isset( $_REQUEST['dismissBanner'] ) ) {
			Jetpack_Options::update_option( 'dismissed_wizard_banner', 1 );
			wp_send_json_success();
		}

		wp_die();
	}

	/**
	 * Renders the Wizard Banner
	 */
	public function render_banner() {
		$jetpack_logo = new Jetpack_Logo();
		?>

		<div id="jp-wizard-banner" class="">
			<div class="jp-setup-wizard-intro">
				<span
					class="notice-dismiss wizard-banner-dismiss"
					title="<?php esc_attr_e( 'Dismiss this notice', 'jetpack' ); ?>">
				</span>
				<div class="jp-emblem">
				<?php
					echo $jetpack_logo->get_jp_emblem_larger(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				?>
				</div>
				<img
					width="200px"
					height="200px"
					src="
					<?php
					esc_attr_e( plugins_url( 'images/jetpack-powering-up.svg', JETPACK__PLUGIN_FILE ), 'jetpack' ); // phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText
					?>
					"
					alt="<?php esc_attr_e( 'A jetpack site powering up', 'jetpack' ); ?>"
				/>
				<h1 class="jp-setup-wizard-header">
					<?php esc_html_e( 'Set up Jetpack for better site security, performance, and more', 'jetpack' ); ?>
				</h1>
				<p class="jp-setup-wizard-paragraph">
					<?php esc_html_e( 'Jetpack is a cloud-powered tool built by Automattic.', 'jetpack' ); ?>
				</p>
				<p class="jp-setup-wizard-paragraph">
					<?php esc_html_e( 'Answer a few questions and we’ll help you secure, speed up, customize, and grow your WordPress website.', 'jetpack' ); ?>
				</p>
				<div class="jp-setup-wizard-intro-question">
					<h2>
						<?php
						/* translators: %s is the site name */
						esc_html_e( sprintf( 'What will %s be used for?', get_bloginfo( 'name' ) ), 'jetpack' ); // phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText
						?>
					</h2>
					<div class="jp-setup-wizard-answer-buttons">
						<a class="button button-primary jp-setup-wizard-button" href="setup/income?use=personal">
						<?php esc_html_e( 'Personal Use', 'jetpack' ); ?>
						</a>
						<a class="button button-primary jp-setup-wizard-button" href="setup/income?use=business">
							<?php esc_html_e( 'Business Use', 'jetpack' ); ?>
						</a>
					</div>
					<a class="jp-setup-wizard-skip-link" href="setup/features">
						<?php esc_html_e( 'Skip to recommended features', 'jetpack' ); ?>
					</a>
				</div>
			</div>
		</div>
		<?php
	}
}
