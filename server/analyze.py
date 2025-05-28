import sys
from textblob import TextBlob

# Get text from Node.js input
text = sys.argv[1]

blob = TextBlob(text)
sentiment = "positive" if blob.sentiment.polarity > 0 else "negative" if blob.sentiment.polarity < 0 else "neutral"
print(sentiment)
