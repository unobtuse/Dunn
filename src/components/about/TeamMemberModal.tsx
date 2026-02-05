"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// TeamMember type based on the data structure in content.ts
export interface TeamMember {
  name: string;
  title: string;
  credentials?: string;
  image: string;
  bio: string;
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

// Animation variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

export function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const previousActiveElement = React.useRef<HTMLElement | null>(null);

  // Handle escape key press
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (member) {
      document.addEventListener("keydown", handleKeyDown);
      // Store the previously focused element
      previousActiveElement.current = document.activeElement as HTMLElement;
      // Focus the close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      // Restore focus to previously focused element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [member, onClose]);

  // Focus trap within modal
  React.useEffect(() => {
    if (!member || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    modal.addEventListener("keydown", handleTabKey);
    return () => modal.removeEventListener("keydown", handleTabKey);
  }, [member]);

  // Handle overlay click
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card/95 backdrop-blur-md shadow-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 border border-border hover:bg-dunn-purple/10 hover:border-dunn-purple/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dunn-purple focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Header with Photo */}
            <div className="relative pt-8 pb-6 px-6 sm:px-8 bg-gradient-to-b from-dunn-purple/10 via-dunn-purple/5 to-transparent">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Photo */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-dunn-purple/40 to-dunn-purple-light/40 blur-md" />
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-dunn-purple/30 overflow-hidden shadow-xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 128px, 160px"
                      priority
                    />
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center sm:text-left">
                  <h2
                    id="modal-title"
                    className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2"
                  >
                    {member.name}
                  </h2>

                  {/* Credentials badge */}
                  {member.credentials && (
                    <span className="inline-block px-3 py-1 mb-2 text-sm font-medium text-dunn-purple bg-dunn-purple/10 rounded-full border border-dunn-purple/20">
                      {member.credentials}
                    </span>
                  )}

                  {/* Title */}
                  <p className="text-base sm:text-lg text-muted-foreground">
                    {member.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="px-6 sm:px-8 pb-8">
              <div className="pt-4 border-t border-border/50">
                <h3 className="text-sm font-semibold text-dunn-purple uppercase tracking-wider mb-4">
                  About
                </h3>
                <div className="prose prose-sm sm:prose-base prose-neutral dark:prose-invert max-w-none">
                  {member.bio.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-foreground/90 leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
