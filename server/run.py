from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows your frontend to talk to this backend

# Dummy chatbot logic
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    message = data.get('message', '').lower()

    if 'event' in message:
        return jsonify({
            "reply": "Here are some upcoming events: AI Workshop, Coding Marathon, and Startup Expo."
        })
    elif 'schedule' in message:
        return jsonify({
            "reply": "The schedule will be available soon on the main website."
        })
    else:
        return jsonify({
            "reply": "Sorry, I didn't understand that. Ask about events or schedules."
        })

# Start the Flask server
if __name__ == '__main__':
    app.run(debug=True)
