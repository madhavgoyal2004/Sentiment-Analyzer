import { useState } from 'react';
import axios from 'axios';
import '../App.css'

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [sentiment, setSentiment] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/feedback', { text });
            setSentiment(res.data.sentiment);
        } catch (err) {
            console.error('Error:', err);
            setSentiment('Error analyzing sentiment');
        }
    };

    return (
        <div
            className='outer'
        >
            <div
                className='inner'
            >
                <h2 className='heading'>
                    Feedback Sentiment Analyzer
                </h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        rows="5"
                        placeholder="Enter your feedback..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className='input_text'
                    />
                    <button
                        type="submit"
                        className='button'
                        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
                        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Analyze Sentiment
                    </button>
                </form>
                {sentiment && (
                    <div
                        className={`output_text ${sentiment}`}
                    >
                        Sentiment: <span >{sentiment}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeedbackForm;
