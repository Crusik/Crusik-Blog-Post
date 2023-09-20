import Input_Error from './Input_Error';
import Form_Label from './Form_Label';

export default function TextArea({ name, label, data, setData }) {
    return (
        <div className="mb-6">
            <Form_Label name={name} label={label}/>
            <textarea className="border border-gray-400 p-2 w-full rounded-md" 
                value={data[name] ?? ""}
                onChange={(e) => setData(name, e.target.value)}
                name={name}
                id={name}
                required    
            />
            <Input_Error name={name}/>
        </div>
    );
}
