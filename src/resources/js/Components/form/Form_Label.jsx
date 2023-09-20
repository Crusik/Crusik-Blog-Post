export default function Form_Label({ name, label }) {
    // const capitalizedLabel = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <label htmlFor={name} label={label}>{label}</label>
    )
}