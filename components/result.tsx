import { MouseEventHandler } from "hoist-non-react-statics/node_modules/@types/react";

export default function Result(props: { data: Object, indentSize: number, id: number, removeResultFromList: Function }) {
    let { data, indentSize, id, removeResultFromList } = props;
    // setup data nice 'n purdy
    let prettyData = JSON.stringify(data, null, indentSize);
    const copyDataToClipboard: MouseEventHandler = () => {
        navigator.clipboard.writeText(prettyData)
        .then(()=>{
            alert("Successfully saved formatted JSON to clipboard.")
        }, ()=> {
            alert("Unable to write to clipboard.")
        })
    }
    return (
        <div className='result'>
            <h1>#{id}</h1>
            <div className='textarea-wrapper'>
            <textarea value={prettyData} readOnly rows={12} cols={72}></textarea>
            <div className='button-controls'>
                <div className='copy' onClick={copyDataToClipboard}>C</div>
                <div className='delete' onClick={()=>{removeResultFromList(id)}}>D</div>
            </div>
            </div>

        </div>
    )
}