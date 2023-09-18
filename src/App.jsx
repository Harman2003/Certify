import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome/welcome";
import NotFound from "./pages/404/notFound"
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const client = new QueryClient();
  return (
    <div className="overflow-hidden h-screen font-NunitoSans">
      <QueryClientProvider client={client}>
        <Routes>
          <Route exact path="/" element={<Welcome current={false} />} />
          <Route path="/signup" element={<Welcome current={false} />} />
          <Route path="/login" element={<Welcome current={true} />} />
          {/* <Route path="/home" element={<Home />} /> */}
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
