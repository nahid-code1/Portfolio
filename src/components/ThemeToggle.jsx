const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full shadow-lg hover:scale-110 transition-transform text-gray-800 dark:text-yellow-400"
        onClick={toggleTheme}
      >
        <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
      </button>
    </div>
  )
}

export default ThemeToggle