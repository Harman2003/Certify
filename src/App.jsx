import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome/welcome";
import NotFound from "./pages/404/notFound";
import Admin from "./pages/admin/admin";
import Homepage from "./pages/welcome/home";
import Validation from "./validate/validation";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "../src/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";

const chains = [sepolia];
const projectId = "95c8e7a3eb5299213fd251061cd173f9";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  const client = new QueryClient();
  const theme = createTheme();
  return (
    <div className="h-screen font-NunitoSans">
      <WagmiConfig config={wagmiConfig}>
        <QueryClientProvider client={client}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route exact path="/" element={<Welcome current={false} />} />
              <Route path="/signup" element={<Welcome current={false} />} />
              <Route path="/login" element={<Welcome current={true} />} />
              <Route path="/admin/*" element={<Admin />} />
              <Route path="/home" element={<Homepage />} />
              <Route path="/validate" element={<Validation/>} />
              <Route
                path="/signupOrg"
                element={<Welcome current={{ isLog: false, isOrg: true }} />}
              />
              <Route
                path="/loginOrg"
                element={<Welcome current={{ isLog: true, isOrg: true }} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </WagmiConfig>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        defaultChain={sepolia}
        themeVariables={{
          "--w3m-font-family": "Nunito Sans, sans-serif",
          "--w3m-accent-color": "#6c2dec",
        }}
      />
    </div>
  );
}

export default App;
