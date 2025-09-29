// PageTransition.tsx
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

interface Props {
  children: React.ReactNode;
}

const PageTransition: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
