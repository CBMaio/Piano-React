import React from 'react';
import styled from 'styled-components'

const Songs = () => {
    
    const canciones = [
        {
            nombre: 'Yo soy tu amigo fiel',
            categoria: 'infantil',
            link: require('../songs/yo-soy-tu-amigo-fiel-toy-story.mp3')
        }, 
        {
            nombre: 'Un mundo ideal',
            categoria: 'infantil',
            link: require('../songs/un-mundo-ideal-aladdin.mp3')
        }, 
        {
            nombre: 'Recuerdame',
            categoria: 'infantil',
            link: require('../songs/recuerdame-coco.mp3')
        }, 
        {
            nombre: 'Bob esponja',
            categoria: 'infantil',
            link: require('../songs/bob-esponja.mp3')
        }, 
        {
            nombre: 'La pantera rosa',
            categoria: 'infantil',
            link: require('../songs/la-pantera-rosa.mp3')
        },   
    ];

    const reproducirCancion = (cancion) => {
        const reproducir = new Audio (cancion.link);
        reproducir.play();
    }
  
    return ( 
        <SongContainer>
                <h2>LISTA DE CANCIONES</h2>
                {
                    canciones.map(cancion => {
                        return(
                            <div 
                                key = {cancion.nombre}>
                                <h3 onClick = {() => reproducirCancion(cancion)}> Suena {cancion.nombre}</h3>
                            </div>
                            )
                        })
                    }
                    {/* <button onClick= {pausar}>Pausar</button> */}
        </SongContainer>
    )
}


export default Songs;

const SongContainer = styled.div`{
    background-color: white;
    width: 25%;
    display: none;
}`