// submit.js

export const SubmitButton = () => {
    return (
        <button 
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-indigo-500/50 transition-all transform hover:scale-105 active:scale-95"
        >
            Submit Pipeline
        </button>
    );
}
