import React from 'react';
import './Faq.css';

function Faq() {
  const questions = [
    {
      question:"1. What is Finding Job?",
      answer:"Finding Job is a comprehensive job search platform designed to help job seekers connect with employers. Our platform offers tools and resources to assist with job applications, career advice, resume building, and interview preparation.",
    },
    {
      question:"2. How do I create an account?",
      answer:"To create an account, click on the Sign Up button at the top right corner of the homepage. You’ll need to provide your email address, create a password, and fill in some basic information about yourself. Once completed, you'll receive a confirmation email to verify your account.",
    },
    {
        question:"3. How do I delete my account?",
        answer:"If you wish to delete your account, go to the Account Settings page and select Delete Account. Please note that this action is irreversible, and all your data will be permanently removed from our platform.",
    }
  ];

  return (
    <div className="faq">
      <h3>Frequently Asked Questions</h3>
      {questions.map((q, index) => (
        <div className="question" key={index}>
          <p><strong>{q.question}</strong></p>
          <p>{q.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default Faq;
