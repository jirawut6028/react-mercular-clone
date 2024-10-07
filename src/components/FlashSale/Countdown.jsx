import { AnimatePresence, motion } from "framer-motion";

function Countdown({ time, index, text }) {
  return (
    <div className="w-9 h-[52px] bg-black rounded-lg">
      <div className="bg-[#161c24] relative h-9 z-0 flex items-center justify-center text-white text-[18px] font-bold rounded-lg">
        <AnimatePresence mode="sync">
          <motion.div
            style={{
              y: "-50%",
              x: "-50%",
              clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
              zIndex: -index,
              backfaceVisibility: "hidden",
            }}
            key={index}
            transition={{
              duration: text == "วินาที" ? 1 : 2.2,
              ease: "easeInOut",
            }}
            initial={{ rotateX: "0deg" }}
            animate={{ rotateX: "0deg" }}
            exit={{ rotateX: "-180deg" }}
            className="absolute bg-[#161c24] left-1/2 top-1/2"
          >
            {time}
          </motion.div>
          <motion.div
            style={{
              y: "-50%",
              x: "-50%",
              clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
              zIndex: index,
              backfaceVisibility: "hidden",
            }}
            key={(index + 1) * 2}
            initial={{ rotateX: "180deg" }}
            animate={{ rotateX: "0deg" }}
            exit={{ rotateX: "0deg" }}
            transition={{
              duration: text == "วินาที" ? 1 : 2.5,
              ease: "easeInOut",
            }}
            className="absolute bg-[#161c24] left-1/2 top-1/2"
          >
            {time}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="text-white text-[10px] text-center">{text}</div>
    </div>
  );
}

export default Countdown;
