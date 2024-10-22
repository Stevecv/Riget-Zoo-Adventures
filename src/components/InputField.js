export default function InputField(props) {
    return (
        <div className="m-2">
            <label htmlFor={props.id}
                   className="block mb-2 text-sm font-medium text-grey-900 dark:text-white">{props.label}</label>
            <input type={props.type} id={props.id}
                   className="bg-grey-50 border border-gray-300 text-grey-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                   placeholder={props.placeholder} onChange={props.onChange} value={props.value} required/>
        </div>
    )
}