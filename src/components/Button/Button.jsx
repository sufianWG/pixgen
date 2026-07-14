const Button = ({ children }) => {
    return (
        <button className='w-full px3 py-2 bg-transparent border text-black font-bold rounded-full transition-all cursor-pointer hover:bg-gray-100'>
            {children}
        </button>
    );
};

export default Button;