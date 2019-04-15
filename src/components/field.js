import React from 'react';

export default props => {

    console.log('Field props: ',props);

    // const { name, label, type, onChange } = props;

    return (
        <div className = 'form-group'>
            <label>{ props.label }</label>
            {/* <input name = { name } label = { label } type = { type } onChange = { onChange } className = 'form-control'></input> */}
            <input {...props} className = 'form-control'/>
        </div>
    )

}