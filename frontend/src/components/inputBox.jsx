export function InputBox({label,placeholder,onChange}) {
    return <div>
        <div className=" font-medium text-left text-sm py-2">{label}</div>   
        <input onChange={onChange} type="text" placeholder={placeholder} className=" border-slate-200 w-full rounded border px-2 py-1" />   
    </div>
}