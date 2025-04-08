"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import type { Message, ChatStep, UserInfo, ChatOption } from "./types"
import {
  greetingMessage,
  infoGatheringPrompt,
  namePrompt,
  emailPrompt,
  professionPrompt,
  designationPrompt,
  confirmationMessage,
  professionOptions,
  designationOptions,
  initialConversationOptions,
  responseDatabase,
  serviceOptions,
  productOptions,
} from "./chat-responses"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [chatStep, setChatStep] = useState<ChatStep>("closed")
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    profession: "",
    designation: "",
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Initialize chat when opened
  useEffect(() => {
    if (isOpen && chatStep === "closed") {
      initializeChat()
    }
  }, [isOpen, chatStep])

  const initializeChat = () => {
    setChatStep("greeting")
    setMessages([
      {
        id: "1",
        type: "bot",
        text: greetingMessage.english,
      },
      {
        id: "2",
        type: "bot",
        text: greetingMessage.bengali,
      },
      {
        id: "3",
        type: "bot",
        text: infoGatheringPrompt,
      },
      {
        id: "4",
        type: "bot",
        text: namePrompt,
      },
    ])
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
    }
    setMessages((prev) => [...prev, userMessage])

    // Process based on current step
    processUserInput(inputValue)

    // Clear input
    setInputValue("")
  }

  const processUserInput = (input: string) => {
    switch (chatStep) {
      case "name":
        handleNameInput(input)
        break
      case "email":
        handleEmailInput(input)
        break
      case "profession":
        handleProfessionInput(input)
        break
      case "designation":
        handleDesignationInput(input)
        break
      case "conversation":
        handleConversationInput(input)
        break
      default:
        if (chatStep === "greeting") {
          handleNameInput(input)
        }
    }
  }

  const handleNameInput = (name: string) => {
    setUserInfo((prev) => ({ ...prev, name }))
    setChatStep("email")

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        text: emailPrompt(name),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  const handleEmailInput = (email: string) => {
    setUserInfo((prev) => ({ ...prev, email }))
    setChatStep("profession")

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        text: professionPrompt,
        options: professionOptions,
      }
      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  const handleProfessionInput = (profession: string) => {
    setUserInfo((prev) => ({ ...prev, profession }))
    setChatStep("designation")

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        text: designationPrompt,
        options: designationOptions,
      }
      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  const handleDesignationInput = (designation: string) => {
    setUserInfo((prev) => ({ ...prev, designation }))
    setChatStep("confirmation")

    setTimeout(() => {
      const confirmMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        text: confirmationMessage(userInfo.name),
        options: initialConversationOptions,
      }
      setMessages((prev) => [...prev, confirmMessage])
      setChatStep("conversation")
    }, 500)
  }

  const handleConversationInput = (input: string) => {
    // Simple keyword matching
    const inputLower = input.toLowerCase()
    let response = "I'm not sure I understand. Could you please rephrase or select one of the options below?"
    let options: ChatOption[] = initialConversationOptions

    if (inputLower.includes("sociofi") || inputLower.includes("about")) {
      response = responseDatabase.about
    } else if (inputLower.includes("service")) {
      response = responseDatabase.services
      options = serviceOptions
    } else if (inputLower.includes("product")) {
      response = responseDatabase.products
      options = productOptions
    } else if (inputLower.includes("contact") || inputLower.includes("reach") || inputLower.includes("talk")) {
      response = responseDatabase.contact
    } else if (inputLower.includes("agent")) {
      response = responseDatabase["ai-agent"]
    } else if (inputLower.includes("fabric") || inputLower.includes("garment")) {
      response = responseDatabase.fabricxai
    } else if (inputLower.includes("office") || inputLower.includes("internal")) {
      response = responseDatabase.officeflow
    } else if (inputLower.includes("chatbot") || inputLower.includes("chat bot")) {
      response = responseDatabase.chatbot
    }

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        text: response,
        options,
      }
      setMessages((prev) => [...prev, botMessage])
    }, 700)
  }

  const handleOptionClick = (option: ChatOption) => {
    // Add user selection as a message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: option.text,
    }
    setMessages((prev) => [...prev, userMessage])

    // Process the selection based on the action
    if (option.action === "profession" || option.action === "designation") {
      processUserInput(option.text)
    } else {
      // Handle conversation options
      const response =
        responseDatabase[option.action as keyof typeof responseDatabase] || "I don't have information about that yet."
      let options: ChatOption[] = initialConversationOptions

      if (option.action === "services") {
        options = serviceOptions
      } else if (option.action === "products") {
        options = productOptions
      }

      setTimeout(() => {
        const botMessage: Message = {
          id: Date.now().toString(),
          type: "bot",
          text: response,
          options,
        }
        setMessages((prev) => [...prev, botMessage])
      }, 500)
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-96 h-[500px] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200"
          >
            {/* Chat header */}
            <div className="bg-primary p-4 text-white flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <h3 className="font-medium">SocioFi Assistant</h3>
                  <p className="text-xs opacity-80">AI-powered support</p>
                </div>
              </div>
              <button onClick={toggleChat} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 ${message.type === "user" ? "flex justify-end" : "flex justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-white border border-gray-200 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>

                    {/* Options buttons */}
                    {message.options && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.options.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleOptionClick(option)}
                            className="text-xs py-1 px-3 bg-white text-primary border border-primary rounded-full hover:bg-primary/10 transition-colors"
                          >
                            {option.text}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-l-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-primary text-white p-2 rounded-r-lg hover:bg-primary/90"
                >
                  <Send size={20} />
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-500 text-center">
                <p>Powered by SocioFi Technology</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

