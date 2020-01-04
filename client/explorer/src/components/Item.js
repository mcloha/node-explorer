import React from 'react';

export default function Item({ type, name }) {
    return (
        <div className='col-xs-4 p-2 ' style={{ width: '5rem' }}>
            <i className={type === 'directory' ? 'fa fa-folder fa-4x text-warning' : 'fa fa-file fa-4x text-danger'} />
            <p className='text-wrap' style={{ width: '1rem' }}>{name}</p>
        </div>
    )
}
