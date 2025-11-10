import React, { useState } from 'react';

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <div className={`transition-all duration-300 ease-in-out transform mb-4 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`} style={{ transformOrigin: 'bottom right' }}>
                <div className="w-80 md:w-96 h-[70vh] max-h-[600px] bg-light-card dark:bg-dark-card rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-dark-text/20">
                     <iframe 
                      src="https://app.relevanceai.com/agents/d7b62b/4ceffc78-eb74-4ad4-bdf6-d5da834b9e6f/75740e9e-01a4-486a-bd39-a45d2af7f530/share?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23071429&bubble_icon=pd%2Fchat&input_placeholder_text=Message...&hide_logo=false&hide_description=false"
                      style={{width:'100%',height:'100%',border:'none'}}
                      allow="microphone"
                      title="AI Assistant Chat"
                    >
                    </iframe>
                </div>
            </div>
            
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="flex items-center justify-center w-16 h-16 bg-light-accent dark:bg-dark-accent rounded-full shadow-lg hover:brightness-110 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-accent dark:focus:ring-dark-accent"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? <CloseIcon /> : <ChatIcon />}
            </button>
        </div>
    );
}

export default Chatbot;