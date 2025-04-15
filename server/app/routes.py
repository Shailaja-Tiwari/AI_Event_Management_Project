
from flask import Flask, request, jsonify
from app.ai.chatbot import get_chatbot_response
from app.ai.recommender import get_recommendations

app = Flask(__name__)

@app.route('/api/chat', methods=['POST'])
def chat():
    user_input = request.json['message']
    response = get_chatbot_response(user_input)
    return jsonify({"reply": response})

@app.route('/api/recommend', methods=['GET'])
def recommend():
    user_id = request.args.get('user_id')
    recommendations = get_recommendations(user_id)
    return jsonify(recommendations)
