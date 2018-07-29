import React from 'react';

export const FormFieldsError = ({formErrors}) => (
	<div className='text-danger'>
		{Object.keys(formErrors).map((fieldName, i) => {
			console.log('6 -- formErrors[fieldName]: ', formErrors[fieldName]);
			if(formErrors[fieldName].length > 0){
				return (
					<p key={i}>
						{fieldName} {formErrors[fieldName]}
					</p>
				)        
			} else {
				return '';
			}
		})}
	</div>
);