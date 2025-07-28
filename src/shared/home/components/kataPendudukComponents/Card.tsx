"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { CardProps, CardContentProps } from "../../types/index"

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-lg shadow-sm border ${className}`}
    >
      {children}
    </motion.div>
  )
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>
}
