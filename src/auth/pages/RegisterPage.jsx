import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
	email: 'emilio@google.com',
	password: '123456',
	displayName: 'Emilio Santiago',
};

export const RegisterPage = () => {
	const { displayName, email, password, onInputChange, formState } =
		useForm(formData);

	const onSubmit = (event) => {
		event.preventDefault();

		console.log(formState);
	};

	return (
		<AuthLayout title="Crear cuenta">
			<form onSubmit={onSubmit}>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Nombre Completo"
							type="text"
							autoComplete="off"
							placeholder="Nombre Completo"
							fullWidth
							name="displayName"
							value={displayName}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Email"
							type="email"
							autoComplete="off"
							placeholder="correo@gmail.com"
							fullWidth
							name="email"
							value={email}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Password"
							type="password"
							autoComplete="new-password"
							placeholder="Password"
							fullWidth
							name="password"
							value={password}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid container spacing={2} sx={{ mb: 1, mt: 1 }}>
						<Grid item xs={12}>
							<Button type="submit" variant="contained" fullWidth>
								Crear cuenta
							</Button>
						</Grid>
					</Grid>
					<Grid container direction="row" justifyContent="end">
						<Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
						<Link component={RouterLink} color="inherit" to="/auth/login">
							Ingresar
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
