import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
// import { hideScrollbarStyle } from "../../utils";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const PageTransitioner = (props: Props) => {
  const { children } = props;
  const { asPath } = useRouter();
  const variants = {
    out: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    in: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <motion.div
        key={asPath}
        initial={variants.out}
        animate={variants.in}
        exit={variants.out}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitioner;
