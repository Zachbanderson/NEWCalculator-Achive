function NEWDisplay( { NEW, unit })
{
    if(NEW === 0){
        console.log("NEW is 0")
        return ''
    }

    let NEWpounds:number = unit === 'Pounds' ? NEW : NEW / 7000
    let NEWgrains:number = NEWpounds * 7000

    console.log("NEW in pounds is " + unit === 'Pounds' ? NEW : NEW / 7000 + "\nNEW in grains is " + unit === 'Pounds' ? NEW * 7000: NEW)
    return (
        <>
            <p>{"NEW in pounds is " + NEWpounds}<br/>{"NEW in grains is " + NEWgrains}</p>
        </>
    )
}

export default NEWDisplay