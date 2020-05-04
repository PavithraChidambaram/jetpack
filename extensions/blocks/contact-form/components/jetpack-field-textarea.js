/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { TextareaControl, Disabled } from '@wordpress/components';

/**
 * Internal dependencies
 */
import JetpackFieldLabel from './jetpack-field-label';
import JetpackFieldControls from './jetpack-field-controls';

export default function JetpackFieldTextarea( props ) {
	const { required, label, setAttributes, placeholder, fieldWidth } = props;

	return (
		<>
			<div className="jetpack-field">
				<JetpackFieldLabel required={ required } label={ label } setAttributes={ setAttributes } />
				<Disabled>
					<TextareaControl
						placeholder={ placeholder }
						value={ placeholder }
						onChange={ value => setAttributes( { placeholder: value } ) }
						title={ __( 'Set the placeholder text', 'jetpack' ) }
					/>
				</Disabled>
			</div>

			<JetpackFieldControls
				required={ required }
				setAttributes={ setAttributes }
				fieldWidth={ fieldWidth }
			/>
		</>
	);
}
