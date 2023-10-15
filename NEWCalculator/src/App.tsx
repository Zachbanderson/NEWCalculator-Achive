//React modules.
import { useState } from 'react'

//React-bootstrap modules.
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from 'react-bootstrap/Form';

//Local imports.
import './App.css'
import explosives from './explosives.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import CalculateNEWKnownForm from "./CalculateNEWKnown";
import NEWDisplay from "./NEWDisplay";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLNk0zaNQ38rFvhWNo77Ozi_m8prO6zE0",
    authDomain: "newcalculator-5ca3b.firebaseapp.com",
    projectId: "newcalculator-5ca3b",
    storageBucket: "newcalculator-5ca3b.appspot.com",
    messagingSenderId: "414783387307",
    appId: "1:414783387307:web:5b8cfd74a5cd2cf832a9ee",
    measurementId: "G-BB3KWYB8Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
    const [currentExplosive, setCurrentExplosive] = useState({name:'', ref: 0})
    const [unit, setUnit] = useState('Pounds')
    const [NEW, setNEW] = useState(0)

    type explosive = {
        name: string;
        ref: number;
    };

    function loadJsonExplosives(explosivesData: any)
    {
        console.log("explosivesData is type of " + typeof explosivesData)
        return explosivesData.map((e: any) => {
            console.log("e is " + typeof e)
            return {name: e.Name, ref: e.REF}
        })
    }
    let explosivesList: Array<explosive> = loadJsonExplosives(explosives.Explosives)

    function calculateNEW(quantity: number, weight: number)
    {
        if(currentExplosive.ref === 0) return
        let product:number = quantity * weight * currentExplosive.ref
        setNEW(product)
    }

    return (
        <>
            <h1>NEW Calculator</h1>
            <DropdownButton id="dropdown-basic-button" title={currentExplosive.name === '' ? "Choose Explosive" : currentExplosive.name}>
                {explosivesList.map(explosive => {
                        return <Dropdown.Item key={crypto.randomUUID()} onClick={() => setCurrentExplosive(explosive)}>{explosive.name}</Dropdown.Item>
                    }
                )}
            </DropdownButton>
            <Form>
                <div key="default-radio" className="mb-3">
                    <Form.Check type="radio" id="default-radio" label="Pounds" defaultChecked={true} onClick={() => setUnit('Pounds')}/>
                    <Form.Check type="radio" id="default-radio" label="Grains" defaultChecked={false} onClick={() => setUnit('Grains')} />
                </div>
            </Form>
            <CalculateNEWKnownForm calculateNEW={calculateNEW}/>
            <NEWDisplay NEW={NEW} unit={unit} />
        </>
    )
}

export default App
