import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Finder from "./features/finder/Finder";
import { useGetPokemonByNameQuery } from "./api/pokemon/pokemonAPI";
import styles from "./style";
import "./App.css";
import {
  NavbarHeader,
  Business,
  Stats,
  Hero,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

const pokemon = ["bulbasaur", "pikachu", "ditto", "bulbasaur"];

const Pokemon = ({ name, pollingInterval }: any) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
};
function App() {
  // Using a query hook automatically fetches data and returns query values
  const [pollingInterval, setPollingInterval] = React.useState(0);

  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  return (
    <div>
      <Finder />
    </div>
    // <div className="bg-primary w-full overflow-hidden">
    //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <NavbarHeader />
    //     </div>
    //   </div>
    //   <div className={`bg-primary ${styles.flexStart}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Hero />
    //     </div>
    //   </div>
    //   <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Stats />
    //       <Business />
    //       <Billing />
    //       <CardDeal />
    //       <Testimonials />
    //       <Clients />
    //       <CTA />
    //       <Footer />
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;

// <div>
//   {pokemon.map((poke, index) => (
//     <Pokemon key={index} name={poke} pollingInterval={pollingInterval} />
//   ))}
// </div>
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <Counter />
//   <p>
//     Edit <code>src/App.tsx</code> and save to reload.
//   </p>
//   <span>
//     <span>Learn </span>
//     <a
//       className="App-link"
//       href="https://reactjs.org/"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       React
//     </a>
//     <span>, </span>
//     <a
//       className="App-link"
//       href="https://redux.js.org/"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Redux
//     </a>
//     <span>, </span>
//     <a
//       className="App-link"
//       href="https://redux-toolkit.js.org/"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Redux Toolkit
//     </a>
//     ,<span> and </span>
//     <a
//       className="App-link"
//       href="https://react-redux.js.org/"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       React Redux
//     </a>
//   </span>
// </header>
