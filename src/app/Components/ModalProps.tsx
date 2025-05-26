"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm overflow-y-auto py-10 min-h-screen flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
              delay: 0.1,
            }}
            className="relative bg-white dark:bg-neutral-900 rounded-xl shadow-2xl w-full max-w-2xl mx-auto max-h-[calc(100vh-4rem)] flex flex-col"
            style={{ overflow: "hidden" }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 text-2xl z-10"
              aria-label="Close"
            >
              &times;
            </button>
            <div
              className="overflow-y-auto p-0 md:p-6 custom-scroll"
              style={{ maxHeight: "calc(100vh - 4rem)" }}
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
