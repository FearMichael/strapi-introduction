import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindExpression } from '@babel/types';


interface Services { serviceDescription: String, nameOfService: String };
interface ServicesType extends Array<Services> { };
interface RawData { json: () => any };
interface Bio { nameOfEmployee: String, bioInformation: String };
interface Bios extends Array<Bio> { };

const App: React.FC = () => {

  const [services, updateServices] = useState<ServicesType | null>();
  const [bios, updateBios] = useState<Bios | null>()

  useEffect(() => {
    fetch("/services").then((rawData: RawData) => rawData.json()).then((serviceData: ServicesType) => {
      updateServices(serviceData);
      console.log(serviceData);
    })
    fetch("/bios").then((rawData: RawData) => rawData.json()).then((bios: Bios) => updateBios(bios))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {
        services && services.map((service: Services, i: Number) => {
          return <div key={i.toString()}>
            <h3> {service.nameOfService} </h3>
            <p>{service.serviceDescription}</p>
          </div>
        })
      }
      {
        bios && bios.map((bio: Bio, i: Number) => {
          return <div key={i.toString()}  >
            <h3>{bio.nameOfEmployee}</h3>
            <p>{bio.bioInformation}</p>
          </div>
        })
      }
    </div>
  );
}

export default App;
