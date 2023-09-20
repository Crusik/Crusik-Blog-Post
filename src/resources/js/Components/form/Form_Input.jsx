import Input_Error from './Input_Error';
import Form_Label from './Form_Label';

export default function Form_Input({ name, type = "text", label, data, setData, onChange = (e) => setData(name, e.target.value) }) {
    return (
        <div className="mb-6">
            <Form_Label name={name} label={label}/>
            {type === "file" ? (
                <input className="border bg-white border-gray-400 p-2 w-full rounded-md" 
                    type={type}
                    onChange={onChange}
                    name={name}
                    id={name} 
                />
            ) : (
                <input className="border border-gray-400 p-2 w-full rounded-md" 
                    type={type}
                    value={data[name] ?? ""}
                    onChange={onChange}
                    name={name}
                    id={name}
                    required    
                />
            )}
            <Input_Error name={name}/>
        </div>
    );
}
