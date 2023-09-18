import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome/welcome";
import NotFound from "./pages/404/notFound";
import Admin from "./pages/admin/admin";
import Homepage from "./pages/welcome/home";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "../src/theme"
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const client = new QueryClient();
  const theme = createTheme();
  return (
    <div className="h-screen font-NunitoSans">
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route exact path="/" element={<Welcome current={false} />} />
            <Route path="/signup" element={<Welcome current={false} />} />
            <Route path="/login" element={<Welcome current={true} />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/home" element={<Homepage/>} />
            <Route path="/signupOrg" element={<Welcome current={{isLog:false,isOrg:true}} />} />
            <Route path="/loginOrg" element={<Welcome current={{isLog:true,isOrg:true}} />} />
            {/* <Route path="/documentation" element={<Documentation />} /> */}
            {/* <Route path="/faqs" element={<Faqs />} /> */}
            {/* <Route element={<VerifyAuth/>}> */}
            {/* <Route path="/chat" element={<Chat/>} /> */}
            {/* </Route> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
