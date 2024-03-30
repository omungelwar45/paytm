import {Link} from 'react-router-dom'

export function BottomWarming({label,buttonText,to}){
 return<div className="py-2 text-sm flex justify-center ">
        <div>
            {label}
        </div>
        <Link className=' cursor-pointer pointer pl-1 underline' to={to}>{buttonText}</Link>
    </div>
}