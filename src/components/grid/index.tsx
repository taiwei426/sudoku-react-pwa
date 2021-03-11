import React, {FC} from 'react';

import {Container, Row} from './styles'
import Block from './block';

const Grid : FC = () => {

    return (
        <Container data-cy="grid-container">
            {React.Children.toArray([...Array(9)].map((_, rowIndex) =>(
            <Row data-cy="grid-row-container" >
                {React.Children.toArray([...Array(9)].map((_, colIndex) => <Block colIndex={colIndex} rowIndex={rowIndex}/>))}
            </Row>
            )))}
        </Container>
    )
}


export default Grid;


// class Grids extends React.Component{
//     render(){
//         <div></div>
//     }
// }


// const blah = () => {

// }

// function blah2(){

// }

// key = {} works, but a better practice is to use React.Children to have React auto generate a key
// theoretically it's bad to use your index as the key
// {[...Array(9)].map((_, rowIndex) =>(
//     <div data-cy="grid-row-container" key={rowIndex}>
//         {React.Children.toArray([...Array(9)].map((_, colIndex) => (
//             <div data-cy='block' key={colIndex}></div>
//         )))}
//     </div>
//     ))}