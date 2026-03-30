🧮 Calculator Using JavaScript

A simple and responsive calculator built using HTML, Tailwind CSS, and JavaScript.
This project performs basic arithmetic operations with a clean UI and interactive functionality.

🚀 Features
➕ Addition, ➖ Subtraction, ✖ Multiplication, ➗ Division
📱 Responsive UI using Tailwind CSS
🔢 Real-time input display
🧹 AC (All Clear) button
⌫ Delete (Del) functionality
📊 Handles decimal numbers
⚠️ Error handling for invalid or large inputs
🛠️ Tech Stack
HTML5 – Structure
Tailwind CSS – Styling
JavaScript – Logic & functionality
📂 Project Structure
Calculator-Using-js/
│
├── index.html      # UI layout
├── script.js       # Calculator logic
└── README.md       # Project documentation
⚙️ How It Works
User clicks buttons to input numbers and operators
Values are stored as:
firstNumber
secondNumber
expression
When = is pressed:
Expression is converted into valid JavaScript format
Evaluated using eval()
Result is displayed and can be reused for further calculations
🧠 Key Functions
firstshownumber() → Handles first number input
numberAndSign() → Stores operator
fullExpression() → Builds full expression
calculate() → Evaluates result
handleDelete() → Removes last input
clearAll() → Resets calculator
forLargeValue() → Prevents overflow errors
⚠️ Limitations
Uses eval() (safe here, but not recommended for large apps)
Supports only basic operations
No keyboard input support yet
🔮 Future Improvements
⌨️ Keyboard support
📜 Calculation history
🎨 UI animations
🌙 Dark/Light mode toggle
📸 Preview

Clean and minimal calculator UI with responsive design.

🔗 Live Demo (Optional)

Add your deployed link here (e.g., GitHub Pages)

🤝 Contributing

Feel free to fork this project and improve it!

📌 Author

Anoop Kumar

⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
