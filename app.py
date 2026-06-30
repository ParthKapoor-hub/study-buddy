from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Study Buddy API is running"})

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    question = data.get('question', '')
    return jsonify({"answer": f"You asked: {question}"})

if __name__ == '__main__':
    app.run(debug=True)