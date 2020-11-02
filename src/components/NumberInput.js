import React from 'react'

export default function NumberInput({value,label, min, max, step}) {
    return (
        <div>
            <label>{label}</label>
            <input type="number" value={value} min={min} max={max} step={step} />
        </div>
    )
}
