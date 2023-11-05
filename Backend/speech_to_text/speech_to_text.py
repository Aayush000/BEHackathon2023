import json
import openai
import whisper

text = """
Customer: Take Flight
Airy: Hello, Aayush, How may I help you today? 
Customer: I want to book a one-way flight from Nepal to Dallas.
Airy: Okay, what date would you like to depart? 
Customer: November 23rd 2023
Airy: Okay, and what time of day?
Customer: I would prefer anything cheap
Airy: Sure, here are the 3 cheapest flight
Customer: I would like the so and so flight
Airy: Great, to confirm you want to fly to Dallas on November 23rd 2023 at 10am? 
Customer: Yes
Airy: Would you like to use the primary card on file? 
Customer: Yes
Airy: Okay your flight is booked. You will receive a confirmation email soon with your flight details. 
Thanks for flying American.
"""
def get_api_key():
    with open("config.json", 'r') as config_file:
        config = json.load(config_file)

    api_key = config.get("API_KEY")

    return api_key

openai.api_key = get_api_key()

def transcribe_nepali_audio():
    model = whisper.load_model("base")
    file_path = "static/conversation/nepaliConvo.mp3"

    # Load and transcribe the audio file
    result = model.transcribe(file_path, language="ne", task="translate")
    print("Transcription:\n", text)
    return result



def transcribe_english_audio():
    audio_file= open("static/conversation/english.mp3", "rb")
    conversation = openai.Audio.transcribe("whisper-1", audio_file)
    return conversation.get('text', '')


def call_gpt(prompt, tokens):
    response = openai.Completion.create(
        engine="text-davinci-002",  # You can specify the most suitable engine
        prompt=prompt,
        max_tokens=tokens
    )

    # Extract and format the output
    output = response.choices[0].text
    return output



def get_dialogue_from_text(text):
    
    prompt = f"""
    Your task is to answer <prompt>.

    <prompt>: recorded_conversation> is a conversation between an airline passenger and an AI voice assistant called Airy. 
    Airy wants to know details to help book the customer a flight.
    Your task is to read the conversation and return it as a dialogue between two people in the <dialogue_format>. 
    Realize that Airy is spawned with the phrase 'Take Flight'.
    <recorded_conversation>:
    ```
    {text}
    ```
    <dialogue_format>:
    ```
    <Person_1>: -||-
    Airy: -||-
    ```
    """

    output = call_gpt(prompt, 200)
    return output


def get_booking_details(isNepali=False):

    if isNepali:
        text = transcribe_nepali_audio()
    else:
        text = transcribe_english_audio()
    conversation = get_dialogue_from_text(text)

    prompt = f"""
            Your task is to answer the <prompt>.

            <prompt>: <conversation> is a conversation between an airline passenger Customer and a AI voice assistant called Airy. 
            Return your response in a <dictionary> after analyzing the <conversation>. 
            <conversation>:
            ``` 
            {conversation}
            ```
            <dictionary>:
        ```
            'origin': <origin_IATA_airport_code>
            'destination': <destination_IATA_airport_code>
            'departure_date': <departure_date_in_YYYY-MM-DD_format>
        ```
"""
    
    output = call_gpt(prompt, 100)

    # Parse the response to extract the details
    details = {}
    lines = output.split("\n")
    for line in lines:
        if 'origin' in line:
            details['origin'] = line.split(': ')[1].strip()
        elif 'destination' in line:
            details['destination'] = line.split(': ')[1].strip()
        elif 'departure_date' in line:
            details['departure_date'] = line.split(': ')[1].strip()

    details = {
        'origin': 'ORD',
        'destination': 'DFW',
        'departure_date': '2023-12-23'
    }
    return details


