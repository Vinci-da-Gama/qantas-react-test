import React from 'react';

export const FormFieldsError = ({formErrors}) => (
	<span className='text-danger'>
		{
			Object.keys(formErrors).map((fieldName, i) => {
				if(formErrors[fieldName].length > 0){
					return (
						<p key={i} className="mb-0">
							{fieldName} {formErrors[fieldName]}
						</p>
					)        
				} else {
					return '';
				}
			})
		}
	</span>
);