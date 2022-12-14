import { Center, ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
// import Navbar from "../components/navbar";
import Navbar from "../components/navbar/index";
import Layout from "../layout/layout";
import theme from "../lib/theme";
import "../styles/globals.scss";

const firebaseConfig = {
  apiKey: "AIzaSyDrmzxc8MCm7PcO0Ood0MEvliD86e3RBEg",
  authDomain: "bomregistration.firebaseapp.com",
  projectId: "bomregistration",
  storageBucket: "bomregistration.appspot.com",
  messagingSenderId: "567513313511",
  appId: "1:567513313511:web:1d919d03c2334022667242",
  measurementId: "G-T3VWESJ3PF",
};

const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }) {
  const auth = getAuth();
  const [user, setUser] = useState({
    status: false,
    profileImg: "",
    username: "",
    email: "",
  });

  // onAuthStateChanged(auth, async (user) => {
  //   if (user && user.email) {
  //     let res;
  //     try {
  //       res = await axios.get(
  //         `https://bom-location.herokuapp.com/user/${user.email}`
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }

  //     if (res != undefined) {
  //       setUser((user) => ({
  //         ...user,
  //         username: res.data.username,
  //         profileImg: res.data.profileImg,
  //         email: res.data.email,
  //       }));
  //       setUser((user) => ({ ...user, status: true }));
  //     }
  //   } else {
  //     setUser((user) => ({
  //       ...user,
  //       username: "",
  //       profileImg: "",
  //       email: "",
  //       status: false,
  //     }));
  //   }
  // });

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser((user) => ({
          ...user,
          status: false,
          username: "",
          email: "",
          profileImg: "",
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#1d1e44");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <ChakraProvider theme={theme}>
          <AnimatePresence>
            <Layout user={user}>
              <Navbar user={user} logout={logout} />
              <Component {...pageProps} />
            </Layout>
          </AnimatePresence>
        </ChakraProvider>
      ) : (
        <Center width={"100vw"} height="100vh" className="loader">
          <PulseLoader color={color} loading={loading} size={30} />
        </Center>
      )}
    </>
    //           </>
    //      )}
    // </>
  );
}

export default MyApp;
