"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { CardProps, CardContentProps } from "../../types/index"

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  )
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}