import React, {Component} from 'react';


function RowsTable(props){
    return(
	<tr style={{cursor: "pointer"}} onClick={props.handleClick}>
	    <td>{props.relatorio}</td>
	    <td>{props.numVisitas}</td>
	    <td>{props.data}</td>
	</tr>
    );
}

export default RowsTable;
