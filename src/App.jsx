import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome/welcome";
import NotFound from "./pages/404/notFound";
import Admin from "./pages/admin/admin";
import Homepage from "./pages/welcome/home";
import SignupOrg from "./pages/welcome/OrgSignUp/signup";
import LoginOrg from "./pages/welcome/OrgSignIn/login";

import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const client = new QueryClient();
  return (
    <div className="h-screen font-NunitoSans">
      <QueryClientProvider client={client}>
        <Routes>
          <Route exact path="/" element={<Welcome current={{isLog:false,isOrg:false}} />} />
          <Route path="/signup" element={<Welcome current={{isLog:false,isOrg:false}} />} />
          <Route path="/login" element={<Welcome current={{isLog:true,isOrg:false}} />} />
          <Route path="/signupOrg" element={<Welcome current={{isLog:false,isOrg:true}} />} />
          <Route path="/loginOrg" element={<Welcome current={{isLog:true,isOrg:true}} />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/home" element={<Homepage/>} />
          {/* <Route path="/documentation" element={<Documentation />} /> */}
          {/* <Route path="/faqs" element={<Faqs />} /> */}
          {/* <Route element={<VerifyAuth/>}> */}
            {/* <Route path="/chat" element={<Chat/>} /> */}
          {/* </Route> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
