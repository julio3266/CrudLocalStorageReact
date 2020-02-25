import React, { Component } from "react";
import {
	Paper,
	Table,
	TableHead,
	TableCell,
	TableBody,
	TableRow,
	IconButton,
	TableContainer,
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CadastroService from "../Storage/cadastroService";
import { withRouter } from 'react-router-dom'
 class Tabela extends Component {
	state = {
		dados: []
	};

	constructor() {
		super();
		this.dados = new CadastroService();
	}

	componentDidMount() {
		const dados = this.dados.getDados();
		this.setState({ dados });
	}
	delete = (id) => {
	const dados = this.dados.delete(id)
	this.setState({dados})
	}

	render() {
		return (
		<TableContainer>	
			<Table  style={{ marginTop: 30 }} component={Paper} >
					<TableHead>
						<TableRow>
							<TableCell size="medium" align="center">
								Id
							</TableCell>
							<TableCell size="medium" align="center">
								Banco
							</TableCell>
							<TableCell size="medium" align="center">
								Valor
							</TableCell>
							<TableCell size="medium" align="center">
								Tipo de despesa
							</TableCell>
							<TableCell size="medium" align="center">
								Valor
							</TableCell>
							<TableCell size="medium" align="center">
								Data
							</TableCell>
							<TableCell size="medium" align="center">
								Ações
							</TableCell>
						</TableRow>
					</TableHead>
					
					<TableBody>
						{this.state.dados &&
							this.state.dados.map((dado, index) => {
								return (
									<TableRow key={dado.banco + index}>
									<TableCell size="medium" align="center">
											{dado.id}
										</TableCell>
										<TableCell size="medium" align="center">
											{dado.banco}
										</TableCell>
										<TableCell size="medium" align="center">
											{dado.valor}
										</TableCell>
										<TableCell size="medium" align="center">
											{dado.tipo}
										</TableCell>
										
										<TableCell size="medium" align="center">
											{dado.valor}
										</TableCell>
										<TableCell size="medium" align="center">
											{dado.data}
										</TableCell>
										
										<TableCell size="medium" align="center">
											<IconButton aria-label="delete" >
												<DeleteIcon onClick={() => this.delete(dado.id)}  fontSize="small" />
											</IconButton>
											<IconButton aria-label="edit">
												<EditIcon  fontSize="small" />
											</IconButton>
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			
			
		);
	}
}

export default withRouter(Tabela)