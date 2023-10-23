import "./App.css";
import SearchAirpot from "./components/SearchAirpot";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function App() {
  return (
    <div className="bg-sky-900 h-screen pb-20 w-full">
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col  mt-14 p-4">
          <motion.h1
            className="text-gray-100 text-2xl font-arimo "
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Merhaba
          </motion.h1>
          <motion.h1
            className="text-gray-100 text-xl font-fugaz"
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Nereyi keşfetmek istersiniz?
          </motion.h1>
        </div>
        <motion.div
          className="container mx-auto relative"
          variants={fadeIn("down", 0.9)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="flex flex-col items-center justify-center mt-4 p-4 ">
            <SearchAirpot />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;