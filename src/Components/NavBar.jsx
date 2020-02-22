import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function NavBar() {
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography style={{ flexGrow: 1 }} variant="h6">
						Finances
					</Typography>
					<Button color="inherit">
						<Link style={{ textDecoration: "none", color: "inherit" }} to="/">
							Despesas
						</Link>
					</Button>
					<Button color="inherit">
						<Link
							style={{ textDecoration: "none", color: "inherit" }}
							to="Cadastro"
						>
							Cadastro
						</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
