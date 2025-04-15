
def get_chatbot_response(message):
    if "event" in message.lower():
        return "The next event is the TechFest on Saturday!"
    return "Sorry, I didn't understand that. Ask about events or schedules."
