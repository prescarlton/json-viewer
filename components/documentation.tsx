export default function Docs() {
    return (
        <div className='section'>
            <div className='header'>
            <h1>Docs / Getting Started</h1>
            </div>
            <p>
                This works like pretty much all the other ones do; you paste in some JSON in the big ol' text area up there, click 'VIEW',
                and it'll spit out a nice formatted version of your data. If there are any errors in the JSON, it'll also highlight those errors
                and let give you an idea of where you went wrong.
            </p>
            <p>
                If you want to keep the format that the tool spits out, there's a button next to each result that will copy all the contents of 
                that textarea to your clipboard for you, format in-tact.
            </p>
            <p>
                For now, that's all there is to it!
            </p>
        </div>
    )
}