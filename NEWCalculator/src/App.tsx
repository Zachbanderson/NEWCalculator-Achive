import { useState } from 'react'
import './App.css'
import explosives from './explosives.json'
import { Dropdown, DropdownButton } from "react-bootstrap";

function App() {
    type explosive = {
        name: string;
        ref: number;
    };

    function loadJsonExplosives(explosivesData)
    {
        return explosivesData.map((e) => {
            return {name: e.Name, ref: e.REF}
        })
    }
    let explosivesList: Array<explosive> = loadJsonExplosives(explosives.Explosives)

    const [currentExplosive, setCurrentExplosive] = useState({name:'', ref: 0})
    const [unit, setUnit] = useState('Pounds')

    return (
        <>
            <h1>NEW Calculator</h1>

            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                {explosivesList.map(explosive => {
                    return <Dropdown.Item key={crypto.randomUUID()} onClick={() => setCurrentExplosive(explosive)}>{explosive.name}</Dropdown.Item>
                    }
                )}
            </DropdownButton>
            <p>Current explosive is {currentExplosive.name}</p>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="Radio_Pounds" onClick={() => setUnit('Pounds')} defaultChecked={true}/>
                    <label className="form-check-label" htmlFor="Radio_Pounds">
                        Pounds
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="Radio_Grains" onClick={() => setUnit('Grains')} defaultChecked={false}/>
                    <label className="form-check-label" htmlFor="Radio_Grains">
                        Grains
                    </label>
            </div>
            <p>Current unit is {unit}</p>
        </>
    )
}

export default App
