import React from "react";
import {
	Grid,
	TextField,
	InputLabel,
	Paper,
	FormControl,
	MenuItem,
	Select,
	Button
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Link } from "react-router-dom";
import CadastroService from "../Storage/cadastroService";

import dataTypesBanks from "../dadosJson/bancos.json";
import dataTypesExpenses from "../dadosJson/tipo_despesa.json";

const style = {
	height: 60,
	width: 150,
	margin: 10,
	textAlign: "center"
};
class Cadastro extends React.Component {
	state = {
		banco: "",
		tipo: "",
		data: "",
		valor: 0,
		msgSucess: false,
		errors: [],
		typesBanks: [],
		typesExpenses: []
	};

	constructor() {
		super();
		this.dados = new CadastroService();
	}

	componentDidMount() {
		this.getTypesBanks();
		this.getTypesExpenses();
	}

	getTypesBanks = () => {
		this.setState(prevState => ({
			...prevState,
			typesBanks: dataTypesBanks
		}));
	};

	getTypesExpenses = () => {
		this.setState(prevState => ({
			...prevState,
			typesExpenses: dataTypesExpenses
		}));
	};

	onChange = event => {
		const valor = event.target.value;
		const nomeDoCampo = event.target.name;
		this.setState({ [nomeDoCampo]: valor });
	};

	onSubmit = event => {
		const dados = {
			id: this.state.id,
			banco: this.state.banco,
			tipo: this.state.tipo,
			data: this.state.data,
			valor: this.state.valor
		};
		try {
			this.dados.salvar(dados);
			this.setState({ msgSucess: true });
		} catch (erro) {
			const errors = erro.errors;
			this.setState({ errors: errors });
		}
	};

	render() {
		const { typesBanks, typesExpenses } = this.state;

		return (
			<>
				<Grid
					spacing={1}
					style={{ marginTop: 100 }}
					container
					direction="column"
					justify="center"
					alignItems="center"
				>
							{this.state.msgSucess && (
							<Alert style={{ marginTop: 20 }} severity="success">
								<AlertTitle>Cadastro Efetuado</AlertTitle>
								Seu cadastro foi realizado com sucesso!
							</Alert>
						)}
						{this.state.errors.length > 0 &&
							this.state.errors.map(msg => {
								return (
									<Alert severity="error">
										<AlertTitle>Erro</AlertTitle> {msg}
									</Alert>
								);
							})}
					
					<Grid item xs={12}>
						
						<TextField 
								style={style}
								onChange={this.onChange}
								name="id"
								value={this.state.id}
								label="id"
								variant="outlined"
							/>
						
						
						<FormControl style={style} variant="outlined">
							<InputLabel>Banco</InputLabel>
							<Select
								value={this.state.banco}
								onChange={this.onChange}
								name="banco"
							>
								{typesBanks &&
									typesBanks.map(eachType => (
										<MenuItem key={eachType.Name} value={eachType.Name}>
											{eachType.Name}
										</MenuItem>
									))}
							</Select>
						</FormControl>
						

						<FormControl style={style} variant="outlined">
							<InputLabel>Tipo</InputLabel>
							<Select
								value={this.state.tipo}
								onChange={this.onChange}
								name="tipo"
							>
								{typesExpenses &&
									typesExpenses.map(eachType => (
										<MenuItem key={eachType} value={eachType}>
											{eachType}
										</MenuItem>
									))}
							</Select>
						</FormControl>
						<TextField
							style={style}
							onChange={this.onChange}
							name="data"
							value={this.state.data}
							label="Data"
							variant="outlined"
						/>
						<TextField
							style={style}
							onChange={this.onChange}
							name="valor"
							type="float"
							value={this.state.valor}
							label="Valor"
							variant="outlined"
						/>
					</Grid>
					<Grid item md={6}>
						<Button
							onClick={this.onSubmit}
							style={{ marginRight: 3 }}
							variant="contained"
							color="primary"
						>
							Cadastrar
						</Button>
						<Button variant="contained" color="secondary">
							<Link style={{ textDecoration: "none", color: "inherit" }} to="/">
								Cancelar
							</Link>
						</Button>
					
						</Grid>
				</Grid>
				</>
				
			
		);
	}
}

export default Cadastro;
