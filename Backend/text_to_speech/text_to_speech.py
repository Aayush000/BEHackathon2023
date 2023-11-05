from gtts import gTTS
import os

generated_text = """
Take Flight. Hello, Aayush, How may I help you today? I want to book a one-way 
flight from Chicago to Dallas. Okay, what date would you like to depart? 
November 23rd 2023.
Okay, and what time of day?
would prefer anything cheap.
Sure, here are the 3 cheapest flight
I would like the so and so flight.
Great, to confirm you want to fly to Dallas on November 23rd 2023 at 10am? 
Yes!
Would you like to use the primary card on file? 
Yes!
Okay your flight is booked. You will receive a confirmation email soon with your flight details. 
Thanks for flying American.
"""
# Create a gTTS object with the generated text
tts = gTTS(text=generated_text, lang="en")

# Save the synthesized speech to an audio file
tts.save("output.mp3")

# Play the audio using your preferred audio player
os.system("start output.mp3")
