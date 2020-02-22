import React, { Component } from "react";
import {
	Paper,
	Table,
	TableHead,
	TableCell,
	TableBody,
	TableRow
} from "@material-ui/core";
import CadastroService from "../Storage/cadastroService";

export default class Tabela extends Component {
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
	render() {
		return (
			<Table style={{ marginTop: 30 }} component={Paper}>
				<TableHead>
					<TableRow>
						<TableCell size="medium" align="center">
							Banco
						</TableCell>
						<TableCell size="medium" align="center">
							Tipo de despesa
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
										{dado.banco}
									</TableCell>
									<TableCell size="medium" align="center">
										{dado.tipo}
									</TableCell>
									<TableCell size="medium" align="center">
										{dado.data}
									</TableCell>
									<TableCell size="medium" align="center"></TableCell>
								</TableRow>
							);
						})}
				</TableBody>
			</Table>
		);
	}
}
