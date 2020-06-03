import React, {useState} from 'react';

 import './Table.css' 
import { Grid} from '@material-ui/core';
import Button from "../../Components/Button/ButtonNew.js";

import gris from '../../Resources/Tabla/gris.png'
import rojo from '../../Resources/Tabla/rojo.png'
import blanco from '../../Resources/Tabla/blanco.png'
import ubicacion from '../../Resources/Tabla/ubicacion.png'

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
] 
const hours = [
    '8:00 a 9:00 am',
    '9:00 a 10:00 am',
    '10:00 a 11:00 am',
    '11:00 a 12:00 m',
    '12:00 a 1:00 pm',
    '1:00 a 2:00 pm',
    '2:00 a 3:00 pm',
    '3:00 a 4:00 pm',
    '4:00 a 5:00 pm',
    '5:00 a 6:00 pm',
    '6:00 a 7:00 pm',
]

const Table = ({room, button}) => {
    const [currentSelection, setCurrentSelection] = useState([])

    const handleSelection = (coors) => () => {
        if (currentSelection.includes(coors)) {
            setCurrentSelection(currentSelection.filter((selection) => coors !== selection))
            return
        }
        setCurrentSelection([
            ...currentSelection,
            coors
        ])
    }

    return (
        <div className="o-container-info-table">
            <div style={{display:"flex" ,justifyContent:"center"}}>
            <div className="o-line"></div>
            </div>
            <Grid container className="o-header-table">
                <Grid item md={2}>
                    <h1 className="o-room">{room}</h1>
                </Grid>
                <Grid item md={8} className="o-week">
                    <button >Semana actual</button>
                    <button >Semana siguiente</button>
                </Grid>
                
            </Grid>
            <Grid container className="o-container-cuadros">
                <Grid item className="o-cuadro">
                   <img src={gris}/>
                   <h6>Espacios ocupados</h6>
                </Grid>
                <Grid item className="o-cuadro">
                   <img src={rojo}/>
                   <h6>Tus reservas</h6>
                </Grid>
                <Grid item className="o-cuadro">
                   <img src={blanco}/>
                   <h6>Espacios libres</h6>
                </Grid>
                
            </Grid>

            <div className="o-container-table">

                <table className="o-table">
                <thead class="o-column">
                    <tr className="o-days" >
                        <th className="o-location">
                            <img src={ubicacion}/>
                            <h6>Ubicación</h6>
                            </th>
                        {
                        days.map(day => (
                            <td 
                                key={day}>
                                <span>{day}</span>
                            </td>
                        ))
                    } </tr> </thead>
                    {
                    hours.map((hour, columnIndex) => (
                        <tr className="o-row" >
                            <th className="">
                                <span>{hour}</span>
                            </th>
                            {
                            days.map((day, index) => (
                                <td 
                                className="o-cell"
                                key={
                                    `btn${index}${day}`
                                }>
                                    <p> {
                                        currentSelection.includes(`${index}-${columnIndex}`) ? (
                                            <span className="o-btn-cell-select"
                                                onClick={
                                                    handleSelection(`${index}-${columnIndex}`)
                                            }>Reservar</span>
                                        ) : (
                                            <>
                                                <button type="button" className="o-btn-cell"  onClick={ handleSelection(`${index}-${columnIndex}`)
                                                }>
                                                    Disponible
                                                </button>
                                            </>
                                        )
                                    } </p>
                                </td>
                            ))
                        } </tr>
                    ))
                } </table>

            </div>
            
            <Button action={button} />
            
        </div>
        
    )
}
export default Table;