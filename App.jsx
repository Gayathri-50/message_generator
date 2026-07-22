import { useState } from "react"
import { motion } from "framer-motion"

function App() {

  // Romantic Messages

  const romanticMessages = {

    cute: [
      "Every time your name pops up on my phone, I smile.",
      "You make my world feel softer and happier.",
      "You are my favorite notification.",
      "You turn ordinary moments into beautiful memories."
    ],

    emotional: [
      "You quietly became the most special part of my life.",
      "Talking to you heals my heart.",
      "Your presence feels like peace.",
      "Somehow you make everything feel okay."
    ],

    flirty: [
      "I think my heart gets excited every time you text me.",
      "You should stop being this adorable.",
      "You're dangerously easy to like.",
      "You make butterflies look lazy."
    ],

    deep: [
      "Some souls just feel connected, and you are one of them.",
      "You feel like home to my heart.",
      "Loving you feels natural.",
      "You are the calm my soul was searching for."
    ],

    night: [
      "Good night to the person who lives in my thoughts.",
      "Sleep well, my favorite human.",
      "I hope your dreams are as beautiful as your smile.",
      "May your night be peaceful and full of lovely dreams."
    ]

  }

  // States

  const [category, setCategory] = useState("cute")

  const [message, setMessage] =
    useState(romanticMessages.cute[0])

  const [copied, setCopied] = useState(false)

  // Generate Random Message

  const generateMessage = (selectedCategory) => {

    const messages =
      romanticMessages[selectedCategory]

    const randomIndex =
      Math.floor(Math.random() * messages.length)

    setMessage(messages[randomIndex])

    setCategory(selectedCategory)

  }

  // Copy Message

  const copyMessage = () => {

    navigator.clipboard.writeText(message)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)

  }

  return (

    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-black px-4">

      {/* Background Gradient */}

      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-black to-purple-900" />

      {/* Glow Effects */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-[140px] opacity-30 animate-pulse" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[140px] opacity-30 animate-pulse" />

      {/* Floating Emojis */}

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute top-16 left-10 text-5xl"
      >
        ❤️
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute bottom-20 right-10 text-5xl"
      >
        💖
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute top-40 right-20 text-4xl"
      >
        ✨
      </motion.div>

      {/* Main Card */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 40
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        transition={{
          duration: 0.8
        }}
        className="
          relative
          z-10
          w-full
          max-w-2xl
          rounded-[40px]
          border
          border-white/20
          bg-white/10
          backdrop-blur-2xl
          shadow-[0_0_60px_rgba(255,255,255,0.1)]
          p-10
        "
      >

        {/* Title */}

        <div className="text-center mb-8">

          <h1 className="
            text-5xl
            font-black
            bg-gradient-to-r
            from-pink-300
            via-rose-200
            to-purple-300
            bg-clip-text
            text-transparent
            mb-3
          ">
            To My Nanaa ❤️
          </h1>

          <p className="
            text-pink-100/70
            tracking-widest
            uppercase
            text-sm
          ">
            Current Mood • {category}
          </p>

        </div>

        {/* Category Buttons */}

        <div className="
          flex
          flex-wrap
          justify-center
          gap-4
          mb-10
        ">

          {[
            ["cute", "Cute 💕"],
            ["emotional", "Emotional 🌸"],
            ["flirty", "Flirty 😘"],
            ["deep", "Deep Love ❤️"],
            ["night", "Good Night 🌙"]
          ].map(([type, label]) => (

            <motion.button
              key={type}
              whileHover={{
                scale: 1.08,
                y: -3
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={() =>
                generateMessage(type)
              }
              className={`
                px-5
                py-3
                rounded-2xl
                font-semibold
                transition-all
                duration-300
                backdrop-blur-xl
                border
                ${
                  category === type
                    ? "bg-white text-pink-600 border-white shadow-lg"
                    : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                }
              `}
            >
              {label}
            </motion.button>

          ))}

        </div>

        {/* Message Card */}

        <motion.div
          key={message}
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
          className="
            relative
            bg-white/10
            border
            border-white/10
            rounded-3xl
            p-10
            mb-8
            overflow-hidden
          "
        >

          <div className="
            absolute
            inset-0
            bg-gradient-to-br
            from-pink-400/10
            to-purple-400/10
          " />

          <p className="
            relative
            text-2xl
            leading-[50px]
            text-white
            text-center
            font-light
          ">
            “{message}”
          </p>

        </motion.div>

        {/* Action Buttons */}

        <div className="flex flex-col gap-4">

          {/* Generate Button */}

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0px 0px 30px rgba(255,105,180,0.5)"
            }}
            whileTap={{
              scale: 0.97
            }}
            onClick={() =>
              generateMessage(category)
            }
            className="
              py-4
              rounded-2xl
              text-lg
              font-bold
              text-white
              bg-gradient-to-r
              from-pink-500
              via-rose-500
              to-purple-500
              shadow-xl
              w-full
            "
          >
            Generate Again 💌
          </motion.button>

          {/* Copy Button */}

          <motion.button
            whileHover={{
              scale: 1.03
            }}
            whileTap={{
              scale: 0.97
            }}
            onClick={copyMessage}
            className="
              py-4
              rounded-2xl
              text-lg
              font-semibold
              text-white
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
            "
          >
            {copied
              ? "Copied 💖"
              : "Copy Message ❤️"}
          </motion.button>

        </div>

        {/* Footer */}

        <p className="
          mt-8
          text-center
          text-pink-100/60
          italic
          tracking-wide
        ">
          Made with love ✨
        </p>

      </motion.div>

    </div>

  )

}

export default App
