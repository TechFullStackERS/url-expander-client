import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<Grid templateAreas={`"nav nav" "main main"`}>
				<GridItem area="nav">
					<NavBar />
				</GridItem>
				<GridItem area="main" bg="dodgerblue">
					Main
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
